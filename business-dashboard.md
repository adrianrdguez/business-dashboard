# Business Insights Dashboard - Development Guide

You are an expert full-stack developer specializing in modern React applications. Help me build a **Business Insights Dashboard** that showcases enterprise-level data visualization and user experience.

## 🎯 Project Overview
**Goal:** Create a production-ready dashboard for a portfolio that demonstrates advanced frontend skills
**Timeline:** Iterative development with MVP first, then enhancements

## 🛠 Tech Stack (Required)
- **Framework:** Next.js 14 with App Router
- **Styling:** TailwindCSS + shadcn/ui components  
- **Charts:** Recharts (preferred) or Chart.js
- **State:** React hooks + Context API
- **Data:** JSON files in `/data` directory
- **Icons:** Lucide React

## 🛠 Tech Stack (Optional - Phase 2)
- **Maps:** Mapbox GL JS for geographic data
- **Animations:** Framer Motion for smooth transitions
- **AI:** OpenAI API for data insights generation
- **Backend:** JSON Server for API simulation

## 📋 Core Features (Priority Order)

### Phase 1 - Foundation (Implement First)
1. **Layout & Navigation**
   - Responsive sidebar: Dashboard, Analytics, Customers, Settings
   - Top header with user profile and theme toggle
   - Mobile-first responsive design

2. **Dashboard Overview**
   - 4 KPI cards: Revenue ($2.4M), Users (12.5K), Growth (+15%), Profit ($890K)
   - Grid layout that adapts to screen size
   - Loading states and smooth transitions

3. **Data Visualization**
   - Line chart: Monthly revenue trend (last 12 months)
   - Bar chart: Top 5 product categories performance
   - Donut chart: Customer distribution by region

### Phase 2 - Enhanced Features
4. **Interactive Controls**
   - Date range picker (last 7d, 30d, 90d, custom)
   - Region filter dropdown
   - Export data functionality

5. **Advanced Components**
   - Interactive map with location markers
   - AI insights panel (right sidebar)
   - Real-time data updates simulation

## 🎨 Design Requirements
- **Theme:** Dark mode by default, light mode toggle
- **Style:** Clean, minimal, glass morphism elements
- **Typography:** Inter font, clear hierarchy
- **Colors:** Professional blue/gray palette
- **Responsiveness:** Mobile (320px+), Tablet (768px+), Desktop (1024px+)

## 📦 Project Structure
```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── charts/         # Chart components
│   ├── layout/         # Layout components
│   └── dashboard/      # Dashboard-specific components
├── data/               # JSON data files
├── lib/                # Utilities and helpers
├── hooks/              # Custom React hooks
└── types/              # TypeScript definitions
```

## 📊 Sample Data Structure
```json
{
  "kpis": {
    "revenue": 2400000,
    "users": 12500,
    "growth": 15.2,
    "profit": 890000
  },
  "salesData": [
    {"month": "Jan", "revenue": 180000, "target": 200000},
    // ... 12 months
  ],
  "regions": [
    {"name": "North America", "value": 45, "customers": 5600},
    // ... other regions
  ]
}
```

## 🚀 Implementation Guidelines

### Code Quality Standards
- **Components:** Functional components with TypeScript
- **Styling:** Utility-first with custom CSS variables
- **Performance:** Lazy loading, code splitting, memoization
- **Accessibility:** ARIA labels, keyboard navigation, color contrast

### Development Approach
1. Start with basic layout and navigation
2. Implement static dashboard with dummy data
3. Add interactivity and filters
4. Enhance with animations and polish
5. Optional: Integrate external APIs

### File Naming & Organization
- Use kebab-case for files: `revenue-chart.tsx`
- Group related components in folders
- Separate business logic from UI components
- Clear, descriptive component names

## 🔧 Setup Requirements
- **Package Manager:** pnpm (preferred)
- **Node Version:** 18.17+
- **Environment:** `.env.local` for API keys
- **Scripts:** Standard Next.js commands

## 📝 Deliverables
1. **Working Application:** Ready to run with `pnpm dev`
2. **Documentation:** README with setup instructions
3. **Component Library:** Reusable, documented components
4. **Sample Data:** Realistic business metrics in JSON
5. **Responsive Design:** Works perfectly on all devices

## 🎯 Success Criteria
- Clean, maintainable code with proper TypeScript
- Smooth user experience with loading states
- Professional design that impresses potential employers
- Modular architecture for easy feature additions
- Performance optimized (Core Web Vitals green)

---

**Start with:** Project scaffolding, basic layout, and the dashboard page with KPI cards. Focus on getting the foundation solid before adding complex features.