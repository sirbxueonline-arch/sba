'use client';

import PageHeader from '@/components/UI/PageHeader';
import { useTranslations } from 'next-intl';
import { GraduationCap, Users2, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import styles from './programs.module.css';
import { motion } from 'framer-motion';

export default function ProgramsPage() {
  const t = useTranslations('ProgramsPage');

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

  const programs = [
    {
      icon: <Stethoscope size={32} />,
      tag: t('conf.tag'),
      title: t('conf.title'),
      desc: t('conf.desc'),
      color: 'var(--color-primary)'
    },
    {
      icon: <GraduationCap size={32} />,
      tag: t('edu.tag'),
      title: t('edu.title'),
      desc: t('edu.desc'),
      color: 'var(--color-secondary)'
    },
    {
      icon: <Users2 size={32} />,
      tag: t('camp.tag'),
      title: t('camp.title'),
      desc: t('camp.desc'),
      color: 'var(--color-primary-dark)'
    }
  ];

  return (
    <>
      <PageHeader title={t('title')} description={t('subtitle')} />
      <section className="section">
        <div className="container">
          <motion.div 
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {programs.map((prog, idx) => (
              <motion.div key={idx} className={`card ${styles.progCard}`} variants={revealVariants}>
                <div className={styles.progHeader} style={{ background: prog.color }}>
                    <span className={styles.progTag}>{prog.tag}</span>
                </div>
                <div className={styles.progBody}>
                  <div className={styles.progIcon}>{prog.icon}</div>
                  <h3 className={styles.progTitle}>{prog.title}</h3>
                  <p className={styles.progDesc}>{prog.desc}</p>
                  <Link href="/contact" className={styles.learnMore} style={{ color: prog.color }}>
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Mini Bar */}
      <section className={styles.statsBar}>
         <div className="container">
           <motion.div 
             className={styles.statsGrid}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
           >
              <motion.div className={styles.statItem} variants={revealVariants}>
                 <h4 style={{ color: 'var(--color-primary)' }}>12</h4>
                 <p>Medical Workshops</p>
              </motion.div>
              <motion.div className={styles.statItem} variants={revealVariants}>
                 <h4 style={{ color: 'var(--color-secondary)' }}>300+</h4>
                 <p>Manuals Distributed</p>
              </motion.div>
              <motion.div className={styles.statItem} variants={revealVariants}>
                 <h4 style={{ color: 'var(--color-primary-dark)' }}>150</h4>
                 <p>Active Volunteers</p>
              </motion.div>
           </motion.div>
         </div>
      </section>
    </>
  );
}
