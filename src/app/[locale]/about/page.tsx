'use client';

import { useTranslations } from 'next-intl';
import PageHeader from '@/components/UI/PageHeader';
import { Target, ShieldCheck, Users, Heart, BookOpen, Scale } from 'lucide-react';
import styles from './about.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  const revealVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <PageHeader 
        title={t('title')} 
        description={t('mission.text')} 
      />
      
      <section className="section">
        <div className="container">
          {/* Story Section */}
          <motion.div 
            className={styles.storyGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
             <div>
                <h2 className={styles.storyTitle}>{t('mission.title')}</h2>
                <p className={styles.storyText}>{t('mission.text')}</p>
             </div>
             <div className={styles.imageWrapper}>
                <Image 
                   src="/images/about/mission.png" 
                   alt={t('mission.title')} 
                   fill 
                   style={{ objectFit: 'cover' }}
                />
             </div>
          </motion.div>

          {/* Values Section */}
          <div className={styles.valuesSection}>
             <motion.h2 
               className="section-title"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={revealVariants}
             >
               {t('values.title')}
             </motion.h2>
             <div className="grid-3">
                <motion.div className="card" variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                   <div className={styles.iconCircle}><ShieldCheck size={32} /></div>
                   <h3 className={styles.cardTitle}>{t('values.dignity.title')}</h3>
                   <p className="description">{t('values.dignity.desc')}</p>
                </motion.div>
                <motion.div className="card" variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                   <div className={styles.iconCircle}><Users size={32} /></div>
                   <h3 className={styles.cardTitle}>{t('values.community.title')}</h3>
                   <p className="description">{t('values.community.desc')}</p>
                </motion.div>
                <motion.div className="card" variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                   <div className={styles.iconCircle}><Target size={32} /></div>
                   <h3 className={styles.cardTitle}>{t('values.accuracy.title')}</h3>
                   <p className="description">{t('values.accuracy.desc')}</p>
                </motion.div>
             </div>
          </div>

          {/* Leadership Section */}
          <div className={styles.leadershipSection}>
            <div className="container">
              <motion.h2 
                className="section-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
              >
                {t('leadership.title')}
              </motion.h2>

              <div className="grid-3">
                 <motion.div 
                   className={styles.leaderCard}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={revealVariants}
                 >
                   <div className={styles.leaderAvatar}>👨‍⚕️</div>
                   <h3 className={styles.cardTitle}>{t('leadership.doc.name')}</h3>
                   <p className={styles.leaderRole}>{t('leadership.doc.title')}</p>
                   <p className={styles.leaderDesc}>{t('leadership.doc.desc')}</p>
                 </motion.div>
                 
                 <motion.div 
                   className={styles.leaderCard}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={revealVariants}
                   transition={{ delay: 0.2 }}
                 >
                   <div className={styles.leaderAvatar}>👩‍💼</div>
                   <h3 className={styles.cardTitle}>{t('leadership.director.name')}</h3>
                   <p className={styles.leaderRole}>{t('leadership.director.title')}</p>
                   <p className={styles.leaderDesc}>{t('leadership.director.desc')}</p>
                 </motion.div>
      
                 <motion.div 
                   className={styles.leaderCard}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={revealVariants}
                   transition={{ delay: 0.4 }}
                 >
                   <div className={styles.leaderAvatar}>⚖️</div>
                   <h3 className={styles.cardTitle}>{t('leadership.counsel.name')}</h3>
                   <p className={styles.leaderRole}>{t('leadership.counsel.title')}</p>
                   <p className={styles.leaderDesc}>{t('leadership.counsel.desc')}</p>
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
