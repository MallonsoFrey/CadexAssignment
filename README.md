# Simple Two-Page Website with Contact Form and Backend

This project is a simple React-based two-page website featuring a main page and a contact page with a functional contact form. The form submissions are handled by a basic backend implemented as a serverless function. The project uses Vite, TypeScript, Material UI, and Emotion for styling.

---

## Deployment

This project is deployed on Vercel and available at:  
[https://cadex-assignment.vercel.app]([https://your-vercel-project-url.vercel.app](https://cadex-assignment.vercel.app))

---

## Project Overview

- **Main Page (`/`)**: Basic landing page with introduction content.
- **Contact Page (`/contact-us`)**: Contact form collecting name, email, and message.
- **Backend API**: Serverless function (deployed on Vercel) to handle contact form submissions and respond with a confirmation message.

---

## Tech Stack

- **React** — Frontend UI library
- **Vite** — Development and build tool
- **TypeScript** — Static typing for JavaScript
- **Material UI (MUI)** — UI component library
- **Emotion** — CSS-in-JS styling solution
- **Vercel Serverless Functions** — Backend API for form submissions
  
---
## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MallonsoFrey/CadexAssignment.git
   cd your-repo

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install

3. **Local development:**

   This project includes both a frontend built with Vite and React, and backend API routes implemented as Vercel Serverless Functions.

- To run the **full local environment**, including the frontend and backend API routes (serverless functions), use:

   ```bash
   vercel dev

- To run **only the frontend** development server (without backend API support), use:
  
   ```bash
   npm run dev
   # or
   yarn dev

5. **Build for production:**

   ```bash
   npm run build
   # or
   yarn build

6. **Start preview of production build:**

   ```bash
   npm run preview
   # or
   yarn preview

## Hosting on Vercel
- The frontend is deployed as a static site.
- The backend is implemented as Vercel Serverless Functions under the /api directory.
- Deploy with zero-configuration using the Vercel CLI or connect your GitHub repository to Vercel.

## Styling
- **Material UI** is used for pre-built accessible UI components.
- **Emotion** is used for CSS-in-JS styling, allowing scoped styles and theming.
- Responsive design principles are applied (e.g., max-width containers, flexible layouts).
- Global styles set via Emotion’s <Global /> component include resets and base typography.

## SEO Considerations
- Semantic HTML elements (e.g., <main>, <header>, <footer>) are used to structure content.
- Page titles and meta tags should be added to each page (can be extended using React Helmet or Next.js Head).
- Form accessibility is considered by using labels and proper input types.
- URLs are clean and descriptive (e.g., /contact-us).

## Performance Choices
- The site uses Vite for fast development and optimized builds.
- Components are lightweight, and code splitting can be applied if needed.
- Static assets and serverless functions keep deployment simple.
- Minimal external dependencies to reduce bundle size.

## Additional info
- Backend API is simple and only logs contact requests without persistent storage.
- The serverless function responds immediately with a success message.
- No user authentication or advanced form validation beyond basic required fields.
- Project is intended as a demo or assignment rather than a production-ready app.
- Deployment is on Vercel due to its built-in support for frontend + serverless backend.

## Folder Structure (Simplified)
/
├─ api/                # Serverless backend functions (e.g., contact.ts)
├─ src/
│  ├─ components/      # React components (Header, Footer, ContactForm, etc.)
│  ├─ pages/           # MainPage.tsx, ContactPage.tsx
│  ├─ styles/          # Global styles and theme
│  └─ App.tsx          # Main React app router
├─ package.json
├─ tsconfig.json
└─ README.md
