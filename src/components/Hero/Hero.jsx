import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepika </h1>
        <p className={styles.description}>
        <h6>I'm a second-year IT student at RMK Engineering College, passionate about coding and problem-solving. I love exploring new technologies, building projects, and constantly improving my skills. Whether it's web development, Java programming, or AI-driven solutions, I enjoy turning ideas into reality through code.</h6>
        </p>
        <a href="deepikaanandhan2@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
