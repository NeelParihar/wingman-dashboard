import { Building2, ClipboardList, DollarSign, Percent, ShoppingCart, Wallet } from 'lucide-react'
import { MetricCard } from "./metric-card"

export function MetricsGrid() {
  const metrics = [
    {
      title: "CONSULTATIONS",
      value: "24",
      change: { value: 15, trend: "increase" as const },
      icon: <Building2 className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "ORDERS PLACED",
      value: "12",
      change: { value: 15, trend: "decrease" as const },
      icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "CONVERSION",
      value: "50%",
      change: { value: 15, trend: "decrease" as const },
      icon: <Percent className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "TOTAL SALES VALUE",
      value: "$2,400",
      change: { value: 15, trend: "increase" as const },
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "AVG ORDER VALUE",
      value: "$240",
      change: { value: 15, trend: "increase" as const },
      icon: <ClipboardList className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "COMMISSION PAID",
      value: "$240",
      change: { value: 15, trend: "increase" as const },
      icon: <Wallet className="h-4 w-4 text-muted-foreground" />
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  )
}

