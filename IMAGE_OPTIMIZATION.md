# Image Optimization Guide

## Current Hero Image Status
- **Format:** PNG
- **Size:** ~489KB (720x720px)
- **Location:** `src/assets/hero.png`

## Recommended Optimizations

### Option 1: Convert to WebP (Recommended)
WebP format typically reduces file size by 25-35% while maintaining quality.

**Using online tools:**
- Squoosh.app (https://squoosh.app) - Upload hero.png, select WebP format, adjust quality to 80-90%
- CloudConvert.com - Free conversion tool

**Using command line (if ImageMagick installed):**
```bash
convert src/assets/hero.png -quality 85 src/assets/hero.webp
```

**Then update `src/App.jsx`:**
```jsx
import heroImage from './assets/hero.webp'
```

### Option 2: Optimize PNG
Use tools like:
- TinyPNG.com - Can reduce PNG size by 50-70%
- ImageOptim (Mac app)
- Squoosh.app - Adjust PNG compression

**Target size:** Aim for < 200KB for faster loading

### Option 3: Responsive Images (Advanced)
Create multiple sizes:
- `hero-small.webp` (mobile, ~400px width)
- `hero-medium.webp` (tablet, ~800px width)  
- `hero-large.webp` (desktop, full size)

Then use CSS media queries or `srcset` for optimal loading.

## Expected Results
- **Current:** 489KB PNG
- **Optimized:** ~150-200KB WebP (60% reduction)
- **Load time improvement:** ~0.3-0.5 seconds on slower connections

## Quick Command (if you have sharp or imagemagick)
```bash
# Using sharp (npm install -g sharp-cli)
sharp -i src/assets/hero.png -o src/assets/hero.webp -q 85

# Using ImageMagick
convert src/assets/hero.png -quality 85 -define webp:lossless=false src/assets/hero.webp
```

