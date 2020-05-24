import React from "react";
import styles from "./styles";
import image_man from "../../assets/images/main-page-man.png";

function HomePage() {
  return (
    <div style={{ display: "flex", padding: 110 }}>
      <img src={image_man} alt="Man with Brush" />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{ fontSize: 48, ...styles.headingStyle, ...styles.textArrive }}
        >
          We love to explore new ways to engage with brands and reach
        </h1>
        <p style={{ fontSize: 20, ...styles.textArrive }}>
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
