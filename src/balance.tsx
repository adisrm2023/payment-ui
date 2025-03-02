"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm opacity-80 mb-1">Total Balance</p>
            <div className="flex items-center gap-2">
              <h3 className="text-3xl font-bold">{showBalance ? "₹24,500.75" : "••••••••"}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground opacity-80 hover:opacity-100 hover:bg-primary/20"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="bg-primary-foreground/10 rounded-full px-3 py-1 text-xs">PayEase Wallet</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary-foreground/10 rounded-full p-2">
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs opacity-80">Income</p>
              <p className="font-medium">₹32,500.00</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary-foreground/10 rounded-full p-2">
              <ArrowDownLeft className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs opacity-80">Expenses</p>
              <p className="font-medium">₹8,000.25</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

