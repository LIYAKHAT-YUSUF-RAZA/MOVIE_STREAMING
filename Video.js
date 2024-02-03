import React from "react";

export default function Video() {
  return (
    <video className="w-100" autoPlay loop muted>
      <source
        src="https://youtu.be/iU2rMRZcn1U?si=H6jhNg56WCk1aXw1"
        type="video/mp4"
        allowFullScreen
      />
    </video>
  );
}