'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './footer.module.css';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('Navigation');
  const tHome = useTranslations('HomePage');
  
  const currentYear = new Date().getFullYear();

  const revealVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={`${styles.container} container`}>
          {/* Brand Column */}
          <motion.div 
            className={styles.brandCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
            <Link href="/" className={styles.logo}>
              SBA<span className={styles.logoHighlight}>.</span>
            </Link>
            <p className={styles.missionText}>
              {tHome('mission')}
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </motion.div>

          {/* Links Group */}
          <div className={styles.linkGroup}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: 0.1 }}
            >
              <h3 className={styles.colTitle}>{t('about')}</h3>
              <ul className={styles.linkList}>
                <li><Link href="/about">{t('about')}</Link></li>
                <li><Link href="/programs">{t('programs')}</Link></li>
                <li><Link href="/news">{t('news')}</Link></li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: 0.2 }}
            >
              <h3 className={styles.colTitle}>{t('support')}</h3>
              <ul className={styles.linkList}>
                <li><Link href="/support">{t('support_res')}</Link></li>
                <li><Link href="/support">{t('support_map')}</Link></li>
                <li><Link href="/support">{t('support_help')}</Link></li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: 0.3 }}
            >
              <h3 className={styles.colTitle}>Resources</h3>
              <ul className={styles.linkList}>
                <li><Link href="/what-is-sb">{t('whatIsSB')}</Link></li>
                <li><Link href="/living-with">{t('livingWith')}</Link></li>
                <li><Link href="/contact">{t('contact')}</Link></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`${styles.bottomContainer} container`}>
          <p>© {currentYear} Azerbaijan Spina Bifida Association. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Made with <Heart size={14} fill="var(--color-secondary)" color="var(--color-secondary)" /> for the community
          </p>
        </div>
      </div>

      {/* GULUZADA Studio Credit */}
      <div className="guluzada-credit" style={{
          textAlign: 'center',
          padding: '2rem 0',
          fontSize: '14px',
          fontFamily: "'Space Grotesk', sans-serif",
          color: 'currentColor',
          opacity: 0.8
      }}>
          {/* Load Font */}
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet" />
          
          <span style={{fontWeight: 400, opacity: 0.7}}>by</span>{' '}
          <a 
            href="https://guluzada.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'inline-block',
              transition: 'opacity 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'} 
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
              <span style={{fontWeight: 700, letterSpacing: '-0.02em'}}>GULUZADA</span> <span style={{fontWeight: 300}}>Studio</span>
          </a>
      </div>
    </footer>
  );
}
