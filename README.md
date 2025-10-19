# Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects and skills. Built with React and Vite for optimal performance and developer experience.

## Features

- **Dynamic Project Carousel** - Smooth navigation through projects with responsive design (2 cards on desktop, 1 on mobile)
- **Admin Dashboard** - Secure panel for managing projects (add, edit, delete)
- **Contact Form** - Direct communication via EmailJS integration
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Modern Design** - Clean UI with smooth animations and transitions

## Tech Stack

- **React** 19.1.1 - UI library
- **Vite** 7.1.7 - Build tool
- **React Router DOM** 7.9.4 - Client-side routing
- **EmailJS** 4.4.1 - Email service integration
- **Font Awesome** 6.4.0 - Icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/adawev/Personal_Website.git
cd Personal_Website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
personal-web/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Services.jsx        # Services showcase
│   │   ├── Projects.jsx        # Project carousel
│   │   ├── Contact.jsx         # Contact form
│   │   └── AdminAddProject.jsx # Admin panel
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
└── index.html                  # HTML template
```

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx` to update your contact details and social media links.

### Modify Services

Update `src/components/Services.jsx` to change the services you offer.

### Change Theme

Customize colors in `src/index.css`:

```css
:root {
  --bg: #0b0b0c;
  --accent: #7fe3d9;
}
```

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

Diyorjon - [@adawev](https://github.com/adawev)

Project Link: [https://github.com/adawev/Personal_Website](https://github.com/adawev/Personal_Website)

---

Made with React and Vite
