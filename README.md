# Phumzile's Tech Portfolio

# Role & Architecture Specification
You are an expert Senior Next.js Architect. Your task is to build a modern, high-performance, responsive portfolio website for Phumzile Nokwazi Moeketsi, a Computer Systems Engineering student seeking a 12-month Work-Integrated Learning (WIL) placement.

## Technical Tech Stack Requirements
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (Strict mode)
- Styling: Tailwind CSS
- Component Library: Shadcn UI (Radix UI primitives)
- Animations: Framer Motion (subtle, high-performance entrance animations)
- Icons: Lucide React
- Form Handling: React Hook Form + Zod (validation)
- Deployment Target: Vercel

## Styling & Theme Guidelines
- Dark Mode Default: Deep charcoal (#0B0F17) with sleek slate blue/cyan accents (#0EA5E9) to convey a systems engineering aesthetic.
- Typography: Inter or Geist Sans for body, Geist Mono or JetBrains Mono for code blocks/technical highlights.
- Visual FX: Glassmorphism cards (`backdrop-blur-md bg-white/5 border border-white/10`), subtle neon grid backgrounds, high scannability.

---

## Candidate Profile & Resume Context
- Name: Phumzile Nokwazi Moeketsi
- Role Title: Computer Systems Engineer | Full-Stack & Embedded Developer
- Status: Completed theoretical modules for Diploma in Computer Systems Engineering (Tshwane University of Technology)
- Goal: Seeking 12-Month Work-Integrated Learning (WIL) Internship
- Contact: lwarrhmoeketsi@gmail.com | 0799557151 | Pretoria, South Africa
- Core Engineering Skills: C++, SQL, Networking Fundamentals, Cisco Routing & Switching, Digital Process Control, System Troubleshooting
- Languages: English, IsiZulu, Setswana

---

## Page Layout & Section Breakdown

### 1. Hero Section
- Dynamic Headline: "Engineering Scalable Systems & Modern Web Infrastructure."
- Sub-headline: "Computer Systems Engineering student specializing in C++, SQL, Networking, and Full-Stack Development. Seeking a 12-Month Work-Integrated Learning (WIL) placement."
- Key CTAs: 
  - Primary: "View Technical Projects" (Smooth scroll to projects)
  - Secondary: "Contact Me" (Opens dynamic contact form or dynamic modal)
- Badges: `Status: Available for 12-Month WIL` (Pulsing green indicator dot).

### 2. Engineering Competencies (Interactive Grid)
Organize technical skills into distinct, interactive category cards:
- Systems & Low-Level: C++, Digital Process Control, Hardware Troubleshooting
- Databases & Backend: SQL (Relational Design, Optimization), Database Management Systems
- Networking & Infrastructure: Cisco Routing & Switching, Network Fundamentals, TCP/IP, OSI Model
- Web & Modern Tech: Next.js, React, TypeScript, Tailwind CSS, REST APIs

### 3. Featured Showcase Projects (Engineering & Web Focused)
Create 3 high-impact project case studies with modern UI cards including direct links to architecture modal/code overview:

1. Project 1: "Relational Database Management & SQL Optimizer"
   - Category: Systems / Database Engineering
   - Tech: SQL, C++, Relational Architecture
   - Description: Designed and implemented a structured relational database schema for high-throughput query execution, optimizing data retrieval speeds and data integrity.

2. Project 2: "Network Traffic & Routing Simulator"
   - Category: Cisco & Infrastructure
   - Tech: Cisco Packet Tracer, C++, Networking Protocols (TCP/IP)
   - Description: Simulated enterprise routing and switching environments with sub-netting, VLAN configuration, and packet inspection protocols.

3. Project 3: "Full-Stack Industrial IoT Dashboard"
   - Category: Systems & Web Integration
   - Tech: Next.js, TypeScript, SQL, Tailwind CSS, Chart.js
   - Description: A real-time monitoring dashboard designed for digital process control, visualization of hardware metrics, and fault alerts.

### 4. Interactive Terminal / System Metrics Widget
- Build a lightweight React component mimicking a command-line interface (CLI) or terminal window.
- Allows users/recruiters to type commands like `help`, `skills`, `education`, `contact`, or `clear` to interactively view candidate profile data.

### 5. Education & Academic Background
- Diploma in Computer System Engineering – Tshwane University of Technology (Expected Graduation: 2027)
- Key Modules Passed: Databases (SQL), Network Systems, Digital Process Control, Probability and Statistics.

### 6. Contact & Internship Request Section
- Form Fields: Name, Recruiter/Company Name, Email, Subject, Message.
- Validation: Zod schema ensuring valid email and minimum text lengths.
- Include direct contact chips: Email, Phone, Location (Pretoria).

---

## Engineering Implementation Details
1. Clean Architecture: Modularize components (`/components/sections`, `/components/ui`, `/lib`, `/types`).
2. Accessibility & SEO: Include proper OpenGraph metadata, semantically structured HTML tags (`

`, ``, `

`, `

`), and ARIA labels.
3. Mobile Responsiveness: Mobile-first responsive design; seamless navigation drawer on mobile.

Please initialize the Next.js project structure, set up the layout, components, and design system based on these specifications.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6891f270-aa13-49cf-bc54-ac6e7d990ef0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
