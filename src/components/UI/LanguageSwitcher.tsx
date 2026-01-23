'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import { useTransition } from 'react';
import styles from './language-switcher.module.css';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <div className={styles.switcher}>
      <Globe size={18} className={styles.icon} />
      <div className={styles.options}>
        <button 
          onClick={() => onSelectChange('az')} 
          className={`${styles.option} ${locale === 'az' ? styles.active : ''}`}
          disabled={isPending}
        >
          AZ
        </button>
        <span className={styles.divider}>|</span>
        <button 
          onClick={() => onSelectChange('en')} 
          className={`${styles.option} ${locale === 'en' ? styles.active : ''}`}
          disabled={isPending}
        >
          EN
        </button>
      </div>
    </div>
  );
}
