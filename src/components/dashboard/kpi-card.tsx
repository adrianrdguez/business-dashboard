import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedNumber } from '@/components/ui/animated-number'

interface KPICardProps {
  title: string
  value: string
  numericValue?: number
  change: string
  changeType: 'positive' | 'negative'
  icon: LucideIcon
  formatNumber?: (value: number) => string
}

export function KPICard({ title, value, numericValue, change, changeType, icon: Icon, formatNumber }: KPICardProps) {
  return (
    <div className="group bg-card/50 backdrop-blur-sm border-border/50 rounded-lg border p-6 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
            {numericValue && formatNumber ? (
              <AnimatedNumber 
                value={numericValue} 
                formatNumber={formatNumber}
                duration={2000}
              />
            ) : (
              numericValue ? (
                <AnimatedNumber 
                  value={numericValue} 
                  duration={2000}
                />
              ) : (
                value
              )
            )}
          </p>
          <div className="flex items-center mt-2">
            <span className={cn(
              "text-sm font-medium transition-colors duration-300",
              changeType === 'positive' ? "text-green-400 group-hover:text-green-300" : "text-red-400 group-hover:text-red-300"
            )}>
              {changeType === 'positive' ? '+' : ''}{change}
            </span>
            <span className="text-sm text-muted-foreground ml-1">vs last month</span>
          </div>
        </div>
        <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-colors duration-300" />
        </div>
      </div>
    </div>
  )
}