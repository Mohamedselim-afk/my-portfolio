# Mohamed Selim - Senior Flutter Developer Portfolio 🚀

A modern, fully responsive portfolio website showcasing mobile app development projects and expertise in Flutter development.

---

## ✨ Features

### 🎨 Design & UI
- ✅ **Beautiful Modern Design** - Clean, professional interface
- ✅ **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- ✅ **Dark/Light Mode** - Toggle between themes
- ✅ **Smooth Animations** - GSAP-powered transitions
- ✅ **Particle Background** - Interactive animated background
- ✅ **Custom Cursor** - Enhanced cursor on desktop

### 📱 Mobile Optimization
- ✅ **4 Breakpoints** - Optimized for all screen sizes
- ✅ **Touch-Optimized** - 44px minimum touch targets
- ✅ **Hamburger Menu** - Mobile-friendly navigation
- ✅ **Full-Width Buttons** - Easy to tap on mobile
- ✅ **Landscape Support** - Works in all orientations
- ✅ **iOS Optimizations** - Prevents zoom, smooth scroll
- ✅ **No Horizontal Scroll** - Perfect mobile experience

### 📑 Sections
1. **Hero Section** - Introduction with profile image and CTA buttons
2. **Stats Section** - Experience, apps published, downloads, satisfaction
3. **About Section** - Professional background and expertise
4. **Skills Section** - Technical skills with progress bars and architecture patterns
5. **Projects Section** - Featured mobile apps with details
6. **Contact Section** - Contact form and social links

### 🛠️ Technical Features
- ✅ **Typing Animation** - Dynamic role rotation
- ✅ **Counter Animation** - Animated statistics
- ✅ **Scroll Animations** - Sections fade in on scroll
- ✅ **Progress Bar** - Page scroll indicator
- ✅ **Back to Top Button** - Smooth scroll to top
- ✅ **Active Nav Links** - Highlights current section
- ✅ **Form Validation** - Contact form validation
- ✅ **CV Download** - Downloadable resume

---

## 🎯 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables
- **JavaScript (ES6+)** - Interactive functionality

### Libraries
- **GSAP** - Professional animations
- **ScrollTrigger** - Scroll-based animations
- **Particles.js** - Animated background
- **Font Awesome** - Icons
- **Google Fonts** - Inter & Poppins fonts

---

## 📱 Mobile Responsive Breakpoints

```css
Desktop:           1025px+     - Multi-column layouts
Tablet:            768px-1024px - 2-column layouts
Mobile Large:      481px-768px  - Single column, hamburger menu
Mobile Small:      361px-480px  - Optimized single column
Mobile Extra Small: 360px-      - Minimal layout
```

---

## 🚀 Getting Started

### 1. Clone or Download
```bash
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio
```

### 2. Add Your CV
```bash
# Place your CV file here:
assets/documents/Mohamed_Selim_CV.pdf
```

### 3. Open in Browser
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📂 Project Structure

```
my-portfolio/
│
├── index.html                  # Main HTML file
├── styles.css                  # All CSS styles
├── app.js                      # JavaScript functionality
│
├── assets/
│   ├── images/
│   │   ├── profile.png         # Your profile photo
│   │   ├── Mashariq App.png    # Project screenshots
│   │   ├── hajj app.png
│   │   ├── car_wash.png
│   │   ├── Vet Pharmacy.png
│   │   └── mazzraty.png
│   │
│   └── documents/
│       └── Mohamed_Selim_CV.pdf # Your CV file
│
├── README.md                    # Arabic README
├── README_ENGLISH.md            # This file
├── CV_UPLOAD_INSTRUCTIONS.md    # CV upload guide
├── MOBILE_OPTIMIZATION_GUIDE.md # Mobile features explained
├── PORTFOLIO_STATUS.md          # Current status
└── QUICK_MOBILE_TEST.md         # Testing guide
```

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #02569B;    /* Your main color */
    --secondary-color: #55D0FF;   /* Accent color */
    --accent-color: #FF6B35;      /* Highlight color */
}
```

### Update Content
Edit `index.html` sections:
- Personal information
- About text
- Skills and percentages
- Project details
- Contact information

### Add/Remove Projects
Find the `#projects` section in `index.html` and add/remove project cards.

---

## 📱 Testing on Mobile

### Method 1: Browser DevTools
1. Open `index.html` in Chrome
2. Press **F12**
3. Click **device toggle** (📱 icon)
4. Select device: iPhone 14 Pro, iPad, etc.

### Method 2: Real Device
1. Start local server: `python -m http.server 8000`
2. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac)
3. On phone: visit `http://YOUR_IP:8000`

See **QUICK_MOBILE_TEST.md** for detailed testing guide.

---

## 🌐 Deployment

### GitHub Pages (Free & Easy)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Click **Pages** in sidebar
   - Source: Select **main** branch
   - Click **Save**

3. **Your Site is Live!**
   ```
   https://YOUR_USERNAME.github.io/my-portfolio/
   ```

### Other Hosting Options
- **Netlify** - Drag & drop deployment
- **Vercel** - Git integration
- **Firebase Hosting** - Google's hosting
- **Traditional Web Hosting** - Upload via FTP

---

## 📊 Features Checklist

### Design
- [x] Modern, clean interface
- [x] Dark/Light mode toggle
- [x] Smooth animations
- [x] Interactive elements
- [x] Professional typography

### Sections
- [x] Hero with profile
- [x] Statistics counter
- [x] About section
- [x] Skills with progress bars
- [x] Projects showcase
- [x] Contact form
- [x] Footer with links

### Mobile
- [x] Fully responsive
- [x] Hamburger menu
- [x] Touch-optimized
- [x] Fast loading
- [x] Landscape support

### Functionality
- [x] Smooth scroll
- [x] Active nav links
- [x] Back to top button
- [x] Form validation
- [x] CV download
- [x] Social links
- [x] Progress bar

---

## 🎯 Projects Showcased

1. **Mashariq App** - Hajj management application (5K+ downloads)
2. **Hajj App** - Comprehensive Hajj app (8K+ downloads)
3. **Car Wash App** - Service management solution (3K+ downloads)
4. **Vet Pharmacy** - Veterinary clinic management (2K+ downloads)
5. **Mazra3ty App** - Agricultural management (4K+ downloads)

---

## 💼 Skills Highlighted

### Mobile Development
- Flutter (95%)
- Dart (95%)
- Android (70%)
- iOS (85%)

### Backend & Tools
- Firebase (95%)
- REST APIs (98%)
- Git (90%)
- Figma (80%)

### Architecture
- BLoC Pattern
- MVVM
- Clean Architecture
- Provider, Riverpod, GetX

---

## 📈 Performance

- ✅ **Fast Loading** - Optimized CSS and JS
- ✅ **Smooth Animations** - 60 FPS transitions
- ✅ **Mobile Optimized** - Touch-friendly interactions
- ✅ **SEO Friendly** - Semantic HTML
- ✅ **Accessible** - WCAG guidelines

---

## 🐛 Troubleshooting

### Mobile menu not working?
- Make sure JavaScript is enabled
- Click the hamburger icon (☰) in top-right
- Clear browser cache and reload

### CV download not working?
- Place your CV file in: `assets/documents/Mohamed_Selim_CV.pdf`
- Make sure filename matches exactly

### Sections not showing?
- Check browser console (F12) for errors
- Verify all files are in correct locations
- Make sure all images exist in `assets/images/`

### Text too small on mobile?
- This is normal in desktop browser
- Test on real device or use DevTools device mode
- Should be perfectly readable on actual phones

---

## 📞 Contact

- **Email:** mohamedselemdev@gmail.com
- **LinkedIn:** [Mohamed Selim](https://www.linkedin.com/in/mohamed-selim-dev)
- **GitHub:** [@Mohamedselim-afk](https://github.com/Mohamedselim-afk)

---

## 📝 License

This project is open source. Feel free to use and modify as needed.

---

## 🎉 Credits

- **Developer:** Mohamed Selim
- **Design:** Modern portfolio design
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Inter, Poppins)
- **Animations:** GSAP
- **Particles:** Particles.js

---

## 🚀 What's Next?

1. ✅ Add your CV file
2. ✅ Test on mobile devices
3. ✅ Deploy to GitHub Pages
4. ✅ Share on social media
5. ✅ Add to your resume

---

## 📚 Documentation

- **CV_UPLOAD_INSTRUCTIONS.md** - How to add your CV
- **MOBILE_OPTIMIZATION_GUIDE.md** - All mobile features explained
- **QUICK_MOBILE_TEST.md** - Fast testing guide
- **PORTFOLIO_STATUS.md** - Current status and what's included

---

## ⭐ Show Your Support

If you like this portfolio:
- Give it a ⭐ on GitHub
- Share with your network
- Customize and make it yours!

---

**Built with ❤️ by Mohamed Selim**

*Last Updated: October 2025*

