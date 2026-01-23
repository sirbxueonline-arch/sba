'use client';

import { useTranslations } from 'next-intl';
import PageHeader from '@/components/UI/PageHeader';
import { ShieldCheck, Stethoscope, Microscope, Beaker, UserCheck, Activity, Brain } from 'lucide-react';
import styles from './whatIsSB.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhatIsSBPage() {
  const t = useTranslations('WhatIsSBPage');

  const types = [
    { key: 'occulta', img: '/images/sb-types/occulta.png', highlight: false },
    { key: 'meningocele', img: '/images/sb-types/meningocele.png', highlight: false },
    { key: 'myelomeningocele', img: '/images/sb-types/myelomeningocele.png', highlight: true },
    { key: 'lipomyelomeningocele', img: '/images/sb-types/lipomyelomeningocele.png', highlight: false },
  ];

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
        staggerChildren: 0.1
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
          <div className={styles.gridSection}>
            
            {/* Prevention */}
            <motion.div 
              className={`card ${styles.cardPrevention}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <div className={styles.headerTitle}>
                 <ShieldCheck color="var(--color-secondary)" size={32} />
                 <h2 className={styles.titleText}>{t('prevention.title')}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                 <p className="description" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>{t('prevention.text')}</p>
                 <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '24px', overflow: 'hidden', background: '#f8fafc' }}>
                    <Image 
                      src="/images/management/prevention.png" 
                      alt={t('prevention.title')} 
                      fill 
                      style={{ objectFit: 'contain', padding: '1.5rem' }}
                    />
                 </div>
              </div>
            </motion.div>

            {/* Myths Section */}
            <motion.div 
              className={`card ${styles.cardMyths}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              style={{ background: 'var(--color-primary-light)', borderColor: 'var(--color-primary)' }}
            >
              <div className={styles.headerTitle}>
                 <Brain color="var(--color-primary)" size={32} />
                 <h2 className={styles.titleText}>{t('myths.title')}</h2>
              </div>
              <p className="description" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                {t('myths.item')}
              </p>
            </motion.div>

            {/* Types Intro Header */}
            <motion.div 
              className={styles.typesHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
               <h2 className="section-title">{t('types.title')}</h2>
            </motion.div>

            {/* Types Grid */}
            <motion.div 
              className={styles.gridSection}
              style={{ gridColumn: '1 / -1' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {types.map((type) => (
                <motion.div key={type.key} className={`card ${type.highlight ? styles.typeCardPrimary : ''}`} variants={revealVariants}>
                   <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden', background: '#f8fafc' }}>
                      <Image 
                        src={type.img} 
                        alt={t(`types.${type.key}.term` as any)} 
                        fill 
                        style={{ objectFit: 'contain', padding: '1rem' }}
                      />
                   </div>
                   <h3 className={styles.typeCard}>{t(`types.${type.key}.term` as any)}</h3>
                   <p className="description">{t(`types.${type.key}.desc` as any)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnosis & Treatment - Split Section */}
      <section className={styles.splitSection}>
         <div className="container">
           <motion.div 
             className={styles.splitGrid}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
           >
              <motion.div variants={revealVariants}>
                 <div className={styles.headerTitle}>
                    <Microscope color="var(--color-primary)" size={32} />
                    <h2 className={styles.titleText}>{t('diagnosis.title')}</h2>
                 </div>
                 <div className="card">
                    <p style={{ marginBottom: '1rem' }}><strong>{t('diagnosis.prenatalLabel')}:</strong> {t('diagnosis.prenatal')}</p>
                    <p><strong>{t('diagnosis.postnatalLabel')}:</strong> {t('diagnosis.postnatal')}</p>
                 </div>
              </motion.div>

              <motion.div variants={revealVariants}>
                 <div className={styles.headerTitle}>
                    <Stethoscope color="var(--color-primary)" size={32} />
                    <h2 className={styles.titleText}>{t('treatment.title')}</h2>
                 </div>
                 <div className="card">
                    <p style={{ marginBottom: '1rem' }}>{t('treatment.surgery')}</p>
                    <p style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>{t('treatment.multidisciplinary')}</p>
                 </div>
              </motion.div>
           </motion.div>
         </div>
      </section>

      {/* Critical Care & Management Section */}
      <section className={styles.managementSection}>
         <div className="container">
            <motion.h2 
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              {t('management.title')}
            </motion.h2>
            <motion.p 
              className="description" 
              style={{ textAlign: 'center', marginBottom: '4rem' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              {t('management.intro')}
            </motion.p>
            
            <motion.div 
              className={styles.managementGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
               <motion.div className={`card ${styles.managementCard}`} variants={revealVariants}>
                  <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', background: '#f8fafc' }}>
                     <Image src="/images/management/kidney.png" alt="Kidney & Infection" fill style={{ objectFit: 'contain', padding: '1rem' }} />
                  </div>
                  <h3>{t('management.kidneyInfection.title')}</h3>
                  <p className="description">{t('management.kidneyInfection.text')}</p>
               </motion.div>

               <motion.div className={`card ${styles.managementCard}`} variants={revealVariants}>
                  <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', background: '#f8fafc' }}>
                     <Image src="/images/management/orthopedic.png" alt={t('management.orthopedic.title')} fill style={{ objectFit: 'contain', padding: '1rem' }} />
                  </div>
                  <h3>{t('management.orthopedic.title')}</h3>
                  <p className="description">{t('management.orthopedic.text')}</p>
               </motion.div>

               <motion.div className={`card ${styles.managementCard}`} variants={revealVariants}>
                  <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', background: '#f8fafc' }}>
                     <Image src="/images/management/rehab.png" alt="Rehabilitation" fill style={{ objectFit: 'contain', padding: '1rem' }} />
                  </div>
                  <h3>{t('management.rehab.title')}</h3>
                  <p className="description">{t('management.rehab.text')}</p>
               </motion.div>

               <motion.div className={`card ${styles.managementCard}`} variants={revealVariants}>
                  <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', background: '#f8fafc' }}>
                     <Image src="/images/management/psychology.png" alt="Psychology Support" fill style={{ objectFit: 'contain', padding: '1rem' }} />
                  </div>
                  <h3>{t('management.psychology.title')}</h3>
                  <p className="description">{t('management.psychology.text')}</p>
               </motion.div>
            </motion.div>
         </div>
      </section>
    </>
  );
}
