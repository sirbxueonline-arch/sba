'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Plus, ChevronDown, Check, Loader2 } from 'lucide-react';
import styles from './branding.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandingSection() {
  const t = useTranslations('Branding');
  const t_strat = useTranslations('AboutPage');

  // Interactive States
  const [colors, setColors] = useState(['#008080', '#FFD700']);
  const [mission, setMission] = useState(t_strat('mission.text'));
  const [selectedNiche, setSelectedNiche] = useState('advocacy');
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const containerVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 1500);
  };

  const addRandomColor = () => {
    const randomColors = ['#0F766E', '#F59E0B', '#3B82F6', '#EF4444', '#10B981'];
    const newColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    if (!colors.includes(newColor)) {
      setColors([...colors, newColor]);
    }
  };

  const removeColor = (color: string) => {
    if (colors.length > 1) {
      setColors(colors.filter(c => c !== color));
    }
  };

  return (
    <motion.div 
      className={styles.brandingContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Colors Section */}
      <motion.div className={styles.section} variants={itemVariants}>
        <span className={styles.label}>{t('colors')}</span>
        <div className={styles.colorGrid}>
          <AnimatePresence>
            {colors.map((color) => (
              <motion.div 
                key={color}
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className={styles.colorSwatch} 
                style={{ backgroundColor: color }}
                onClick={() => removeColor(color)}
                whileHover={{ scale: 1.1 }}
                title="Click to remove"
              />
            ))}
          </AnimatePresence>
          <motion.div 
            className={styles.addColor}
            onClick={addRandomColor}
            whileTap={{ scale: 0.9 }}
          >
            <Plus size={28} strokeWidth={2.5} />
          </motion.div>
        </div>
      </motion.div>

      {/* Logo & Mission Grid */}
      <div className={styles.logoMissionGrid}>
        <motion.div className={styles.section} variants={itemVariants}>
          <span className={styles.label}>{t('logo.title')}</span>
          <div className={styles.uploadArea}>
            <Plus size={32} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
            <p className={styles.uploadTitle}>{t('logo.upload')}</p>
            <p className={styles.uploadFormats}>{t('logo.formats')}</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} variants={itemVariants}>
          <span className={styles.label}>{t('mission.title')}</span>
          <div className={styles.missionWrapper}>
            <textarea 
              className={styles.textarea} 
              placeholder={t('mission.placeholder')}
              value={mission}
              onChange={(e) => setMission(e.target.value)}
            />
          </div>
        </motion.div>
      </div>

      {/* Niches Section */}
      <motion.div className={styles.section} variants={itemVariants}>
        <span className={styles.label}>{t('niches.title')}</span>
        <div className={styles.selectWrapper}>
          <select 
            className={styles.select} 
            value={selectedNiche}
            onChange={(e) => setSelectedNiche(e.target.value)}
          >
            <option value="" disabled>{t('niches.placeholder')}</option>
            <option value="healthcare">Healthcare / Tibbi Xidmət</option>
            <option value="education">Education / Təhsil</option>
            <option value="advocacy">Advocacy / Hüquq Müdafiəsi</option>
            <option value="community">Community Support / İcma Dəstəyi</option>
          </select>
          <ChevronDown className={styles.selectIcon} size={22} strokeWidth={2.5} />
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div className={styles.footer} variants={itemVariants}>
        <button 
          className={`btn ${isSaved ? 'btn-success' : 'btn-primary'} ${styles.saveBtn}`}
          onClick={handleSave}
          disabled={isSaving}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            minWidth: '200px',
            justifyContent: 'center',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            borderRadius: '100px',
            background: isSaved ? '#10B981' : 'var(--color-primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}
        >
          {isSaving ? (
            <Loader2 className="spin" size={24} />
          ) : isSaved ? (
            <Check size={24} />
          ) : null}
          {isSaving ? t('saving') : isSaved ? t('success') : t('save')}
        </button>
      </motion.div>
    </motion.div>
  );
}
