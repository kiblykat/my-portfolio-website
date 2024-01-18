import React from "react";

export default function Card({ src, alt, className, line1, line2, header }) {
  return (
    <div className="details-container">
      <img src={src} alt={alt} className={className} />
      <h3>{header}</h3>
      <p>
        {line1} <br />
        {line2}
      </p>
    </div>
  );
}
