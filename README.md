# Rutuja Mane – Portfolio

A responsive personal portfolio website built with **React, Vite, and Tailwind CSS** to showcase my skills, projects, education, and contact information.

## 🌐 Live Website

**[Visit My Portfolio](https://manerutuja22.github.io/Portfolio/)**

## 👩‍💻 About

I am a Computer Science Engineering graduate interested in **Python, Django, REST APIs, and web application development**.

This portfolio highlights my technical skills, academic background, projects, and development experience.

## 🚀 Tech Stack

- **Frontend:** React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap
- **Backend / APIs:** Django, REST APIs
- **Programming:** Python, JavaScript
- **Database:** MySQL, PostgreSQL, SQLite
- **Tools:** Git, GitHub, VS Code
- **Other:** EmailJS, Vite

## ✨ Features

- Responsive portfolio design
- Dark/light theme
- About section
- Technical skills section
- Project showcase with project images
- Education section
- Resume download
- Contact form
- EmailJS integration
- Scroll animations
- Mobile-friendly navigation

## 📂 Project Structure

```text
Portfolio/
├── index.html
├── public/
│   └── Rutuja_Mane_Resume.pdf
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── education.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useReveal.js
│   ├── services/
│   │   └── emailService.js
│   └── assets/
│       └── images/
├── .env.example
├── .gitignore
├── package.json
└── vite.config.js
```

## 🛠️ Run Locally

Clone the repository:

```bash
git clone https://github.com/manerutuja22/Portfolio.git
cd Portfolio
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Add your EmailJS credentials to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 📧 EmailJS Configuration

The portfolio contact form uses **EmailJS** to send messages directly from the website.

To configure it:

1. Create an account on EmailJS.
2. Add an email service.
3. Create an email template.
4. Copy the Service ID, Template ID, and Public Key.
5. Add them to your `.env` file.

The template variables used by the contact form are:

```text
{{name}}
{{email}}
{{subject}}
{{message}}
```

The `.env` file is excluded from Git using `.gitignore`.

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

## 🚀 Deployment

This portfolio is deployed using **GitHub Pages**.

To build and publish the latest version:

```bash
npm run deploy
```

The deployment script builds the application and publishes the `dist/` folder to the `gh-pages` branch.

### Live Deployment

**https://manerutuja22.github.io/Portfolio/**

## 📌 Projects Featured

The portfolio currently showcases projects including:

- **Django Blog Application** – Blog platform with authentication, CRUD operations, categories, search, filtering, comments, and Django ORM.
- **Task Manager App** – React-based task management application.
- **Retail Sales Analytics** – Data analysis and visualization project.
- **Plant Disease Detection** – Machine-learning-based plant disease classification project.
- **Portfolio Website** – This responsive React portfolio.

## 📄 Resume

My resume is available directly from the portfolio website and can also be found in the `public/` directory.

## 📬 Contact

If you would like to discuss an opportunity, project, or collaboration, you can contact me through the portfolio website.

**Portfolio:**  
https://manerutuja22.github.io/Portfolio/

**GitHub:**  
https://github.com/manerutuja22

---

⭐ If you find this portfolio useful or interesting, feel free to explore the repository.
