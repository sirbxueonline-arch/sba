'use client';

import { useTranslations } from 'next-intl';
import { HeartHandshake, BookOpen, Scale } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import styles from './home.module.css';
import { motion } from 'framer-motion';

export default function HomeContent() {
  const t = useTranslations('HomePage');

  const revealVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Mission Statement */}
       <section className={styles.missionSection}>
          <div className={styles.missionBg}></div>
          <div className={styles.missionContent}>
            <motion.h2 
              className={styles.missionText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              "{t('mission')}"
            </motion.h2>
          </div>
       </section>

       {/* Focus Areas */}
       <section className="section">
         <div className="container">
           <motion.h2 
             className="section-title"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={revealVariants}
           >
              {t('focus.title')}
           </motion.h2>
           
           <motion.div 
             className={styles.grid}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
           >
              <motion.div className={styles.focusCard} variants={revealVariants}>
                <div className={styles.iconCircle}>
                   <HeartHandshake size={36} />
                </div>
                <h3 className={styles.cardTitle}>{t('focus.support.title')}</h3>
                <p className={styles.cardDesc}>{t('focus.support.desc')}</p>
              </motion.div>

              <motion.div className={styles.focusCard} variants={revealVariants}>
                 <div className={styles.iconCircle}>
                   <BookOpen size={36} />
                </div>
                <h3 className={styles.cardTitle}>{t('focus.education.title')}</h3>
                <p className={styles.cardDesc}>{t('focus.education.desc')}</p>
              </motion.div>

              <motion.div className={styles.focusCard} variants={revealVariants}>
                 <div className={styles.iconCircle}>
                   <Scale size={36} />
                </div>
                <h3 className={styles.cardTitle}>{t('focus.advocacy.title')}</h3>
                <p className={styles.cardDesc}>{t('focus.advocacy.desc')}</p>
              </motion.div>
           </motion.div>
         </div>
       </section>

       {/* Impact Stats */}
       <section className={styles.impactSection}>
          <div className="container">
            <div className={styles.impactContainer}>
               <motion.h2 
                 style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '4rem', fontWeight: 800, position: 'relative', zIndex: 2}}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={revealVariants}
               >
                 {t('impact.title')}
               </motion.h2>
               
               <motion.div 
                 className={styles.statsGrid}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={staggerContainer}
               >
                  <motion.div variants={revealVariants}>
                     <div className={styles.statVal}>{t('impact.stat1.val')}</div>
                     <div className={styles.statLabel}>{t('impact.stat1.label')}</div>
                  </motion.div>
                  <motion.div variants={revealVariants}>
                     <div className={styles.statVal}>{t('impact.stat2.val')}</div>
                     <div className={styles.statLabel}>{t('impact.stat2.label')}</div>
                  </motion.div>
                   <motion.div variants={revealVariants}>
                     <div className={styles.statVal}>{t('impact.stat3.val')}</div>
                     <div className={styles.statLabel}>{t('impact.stat3.label')}</div>
                  </motion.div>
               </motion.div>
            </div>
          </div>
       </section>

       {/* CTA Section */}
       <section className={styles.ctaSection}>
          <div className="container">
            <motion.div 
              className={styles.ctaCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
               <div className={styles.ctaContent}>
                  <h2 className={styles.ctaTitle}>{t('cta.title')}</h2>
                  <p className={styles.ctaDesc}>{t('cta.desc')}</p>
                  <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                    {t('cta.btn')}
                  </Link>
               </div>
            </motion.div>
          </div>
       </section>
    </>
  );
}
