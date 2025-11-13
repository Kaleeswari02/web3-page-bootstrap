# Next.js Bootstrap 5 Boilerplate

A clean and modern Next.js 14 App Router boilerplate with Bootstrap 5, built with JavaScript for rapid development.

## Features

- ✅ **Next.js 14** with App Router structure
- ✅ **Bootstrap 5** for responsive design
- ✅ **JavaScript** (no TypeScript)
- ✅ **Mobile-responsive** navigation with collapse
- ✅ **Production-ready** code with proper structure
- ✅ **SEO optimized** with meta tags
- ✅ **Accessibility** features included
- ✅ **Clean components** with proper separation

## Project Structure

```
nextjs-bootstrap-boilerplate/
├── app/
│   ├── layout.js           # Root layout with Bootstrap setup
│   ├── page.js            # Home page with hero & cards
│   └── globals.css        # Custom global styles
├── components/
│   ├── Navbar.js          # Responsive navbar component
│   └── Footer.js          # Footer component
├── public/
│   └── favicon.ico        # Favicon
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
└── README.md             # This file
```

## Bootstrap Setup

### CSS Import
Bootstrap CSS is imported globally in `app/layout.js`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### JavaScript Components
Bootstrap JS bundle (including Popper) is loaded in the layout:
```javascript
<script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
  crossOrigin="anonymous"
  defer
></script>
```

This enables:
- ✅ Mobile navbar collapse functionality
- ✅ Dropdown menus
- ✅ Modal dialogs
- ✅ Tooltips and popovers
- ✅ All other Bootstrap JavaScript components

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or create the project:**
```bash
# If you have this boilerplate in a repository
git clone <your-repo-url>
cd nextjs-bootstrap-boilerplate

# Or create a new Next.js project and copy the files
npx create-next-app@latest my-app
cd my-app
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## Customization

### Adding New Pages
Create new files in the `app/` directory:

```javascript
// app/about/page.js
export default function AboutPage() {
  return (
    <div className="container py-5">
      <h1>About Us</h1>
      <p>Your content here...</p>
    </div>
  );
}
```

### Customizing the Navbar
Edit `components/Navbar.js` to:
- Add/remove navigation items
- Change colors and styling
- Modify responsive behavior

### Customizing the Footer
Edit `components/Footer.js` to:
- Update contact information
- Add social media links
- Change layout and styling

### Adding Bootstrap Components
You can now use any Bootstrap 5 component:

```jsx
// Example: Alert component
<div className="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>

// Example: Badge
<span className="badge bg-primary">New</span>

// Example: Progress bar
<div className="progress">
  <div 
    className="progress-bar" 
    role="progressbar" 
    style={{ width: '75%' }}
    aria-valuenow={75} 
    aria-valuemin={0} 
    aria-valuemax={100}
  >
    75%
  </div>
</div>
```

## Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

### Static Export (Recommended for most cases)
This project is configured for static export. To deploy:

1. **Build the project:**
```bash
npm run build
```

2. **Deploy the `out` folder** to your hosting service:
   - **Vercel**: Connect your GitHub repo and deploy
   - **Netlify**: Drag and drop the `out` folder
   - **GitHub Pages**: Use the `out` folder as your site
   - **Any static hosting**: Upload the `out` folder contents

### Custom Domain
Update `next.config.js` to specify your domain:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add this for custom domains
  // assetPrefix: 'https://yourdomain.com',
}

module.exports = nextConfig
```

## Dependencies

- **next**: ^14.0.4 - React framework
- **react**: ^18.2.0 - React library  
- **react-dom**: ^18.2.0 - React DOM
- **bootstrap**: ^5.3.2 - CSS framework

## Performance Tips

1. **Font Loading**: Uses Google Fonts with proper preloading
2. **Image Optimization**: Bootstrap CDN for CSS, deferring JavaScript
3. **SEO**: Proper meta tags and semantic HTML
4. **Accessibility**: ARIA labels and keyboard navigation support

## Browser Support

This boilerplate supports all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Bootstrap 5 documentation](https://getbootstrap.com/docs/5.3/)
3. Open an issue in the repository

---

**Happy coding! 🚀**