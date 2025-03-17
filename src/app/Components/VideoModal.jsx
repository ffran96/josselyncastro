"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Estilos para la modal
const customStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1000,
    cursor: "pointer",
  },
  content: {
    position: "relative",
    inset: "unset",
    padding: "0",
    border: "none",
    background: "transparent",
    width: "90vw",
    maxWidth: "1280px",
    height: "auto",
    maxHeight: "90vh",
    overflow: "hidden",
  },
};

export default function VideoModal({ id, title, modalIsOpen, closeModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement(document.body); // ✅ Evita el problema de accesibilidad
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalIsOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  useEffect(() => {
    if (modalIsOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [modalIsOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(closeModal, 300);
  };

  let touchStartY = 0;

  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const touchCurrentY = e.touches[0].clientY;
    const swipeDistance = touchCurrentY - touchStartY;

    if (swipeDistance > 100) {
      handleClose();
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Video Modal"
      ariaHideApp={false} // 👈 Evita problemas de accesibilidad
    >
      <div
        style={{
          width: "100%",
          height: "auto",
          transform: isVisible ? "scale(1)" : "scale(0.7)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
          }}
        >
          <LiteYouTubeEmbed
            id={id}
            title={title}
            noCookie={true}
            poster="maxresdefault"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
          <FontAwesomeIcon
            onClick={handleClose}
            className="absolute right-2 top-2 text-2xl text-[#ffffff] transition-colors ease-in-out duration-200 hover:bg-[#5d3427] bg-[#5d3427b9] py-1 px-2 rounded-[10px] cursor-pointer"
            icon={faXmark}
          />
        </div>
      </div>
    </Modal>
  );
}
