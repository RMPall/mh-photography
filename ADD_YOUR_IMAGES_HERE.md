# How to Add Your Images

## Step 1: Prepare Your Images

The website uses placeholder icons where images should be. To add your actual photos:

### Image Requirements:
- **Format**: JPG or PNG
- **Quality**: High resolution (at least 1920px wide for best results)
- **File Size**: Optimized for web (under 2MB per image recommended)

## Step 2: Add Images to Directories

### Homepage Slider Images
Place 3 images in: `public/images/hero/`

Name them exactly:
- `slide-1.jpg`
- `slide-2.jpg`
- `slide-3.jpg`

### Portfolio Images
Add your portfolio images to: `public/images/portfolio/`

**Naming Convention:** `category-number.jpg`
- Family photos: `family-1.jpg`, `family-2.jpg`, `family-3.jpg`, etc.
- Portraits: `portraits-1.jpg`, `portraits-2.jpg`, `portraits-3.jpg`, etc.
- Events: `event-1.jpg`, `event-2.jpg`, `event-3.jpg`, etc. (note: singular "event", not "events")
- Street photography: `street-1.jpg`, `street-2.jpg`, `street-3.jpg`, etc.

**Important:** After adding your images, update the `images` array in `app/portfolio/page.tsx` to match your actual filenames. The code currently expects 12 images (3 per category), but you can add or remove entries as needed.

### About Page Image
Add your photographer portrait to: `public/images/about/`

Name it: `photographer.jpg`

## Step 3: Update the Code (if needed)

After adding images, you may want to update the image paths in:

1. **Homepage** (`app/page.tsx`):
   - The slider already looks for images in `/images/hero/slide-1.jpg`, etc.
   
2. **Portfolio** (`app/portfolio/page.tsx`):
   - Update the `images` array to reference your actual image files

3. **About** (`app/about/page.tsx`):
   - Update the image source to `/images/about/photographer.jpg`

## Quick Start

1. Drag and drop the beautiful photos you shared into these folders:
   - Use the family photos for the portfolio
   - Use a nice portrait photo for the about page
   - Select 3 best photos for the homepage slider

2. Restart the development server:
   ```bash
   npm run dev
   ```

3. Refresh your browser at http://localhost:3000

Your images will now appear on the website!

## Need Help?

If you encounter any issues adding images, the placeholder icons will remain visible until the actual image files are added with the correct names in the correct directories.

