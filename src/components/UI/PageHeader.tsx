'use client';

import styles from './pageHeader.module.css';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className={styles.decoration} />
      <div className={styles.container}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
