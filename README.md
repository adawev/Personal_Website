# Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects and skills.

## Tech Stack

- React 19.1.1
- Vite 7.1.7
- EmailJS 4.4.1
- Font Awesome 6.4.0

## Setup

1. **Clone the repository**
```bash
git clone https://github.com/adawev/Personal_Website.git
cd Personal_Website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Updating Projects

Projects are stored in `public/projects.json`. To update your projects:

1. Edit `public/projects.json`
2. Commit and push to GitHub
3. Netlify will auto-deploy your changes

### Project JSON Format:
```json
{
  "title": "Project Name",
  "description": "Project description",
  "image": "https://example.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "github": "https://github.com/username/repo",
  "demo": "https://demo-url.com",
  "category": "Web App"
}
```

## Links

- **GitHub**: [@adawev](https://github.com/adawev)
- **LinkedIn**: [adawev](https://linkedin.com/in/adawev)
- **LeetCode**: [adawev](https://leetcode.com/adawev)

## License

MIT
