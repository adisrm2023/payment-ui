import { SignInForm } from "@/components/auth/sign-in-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="container max-w-md mx-auto p-6 min-h-screen flex flex-col">
      <div className="mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your PayEase account</p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}

