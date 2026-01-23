'use client';

import { useTranslations } from 'next-intl';
import PageHeader from '@/components/UI/PageHeader';
import styles from './donate.module.css';
import { motion } from 'framer-motion';

export default function DonatePage() {
  const t = useTranslations('DonatePage');

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
      <PageHeader title={t('title')} description={t('description')} />
      <div className="section">
        <div className="container">
          <motion.div 
            className={styles.bankSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
            <div className={styles.bankHeader}>
               <h2 className={styles.bankTitle}>{t('bank.title')}</h2>
               <p className={styles.bankSubtitle}>Official Bank Details</p>
            </div>
            
            <div className={styles.bankBody}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>{t('bank.name')}</span>
                <span className={styles.infoValue}>International Bank of Azerbaijan (ABB)</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>{t('bank.account')}</span>
                <span className={styles.infoValue}>SB Association Azerbaijan</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>{t('bank.iban')}</span>
                <span className={`${styles.infoValue} ${styles.iban}`}>AZ12 IBSP 1234 5678 9012 3456</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>{t('bank.swift')}</span>
                <span className={styles.infoValue} style={{ letterSpacing: '0.1em' }}>IBSPAZ2X</span>
              </div>

              <motion.p 
                className={styles.note}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                 {t('note')}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
