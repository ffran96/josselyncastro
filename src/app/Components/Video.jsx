import React from "react";

export default function Video({Source}) {
  return (
    <video
      src={Source}
      type="video/mp4"
      preload={"true"}
      autoPlay={true}
      loop={true}
      controls
      muted
      className={`w-[415px] aspect-[9/16] object-cover rounded-[12px]`}
    />
  );
}
