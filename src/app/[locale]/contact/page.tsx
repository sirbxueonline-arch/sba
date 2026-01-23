'use client';

import { useTranslations } from 'next-intl';
import ContactForm from '@/components/UI/ContactForm';
import PageHeader from '@/components/UI/PageHeader';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './contact.module.css';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

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
        description="Whether you have questions about medical care or want to volunteer, we are here to listen." 
      />
      
      <div className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
               <motion.h2 className={styles.contactTitle} variants={revealVariants}>{t('title')}</motion.h2>
               <div className={styles.infoList}>
                  <motion.div className={styles.infoItem} variants={revealVariants}>
                     <div className={styles.iconBox}>
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h3 className={styles.itemTitle}>{t('visit.title')}</h3>
                        <p className={styles.itemText}>{t('visit.text')}</p>
                     </div>
                  </motion.div>

                  <motion.div className={styles.infoItem} variants={revealVariants}>
                     <div className={styles.iconBox}>
                        <Mail size={24} />
                     </div>
                     <div>
                        <h3 className={styles.itemTitle}>{t('email.title')}</h3>
                        <p className={styles.itemText}>info@sb-azerbaijan.org</p>
                        <p className={styles.itemText}>support@sb-azerbaijan.org</p>
                     </div>
                  </motion.div>

                  <motion.div className={styles.infoItem} variants={revealVariants}>
                     <div className={styles.iconBox}>
                        <Phone size={24} />
                     </div>
                     <div>
                        <h3 className={styles.itemTitle}>{t('call.title')}</h3>
                        <p className={styles.itemText}>+994 50 123 45 67</p>
                        <p className={styles.itemText}>{t('call.hours')}</p>
                     </div>
                  </motion.div>
               </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              className={styles.formWrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
