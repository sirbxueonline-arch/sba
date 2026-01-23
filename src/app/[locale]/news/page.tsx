'use client';

import PageHeader from '@/components/UI/PageHeader';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import styles from './news.module.css';
import { motion } from 'framer-motion';

export default function NewsPage() {
    const t = useTranslations('NewsPage');

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
        <PageHeader title={t('title')} description={t('subtitle')} />
        <div className="section">
          <div className="container">
            <motion.div 
              className="grid-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
               <motion.div className={styles.newsCard} variants={revealVariants}>
                 <div className={styles.newsImage}>
                    📰
                 </div>
                 <div className={styles.newsContent}>
                    <div className={styles.newsDate}>{t('items.judo.date')}</div>
                    <h3 className={styles.newsTitle}>{t('items.judo.title')}</h3>
                    <p className={styles.newsDesc}>{t('items.judo.desc')}</p>
                    <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', width: 'fit-content' }}>
                      {t('read')} <ArrowRight size={16}/>
                    </button>
                 </div>
               </motion.div>

               <motion.div className={styles.newsCard} variants={revealVariants}>
                  <div className={styles.newsImage}>
                    ⚖️
                 </div>
                 <div className={styles.newsContent}>
                    <div className={styles.newsDate}>{t('items.law.date')}</div>
                    <h3 className={styles.newsTitle}>{t('items.law.title')}</h3>
                    <p className={styles.newsDesc}>{t('items.law.desc')}</p>
                    <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', width: 'fit-content' }}>
                      {t('read')} <ArrowRight size={16}/>
                    </button>
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
