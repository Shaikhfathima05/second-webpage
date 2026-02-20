# Troubleshooting Guide

## Issue: Duplicate Content or Overlapping Sections

If you see duplicate content, overlapping sections, or repeated headings on the page, follow these steps:

### Solution 1: Clear Browser Cache

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
2. Select "Cached images and files"
3. Click "Clear data"
4. Or use Hard Refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

**Firefox:**
1. Press `Ctrl + Shift + Delete`
2. Select "Cache"
3. Click "Clear Now"
4. Or use Hard Refresh: `Ctrl + F5`

### Solution 2: Clear Vite Cache and Rebuild

```bash
# Stop the dev server if running (Ctrl + C)

# Clear cache and rebuild
npm run clean-build

# Or manually:
rm -rf dist node_modules/.vite
npm run build
npm run dev
```

### Solution 3: Force Clean Start

```bash
# Windows PowerShell
Remove-Item -Recurse -Force dist, node_modules\.vite
npm run dev

# Mac/Linux
rm -rf dist node_modules/.vite
npm run dev
```

### Solution 4: Check for Multiple Component Instances

Verify that components are only included once in `src/pages/Home.jsx`:

```jsx
// Should look like this (each component ONCE):
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <Appointment />
      <Contact />
    </>
  );
};
```

### Solution 5: Verify App.jsx Routes

Check `src/App.jsx` to ensure routes are correct:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/doctor/:id" element={<DoctorDetail />} />
</Routes>
```

---

## Issue: Styles Not Updating

### Solution:
1. Stop dev server (`Ctrl + C`)
2. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```
3. Restart dev server:
   ```bash
   npm run dev
   ```
4. Hard refresh browser (`Ctrl + Shift + R`)

---

## Issue: Blank Page

### Solution:
1. Check browser console for errors (F12)
2. Verify all imports in `App.jsx`
3. Check that all CSS files exist
4. Rebuild:
   ```bash
   npm run build
   npm run preview
   ```

---

## Issue: Routes Not Working

### Solution:
1. Verify React Router is installed:
   ```bash
   npm list react-router-dom
   ```
2. If not installed:
   ```bash
   npm install react-router-dom
   ```
3. Check `App.jsx` has `<Router>` wrapper
4. Verify routes are inside `<Routes>` component

---

## Issue: Doctor Detail Page Shows "Not Found"

### Solution:
1. Check doctor ID in URL matches data
2. Verify `src/data/doctorsData.js` has correct IDs (1, 2, 3, 4)
3. Check browser console for errors
4. Verify navigation:
   ```jsx
   navigate(`/doctor/${doctorId}`);
   ```

---

## Issue: Mobile Menu Not Working

### Solution:
1. Check that Navbar.jsx has `useState` for menu toggle
2. Verify CSS has `.navbar-menu.active` styles
3. Check that button has `onClick={toggleMenu}`
4. Test on actual mobile device, not just browser resize

---

## Issue: Appointment Form Not Submitting

### Solution:
1. Check browser console for errors
2. Verify form has `onSubmit={handleSubmit}`
3. Check that `e.preventDefault()` is called
4. Verify all required fields have `required` attribute
5. Check state management in component

---

## Quick Fixes

### Reset Everything:
```bash
# Stop dev server
# Then run:
rm -rf dist node_modules/.vite
npm install
npm run dev
```

### Force Browser Refresh:
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`
- Or: `Ctrl + F5`

### Check for Errors:
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests
4. Check Elements tab for DOM structure

---

## Common Error Messages

### "Cannot find module"
**Solution:** Run `npm install`

### "Port already in use"
**Solution:** 
```bash
# Find and kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

### "React Router not found"
**Solution:**
```bash
npm install react-router-dom
```

### "Vite build failed"
**Solution:**
```bash
rm -rf node_modules/.vite dist
npm run build
```

---

## Prevention Tips

1. **Always hard refresh** after making changes
2. **Clear cache regularly** during development
3. **Stop dev server** before major changes
4. **Check console** for errors immediately
5. **Test in incognito mode** to avoid cache issues

---

## Still Having Issues?

### Debug Checklist:
- [ ] Cleared browser cache
- [ ] Cleared Vite cache
- [ ] Restarted dev server
- [ ] Checked browser console for errors
- [ ] Verified all files exist
- [ ] Checked all imports are correct
- [ ] Tested in incognito mode
- [ ] Tried different browser

### Get More Help:
1. Check browser console (F12) for specific error messages
2. Review component code for typos
3. Verify all dependencies are installed (`npm list`)
4. Check that all CSS files are imported correctly
5. Ensure file names match exactly (case-sensitive)

---

## Development Best Practices

### To Avoid Issues:
1. **Use version control** (Git) to track changes
2. **Test frequently** after each change
3. **Clear cache** when switching branches
4. **Use ESLint** to catch errors early
5. **Check diagnostics** before committing

### Recommended Workflow:
```bash
# 1. Make changes to code
# 2. Save files
# 3. Check browser (auto-reload)
# 4. If issues, hard refresh (Ctrl + Shift + R)
# 5. If still issues, clear cache and restart:
rm -rf node_modules/.vite
npm run dev
```

---

## Quick Command Reference

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean and rebuild
rm -rf dist node_modules/.vite && npm run build

# Reinstall dependencies
rm -rf node_modules && npm install

# Check for errors
npm run lint
```

---

**Last Updated:** February 20, 2026  
**Version:** 1.0
