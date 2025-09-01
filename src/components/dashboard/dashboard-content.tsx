'use client'

import { DollarSign, Users, TrendingUp, PiggyBank } from 'lucide-react'
import { KPICard } from './kpi-card'
import { RevenueChart } from '../charts/revenue-chart'
import { CategoriesChart } from '../charts/categories-chart'
import { RegionsChart } from '../charts/regions-chart'
import dashboardData from '@/data/dashboard-data.json'

export function DashboardContent() {
  const { kpis } = dashboardData

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`
    }
    return value.toString()
  }

  const kpiCards = [
    {
      title: 'Total Revenue',
      value: formatCurrency(kpis.revenue),
      change: '12.5%',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Active Users',
      value: formatNumber(kpis.users),
      change: '8.2%',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Growth Rate',
      value: `${kpis.growth}%`,
      change: '2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
    },
    {
      title: 'Total Profit',
      value: formatCurrency(kpis.profit),
      change: '15.3%',
      changeType: 'positive' as const,
      icon: PiggyBank,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, index) => (
          <KPICard key={index} {...card} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <RegionsChart />
        </div>
        <div className="lg:col-span-2 xl:col-span-3">
          <CategoriesChart />
        </div>
      </div>
    </div>
  )
}