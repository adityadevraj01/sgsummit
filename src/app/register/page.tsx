"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  GraduationCap,
  FileText,
  CreditCard,
  Sparkles,
} from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  country: string
  whatsappNumber: string

  // Academic Information
  university: string
  fieldOfStudy: string
  yearOfStudy: string

  // Technology Work
  techExperience: string
  projectDescription: string
  aiInterest: string

  // Registration & Payment
  registrationType: string
  emergencyContact: string
  emergencyPhone: string
  dietaryRestrictions: string
  agreeTerms: boolean
  agreePrivacy: boolean
}

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    whatsappNumber: "",
    university: "",
    fieldOfStudy: "",
    yearOfStudy: "",
    techExperience: "",
    projectDescription: "",
    aiInterest: "",
    registrationType: "",
    emergencyContact: "",
    emergencyPhone: "",
    dietaryRestrictions: "",
    agreeTerms: false,
    agreePrivacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [paidConfirmed, setPaidConfirmed] = useState(false)
  const [verifiedNationality, setVerifiedNationality] = useState(false)
  const searchParams = useSearchParams()
  const hasPaidParam = searchParams.get("paid") === "1"
  const router = useRouter()

  // Institutions autocomplete state
  const [instQuery, setInstQuery] = useState("")
  const [instSuggestions, setInstSuggestions] = useState<string[]>([])
  const [instLoading, setInstLoading] = useState(false)
  const [institutionVerified, setInstitutionVerified] = useState(false)
  const instDebounceRef = useRef<number | null>(null)
  const [instActiveIndex, setInstActiveIndex] = useState(-1)

  // Preloaded universities list for dropdown
  const [universities, setUniversities] = useState<string[]>([])
  const [uniLoading, setUniLoading] = useState(false)

  // Load all universities (or a large page) once when step 2 is active, then sort A→Z
useEffect(() => {
  if (currentStep !== 2 || universities.length > 0) return;
  const load = async () => {
    setUniLoading(true);
    try {
      const res = await fetch(
        `http://universities.hipolabs.com/search?country=${formData?.country}`
      );
      const data = await res.json();
      // The API returns objects with fields like name, country, domain, web_page
      const list: string[] = Array.isArray(data)
        ? data.map((u: any) => u.name)
        : [];
      const sorted = Array.from(new Set(list)).sort((a, b) =>
        a.localeCompare(b)
      );
      setUniversities(sorted);
    } catch (e) {
      console.error("Error fetching universities:", e);
      setUniversities([]);
    } finally {
      setUniLoading(false);
    }
  };
  load();
}, [currentStep, universities.length]);

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const steps = [
    { number: 1, title: "Personal Details", icon: User, description: "Basic information" },
    { number: 2, title: "Academic Profile", icon: GraduationCap, description: "Educational background" },
    { number: 3, title: "Technology Experience", icon: FileText, description: "Your tech journey" },
    { number: 4, title: "Registration & Payment", icon: CreditCard, description: "Complete registration" },
  ]

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")

      // WhatsApp integration - send automated message
      const whatsappMessage = `🎉 Hello ${formData.firstName}! Welcome to Students Global Summit 2025! \n\nYour registration is confirmed. Next step: complete payment to unlock booking your onboarding call. We'll also DM you a payment link on WhatsApp.\n\n✅ You'll receive detailed event information\n✅ Access to exclusive pre-summit materials  \n✅ Connection with fellow participants\n✅ Competition guidelines and resources\n\n🏆 Remember: ₹5.5L+ in prizes await!\n🌍 You're now part of an elite global community\n\nFor any queries, reply to this message. We're excited to see you in Puri! 🇮🇳`

      const whatsappUrl = `https://wa.me/${formData.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`

      if (formData.whatsappNumber) {
        window.open(whatsappUrl, "_blank")
      }

      // Redirect to payment page based on nationality
      const isIndian = formData.country === "india"
      const data = {
          ...formData
        };
      if (isIndian) {
      router.push("/payment/india");
      } else {
        router.push("/payment/international");
      }
      sessionStorage.setItem("userData", JSON.stringify(data));
    }, 2000)
  }

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.country && formData.whatsappNumber
      case 2:
        return institutionVerified && formData.university && formData.fieldOfStudy && formData.yearOfStudy
      case 3:
        return formData.techExperience && formData.projectDescription && formData.aiInterest
      case 4:
        return (
          formData.registrationType &&
          formData.emergencyContact &&
          formData.emergencyPhone &&
          formData.agreeTerms &&
          formData.agreePrivacy &&
          verifiedNationality
        )
      default:
        return false
    }
  }

  const countryCodeToName = (code: string) => {
    const map: Record<string, string> = {
      india: "India",
      usa: "United States",
      uk: "United Kingdom",
      canada: "Canada",
      australia: "Australia",
      germany: "Germany",
      france: "France",
      singapore: "Singapore",
      japan: "Japan",
      "south-korea": "Korea, Republic of",
      other: "",
    }
    return map[code] ?? ""
  }

  const fetchInstitutions = async (q: string) => {
    if (!q || q.trim().length < 2) {
      setInstSuggestions([])
      return
    }
    setInstLoading(true)
    try {
      // Global search (no country filter) to include institutions worldwide
      const params = new URLSearchParams()
      params.set("q", q)
      const res = await fetch(`/api/institutions?${params.toString()}`)
      const data = await res.json()
      setInstSuggestions(data?.institutions || [])
    } catch (e) {
      setInstSuggestions([])
    } finally {
      setInstLoading(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Registration Successful! 🎉
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Welcome to the elite circle of Students Global Summit 2025! Next: complete your payment to unlock meeting booking.
              </p>

              {/* Payment first notice */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-8 text-left">
                <h2 className="text-2xl font-semibold mb-3">Step 1 — Complete Payment</h2>
                <p className="text-slate-600 mb-4">
                  All participants must pay first. Indian students: Summit fee is ₹14,997 and Community access is ₹200. Foreign participants: Community $19.99 or Summit $497.
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4">
                  <li>We will send your secure payment link via WhatsApp and Email shortly.</li>
                  <li>Alternatively, tap the button below to request the payment link instantly on WhatsApp.</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-gradient-to-r from-green-600 to-emerald-600">
                    <a
                      href={`https://wa.me/919439019933?text=${encodeURIComponent("Hello! I just registered for SGS 2025. Please share my payment link.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Payment Link on WhatsApp
                    </a>
                  </Button>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <input
                    id="paidConfirmed"
                    type="checkbox"
                    className="h-4 w-4"
                    checked={paidConfirmed || hasPaidParam}
                    onChange={(e) => setPaidConfirmed(e.target.checked)}
                  />
                  <label htmlFor="paidConfirmed" className="text-sm text-slate-700">
                    I confirm I have completed the payment
                  </label>
                </div>
              </div>

              {/* Calendly embed gated by payment confirmation */}
              {(paidConfirmed || hasPaidParam) ? (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Step 2 — Book Your Onboarding Call</h2>
                  <p className="text-slate-600 mb-4">Pick a convenient slot so we can verify details and guide you through next steps.</p>
                  <div className="w-full overflow-hidden rounded-xl border border-slate-200">
                    <iframe
                      title="Calendly Scheduling"
                      src="https://calendly.com/ryanmohapatra003/discovery-call-1?month=2025-09&hide_event_type_details=1&hide_gdpr_banner=1"
                      className="w-full h-[720px]"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 text-left rounded-xl p-4 mb-8">
                  <p className="text-sm text-yellow-800">
                    After payment confirmation, you can book your onboarding call here.
                  </p>
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-8">
                <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>₹5.5L+ Prizes</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>Global Network</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span>Elite Experience</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Join the Global Elite
            </h1>
            <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Represent your country on the world stage. Compete for ₹5.5L+ in prizes. Shape the future of AI governance
              with 200 brilliant minds.
            </p>
            {/* Discord CTA */}
            <div className="mb-6">
              <Button asChild variant="outline" className="border-2">
                <a href="https://discord.gg/jDTtjfzU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Join our Discord Community
                </a>
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        currentStep >= step.number
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-600 text-white shadow-lg"
                          : "bg-white border-slate-300 text-slate-400"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="mt-2 text-center">
                      <div
                        className={`text-sm font-medium ${currentStep >= step.number ? "text-blue-600" : "text-slate-400"}`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-500">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Event Info Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">Dec 7, 2025</div>
                  <div className="text-sm text-slate-500">3 Days</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <MapPin className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <div className="font-semibold">Puri, Odisha</div>
                  <div className="text-sm text-slate-500">India</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">200 Participants</div>
                  <div className="text-sm text-slate-500">Global Elite</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <Trophy className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <div className="font-semibold">₹5.5L Prizes</div>
                  <div className="text-sm text-slate-500">Competition</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">
                    Step {currentStep}: {steps[currentStep - 1].title}
                  </CardTitle>
                  <CardDescription className="text-blue-100">{steps[currentStep - 1].description}</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="firstName" className="text-base font-medium">
                              First Name *
                            </Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="text-base font-medium">
                              Last Name *
                            </Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-base font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="your.email@university.edu"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country" className="text-base font-medium">
                            Country *
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("country", value)}>
                            <SelectTrigger className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="india">🇮🇳 India</SelectItem>
                              <SelectItem value="usa">🇺🇸 United States</SelectItem>
                              <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                              <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                              <SelectItem value="australia">🇦🇺 Australia</SelectItem>
                              <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                              <SelectItem value="france">🇫🇷 France</SelectItem>
                              <SelectItem value="singapore">🇸🇬 Singapore</SelectItem>
                              <SelectItem value="japan">🇯🇵 Japan</SelectItem>
                              <SelectItem value="south-korea">🇰🇷 South Korea</SelectItem>
                              <SelectItem value="other">🌍 Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="whatsappNumber" className="text-base font-medium">
                            WhatsApp Number *
                          </Label>
                          <Input
                            id="whatsappNumber"
                            type="tel"
                            placeholder="Include country code (e.g., +91 9876543210)"
                            value={formData.whatsappNumber}
                            onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                            className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                          <p className="text-sm text-slate-500 mt-2 flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            We'll send automated updates and confirmations via WhatsApp
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Academic Information */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div>
                          <Label htmlFor="university" className="text-base font-medium">
                            University/Institution *
                          </Label>
                          <Select
                            value={formData.university}
                            onValueChange={(value) => {
                              handleInputChange("university", value)
                              setInstitutionVerified(true)
                              setInstQuery(value)
                            }}
                          >
                            <SelectTrigger className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder={uniLoading ? "Loading universities..." : "Select your institution"} />
                            </SelectTrigger>
                            <SelectContent className="max-h-80">
                              {universities.map((name) => (
                                <SelectItem key={name} value={name}>
                                  {name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <p className="mt-2 text-xs text-slate-500">
                            Pick from the verified list. The list is sorted alphabetically.
                          </p>
                          {!institutionVerified && (
                            <p className="mt-1 text-xs text-red-600">Please select your institution to verify.</p>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="fieldOfStudy" className="text-base font-medium">
                              Field of Study *
                            </Label>
                            <Select onValueChange={(value) => handleInputChange("fieldOfStudy", value)}>
                              <SelectTrigger className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                                <SelectValue placeholder="Select your field" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="computer-science">Computer Science</SelectItem>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="data-science">Data Science</SelectItem>
                                <SelectItem value="ai-ml">AI/Machine Learning</SelectItem>
                                <SelectItem value="robotics">Robotics</SelectItem>
                                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                                <SelectItem value="policy">Policy Studies</SelectItem>
                                <SelectItem value="ethics">Ethics/Philosophy</SelectItem>
                                <SelectItem value="business">Business/Management</SelectItem>
                                <SelectItem value="law">Law</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="yearOfStudy" className="text-base font-medium">
                              Year of Study *
                            </Label>
                            <Select onValueChange={(value) => handleInputChange("yearOfStudy", value)}>
                              <SelectTrigger className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                                <SelectValue placeholder="Select your year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="undergraduate-1">Undergraduate - 1st Year</SelectItem>
                                <SelectItem value="undergraduate-2">Undergraduate - 2nd Year</SelectItem>
                                <SelectItem value="undergraduate-3">Undergraduate - 3rd Year</SelectItem>
                                <SelectItem value="undergraduate-4">Undergraduate - 4th Year</SelectItem>
                                <SelectItem value="masters-1">Master's - 1st Year</SelectItem>
                                <SelectItem value="masters-2">Master's - 2nd Year</SelectItem>
                                <SelectItem value="phd">PhD Student</SelectItem>
                                <SelectItem value="recent-graduate">Recent Graduate</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Technology Experience */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                          <h3 className="text-lg font-semibold text-blue-900 mb-2">Share Your Technology Journey</h3>
                          <p className="text-blue-700 text-sm">
                            Help us understand your background and passion for technology. This information will be used
                            for networking and competition grouping.
                          </p>
                        </div>

                        <div>
                          <Label htmlFor="techExperience" className="text-base font-medium">
                            Technology Experience & Skills *
                          </Label>
                          <Textarea
                            id="techExperience"
                            placeholder="Describe your experience with programming languages, frameworks, tools, and technologies. Include any certifications, internships, or relevant coursework. (e.g., Python, React, Machine Learning, Cloud Computing, etc.)"
                            value={formData.techExperience}
                            onChange={(e) => handleInputChange("techExperience", e.target.value)}
                            className="mt-2 min-h-[120px] border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="projectDescription" className="text-base font-medium">
                            Notable Projects or Research *
                          </Label>
                          <Textarea
                            id="projectDescription"
                            placeholder="Tell us about your most significant technology projects, research work, or innovations. Include any published papers, open-source contributions, hackathon wins, or startup ventures. What impact did these projects have?"
                            value={formData.projectDescription}
                            onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                            className="mt-2 min-h-[120px] border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="aiInterest" className="text-base font-medium">
                            AI Governance & Ethics Interest *
                          </Label>
                          <Textarea
                            id="aiInterest"
                            placeholder="Why are you interested in AI governance and ethics? What specific aspects fascinate you? How do you see AI impacting society, and what role do you want to play in shaping its future? Share your thoughts on current AI challenges and opportunities."
                            value={formData.aiInterest}
                            onChange={(e) => handleInputChange("aiInterest", e.target.value)}
                            className="mt-2 min-h-[120px] border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Registration & Payment */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div>
                          <Label className="text-base font-medium mb-4 block">Registration Type *</Label>
                          <RadioGroup
                            value={formData.registrationType}
                            onValueChange={(value) => handleInputChange("registrationType", value)}
                            className="space-y-4"
                          >
                            {/* Community Membership Option */}
                            <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-lg hover:border-purple-300 transition-all duration-200 hover:bg-purple-50">
                              <RadioGroupItem value="community-membership" id="community-membership" className="border-purple-500 text-purple-600" />
                              <Label htmlFor="community-membership" className="flex-1 cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="font-semibold text-lg">Join Our Community</div>
                                    <div className="text-sm text-slate-600">
                                      {formData.country === "india"
                                        ? "Community access for Indian students is ₹200. Top 3 community members will be selected for a fully-covered summit package."
                                        : "Get exclusive community access for $19.99. Top 3 community members will be selected for a fully-covered summit package."}
                                    </div>
                                  </div>
                                  <Badge variant="secondary" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                    {formData.country === "india" ? "₹200" : "$19.99"}
                                  </Badge>
                                </div>
                              </Label>
                            </div>

                            {/* Direct Summit Participation Option */}
                            <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-lg hover:border-blue-300 transition-all duration-200 hover:bg-blue-50">
                              <RadioGroupItem value="summit-participation" id="summit-participation" className="border-blue-500 text-blue-600" />
                              <Label htmlFor="summit-participation" className="flex-1 cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="font-semibold text-lg">Participate in Summit</div>
                                    <div className="text-sm text-slate-600">
                                      {formData.country === "india"
                                        ? "Indian students: Summit fee is ₹14,997."
                                        : "Full participation for $497 including the complete delegate package."}
                                    </div>
                                  </div>
                                  <Badge variant="secondary" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                                    {formData.country === "india" ? "₹14,997" : "$497"}
                                  </Badge>
                                </div>
                              </Label>
                            </div>
                          </RadioGroup>
                          <p className="text-xs text-slate-500 mt-2">
                            Note: Community members are eligible for selection; top 3 will receive complimentary summit package.
                          </p>

                          {/* Nationality verification */}
                          <div className="mt-4 flex items-start gap-3 bg-slate-50 p-4 rounded-md border border-slate-200">
                            <input
                              id="verifyNationality"
                              type="checkbox"
                              className="mt-1 h-4 w-4"
                              checked={verifiedNationality}
                              onChange={(e) => setVerifiedNationality(e.target.checked)}
                            />
                            <label htmlFor="verifyNationality" className="text-sm text-slate-700">
                              {formData.country === "india"
                                ? "I verify that I am an Indian student and understand the Indian fee criteria (including ₹200 for community access)."
                                : "I verify that I am a foreign student and agree to the international fee criteria ($19.99 community or $497 summit)."}
                            </label>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="emergencyContact" className="text-base font-medium">
                              Emergency Contact Name *
                            </Label>
                            <Input
                              id="emergencyContact"
                              value={formData.emergencyContact}
                              onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                              className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Full name of emergency contact"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="emergencyPhone" className="text-base font-medium">
                              Emergency Contact Phone *
                            </Label>
                            <Input
                              id="emergencyPhone"
                              type="tel"
                              value={formData.emergencyPhone}
                              onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                              className="mt-2 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Include country code"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="dietaryRestrictions" className="text-base font-medium">
                            Dietary Restrictions/Allergies
                          </Label>
                          <Textarea
                            id="dietaryRestrictions"
                            placeholder="Please specify any dietary restrictions, allergies, or special meal requirements"
                            value={formData.dietaryRestrictions}
                            onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                            className="mt-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>

                        <div className="space-y-4 bg-slate-50 p-6 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="agreeTerms"
                              checked={formData.agreeTerms}
                              onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                              className="mt-1"
                            />
                            <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                              I agree to the Terms and Conditions and understand that the registration fee is
                              non-refundable. I acknowledge that this is a competitive academic summit with high
                              standards. *
                            </Label>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="agreePrivacy"
                              checked={formData.agreePrivacy}
                              onCheckedChange={(checked) => handleInputChange("agreePrivacy", checked as boolean)}
                              className="mt-1"
                            />
                            <Label htmlFor="agreePrivacy" className="text-sm leading-relaxed">
                              I agree to the Privacy Policy and consent to receive WhatsApp messages for event updates,
                              networking opportunities, and post-summit communications. *
                            </Label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t border-slate-200">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2 bg-transparent"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Previous
                      </Button>

                      {currentStep < totalSteps ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          disabled={!isStepValid(currentStep)}
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        >
                          Next
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting || !isStepValid(currentStep)}
                          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-3"
                        >
                          {isSubmitting ? "Processing..." : "Complete Registration"}
                          <CheckCircle className="w-5 h-5" />
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-600 mb-4">
                    Need help with registration? Get instant support via WhatsApp from our dedicated team.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full bg-green-50 border-green-200 hover:bg-green-100"
                  >
                    <a href="https://wa.me/919439019933" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                      Chat with Support
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Prize Highlight */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-800">
                    <Trophy className="w-5 h-5" />
                    Competition Prizes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">1st Place</span>
                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white">₹3,00,000</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">2nd Place</span>
                    <Badge className="bg-gradient-to-r from-gray-400 to-gray-500 text-white">₹1,50,000</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">3rd Place</span>
                    <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">₹1,00,000</Badge>
                  </div>
                  <div className="pt-2 border-t border-amber-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-amber-800">Total: ₹5.5L+</div>
                      <div className="text-xs text-amber-600">Plus additional recognition prizes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">3-day summit access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Competition participation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Cultural excursions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Global networking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Post-summit courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Certificate & recognition</span>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-800">
                    <AlertCircle className="w-5 h-5" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Registration fees are non-refundable. Limited to 200 elite participants worldwide. Early
                    registration recommended to secure your spot in this prestigious summit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}