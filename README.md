# 📄 PM Test – Fintech Web App Prototype

Take home test forObermind

## 🛠 Tech Stack

- **Next.js 16**
- **TypeScript**
- **App Router**
- **next-intl** (i18n & locale routing)
- **TailwindCSS**

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

## Assumptions

### 1. Project Flow

- "Personal" is the primary user entry point.
- Users landing on `/` are redirected to `/[locale]/personal`.
- "Personal" and "Institutional" have independent pages at:
  - `/[locale]/personal`
  - `/[locale]/institutional`

### 2. Internationalization

- Locales assumed to be predefined in env
- URL-based locale routing: `/{locale}/...`
- Implemented using `next-intl` with App Router.
- Language switching updates only the locale segment in the URL.
- Country/region is not encoded into the URL (kept internal).

- Architecture supports future TMS integration for translation management.

### 4. Testing

- Going to assume no testing as it wasnt instructed but im aware and able to add testing

```

```
