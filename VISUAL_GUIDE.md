# 🎨 Visual Design Guide - Premium Healthcare Website

## Color Palette

### Primary Colors
```
🔵 Primary Blue:     #2563eb  ████████
🔷 Primary Dark:     #1e40af  ████████
💙 Accent Blue:      #60a5fa  ████████
💜 Secondary Purple: #8b5cf6  ████████
```

### Neutral Colors
```
⚫ Text Dark:    #1a1a2e  ████████
⚪ Text Medium:  #4b5563  ████████
◽ Text Light:   #9ca3af  ████████
⬜ White:        #ffffff  ████████
🔲 BG Light:     #f9fafb  ████████
```

---

## Typography Scale

```
Hero Title:        4rem (64px)    - Ultra Bold (800)
Section Title:     3.25rem (52px) - Bold (800)
Card Title:        1.75rem (28px) - Bold (700)
Subtitle:          1.25rem (20px) - Regular (400)
Body Text:         1.0625rem (17px) - Regular (400)
```

---

## Spacing System

```
Section Padding:   120px (Desktop) / 100px (Mobile)
Card Padding:      48px (Desktop) / 40px (Mobile)
Element Gap:       32px (Desktop) / 28px (Mobile)
Button Padding:    18px 40px
Input Padding:     16px 20px
```

---

## Border Radius

```
Small:    12px  (Buttons, Inputs)
Medium:   24px  (Cards, Sections)
Large:    32px  (Forms, Modals)
Circle:   50%   (Avatars, Icons)
```

---

## Shadow Levels

```
Level 1 (Resting):
  0 4px 20px rgba(0, 0, 0, 0.06)

Level 2 (Hover):
  0 20px 60px rgba(37, 99, 235, 0.15)

Level 3 (Active):
  0 30px 80px rgba(0, 0, 0, 0.25)

Button Shadow:
  0 10px 30px rgba(37, 99, 235, 0.4)
```

---

## Component Styles

### Hero Section
```
Background: Gradient (light blue to white)
Title: 4rem, gradient text effect
Subtitle: 1.375rem, medium gray
Image: 520px height, 3D perspective
Buttons: Gradient with shine effect
Animation: Slide in from sides
```

### Service Cards
```
Background: White
Padding: 48px 36px
Border Radius: 24px
Shadow: Soft, increases on hover
Icon: 5rem, drop shadow
Hover: Lift 12px, scale slightly
Animation: Staggered fade-in
```

### Doctor Cards
```
Background: White
Avatar: 140px, gradient circle
Border Radius: 24px
Shadow: Premium multi-layer
Button: Full width, gradient
Hover: Lift + scale, pulse avatar
Animation: Staggered entrance
```

### Appointment Form
```
Background: Glassmorphism (98% white, blur)
Border Radius: 32px
Inputs: 16px padding, focus lift
Button: Gradient with shine
Success: Scale-in animation
Shadow: Deep, dramatic
```

---

## Animation Timing

```
Fast:       0.2s - Micro-interactions
Standard:   0.4s - Most interactions
Slow:       0.8s - Entrance animations
Ambient:    3-8s - Background effects
```

---

## Hover Effects

### Cards
```
Transform: translateY(-12px) scale(1.02)
Shadow: Intensify
Border: Color transition
Duration: 0.4s cubic-bezier
```

### Buttons
```
Transform: translateY(-4px)
Shadow: Enhance
Background: Gradient invert
Shine: Sweep across
Duration: 0.4s
```

### Icons
```
Transform: scale(1.15) rotate(5deg)
Filter: Drop shadow enhance
Duration: 0.4s
```

---

## Gradient Patterns

### Background Gradients
```
Hero:        135deg, #eff6ff → #dbeafe → #ffffff
Services:    180deg, #ffffff → #f9fafb
Doctors:     180deg, #f9fafb → #ffffff
Appointment: 135deg, #2563eb → #8b5cf6
Footer:      135deg, #0f172a → #1e293b
```

### Button Gradients
```
Primary:     135deg, #2563eb → #1e40af
Hover:       135deg, #1e40af → #2563eb (inverted)
```

### Text Gradients
```
Logo:        135deg, #2563eb → #8b5cf6
Title:       135deg, #1a1a2e → #2563eb
```

---

## Responsive Breakpoints

### Desktop (> 768px)
```
Container: 1280px max-width
Columns: 2-4 columns
Font: Full size
Padding: 120px sections
Animations: Full effects
```

### Mobile (≤ 768px)
```
Container: Full width
Columns: 1 column
Font: 0.8x size
Padding: 100px sections
Animations: Simplified
```

---

## Icon Sizes

```
Logo:           2.25rem (36px)
Hero:           12rem (192px)
Service:        5rem (80px)
Doctor Avatar:  4.5rem (72px)
Contact:        4rem (64px)
Button:         1.125rem (18px)
```

---

## Interactive States

### Default
```
Opacity: 1
Transform: none
Shadow: Base level
```

### Hover
```
Opacity: 1
Transform: translateY(-4px to -12px)
Shadow: Enhanced
Cursor: pointer
```

### Active/Focus
```
Opacity: 1
Transform: Slightly reduced
Shadow: Maintained
Outline: Blue ring (focus)
```

### Disabled
```
Opacity: 0.5
Transform: none
Shadow: none
Cursor: not-allowed
```

---

## Layout Grid

### Services Grid
```
Columns: repeat(auto-fit, minmax(340px, 1fr))
Gap: 32px
```

### Doctors Grid
```
Columns: repeat(auto-fit, minmax(300px, 1fr))
Gap: 36px
```

### Contact Grid
```
Columns: repeat(auto-fit, minmax(300px, 1fr))
Gap: 32px
```

### Form Grid
```
Columns: 1fr 1fr (Desktop) / 1fr (Mobile)
Gap: 28px
```

---

## Special Effects

### Glassmorphism
```
Background: rgba(255, 255, 255, 0.95-0.98)
Backdrop Filter: blur(20px)
Border: 1px solid rgba(255, 255, 255, 0.2)
```

### Floating Animation
```
Keyframes: translateY(0) → translateY(-20px) → translateY(0)
Duration: 6-8s
Easing: ease-in-out
Iteration: infinite
```

### Shimmer Effect
```
Background: Linear gradient with transparency
Animation: Horizontal sweep
Duration: 3s
Iteration: infinite
```

### Pulse Effect
```
Keyframes: scale(1) → scale(1.05) → scale(1)
Duration: 2s
Easing: ease-in-out
Iteration: infinite
```

---

## Accessibility

### Focus States
```
Outline: 2-3px solid #2563eb
Outline Offset: 2-3px
Box Shadow: 0 0 0 4px rgba(37, 99, 235, 0.1)
```

### Color Contrast
```
Text on White: #1a1a2e (21:1) ✅ AAA
Text on Blue: #ffffff (4.5:1) ✅ AA
Links: #2563eb (4.5:1) ✅ AA
```

### Touch Targets
```
Minimum: 44px × 44px
Buttons: 54-60px height
Links: 44px minimum
```

---

## Performance Tips

### Use Transform
```
✅ transform: translateY()
✅ transform: scale()
❌ top, left, margin
```

### Use Opacity
```
✅ opacity: 0 to 1
❌ visibility: hidden to visible
```

### Hardware Acceleration
```
✅ transform: translateZ(0)
✅ will-change: transform
❌ Overuse will-change
```

---

## Quick Reference

### Premium Card
```css
background: white;
padding: 48px 36px;
border-radius: 24px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
border: 1px solid rgba(37, 99, 235, 0.08);
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Premium Button
```css
padding: 18px 40px;
background: linear-gradient(135deg, #2563eb, #1e40af);
color: white;
border-radius: 12px;
box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Premium Input
```css
padding: 16px 20px;
border: 2px solid #e5e7eb;
border-radius: 12px;
background: white;
transition: all 0.3s ease;
```

---

## Design Checklist

- [x] Consistent color palette
- [x] Clear typography hierarchy
- [x] Generous spacing
- [x] Smooth animations
- [x] Premium shadows
- [x] Rounded corners
- [x] Gradient accents
- [x] Hover feedback
- [x] Focus states
- [x] Mobile responsive
- [x] Performance optimized
- [x] Accessibility considered

---

**Use this guide to maintain design consistency across the website!** 🎨
