"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

export function QrScanner() {
  const router = useRouter()
  const [showPreview, setShowPreview] = useState(false)
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleScan = () => {
    // Simulate scanning
    setTimeout(() => {
      setShowPreview(true)
    }, 1000)
  }

  const handlePay = () => {
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setShowPreview(false)
      setShowSuccess(true)

      // Redirect after showing success
      setTimeout(() => {
        router.push("/dashboard")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="scan">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scan">Scan QR</TabsTrigger>
          <TabsTrigger value="mycode">My QR Code</TabsTrigger>
        </TabsList>

        <TabsContent value="scan" className="mt-4">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="relative aspect-square border-2 border-dashed rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="QR Scanner"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
                  <p className="text-center mb-4">Position the QR code within the frame</p>
                  <Button onClick={handleScan}>Simulate Scan</Button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">Scan any QR code to pay instantly</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mycode" className="mt-4">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Your QR Code" width={200} height={200} />
                </div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-muted-foreground">UPI ID: johndoe@payease</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Share
                </Button>
                <Button variant="outline" className="flex-1">
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center justify-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Coffee Shop</h3>
              <p className="text-sm text-muted-foreground">coffeeshop@payease</p>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="text"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Note (Optional)</Label>
                <Input id="note" placeholder="Add a note" />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPreview(false)}>
              Cancel
            </Button>
            <Button onClick={handlePay} disabled={isLoading || !amount || Number.parseInt(amount) === 0}>
              {isLoading ? "Processing..." : "Pay"}
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
              You have successfully paid ₹{Number.parseInt(amount).toLocaleString()} to Coffee Shop
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

