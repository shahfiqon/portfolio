# Phoenix Portfolio

A modern, high-performance portfolio website built with Docusaurus, showcasing professional experience, projects, and technical expertise.

## 🚀 Features

### Home - Experience Dashboard
- **Interactive KPI Metrics** with animated counters
- **Experience by Domain** visualization (donut chart)
- **Skills Heatmap** showing proficiency across technologies
- **Career Timeline** with milestones and growth trajectory
- **Soft Skills** radar chart
- **Experience Cards** highlighting key roles

### Projects Page
- **Advanced Filtering** by domain and technology
- **Search Functionality** across all project fields
- **Sorting Options** (date, featured)
- **Rich Project Cards** with:
  - Tech stack badges
  - Impact metrics
  - Role and contribution details
  - Links to GitHub, demos, and case studies
  - Expandable details

### Blog
- Native Docusaurus blog with:
  - Reading time estimates
  - Tags and categories
  - Syntax-highlighted code blocks
  - RSS/Atom feeds

### Contact Page
- Multiple contact methods
- Availability status
- Social media links
- Meeting scheduler integration

## 🛠️ Tech Stack

- **Framework**: Docusaurus 3.8+
- **UI Library**: React 19
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: React Icons
- **Styling**: CSS Modules + Custom CSS
- **Language**: TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/data/dashboard.json`
2. **Projects**: Edit `src/data/projectsDetailed.json`
3. **Skills**: Edit `src/data/skillsEnhanced.json`
4. **Experience Domains**: Edit `src/data/domains.json`
5. **Career Timeline**: Edit `src/data/timeline.json`

### Styling

- **Global Styles**: `src/css/custom.css`
- **Dashboard Styles**: `src/css/dashboard.css`
- **Component Styles**: Individual `.module.css` files

### Color Scheme

Edit CSS variables in `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #3b82f6;
  --ifm-color-primary-dark: #2563eb;
  /* ... more colors */
}
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Charts/           # Recharts visualizations
│   │   ├── Dashboard/        # Dashboard components
│   │   └── Projects/         # Project showcase components
│   ├── data/                 # JSON data files
│   ├── pages/                # Route pages
│   ├── css/                  # Global styles
│   └── theme/                # Docusaurus theme overrides
├── blog/                     # Blog posts
├── static/                   # Static assets
└── docusaurus.config.js      # Site configuration
```

## 🎯 Key Components

### Charts
- `ExperienceDomainChart.tsx` - Donut chart for domain expertise
- `SkillsHeatmap.tsx` - Grid-based skills visualization
- `CareerTimeline.tsx` - Stacked area chart with milestones

### Projects
- `ProjectCard.tsx` - Individual project showcase
- `ProjectsGrid.tsx` - Grid layout with filtering
- `ProjectFilters.tsx` - Search and filter controls

### Dashboard
- `DashboardHero.tsx` - Hero section with animations
- `DashboardAnalytics.tsx` - Main analytics layout
- `Kpicard.tsx` - Animated KPI metrics

## 🌐 Deployment

### GitHub Pages

```bash
npm run deploy
```

### Vercel/Netlify

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `build`

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support
- Semantic HTML structure

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 576px, 996px, 1200px
- Flexible grid layouts
- Touch-friendly interactions

## 🎨 Dark Mode

Fully supported with:
- Automatic theme detection
- Manual toggle
- Consistent styling across all components
- Optimized color contrast

## 📊 Performance

- Lazy loading for images and heavy components
- Code splitting by route
- Optimized bundle size
- Lighthouse score: 95+

## 🔧 Configuration

### Site Metadata

Edit `docusaurus.config.js`:

```javascript
{
  title: "Your Name | Portfolio",
  tagline: "Your tagline",
  url: "https://yourdomain.com",
  baseUrl: "/",
  organizationName: "yourGitHub",
  projectName: "portfolio",
}
```

### Navigation

Update navbar items in `docusaurus.config.js`:

```javascript
navbar: {
  items: [
    { label: "HOME", to: "/" },
    { label: "PROJECTS", to: "/projects" },
    { label: "BLOG", to: "/blog" },
    { label: "CONTACT", to: "/contact" },
  ]
}
```

## 📝 Adding Content

### New Project

Add to `src/data/projectsDetailed.json`:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Short description",
  "techStack": ["React", "Node.js"],
  "domains": ["Frontend"],
  "links": {
    "github": "https://github.com/...",
    "demo": "https://..."
  },
  "date": "2024-01",
  "featured": true
}
```

### New Blog Post

Create a file in `blog/` directory:

```markdown
---
title: Post Title
authors: [yourname]
tags: [react, typescript]
---

Your content here...
```

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ by Phoenix**
