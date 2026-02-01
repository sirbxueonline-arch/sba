'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import styles from './hero.module.css';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('HomePage');

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        {/* Left: Text Content */}
        <motion.div 
          className={styles.textContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
           <motion.div variants={itemVariants} className={styles.badge}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfCgxaqxqVVBcFJQWxasbJteqZiOWbzJx-SyVAItph7Ha4vwA/viewform" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
                 <span style={{fontSize: '1.2rem'}}>📝</span> {t('badge')}
              </Link>
           </motion.div>
           
           <motion.h1 variants={itemVariants} className={styles.title}>
            {t('title')}
           </motion.h1>
           
           <motion.p variants={itemVariants} className={styles.subtitle}>
            {t('subtitle')}
           </motion.p>
           
           <motion.div className={styles.ctaGroup} variants={itemVariants}>
              <Link href="/support" className="btn btn-primary" style={{ gap: '10px' }}>
                  {t('getSupport')} <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn btn-secondary">
                  {t('learnMore')}
              </Link>
           </motion.div>
        </motion.div>

        {/* Right: Visual Content */}
        <div className={styles.visualContent}>
          <motion.div 
            className={styles.mediaStack}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <div className={styles.abstractCircle} />
            <div className={styles.mainCard}>
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--color-primary-light), white)', opacity: 0.4 }} />
               <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               >
                 <Heart size={120} color="var(--color-primary)" fill="var(--color-primary)" style={{ opacity: 0.8, filter: 'drop-shadow(0 20px 30px rgba(15, 118, 110, 0.3))' }} />
               </motion.div>
            </div>

            <motion.div 
              className={styles.glassCard}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
               <div className={styles.glassIcon}>
                  <Heart size={24} fill="white" />
               </div>
               <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-primary-dark)' }}>{t('impact.stat1.val')}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>{t('impact.stat1.label')}</div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
