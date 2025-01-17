import React from "react";

export default function Video({Source, Autoplay}) {
  return (
    <video
      src={Source}
      type="video/mp4"
      autoPlay={Autoplay}
      controls
      loop
      muted
      className={`w-[415px] aspect-[9/16] object-cover rounded-[12px]`}
    />
  );
}
