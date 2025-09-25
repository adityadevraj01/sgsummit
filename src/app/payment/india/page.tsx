import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, MessageCircle, ShieldCheck, IndianRupee } from "lucide-react"

export default function IndiaPaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">Complete Your Payment (India)</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Please choose your option and complete the payment first. After successful payment, click "I've Paid" to
              book your onboarding call.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Community access */}
            <Card className="border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-purple-600" /> Community Access
                </CardTitle>
                <CardDescription>Eligible for selection. Top 3 get full summit package free.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Price</span>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base py-1 px-3">
                    <IndianRupee className="w-4 h-4 mr-1" /> 200
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                    <a
                      href={`https://wa.me/919439019933?text=${encodeURIComponent(
                        "Hi! I want to pay for Community Access (₹200) – please send the payment link."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" /> Request Payment Link
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Summit participation */}
            <Card className="border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" /> Summit Participation
                </CardTitle>
                <CardDescription>Full summit participation for Indian students.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Price</span>
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-base py-1 px-3">
                    <IndianRupee className="w-4 h-4 mr-1" /> 14,997
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600">
                    <a
                      href={`https://wa.me/919439019933?text=${encodeURIComponent(
                        "Hi! I want to pay ₹14,997 for Summit participation – please send the payment link."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" /> Request Payment Link
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Confirm paid */}
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600">
              <Link href="/register?paid=1">
                <CheckCircle className="w-5 h-5 mr-2" /> I've Paid – Book My Call
              </Link>
            </Button>
            <div className="mt-3 text-sm text-slate-500">You'll be redirected to schedule via Calendly.</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}