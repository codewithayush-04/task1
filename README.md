# Portfolio Website

A responsive personal portfolio built with **React (JSX)** and **CSS**, featuring four sections — Home, About, Projects, and Contact — plus a dark mode toggle.

## Features

- Responsive layout for mobile, tablet, and desktop
- Sticky navigation with mobile hamburger menu
- Dark / light mode with localStorage persistence
- Smooth scroll between sections
- Accessible form and semantic HTML

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useTheme.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Customization

Edit the placeholder content in each component file — name, bio, skills, projects, and contact links — to make the portfolio your own.
