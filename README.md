> **Role:** You are an expert Frontend Developer specializing in React, Next.js, Tailwind CSS, Framer Motion, and Aceternity UI.
> **Task:** Build a modern, highly interactive, and responsive portfolio website for a Full Stack Web Developer.
> **Design System & Dependencies:**
> * Framework: React / Next.js
> * Styling: Tailwind CSS
> * Component Libraries: shadcn/ui, Aceternity UI
> * Required Aceternity components to install via CLI:
> * `bunx --bun shadcn@latest add @aceternity/glowing-effect-demo-2`
> * `bunx --bun shadcn@latest add @aceternity/comet-card-demo`
> 
> 
> * Theme: Dark mode by default, utilizing a sleek, highly technical aesthetic.
> 
> 
> **Global Background:**
> * Implement a WebGL fluid simulation shader fixed to the background (`z-index: -1`) so colors swirl interactively when the user moves their mouse. Use a lightweight wrapper like `webgl-fluid` or `react-fluid-gallery`.
> * Overlay a subtle Aceternity "Grid and Dot Background" on top of the fluid canvas to give it a structured, technical feel.
> 
> 
> **Section-by-Section Architecture:**
> **1. Navigation & Menus**
> * **Top Navigation:** Create a set of small, grid-based navigation cards ("Me", "Projects", "Skills", "Contact"). Wrap these items using the Aceternity `Glowing Effect` (`@aceternity/glowing-effect-demo-2`) so the glow follows the cursor around the edges of the container.
> * **Global Floating Dock:** Use the Aceternity `Floating Dock` placed at the bottom-center of the screen. Include icons for Home, GitHub, LinkedIn, Email, and a Theme Toggle. Wrap each icon in an `Animated Tooltip` so a text label pops up on hover.
> 
> 
> **2. Hero Section**
> * Use a standard layout from Aceternity's `Hero Sections Free`.
> * Include the profile picture, name, and role.
> * Use the `Text Generate Effect` for the sub-headline summary so the text types out smoothly on page load.
> 
> 
> **3. Skills & Tech Stack**
> * **Primary Stack:** Implement a `Logo Cloud Marquee` directly below the Hero section. This should feature an infinite horizontal scroll of logos representing the core MERN stack, Python, PHP, Next.js, and C++/Java.
> * **Secondary Skills:** Display additional skills (like ML, IoT, Cloud Computing) using the simplest, smallest pill-shaped variations of `Tailwind CSS buttons`.
> 
> 
> **4. Projects Section**
> * **Layout:** Structure the section using Aceternity's `Layout Grid` or `Bento Grid` for an automatic, responsive 2-column design.
> * **Flagship Project:** Feature the primary project ("Chat NCERT") using the `@aceternity/comet-card-demo`. This must stand out with its animated border.
> * **Standard Projects:** Wrap the remaining projects in the `Card Spotlight` component to create a soft flashlight effect that follows the cursor.
> * **Project Links:** Use small, neutral Tailwind CSS buttons for actionable links inside the cards ("Website", "Source", "Report").
> 
> 
> **5. Experience & Education**
> * **Layout:** Do NOT use a timeline. Instead, utilize Aceternity's `Sticky Scroll Reveal` or `Expandable Card` components.
> * Structure the work experience (e.g., CyberDairy Solutions), presentations (e.g., National Seminar PPT), and education as a series of interactive, dynamic blocks that reveal details as the user scrolls or clicks, maintaining a clean aesthetic.
> 
> 
> **Execution Rules:**
> * Provide complete, copy-pasteable code for each major component.
> * Ensure all Framer Motion animations are perfectly synced and do not cause layout shifts.
> * Focus on writing clean, modular components rather than one massive file.
> 
> 