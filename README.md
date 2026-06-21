# Satish Prajapati — AI-Powered Portfolio

A modern, responsive portfolio website with an AI-powered chatbot built using React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **AI Chatbot** — Gemini-powered assistant that answers questions only from resume data (no hallucinations)
- **Dark / Light Mode** — Persisted in localStorage
- **Smooth Animations** — Framer Motion page-in and scroll animations
- **Fully Responsive** — Mobile-first design
- **SEO Optimized** — Meta tags, og:tags, semantic HTML
- **Fast** — Optimized React with lazy loading

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero section with stats card
│   ├── About.tsx         # About + contact info
│   ├── Skills.tsx        # Categorized skill cards
│   ├── Experience.tsx    # Timeline with expandable projects
│   ├── Projects.tsx      # Project grid cards
│   ├── Education.tsx     # Education cards
│   ├── Contact.tsx       # Contact info + CTA
│   ├── AiChat.tsx        # Gemini AI chatbot
│   └── Footer.tsx
├── data/
│   └── resumeData.ts     # All resume data + RESUME_CONTEXT for AI
├── hooks/
│   └── useTheme.tsx      # Dark/light mode context
├── App.tsx
├── index.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open in browser
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready to deploy.

---

## 🌐 Deployment Options

### Option A — Netlify (Recommended, Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **Deploy** → Get a live URL like `satish-portfolio.netlify.app`

**Or drag & drop the `build/` folder at [netlify.com/drop](https://app.netlify.com/drop)**

### Option B — Vercel (Free)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option C — GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/satish-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

```bash
npm run deploy
```

---

## 🤖 AI Chatbot Setup

1. Get a free Gemini API key from [aistudio.google.com](https://aistudio.google.com)
2. Open the portfolio → scroll to "AI Chat" section
3. Paste your API key and click **Save**
4. Start asking questions!

### Example Questions:
- "How many years of experience does Satish have?"
- "What technologies does Satish work with?"
- "What projects has Satish built?"
- "What companies has Satish worked for?"
- "What is Satish's educational background?"

The AI answers **only** from the resume data — no hallucinations.

---

## 🎨 Customization

To update your resume data, edit `src/data/resumeData.ts`:
- Personal info, skills, experience, projects, education
- Also update the `RESUME_CONTEXT` string at the bottom for the AI chatbot

---

## 🛠 Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Gemini API | AI chatbot |
| Create React App | Build tooling |

---

Made with ❤️ by Satish Prajapati
