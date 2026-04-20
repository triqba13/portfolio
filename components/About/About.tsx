"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

const easing = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Photo Column */}
          <motion.div
            className={styles.photoCol}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className={styles.photoWrapper}>
              <div className={styles.photoFrame}>
                <Image
                  src="/images/tariq.jpeg"
                  alt="Tariq Hamza Ahmad"
                  fill
                  className={styles.photo}
                  priority
                />
              </div>
              <div className={styles.photoBadge}>
                <span className={styles.availableDot} />
                Available for Freelance
              </div>
              <div className={styles.photoAccent1} />
              <div className={styles.photoAccent2} />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className={styles.textCol}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className={styles.bio}>
              I am a <strong>Full-Stack Developer</strong> currently pursuing my BSc in Computer
              Science at SRM University AP, India, specializing in Big Data. My journey into
              software development is driven by a deep curiosity for how technology can simplify
              lives and a commitment to building transparent, data-driven, and user-first digital
              solutions.
            </p>

            <p className={styles.bio}>
              My passion for development is rooted in a desire to create impact. Witnessing the
              navigation challenges faced by international students, I was inspired to build{" "}
              <a
                href="https://unibridge-tz.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                UniBridge-TZ
              </a>
              — a platform that empowers Tanzanian students to pursue international education with
              confidence. This project represents my mission: to engineer transparent digital
              platforms that simplify complex journeys and connect communities across borders.
            </p>

            <p className={styles.bio}>
              For me, building software is about more than just code — it&apos;s about solving real
              problems and helping people. I take pride in building everything from scratch with
              high standards. Currently focused on mastering the MERN stack to build even better
              and more helpful digital tools.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Dar es Salaam, Tanzania</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>University</span>
                <span className={styles.infoValue}>SRM University AP, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Degree</span>
                <span className={styles.infoValue}>BSc Computer Science (Big Data)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Focus</span>
                <span className={styles.infoValue}>MERN Stack Development</span>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <motion.a
                href="#projects"
                className={styles.ctaBtn}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(212,160,23,0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                View My Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
