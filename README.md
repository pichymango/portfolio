# Modern Developer Portfolio

A stunning dark-themed developer portfolio with smooth animations built using Next.js, Framer Motion, and Tailwind CSS.

## Features

- ✨ Smooth Framer Motion animations
- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- 🚀 Optimized for Vercel deployment
- 🎯 Sections: Hero, About, Skills, Projects, Education, Contact
- 💫 Animated background effects
- 🔗 Easy to customize links and content

## Customization

Edit the `config` object in `portfolio.jsx` to personalize:

1. **Personal Information**: Name, tagline, avatar
2. **Links**: GitHub, LinkedIn, email, resume
3. **About**: Your description and background
4. **Skills**: Languages, frameworks, and tools
5. **Projects**: Add your projects with descriptions and links
6. **Education**: College, degree, graduation date

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization Tips

### Update Your Information

Open `portfolio.jsx` and find the `config` object at the top. Update:

```javascript
const config = {
  name: "Your Name",
  tagline: "Your Tagline",
  avatar: "https://your-image-url.com/avatar.jpg", // Optional
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
    resume: "/resume.pdf"
  },
  // ... rest of config
};
```

### Add More Projects

Simply add more project objects to the `projects` array:

```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.vercel.app",
    tags: ["React", "Next.js", "Tailwind"]
  },
  // Add more...
]
```

### Change Colors

The portfolio uses Tailwind's color palette. To change the accent colors, find and replace:
- `indigo` with your preferred color (e.g., `blue`, `purple`, `emerald`)
- Update gradient classes like `from-indigo-400 to-purple-400`

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## License

MIT License - Feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
