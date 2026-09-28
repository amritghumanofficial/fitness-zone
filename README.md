
<div align="center">

# 🏋️ Fitness Zone

### Modern Gym & Fitness Website

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222?style=flat-square&logo=github)](https://amritghumanofficial.github.io/fitness-zone/)

<p align="center">
  <a href="https://amritghumanofficial.github.io/fitness-zone/">🚀 Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a>
</p>

<img src="https://img.shields.io/badge/Responsive-Yes-success?style=flat-square" />
<img src="https://img.shields.io/badge/Mobile--First-Yes-blue?style=flat-square" />
<img src="https://img.shields.io/badge/Dark%20Theme-Yes-121214?style=flat-square" />

</div>

---

## 📸 Preview

<div align="center">
  <table>
    <tr>
      <td><b>🖥️ Desktop</b></td>
      <td><b>📱 Mobile</b></td>
    </tr>
    <tr>
      <td><img src="./src/assets/images/hero-bg.jpeg" width="400" alt="Desktop Preview"/></td>
      <td><img src="./src/assets/images/hero-bg.jpeg" width="150" alt="Mobile Preview"/></td>
    </tr>
  </table>
</div>

---

## ✨ Features

<details open>
<summary><b>🏠 Core Pages</b></summary>

| Page | Description |
|------|-------------|
| **Home** | Hero, Features, Classes, Testimonials, FAQ, CTA |
| **About** | Gym story, mission, statistics |
| **Classes** | 8+ fitness programs with filtering |
| **Trainers** | Expert trainer profiles with social links |
| **Pricing** | Membership plans with comparison table |
| **BMI Calculator** | Interactive body mass index calculator |
| **Contact** | Full-featured contact form with validation |
| **Gallery** | Responsive image grid with hover effects |

</details>

<details>
<summary><b>🎨 Design Highlights</b></summary>

- 🌙 Modern dark theme (`#121214` background)
- 🔴 Red/Orange accents (`#ff4d4d`, `#ff6347`)
- 📱 Fully responsive (320px to 4K)
- ⚡ Smooth animations & transitions
- 🎯 Mobile-first CSS Grid & Flexbox

</details>

<details>
<summary><b>⚙️ Key Components</b></summary>

```
Navbar | HeroSection | FeatureCard | ClassCard | TrainerCard
PricingCard | GalleryGrid | TestimonialCard | BMICalculator
ContactForm | FAQ | StatsCounter | Footer | ScrollToTop
```

</details>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![JS](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) Flexbox • Grid • Media Queries |
| **Routing** | ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white) |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) |
| **Deploy** | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github&logoColor=white) |

</div>

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm / yarn

### Installation

```bash
# Clone repository
git clone https://github.com/amritghumanofficial/fitness-zone.git

# Navigate to project
cd fitness-zone

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build & Deploy

```bash
# Production build
npm run build

# Preview build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

> 🔗 **Live Site:** [https://amritghumanofficial.github.io/fitness-zone/](https://amritghumanofficial.github.io/fitness-zone/)

---

## 📁 Project Structure

```
fitness-zone/
├── 📂 public/              # Static assets
├── 📂 src/
│   ├── 📂 assets/images/   # Images (hero, classes, gallery)
│   ├── 📂 components/      # 18 reusable React components
│   ├── 📂 pages/           # 7 page components
│   ├── 📂 styles/          # CSS files per component
│   ├── 📂 data/            # Static data (classes, gallery)
│   ├── App.jsx             # Main app with routing
│   └── main.jsx            # Entry point
├── 📄 package.json
└── 📄 README.md
```

---

## 🎨 Color Palette

<div align="center">

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#121214` | Main background |
| Card | `#1a1a1a` | Card backgrounds |
| Secondary | `#292929` | Borders, dividers |
| **Primary** | `#ff4d4d` | Buttons, accents |
| **Accent** | `#ff6347` | Hover states, highlights |
| Text | `#ffffff` | Primary text |
| Muted | `#bdbdbd` | Secondary text |

</div>

---

## 📱 Responsive Breakpoints

| Device | Width | Status |
|--------|-------|--------|
| 📱 Mobile S | 320px | ✅ Optimized |
| 📱 Mobile M | 375px | ✅ Optimized |
| 📱 Mobile L | 425px | ✅ Optimized |
| 📱 Tablet | 768px | ✅ Optimized |
| 💻 Laptop | 1024px | ✅ Optimized |
| 🖥️ Desktop | 1440px+ | ✅ Optimized |

---

## 🗺️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Landing page |
| `/about` | `AboutPage` | About gym |
| `/classes` | `ClassesPage` | Fitness classes |
| `/trainers` | `TrainersPage` | Trainer profiles |
| `/pricing` | `PricingPage` | Membership plans |
| `/bmi-calculator` | `BMIPage` | BMI tool |
| `/contact` | `ContactPage` | Contact form |

---

## 🔮 Future Roadmap

- [ ] User authentication & member dashboard
- [ ] Online class booking system
- [ ] Payment integration
- [ ] Workout tracking & nutrition plans
- [ ] Dark/Light theme toggle
- [ ] Admin dashboard

---

## 👨‍💻 Developer

<div align="center">

**Amrit Ghuman**

[![GitHub](https://img.shields.io/badge/GitHub-@amritghumanofficial-181717?style=flat-square&logo=github)](https://github.com/amritghumanofficial)

</div>

---

<div align="center">

⭐ **Star this repo if you found it helpful!**

**Fitness Zone** — *Train Hard. Stay Strong. Stay Fit.* 💪

</div>
```

---

### 🎯 Key Improvements:

| Feature | Benefit |
|---------|---------|
| **Collapsible Sections** (`<details>`) | README clean dikhta hai, user expand karke padh sakta hai |
| **Badges & Shields** | Professional GitHub look |
| **Tables** | Information organized aur readable |
| **Center Alignment** | Visual appeal badhta hai |
| **Concise Structure** | Sirf important folders dikhaye hain |
| **Color Palette Table** | Design system quickly samajh aa jata hai |
| **Quick Start** | Users turant run kar sakte hain |
