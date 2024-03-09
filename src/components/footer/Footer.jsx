import React from "react";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.horizontalLine}></div>
      <div className={styles.container}>
        <h1 className={styles.logoText}>AllAboutCalisthenics</h1>
        <p className={styles.desc}>
          Learn everything about Calisthenics
        </p>
        <div className={styles.icons}>
          <FaFacebook style={{ fontSize: '25px' }} />
          <FaInstagram style={{ fontSize: '25px' }} />
          <FaTwitter style={{ fontSize: '25px' }} />
          <FaYoutube style={{ fontSize: '25px' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
