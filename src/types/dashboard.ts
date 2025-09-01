export interface KPI {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
  icon: string
}

export interface SalesData {
  month: string
  revenue: number
  target: number
}

export interface Region {
  name: string
  value: number
  customers: number
}

export interface ProductCategory {
  name: string
  revenue: number
  growth: number
}

export interface DashboardData {
  kpis: {
    revenue: number
    users: number
    growth: number
    profit: number
  }
  salesData: SalesData[]
  regions: Region[]
  categories: ProductCategory[]
}