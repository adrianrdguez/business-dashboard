'use client'

import { useState } from 'react'
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings,
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/', current: true },
  { name: 'Analytics', icon: BarChart3, href: '/analytics', current: false },
  { name: 'Customers', icon: Users, href: '/customers', current: false },
  { name: 'Settings', icon: Settings, href: '/settings', current: false },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          type="button"
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-card text-foreground shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-border">
            <h1 className="text-xl font-bold text-primary">BusinessDash</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
                    item.current
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </a>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">U</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-foreground">User</p>
                <p className="text-xs text-muted-foreground">admin@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}