import React from "react";
import { stockLogo } from "../assets/images";
import styles from "./Card.module.css";

export default function Card({
  src,
  alt,
  className,
  line1,
  line2,
  isCurrent,
  header,
}) {
  return (
    <div className="details-container">
      <img src={src} alt={alt} className={className} />
      <h3 className={styles.textLoadingContainer}>
        {header}
        {isCurrent ? (
          <img className={styles.loading} src={stockLogo.dot} alt="ongoing" />
        ) : null}
      </h3>
      <p>
        {line1} <br />
        {line2}
      </p>
    </div>
  );
}
