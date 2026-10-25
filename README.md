# Rutuja Mane – Portfolio (React + Vite + Tailwind)

## Run locally
```bash
npm install
cp .env.example .env     # then fill in your EmailJS values (see below)
npm run dev              # http://localhost:5173
```

## Folder structure
```
portfolio-react/
├── index.html                 # HTML shell (fonts, icons, theme script)
├── .env                       # your EmailJS keys (NOT committed)
├── public/                    # files copied as-is (resume PDF)
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # page layout – assembles all sections
    ├── styles/index.css       # Tailwind + custom CSS + dark theme
    ├── components/            # UI pieces (.jsx): Navbar, Hero, Skills, Projects, Education, Contact, Footer, Toast...
    ├── data/                  # YOUR CONTENT: profile.js, skills.js, projects.js, education.js
    ├── hooks/                 # useTheme.js (dark mode), useReveal.js (scroll animation)
    ├── services/emailService.js   # EmailJS logic
    └── assets/images/         # profile + project screenshots
```
To change text, projects or skills, edit only the files in `src/data/`.

## Connect EmailJS
1. Sign up at https://www.emailjs.com (free).
2. **Email Services → Add New Service** → choose Gmail → connect manerutuja719@gmail.com → copy the **Service ID**.
3. **Email Templates → Create New Template**. Set:
   - To Email: `manerutuja719@gmail.com`
   - Reply To: `{{email}}`
   - Subject: `Portfolio: {{subject}}`
   - Content: `From: {{name}} ({{email}})` and `{{message}}`
   Save and copy the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Put the three values in `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev` (env changes need a restart) and send a test message.

The variable names `{{name}} {{email}} {{subject}} {{message}}` must match the
`name=` attributes of the inputs in `src/components/Contact.jsx`.

## Deploy
- **GitHub Pages:** `npm run deploy` (builds and publishes `dist/` to the gh-pages branch).
  Then in the repo: Settings → Pages → Branch `gh-pages`.
  Note: GitHub Pages can't read `.env`, so build locally (the keys are baked in) – EmailJS public keys are designed to be public.
- **Netlify / Vercel:** import the repo, add the three `VITE_EMAILJS_*` variables in the dashboard, build command `npm run build`, output `dist`.
