'use client';

import { useTranslations } from 'next-intl';
import { FileText, MapPin, Users, HeartHandshake } from 'lucide-react';
import PageHeader from '@/components/UI/PageHeader';
import styles from './support.module.css';
import { motion } from 'framer-motion';

export default function SupportPage() {
  const t = useTranslations('SupportPage');

  const revealVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer: any = {
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
      <PageHeader 
        title={t('title')} 
        description={t('intro')} 
      />
      
      <section className="section">
        <div className="container">
          <motion.div 
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Resource 1 */}
            <motion.div className={styles.supportCard} variants={revealVariants}>
              <div className={styles.iconBox}>
                 <FileText size={32} />
              </div>
              <h3 className={styles.cardTitle}>{t('p100.title')}</h3>
              <p className={styles.cardBody}>{t('p100.desc')}</p>
              <button className={`btn btn-primary ${styles.fullBtn}`}>{t('btn.download')}</button>
            </motion.div>

            {/* Resource 2 */}
            <motion.div className={styles.supportCard} variants={revealVariants}>
              <div className={styles.iconBox}>
                 <MapPin size={32} />
              </div>
              <h3 className={styles.cardTitle}>{t('map.title')}</h3>
              <p className={styles.cardBody}>{t('map.desc')}</p>
              <button className={`btn btn-secondary ${styles.fullBtn}`}>{t('btn.view')}</button>
            </motion.div>

            {/* Resource 3 */}
            <motion.div className={styles.supportCard} variants={revealVariants}>
              <div className={styles.iconBox}>
                 <Users size={32} />
              </div>
              <h3 className={styles.cardTitle}>{t('mentor.title')}</h3>
              <p className={styles.cardBody}>{t('mentor.desc')}</p>
              <button className={`btn btn-primary ${styles.fullBtn}`}>{t('btn.join')}</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Helpline Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.helplineSection}>
             <div className={styles.helplineGrid}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                >
                   <h2 className={styles.helplineTitle}>{t('helpline.title')}</h2>
                   <p className={styles.helplineDesc}>
                      {t('helpline.desc')}
                   </p>
                </motion.div>
                <motion.div 
                  className={styles.helplineCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  transition={{ delay: 0.3 }}
                >
                   <div className={styles.helplineCardHeader}>
                      <HeartHandshake size={32} />
                      <h3 className={styles.helplineCardTitle}>{t('helpline.card.title')}</h3>
                   </div>
                   <p className={styles.helplineCardText}>{t('helpline.card.text')}</p>
                   <a href="tel:+994501234567" className={styles.phoneNumber}>+994 50 123 45 67</a>
                </motion.div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
