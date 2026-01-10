# Modern Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Lucide Icons. Features dark mode support, smooth animations, and a fully responsive design.

## 🚀 Features

- **🌑 Dark/Light Mode Toggle** - Save theme preference in local storage with beautiful transitions
- **💫 Animated Backgrounds** - Stars, meteors, scroll effects, and glowing UI elements
- **📱 Responsive Navigation** - Desktop and mobile menus with glassmorphism
- **👨‍💻 Hero & About Sections** - Showcase who you are with smooth intro animations
- **📊 Skills Grid** - Filterable progress bars and categories with animated width
- **🖼️ Projects Showcase** - Display screenshots, tech stacks, and GitHub/demo links
- **📩 Contact Section** - Social icons + responsive contact form
- **🎨 Modern Design** - Glassmorphism effects, gradients, and smooth animations

## 🛠️ Tech Stack

- **React** - Component-based UI development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS for styling
- **Lucide Icons** - Clean and beautiful icon pack
- **Framer Motion** - Smooth animations and transitions
- **TypeScript** (optional) - Type safety and tooling

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **src/components/Hero.jsx** - Update name, title, and social links
2. **src/components/About.jsx** - Update bio and technologies
3. **src/components/Skills.jsx** - Update your skills and proficiency levels
4. **src/components/Projects.jsx** - Add your projects with images and links
5. **src/components/Contact.jsx** - Update contact information
6. **src/components/Footer.jsx** - Update footer information
7. **index.html** - Update meta tags and title

### Styling
- Colors can be customized in \`tailwind.config.js\`
- Additional animations can be added in \`src/index.css\`
- Component styles use Tailwind utility classes

### Images
- Add project screenshots to the \`public\` folder
- Update image paths in the Projects component
- Consider using a service like Unsplash for placeholder images

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: \`npm run build\`
2. Deploy the \`dist\` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Install gh-pages: \`npm install --save-dev gh-pages\`
2. Add to package.json scripts:
\`\`\`json
"homepage": "https://yourusername.github.io/portfolio-website",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
\`\`\`
3. Deploy: \`npm run deploy\`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size with Vite
- Efficient CSS with Tailwind's purging

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

⭐ Star this repo if you found it helpful!