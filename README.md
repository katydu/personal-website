# Min Ting Tu - Personal Portfolio

A modern, responsive, and interactive personal portfolio website built with Next.js, Tailwind CSS, and GSAP. This project showcases my work, skills, and experience as a Master of Computer Science student specializing in DevOps and Software Security.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** Custom SVG Icons

## ✨ Features

- **Responsive Design:** Fully responsive layout that adapts to mobile, tablet, and desktop screens.
- **Interactive UI:** Smooth scrolling, hover effects, and micro-interactions.
- **Animations:**
  - GSAP ScrollTrigger for reveal animations on scroll.
  - Custom Particle Background effect.
  - VS Code-style typing animation.
- **Modular Architecture:** Component-based structure for easy maintenance and scalability.
- **Data-Driven:** Content is separated from presentation, making it easy to update via `src/data/portfolioData.ts`.

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/personal-website.git
   cd personal-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## 📂 Project Structure

```
src/
├── app/                # Next.js App Router pages and layout
├── components/         # Reusable React components
│   ├── icons/          # SVG Icon components
│   └── ui/             # UI components (Header, ParticleBackground, etc.)
├── data/               # Static data files (portfolio content)
└── styles/             # Global styles
```

## 📝 Customization

To customize the content of the portfolio (skills, experience, projects, etc.), navigate to `src/data/portfolioData.ts` and update the exported constants.

## 🎨 Design Inspiration

The design is inspired by the "Brittany Chiang" aesthetic, featuring a dark navy background, teal accents, and a clean, monospaced font hierarchy.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
