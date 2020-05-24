import React from "react";
import styles from "./styles";
import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

import Button from "../Button";

function Header() {
  return (
    <div>
      <header style={styles.navStyle}>
        <img src={logo} alt="Logo" />

        <div style={styles.displayFlex}>
          <ul style={{ ...styles.displayFlex, ...styles.merged }}>
            <li style={styles.merged}>
              <Link to="/">Product</Link>
            </li>
            <li style={styles.merged}>
              <Link to="/landing">Pricing</Link>
            </li>
            <li style={styles.merged}>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Button text="Get Started" />
        </div>
      </header>
    </div>
  );
}

export default Header;
