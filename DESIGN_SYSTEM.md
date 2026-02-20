# Design System - Healthcare Clinic Website

## Color Palette

### Primary Colors
```css
Primary Blue:    #0066cc  /* Main brand color, buttons, links */
Primary Dark:    #0052a3  /* Hover states, gradients */
Primary Darker:  #003d7a  /* Active states, deep accents */
```

### Neutral Colors
```css
Text Dark:       #1a1a1a  /* Headings, primary text */
Text Medium:     #666666  /* Body text, descriptions */
Text Light:      #999999  /* Secondary text, captions */
White:           #ffffff  /* Backgrounds, cards */
Background Light:#f8f9fa  /* Section backgrounds */
Background Gray: #e9ecef  /* Subtle backgrounds */
Border Color:    #e0e0e0  /* Dividers, borders */
```

### Accent Colors
```css
Success Green:   #28a745  /* Success messages, checkmarks */
Success Light:   #20c997  /* Success gradients */
```

---

## Typography

### Font Family
```css
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes & Weights

#### Headings
```css
H1 (Hero Title):
  font-size: 3.5rem (56px)
  font-weight: 800
  line-height: 1.2
  color: #1a1a1a

H2 (Section Titles):
  font-size: 2.8rem (44.8px)
  font-weight: 800
  line-height: 1.2
  color: #1a1a1a

H3 (Card Titles):
  font-size: 1.5-1.8rem (24-28.8px)
  font-weight: 700
  line-height: 1.3
  color: #1a1a1a

H4 (Subsections):
  font-size: 1.2-1.4rem (19.2-22.4px)
  font-weight: 600
  line-height: 1.4
  color: #0066cc
```

#### Body Text
```css
Large Body:
  font-size: 1.2-1.3rem (19.2-20.8px)
  font-weight: 400
  line-height: 1.8
  color: #555

Regular Body:
  font-size: 1.05-1.1rem (16.8-17.6px)
  font-weight: 400
  line-height: 1.6-1.8
  color: #666

Small Text:
  font-size: 0.95-1rem (15.2-16px)
  font-weight: 400
  line-height: 1.6
  color: #666
```

---

## Spacing System

### Padding Scale
```css
Extra Small:  8px   (0.5rem)
Small:        12px  (0.75rem)
Medium:       16px  (1rem)
Large:        24px  (1.5rem)
Extra Large:  32px  (2rem)
XXL:          40px  (2.5rem)
XXXL:         48px  (3rem)
```

### Margin Scale
```css
Tight:        8px   (0.5rem)
Normal:       16px  (1rem)
Relaxed:      24px  (1.5rem)
Loose:        32px  (2rem)
Extra Loose:  48px  (3rem)
```

### Section Padding
```css
Desktop:      80-100px top/bottom, 2rem sides
Mobile:       60-80px top/bottom, 1.5rem sides
```

---

## Border Radius

```css
Small:        6px   /* Input fields, small buttons */
Medium:       8px   /* Buttons, small cards */
Large:        12px  /* Cards, containers */
Extra Large:  16px  /* Large cards, sections */
XXL:          20px  /* Hero images, special cards */
Circle:       50%   /* Avatars, icon buttons */
```

---

## Shadows

### Card Shadows
```css
Default:
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

Hover:
  box-shadow: 0 12px 40px rgba(0, 102, 204, 0.15);

Deep:
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
```

### Button Shadows
```css
Default:
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);

Hover:
  box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
```

---

## Gradients

### Primary Gradients
```css
Blue Gradient:
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);

Dark Gradient:
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);

Light Gradient:
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

Hero Gradient:
  background: linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%);
```

### Accent Gradients
```css
Success Gradient:
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);

Expertise Tag:
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
```

---

## Buttons

### Primary Button
```css
.btn-primary {
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0052a3 0%, #003d7a 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
}
```

### Secondary Button
```css
.btn-secondary {
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid #0066cc;
  border-radius: 10px;
  background: transparent;
  color: #0066cc;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #0066cc;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
}
```

### Detail Button
```css
.btn-details {
  width: 100%;
  padding: 12px 24px;
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-details:hover {
  background: linear-gradient(135deg, #0052a3 0%, #003d7a 100%);
  transform: translateX(5px);
}
```

---

## Cards

### Standard Card
```css
.card {
  background: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 102, 204, 0.15);
  border-color: #0066cc;
}
```

### Doctor Card
```css
.doctor-card {
  background: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 2px solid transparent;
}

.doctor-avatar {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  border-radius: 50%;
  font-size: 4rem;
  box-shadow: 0 8px 24px rgba(0, 102, 204, 0.3);
}
```

---

## Forms

### Input Fields
```css
input, select, textarea {
  padding: 14px 18px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #0066cc;
  background: white;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.1);
}
```

### Labels
```css
label {
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  font-size: 1rem;
}
```

---

## Animations

### Hover Transforms
```css
/* Card Lift */
transform: translateY(-8px);

/* Button Lift */
transform: translateY(-3px);

/* Slide Right */
transform: translateX(5px);

/* Scale & Rotate */
transform: scale(1.1) rotate(5deg);
```

### Transitions
```css
/* Standard */
transition: all 0.3s ease;

/* Fast */
transition: all 0.2s ease;

/* Slow */
transition: all 0.5s ease;
```

### Keyframe Animations
```css
/* Fade In Left */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Fade In Right */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide In */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
}
```

---

## Icons & Emojis

### Used Icons
```
Medical:     ⚕️  (Logo, medical symbol)
Hospital:    🏥  (Hero section)
Stethoscope: 🩺  (General medicine)
Heart:       ❤️  (Cardiology)
Bone:        🦴  (Orthopedics)
Baby:        👶  (Pediatrics)
Brain:       🧠  (Neurology)
Lab:         🔬  (Laboratory)
Doctor:      👨‍⚕️👩‍⚕️ (Doctor avatars)
Location:    📍  (Address)
Phone:       📞  (Phone number)
Email:       ✉️  (Email address)
Clock:       🕐  (Working hours)
Briefcase:   💼  (Experience)
Trophy:      🏆  (Awards)
Checkmark:   ✓   (Qualifications)
```

---

## Responsive Breakpoints

### Mobile First Approach
```css
/* Mobile: Default styles (320px - 767px) */

/* Tablet & Desktop */
@media (max-width: 768px) {
  /* Mobile overrides */
}

/* Large Desktop */
@media (min-width: 1200px) {
  /* Large screen enhancements */
}
```

### Common Adjustments
```css
Mobile (< 768px):
  - Single column layouts
  - Smaller font sizes (0.8-0.9x)
  - Reduced padding (0.7-0.8x)
  - Stacked buttons
  - Hamburger menu

Tablet (768px - 1024px):
  - 2-column grids
  - Medium font sizes
  - Standard padding
  - Side-by-side buttons

Desktop (> 1024px):
  - Multi-column grids
  - Full font sizes
  - Maximum padding
  - Horizontal layouts
```

---

## Grid Systems

### Services Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 30px;
```

### Doctors Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 30px;
```

### Contact Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 30px;
```

### Form Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 25px;

/* Mobile */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
```

---

## Accessibility

### Focus States
```css
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 3px;
}
```

### Color Contrast
```
Text on White:
  - #1a1a1a (21:1) ✅ AAA
  - #666666 (5.74:1) ✅ AA
  - #0066cc (4.54:1) ✅ AA

White on Blue (#0066cc):
  - #ffffff (4.54:1) ✅ AA
```

### ARIA Labels
```html
<button aria-label="Scroll to top">↑</button>
<nav aria-label="Main navigation">...</nav>
<section aria-labelledby="services-title">...</section>
```

---

## Best Practices

### CSS Organization
1. Global styles in `index.css`
2. Component styles in separate files
3. Use consistent naming (BEM-like)
4. Group related properties
5. Comment complex sections

### Performance
1. Use CSS transforms for animations
2. Avoid animating layout properties
3. Use will-change sparingly
4. Optimize images
5. Minimize CSS file size

### Maintainability
1. Use CSS custom properties
2. Keep specificity low
3. Avoid !important
4. Document complex styles
5. Follow consistent patterns

---

## Component Patterns

### Section Structure
```html
<section id="section-name" class="section-name">
  <div class="section-container">
    <div class="section-header">
      <h2 class="section-title">Title</h2>
      <p class="section-subtitle">Subtitle</p>
    </div>
    <div class="section-content">
      <!-- Content -->
    </div>
  </div>
</section>
```

### Card Structure
```html
<div class="card">
  <div class="card-icon">Icon</div>
  <h3 class="card-title">Title</h3>
  <p class="card-description">Description</p>
  <button class="card-button">Action</button>
</div>
```

---

## Usage Examples

### Creating a New Section
```jsx
// Component
const NewSection = () => {
  return (
    <section id="new-section" className="new-section">
      <div className="new-section-container">
        <div className="section-header">
          <h2 className="section-title">Section Title</h2>
          <p className="section-subtitle">Section description</p>
        </div>
        {/* Content */}
      </div>
    </section>
  );
};

// CSS
.new-section {
  padding: 100px 2rem;
  background: #ffffff;
}

.new-section-container {
  max-width: 1200px;
  margin: 0 auto;
}
```

### Adding a New Button Style
```css
.btn-custom {
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  color: white;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
}
```

---

**Design System Version:** 2.0  
**Last Updated:** February 19, 2026  
**Status:** ✅ Production Ready
