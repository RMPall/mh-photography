# 7 Shades

Website for 7 Shades, the photography and filmmaking studio founded by Mahesh Padmanabhan,
based in London. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimal design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🖼️ Image slider on homepage
- 📧 Contact form
- 🎯 Portfolio with category filtering
- ♿ Accessible and SEO-friendly

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Photos

Place your images in the following directories:

- `public/images/hero/` - Homepage slider images (name them slide-1.jpg, slide-2.jpg, slide-3.jpg)
- `public/images/portfolio/` - Portfolio page images
- `public/images/about/` - About page image

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mh-photography/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer
├── public/               # Static files
│   └── images/           # Image assets
└── README.md             # This file
```

## Customization

### Colors

Edit `app/globals.css` to change the color scheme.

### Content

- **Homepage**: Edit `app/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`
- **Portfolio**: Edit `app/portfolio/page.tsx`

### Navigation

Edit the `navLinks` array in `components/Header.tsx` to modify navigation items.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Support

For questions or issues, contact: hello@7shades.photography

---

Built with ❤️ for 7 Shades
