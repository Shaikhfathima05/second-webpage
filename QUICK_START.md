# Quick Start Guide - Healthcare Clinic Website

## Installation & Setup

```bash
# Navigate to project directory
cd assignment

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

The application will be available at: `http://localhost:5174`

---

## Project Structure Overview

```
src/
├── components/          # Reusable UI components
│   ├── Navbar          # Navigation bar
│   ├── Hero            # Landing section
│   ├── Services        # Services showcase
│   ├── Doctors         # Doctors grid with detail buttons
│   ├── Appointment     # Booking form
│   ├── Contact         # Contact information
│   ├── Footer          # Footer section
│   └── ScrollToTop     # Scroll button
├── pages/              # Route pages
│   ├── Home            # Main landing page
│   └── DoctorDetail    # Individual doctor profiles
├── data/               # Data files
│   └── doctorsData.js  # Doctor information database
├── App.jsx             # Main app with routing
└── main.jsx            # Entry point
```

---

## Key Features

### 1. Home Page (`/`)
- Hero section with call-to-action
- 6 medical services
- 4 doctor profiles with "More Details" buttons
- Appointment booking form
- Contact information
- Footer

### 2. Doctor Detail Pages (`/doctor/:id`)
- Complete doctor biography
- Education & qualifications
- Areas of expertise
- Awards & recognition
- Contact information
- Book appointment button

---

## Navigation

### From Home Page:
- Click any section link in navbar
- Click "More Details" on doctor cards
- Click "Book Appointment" buttons

### From Doctor Detail Page:
- Click "← Back to Home" button
- Click navbar logo
- Click any navbar section link

---

## Customization Guide

### Update Doctor Information:
Edit `src/data/doctorsData.js`:
```javascript
{
  id: 1,
  name: 'Dr. Your Name',
  specialty: 'Your Specialty',
  experience: 'X years',
  education: 'Your Education',
  description: 'Your bio...',
  // ... more fields
}
```

### Change Color Scheme:
Edit `src/index.css`:
```css
:root {
  --primary-blue: #0066cc;    /* Main color */
  --primary-dark: #0052a3;    /* Hover color */
  --primary-darker: #003d7a;  /* Active color */
}
```

### Modify Services:
Edit `src/components/Services.jsx`:
```javascript
const services = [
  {
    id: 1,
    icon: '🩺',
    title: 'Your Service',
    description: 'Service description...'
  },
  // Add more services
];
```

---

## Component Props & Usage

### Navbar
```jsx
<Navbar />
// No props - handles navigation internally
```

### Hero
```jsx
<Hero />
// No props - static content
```

### Doctors
```jsx
<Doctors />
// Reads from doctorsData.js
// Handles navigation to detail pages
```

### DoctorDetail
```jsx
<DoctorDetail />
// Uses URL parameter :id
// Automatically fetches doctor data
```

---

## Styling Guidelines

### CSS Files:
- Each component has its own CSS file
- Global styles in `index.css`
- Consistent naming: `.component-name`

### Responsive Breakpoints:
```css
/* Mobile: Default styles */
/* Tablet & Desktop: */
@media (max-width: 768px) {
  /* Mobile overrides */
}
```

### Color Usage:
- Primary actions: `#0066cc`
- Hover states: `#0052a3`
- Text: `#1a1a1a` (dark), `#666` (medium)
- Backgrounds: `#ffffff`, `#f8f9fa`

---

## Common Tasks

### Add a New Doctor:
1. Open `src/data/doctorsData.js`
2. Add new object to array:
```javascript
{
  id: 5, // Next available ID
  name: 'Dr. New Doctor',
  specialty: 'Specialty',
  // ... fill all fields
}
```

### Add a New Page:
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

### Modify Appointment Form:
Edit `src/components/Appointment.jsx`:
- Add new fields in `formData` state
- Add corresponding input elements
- Update form validation

---

## Build & Deploy

### Production Build:
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build:
```bash
npm run preview
```

### Deploy to Hosting:
1. Run `npm run build`
2. Upload `dist/` folder contents
3. Configure server for SPA routing

---

## Troubleshooting

### Issue: Blank page after build
**Solution:** Ensure base URL is correct in `vite.config.js`

### Issue: Routes not working on refresh
**Solution:** Configure server for SPA (redirect all to index.html)

### Issue: Styles not loading
**Solution:** Check CSS import paths, rebuild project

### Issue: Doctor detail page shows "not found"
**Solution:** Verify doctor ID exists in `doctorsData.js`

---

## Development Tips

### Hot Module Replacement:
- Changes auto-reload in dev mode
- CSS updates without page refresh
- Component state preserved

### Browser DevTools:
- React DevTools for component inspection
- Network tab for performance
- Console for debugging

### Code Organization:
- Keep components small and focused
- Use data files for content
- Separate styling per component

---

## Performance Optimization

### Already Implemented:
- Code splitting with React Router
- CSS minification
- JavaScript minification
- Gzip compression ready

### Additional Optimizations:
- Add lazy loading for routes
- Implement image optimization
- Add service worker for caching
- Use React.memo for expensive components

---

## Accessibility Features

### Current Implementation:
- Semantic HTML elements
- Proper heading hierarchy
- Form labels with htmlFor
- ARIA labels on buttons
- Keyboard navigation support

### Testing:
- Use screen reader to test
- Check keyboard navigation
- Verify color contrast
- Test with accessibility tools

---

## Browser Support

### Fully Supported:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Used:
- CSS Grid & Flexbox
- CSS Custom Properties
- ES6+ JavaScript
- React 19

---

## Resources

### Documentation:
- [React Router Docs](https://reactrouter.com/)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)

### Design:
- Color scheme: Professional healthcare blue
- Typography: System font stack
- Icons: Unicode emoji (easily replaceable)

---

## Support & Maintenance

### Regular Updates:
- Update doctor information
- Add new services
- Update contact details
- Refresh testimonials

### Monitoring:
- Check form submissions
- Monitor page load times
- Review user feedback
- Test on new browsers

---

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Package Management
npm install          # Install dependencies
npm update           # Update packages
npm audit            # Check vulnerabilities
```

---

## Contact & Credits

**Project:** Healthcare Clinic Website  
**Version:** 2.0 (Enhanced)  
**Last Updated:** February 19, 2026  
**Developer:** Kiro AI Assistant  

---

**Happy Coding! 🚀**
