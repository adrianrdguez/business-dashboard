'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import dashboardData from '@/data/dashboard-data.json'

export function RevenueChart() {
  const { salesData } = dashboardData

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
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-foreground font-medium">{`Month: ${label}`}</p>
          {payload.map((item: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: item.color }}>
              {`${item.name}: ${formatCurrency(item.value)}`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Monthly Revenue Trend</h3>
        <p className="text-sm text-muted-foreground">Revenue vs Target over the last 12 months</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={salesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="month" 
              className="text-muted-foreground"
              tick={{ fontSize: 12, fill: 'currentColor' }}
            />
            <YAxis 
              className="text-muted-foreground"
              tick={{ fontSize: 12, fill: 'currentColor' }}
              tickFormatter={(value) => `$${value/1000}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#60A5FA"
              strokeWidth={3}
              name="Revenue"
              dot={{ fill: '#60A5FA', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#60A5FA', stroke: '#3B82F6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="#34D399"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Target"
              dot={{ fill: '#34D399', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, fill: '#34D399', stroke: '#10B981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}