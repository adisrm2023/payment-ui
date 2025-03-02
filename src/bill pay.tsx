"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Zap, Smartphone, Droplet, Wifi, Tv, CreditCard, Home, Car } from "lucide-react"

export function BillsPayment() {
  const router = useRouter()
  const [selectedBill, setSelectedBill] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const billCategories = [
    {
      id: "electricity",
      name: "Electricity",
      icon: Zap,
      color: "bg-yellow-100 dark:bg-yellow-900",
      textColor: "text-yellow-600 dark:text-yellow-300",
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: Smartphone,
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-blue-300",
    },
    {
      id: "water",
      name: "Water",
      icon: Droplet,
      color: "bg-cyan-100 dark:bg-cyan-900",
      textColor: "text-cyan-600 dark:text-cyan-300",
    },
    {
      id: "internet",
      name: "Internet",
      icon: Wifi,
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-600 dark:text-purple-300",
    },
    {
      id: "dth",
      name: "DTH",
      icon: Tv,
      color: "bg-orange-100 dark:bg-orange-900",
      textColor: "text-orange-600 dark:text-orange-300",
    },
    {
      id: "credit-card",
      name: "Credit Card",
      icon: CreditCard,
      color: "bg-red-100 dark:bg-red-900",
      textColor: "text-red-600 dark:text-red-300",
    },
    {
      id: "rent",
      name: "Rent",
      icon: Home,
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-600 dark:text-green-300",
    },
    {
      id: "insurance",
      name: "Insurance",
      icon: Car,
      color: "bg-indigo-100 dark:bg-indigo-900",
      textColor: "text-indigo-600 dark:text-indigo-300",
    },
  ]

  const handleBillSelect = (billId: string) => {
    setSelectedBill(billId)
  }

  const handlePayBill = () => {
    setShowConfirmation(true)
  }

  const confirmPayment = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowConfirmation(false)
      setShowSuccess(true)

      // Redirect after showing success
      setTimeout(() => {
        router.push("/dashboard")
      }, 3000)
    }, 1500)
  }

  const selectedBillData = billCategories.find((bill) => bill.id === selectedBill)

  return (
    <div className="space-y-6">
      {!selectedBill ? (
        <>
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="due">Due Soon</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-4 gap-4">
                {billCategories.map((bill) => (
                  <Button
                    key={bill.id}
                    variant="ghost"
                    className="flex flex-col items-center justify-center h-auto p-3 hover:bg-muted"
                    onClick={() => handleBillSelect(bill.id)}
                  >
                    <div className={`${bill.color} p-3 rounded-full mb-2`}>
                      <bill.icon className={`h-5 w-5 ${bill.textColor}`} />
                    </div>
                    <span className="text-xs text-center">{bill.name}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="mt-4">
              <div className="space-y-3">
                {billCategories.slice(0, 3).map((bill) => (
                  <div
                    key={bill.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => handleBillSelect(bill.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${bill.color} p-2 rounded-full`}>
                        <bill.icon className={`h-5 w-5 ${bill.textColor}`} />
                      </div>
                      <div>
                        <p className="font-medium">{bill.name}</p>
                        <p className="text-xs text-muted-foreground">Last paid on May 10</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">₹1,450.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="due" className="mt-4">
              <div className="space-y-3">
                {billCategories.slice(1, 4).map((bill) => (
                  <div
                    key={bill.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => handleBillSelect(bill.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${bill.color} p-2 rounded-full`}>
                        <bill.icon className={`h-5 w-5 ${bill.textColor}`} />
                      </div>
                      <div>
                        <p className="font-medium">{bill.name}</p>
                        <p className="text-xs text-muted-foreground">Due in 3 days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">₹799.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        (
          <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className={`${selectedBillData?.color} p-3 rounded-full`}>\
              <selectedBillData?.icon className={`h-6 w-6 ${selectedBillData?.textColor}`} />
            </div>
            <h2 className="text-xl font-semibold">{selectedBillData?.name}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="provider">Provider</Label>
              <select 
                id="provider" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select provider</option>
                <option value="provider1">City Power Ltd</option>
                <option value="provider2">National Energy</option>
                <option value="provider3">Green Energy Co</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="account">Account Number / Consumer ID</Label>
              <Input id="account" placeholder="Enter your account number" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="Enter amount" defaultValue="1,450.00" />
            </div>
            
            <Button className="w-full" onClick={handlePayBill}>
              Proceed to Pay
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => setSelectedBill(null)}
            >
              Back to Categories
            </Button>
          </div>
        </div>
        )
      )}

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Payment</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex items-center gap-3 mb-4">
              <div className={`${selectedBillData?.color} p-3 rounded-full`}>
                {selectedBillData && selectedBillData.icon && (
                  <selectedBillData.icon className={`h-6 w-6 ${selectedBillData?.textColor}`} />
                )}
              </div>
              <div>
                <h3 className="font-medium">{selectedBillData?.name} Bill</h3>
                <p className="text-sm text-muted-foreground">City Power Ltd</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Account Number</span>
                <span className="font-medium">123456789</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Bill Amount</span>
                <span className="font-medium">₹1,450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Convenience Fee</span>
                <span className="font-medium">₹0</span>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold">₹1,450.00</span>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
              Cancel
            </Button>
            <Button onClick={confirmPayment} disabled={isLoading}>
              {isLoading ? "Processing..." : "Pay Now"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600 dark:text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Payment Successful!</h2>
            <p className="text-center text-muted-foreground">
              Your {selectedBillData?.name} bill has been paid successfully
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

