# Business Insights Dashboard

A modern, responsive business analytics dashboard built with Next.js 14, featuring enterprise-level data visualization and user experience.

## 🚀 Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Charts**: Revenue trends, category performance, and regional distribution
- **KPI Cards**: Real-time business metrics with growth indicators
- **Modern UI**: Built with TailwindCSS and shadcn/ui components

## 📊 Dashboard Components

- **4 KPI Cards**: Revenue ($2.4M), Users (12.5K), Growth (+15.2%), Profit ($890K)
- **Line Chart**: Monthly revenue trend vs targets (last 12 months)
- **Bar Chart**: Top 5 product categories performance
- **Donut Chart**: Customer distribution by geographic region

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS + Custom CSS Variables
- **Charts**: Recharts
- **Icons**: Lucide React
- **Typography**: Inter font
- **State**: React hooks + Context API

## 🏗 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── ui/             # Base UI components
│   ├── charts/         # Chart components
│   ├── layout/         # Layout components
│   └── dashboard/      # Dashboard-specific components
├── data/               # JSON data files
├── lib/                # Utilities and helpers
├── hooks/              # Custom React hooks
└── types/              # TypeScript definitions
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📱 Responsive Breakpoints

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🎨 Design Features

- **Theme**: Dark mode by default with light mode toggle
- **Style**: Clean, minimal design with glass morphism elements
- **Colors**: Professional blue/gray palette
- **Accessibility**: ARIA labels and proper color contrast

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Sample Data

The dashboard uses realistic sample data including:
- Monthly sales data for 12 months
- Regional customer distribution (North America, Europe, Asia Pacific, Latin America)
- Product category performance (Software, Hardware, Services, Support, Training)
- Key performance indicators with growth metrics

Built for showcasing modern React development skills and enterprise-level dashboard design.