'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import styles from './header.module.css';
import LanguageSwitcher from '../UI/LanguageSwitcher';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const tNav = useTranslations('Navigation');
  const tCommon = useTranslations('Common');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: tNav('home') },
    { href: '/about', label: tNav('about') },
    { href: '/what-is-sb', label: tNav('whatIsSB') },
    { href: '/support', label: tNav('support') },
    { href: '/contact', label: tNav('contact') },
  ];

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: { 
      opacity: 1, 
      scale: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div style={{ position: 'relative', width: '180px', height: '60px' }}>
             <Image 
               src="/logo.jpg" 
               alt="SBA Logo" 
               fill
               style={{ objectFit: 'contain', objectPosition: 'left center' }}
               priority
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopOnly}>
            <LanguageSwitcher />
          </div>
          
          <Link href="/donate" className={`${styles.donateBtn} btn btn-primary`}>
            {tCommon('donate')} 
          </Link>
          
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`${styles.mobileNav} ${isMobileOpen ? styles.open : ''}`}>
          <motion.ul 
            className={styles.mobileNavList}
            initial="closed"
            animate={isMobileOpen ? "open" : "closed"}
            variants={menuVariants}
          >
             {navLinks.map((link) => (
              <motion.li key={link.href} variants={itemVariants}>
                <Link 
                  href={link.href} 
                  className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.div 
             className={styles.mobileFooter}
             initial={{ opacity: 0, y: 20 }}
             animate={isMobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
             transition={{ delay: 0.5 }}
          >
            <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
              <LanguageSwitcher />
            </div>
            <Link 
              href="/donate" 
              className="btn btn-primary" 
              style={{ width: '100%', maxWidth: '320px', padding: '1rem' }}
              onClick={() => setIsMobileOpen(false)}
            >
              {tCommon('donate')}
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
