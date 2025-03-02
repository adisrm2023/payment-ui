"use client"

import { useRouter } from "next/navigation"
import { Send, QrCode, CreditCard, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  const router = useRouter()

  const actions = [
    {
      name: "Send",
      icon: Send,
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-blue-300",
      href: "/dashboard/payments/send",
    },
    {
      name: "Scan",
      icon: QrCode,
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-600 dark:text-purple-300",
      href: "/dashboard/scan",
    },
    {
      name: "Pay Bills",
      icon: Receipt,
      color: "bg-orange-100 dark:bg-orange-900",
      textColor: "text-orange-600 dark:text-orange-300",
      href: "/dashboard/payments/bills",
    },
    {
      name: "Cards",
      icon: CreditCard,
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-600 dark:text-green-300",
      href: "/dashboard/cards",
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-4">
        {actions.map((action) => (
          <Button
            key={action.name}
            variant="ghost"
            className="flex flex-col items-center justify-center h-auto p-3 hover:bg-transparent"
            onClick={() => router.push(action.href)}
          >
            <div className={`${action.color} p-3 rounded-full mb-2`}>
              <action.icon className={`h-5 w-5 ${action.textColor}`} />
            </div>
            <span className="text-xs text-center">{action.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

