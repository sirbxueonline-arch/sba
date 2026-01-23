# Spina Bifida Azerbaijan Website - Deployment Guide

## 1. Project Overview
This is a **Next.js 16** web application using:
- **`next-intl`** for localization (Azerbaijani/English)
- **CSS Modules** for scoped styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Zod** for form validation

## 2. Core Structure
- **`src/app/[locale]`**: All pages are localized routes.
- **`src/messages`**: JSON files for translation (`az.json`, `en.json`).
- **`src/components`**: Reusable UI components (`Header`, `Hero`, `PageHeader`, `ContactForm`).

## 3. Deployment Steps (Vercel/Netlify/VPS)

### Build Command
```bash
npm run build
```

### Start Command (Production)
```bash
npm run start
```

### Environment Variables
No `.env` is strictly required for the static pages, but if you add a backend for the email form later, you will need:
- `EMAIL_API_KEY` (for sending contact emails)

## 4. Common Issues & Fixes

**Issue: Translations update seen in code but not browser**
- **Cause**: Next.js server caching.
- **Fix**: Restart the process (Ctrl+C -> `npm run dev`) or rebuild (`npm run build`).

**Issue: "Hydration Mismatch"**
- **Cause**: Browser extensions (like Grammarly) modifying the DOM.
- **Fix**: Ignore in dev, it usually doesn't affect production.

## 5. Adding New Content
1. **Create Page**: Add `page.tsx` in `src/app/[locale]/new-page-name`.
2. **Translate**: Add keys to `az.json` and `en.json`.
3. **Link**: Add link to `Header.tsx` navLinks array.
