import { RewardsSection } from "@/components/rewards/rewards-section"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function RewardsPage() {
  return (
    <div className="container max-w-md mx-auto p-4 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
        <h1 className="text-xl font-bold">Rewards & Cashback</h1>
      </div>

      <RewardsSection />
    </div>
  )
}

