'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { z } from 'zod';

export default function ContactForm() {
  const t = useTranslations('ContactPage.form');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Simple Zod Scale Validation
    const schema = z.object({
        name: z.string().min(2, t('validName')),
        email: z.string().email(t('validEmail')),
        message: z.string().min(10, t('validMessage'))
    });

    const result = schema.safeParse(data);

    if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        setErrors({
            name: fieldErrors.name?.[0], 
            email: fieldErrors.email?.[0], 
            message: fieldErrors.message?.[0]
        });
        setStatus('idle');
        return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  }

  if (status === 'success') {
      return (
          <div role="alert" className="card" style={{borderColor: 'green', textAlign: 'center'}}>
              <h3 style={{color: 'green'}}>{t('successTitle')}</h3>
              <p>{t('successDesc')}</p>
              <button 
                onClick={() => setStatus('idle')} 
                className="btn btn-secondary" 
                style={{marginTop: '1rem'}}
              >
                  {t('sendAnother')}
              </button>
          </div>
      )
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack" noValidate aria-labelledby="form-title">
        <h3 id="form-title" className="sr-only">Contact Form</h3>
        
        <div className="form-group">
            <label htmlFor="name">{t('name')}</label>
            <input 
                id="name" 
                name="name" 
                type="text" 
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span id="name-error" className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
            <label htmlFor="email">{t('email')}</label>
            <input 
                id="email" 
                name="email" 
                type="email" 
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span id="email-error" className="error-msg">{errors.email}</span>}
        </div>

        <div className="form-group">
            <label htmlFor="message">{t('message')}</label>
            <textarea 
                id="message" 
                name="message" 
                rows={5}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <span id="message-error" className="error-msg">{errors.message}</span>}
        </div>

        <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={status === 'submitting'}
            aria-busy={status === 'submitting'}
        >
            {status === 'submitting' ? t('sending') : t('submit')}
        </button>

        {status === 'error' && <p role="alert" className="error-msg">{t('errorGeneric')}</p>}
    </form>
  );
}
