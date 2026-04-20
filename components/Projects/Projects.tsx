"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const features = [
  {
    icon: "🔐",
    title: "Authentication & Data",
    desc: "Integrated Firebase for secure user login and real-time data management.",
  },
  {
    icon: "🤖",
    title: "Smart Collaboration",
    desc: "Leveraged OpenAI to assist in debugging and optimizing complex JavaScript logic.",
  },
  {
    icon: "📱",
    title: "Scalability",
    desc: "Responsive and clean frontend ensuring a smooth experience on any device.",
  },
];

const techTags = ["HTML5", "CSS3", "JavaScript", "Firebase", "OpenAI API"];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h2 className="section-title">
            Featured <span>Project</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.projectCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          whileHover={{ y: -4 }}
        >
          {/* Card Glow */}
          <div className={styles.cardGlow} />

          <div className={styles.cardInner}>
            {/* Header */}
            <div className={styles.cardHeader}>
              <div className={styles.projectMeta}>
                <div className={styles.projectIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <h3 className={styles.projectName}>UniBridge-TZ</h3>
                  <p className={styles.projectTagline}>
                    Empowering Tanzanian students to pursue international education with confidence.
                  </p>
                </div>
              </div>
              <motion.a
                href="https://unibridge-tz.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Site
              </motion.a>
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Problem / Solution */}
            <div className={styles.problemSolution}>
              <motion.div
                className={styles.psCard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className={styles.psLabel}>The Problem</span>
                <p className={styles.psText}>
                  Many Tanzanian students wish to study abroad, but they often lack reliable
                  information, face high service fees from agents, and arrive in a new country
                  without any local connections or support systems.
                </p>
              </motion.div>

              <motion.div
                className={`${styles.psCard} ${styles.psCardSolution}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className={`${styles.psLabel} ${styles.psLabelSolution}`}>The Solution</span>
                <p className={styles.psText}>
                  UniBridge-TZ is a digital platform that connects Tanzanian students heading
                  anywhere in the world with those already living there — providing community
                  networking and affordable, transparent university admissions without expensive agents.
                </p>
              </motion.div>
            </div>

            {/* Technical Approach */}
            <div className={styles.techApproach}>
              <h4 className={styles.techApproachTitle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
                Technical Approach
              </h4>
              <p className={styles.techApproachText}>
                Built the entire platform from scratch using <strong>Vanilla HTML, CSS, and
                JavaScript</strong> to master web fundamentals. Avoided frameworks to ensure full
                control over the code and a deep understanding of how web technologies work together.
              </p>
            </div>

            {/* Features */}
            <div className={styles.featuresGrid}>
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ borderColor: "var(--border-gold)" }}
                >
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <div>
                    <h5 className={styles.featureTitle}>{f.title}</h5>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className={styles.techTags}>
              {techTags.map((tag) => (
                <span key={tag} className={styles.techTag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          className={styles.moreProjects}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          More projects coming soon — currently building with the MERN stack.
        </motion.p>
      </div>
    </section>
  );
}
