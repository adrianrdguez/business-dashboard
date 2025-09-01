'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import dashboardData from '@/data/dashboard-data.json'

const COLORS = [
  'hsl(var(--primary))',
  'hsl(217.2 91.2% 69.8%)',
  'hsl(217.2 91.2% 79.8%)',
  'hsl(217.2 91.2% 89.8%)',
  'hsl(var(--muted-foreground))',
]

export function CategoriesChart() {
  const { categories } = dashboardData

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-foreground font-medium">{label}</p>
          <p className="text-sm text-muted-foreground">
            Revenue: {formatCurrency(data.revenue)}
          </p>
          <p className="text-sm text-green-500">
            Growth: +{data.growth}%
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Top Product Categories</h3>
        <p className="text-sm text-muted-foreground">Revenue performance by category</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={categories}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="name" 
              className="text-muted-foreground"
              tick={{ fontSize: 12, fill: 'currentColor' }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              className="text-muted-foreground"
              tick={{ fontSize: 12, fill: 'currentColor' }}
              tickFormatter={(value) => `$${value/1000}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="revenue" 
              radius={[4, 4, 0, 0]}
            >
              {categories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}