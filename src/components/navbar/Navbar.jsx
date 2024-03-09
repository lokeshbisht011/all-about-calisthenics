import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>AllAboutCalisthenics</div>
        </Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
};

export default Navbar;
