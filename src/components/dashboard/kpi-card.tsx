import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface KPICardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
  icon: LucideIcon
}

export function KPICard({ title, value, change, changeType, icon: Icon }: KPICardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
          <div className="flex items-center mt-2">
            <span className={cn(
              "text-sm font-medium",
              changeType === 'positive' ? "text-green-500" : "text-red-500"
            )}>
              {changeType === 'positive' ? '+' : ''}{change}
            </span>
            <span className="text-sm text-muted-foreground ml-1">vs last month</span>
          </div>
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  )
}