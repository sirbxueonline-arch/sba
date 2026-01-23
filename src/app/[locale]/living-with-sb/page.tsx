'use client';

import { useTranslations } from 'next-intl';
import PageHeader from '@/components/UI/PageHeader';
import { Baby, School, Briefcase } from 'lucide-react';
import styles from './livingWithSB.module.css';
import { motion } from 'framer-motion';

export default function LivingWithSBPage() {
  const t = useTranslations('LivingWithPage');

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
            <motion.div className={`card ${styles.livingCard}`} variants={revealVariants} style={{ textAlign: 'center' }}>
              <div className={styles.iconCircle}>
                 <Baby size={48} />
              </div>
              <h3 className={styles.cardTitle}>{t('child.title')}</h3>
              <p className={styles.cardDesc}>{t('child.desc')}</p>
            </motion.div>

            <motion.div className={`card ${styles.livingCard}`} variants={revealVariants} style={{ textAlign: 'center' }}>
               <div className={styles.iconCircle}>
                 <School size={48} />
              </div>
               <h3 className={styles.cardTitle}>{t('teen.title')}</h3>
               <p className={styles.cardDesc}>{t('teen.desc')}</p>
            </motion.div>

            <motion.div className={`card ${styles.livingCard}`} variants={revealVariants} style={{ textAlign: 'center' }}>
               <div className={styles.iconCircle}>
                 <Briefcase size={48} />
              </div>
               <h3 className={styles.cardTitle}>{t('adult.title')}</h3>
               <p className={styles.cardDesc}>{t('adult.desc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className={styles.philosophySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
             <div className={styles.philosophyContent}>
                <h2 className={styles.philosophyTitle}>{t('philosophy.title')}</h2>
                <p className={styles.philosophyText}>
                   {t('philosophy.text')}
                </p>
             </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
