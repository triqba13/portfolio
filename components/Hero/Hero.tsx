"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Problem Solver",
  "Freelancer",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const easing = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

export default function Hero() {
  const typedText = useTypewriter(roles);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Aurora background */}
      <div className={styles.auroraBg}>
        <div className={styles.auroraLayer1} />
        <div className={styles.auroraLayer2} />
        <div className={styles.auroraLayer3} />
        <div className={styles.auroraLayer4} />
        <div className={styles.gridOverlay} />
        <div className={styles.vignette} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.heroInner}>
        <motion.div
          className={styles.textBlock}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.greeting} variants={itemVariants}>
            Hi, I&apos;m
          </motion.span>

          <motion.h1 className={styles.name} variants={itemVariants}>
            Tariq <span className={styles.nameAccent}>Hamza</span>
            <br />
            Ahmad
          </motion.h1>

          <motion.div className={styles.typewriterRow} variants={itemVariants}>
            <span className={styles.typewriterText}>{typedText}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          <motion.p className={styles.subtext} variants={itemVariants}>
            Building transparent, data-driven &amp; user-first digital solutions.
            <br />
            <span className={styles.location}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Dar es Salaam, Tanzania &nbsp;·&nbsp; Available for Freelance
            </span>
          </motion.p>

          <motion.div className={styles.ctaRow} variants={itemVariants}>
            <motion.button
              className={styles.ctaPrimary}
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(0,200,224,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>

            <motion.button
              className={styles.ctaSecondary}
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(212,160,23,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
          </motion.div>

          <motion.div className={styles.badges} variants={itemVariants}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              Open to work
            </span>
            <span className={styles.badge}>
              <span className={`${styles.badgeDot} ${styles.badgeDotGold}`} />
              MERN Stack
            </span>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          className={styles.photoBlock}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.3 }}
        >
          <div className={styles.photoRing}>
            <div className={styles.photoInner}>
              <Image
                src="/images/tariq.jpeg"
                alt="Tariq Hamza Ahmad"
                width={340}
                height={340}
                className={styles.photo}
                priority
              />
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <motion.div
          className={styles.scrollArrow}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
