"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle, ShieldCheck, IndianRupee } from "lucide-react";

export default function IndiaPaymentPage() {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [userData, setUserData] = useState<string | null>(null);

  useEffect(() => {
    const value = sessionStorage.getItem("userData");
    setUserData(value);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleRazorpayPayment = (amount: number, description: string) => {
    if (!razorpayLoaded) {
      alert("Razorpay SDK is still loading. Please try again in a moment.");
      return;
    }

    const options = {
      key: "rzp_test_AAFgc8dQHevvPW", // Replace with your Razorpay key
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Your Company",
      description,
      image: "/images/sgs-logo.png",
      handler: (response: any) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can redirect user to /register?paid=1 here if needed
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
      },
      theme: { color: "#6E07F3" },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
              Complete Your Payment (India)
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose your option and complete the payment directly. After successful payment, click "I've Paid" to
              book your onboarding call.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Community Access */}
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
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600"
                    onClick={() => handleRazorpayPayment(200, "Community Access")}
                  >
                    Pay ₹200
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Summit Participation */}
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
                    <IndianRupee className="w-4 h-4 mr-1" /> 14997
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-cyan-600"
                    onClick={() => handleRazorpayPayment(14997, "Summit Participation")}
                  >
                    Pay ₹14,997
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Confirm Paid */}
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
  );
}
