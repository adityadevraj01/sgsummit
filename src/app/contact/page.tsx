"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, MessageCircle, Clock, Globe, Send, CheckCircle, Trophy, Star, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")

      // WhatsApp integration - send inquiry to support team
      const whatsappMessage = `New inquiry from ${formData.name}:\n\nType: ${formData.inquiryType}\nSubject: ${formData.subject}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
      const whatsappUrl = `https://wa.me/919439019933?text=${encodeURIComponent(whatsappMessage)}`

      // Open WhatsApp in a new tab (for demo purposes)
      window.open(whatsappUrl, "_blank")
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-white">Message Sent Successfully!</h1>
              <p className="text-lg text-blue-100 mb-8">
                Thank you for contacting us. We've received your inquiry and our team will get back to you within 24
                hours. We've also forwarded your message to our WhatsApp support team for immediate assistance.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-amber-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navigation />

      <div className="pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 text-sm font-semibold">
                <Trophy className="w-4 h-4 mr-2" />
                ₹5.5 LAKH+ TOTAL PRIZES
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Ready to Make History?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
              Have a chance to represent your country on a global level
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
              Join the most prestigious student summit of 2025. Connect with global leaders, compete for massive prizes,
              and shape the future of AI governance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm bg-white/10 text-white border-white/20">
                <Clock className="w-4 h-4 mr-2" />
                24/7 WhatsApp Support
              </Badge>
              <Badge variant="outline" className="text-sm bg-white/10 text-white border-white/20">
                <Globe className="w-4 h-4 mr-2" />
                Global Reach
              </Badge>
              <Badge variant="outline" className="text-sm bg-white/10 text-white border-white/20">
                <Star className="w-4 h-4 mr-2" />
                Elite Network
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              {/* WhatsApp Support - Primary */}
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-sm border-green-300/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Support
                  </CardTitle>
                  <CardDescription className="text-green-700 font-medium">
                    🚀 Get instant responses to your queries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Why Choose WhatsApp?
                    </h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Instant responses from our expert team</li>
                      <li>• Direct connection to summit organizers</li>
                      <li>• Get exclusive updates and insider info</li>
                      <li>• Priority support for registered participants</li>
                    </ul>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                  >
                    <a href="https://wa.me/919439019933" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Start WhatsApp Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email Contact */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="font-medium text-white">info@studentglobalsummit.com</div>
                      <div className="text-sm text-blue-200">General Inquiries & Registration</div>
                    </div>
                  </div>
                  <div className="text-sm text-blue-200 bg-white/5 p-3 rounded-lg">
                    📧 We respond to all emails within 24 hours
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    Summit Venue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-medium text-white">MayFair Hotel</div>
                    <div className="text-blue-200">Puri, Odisha, India</div>
                    <div className="text-sm text-blue-300 bg-white/5 p-3 rounded-lg">
                      🏨 Luxury accommodation included for all international delegates
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5 text-amber-400" />
                    Support Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-blue-200">WhatsApp Support</span>
                      <span className="font-medium text-white">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Email Response</span>
                      <span className="font-medium text-white">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Priority Support</span>
                      <span className="font-medium text-white">For Registered Participants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Get In Touch With Our Team</CardTitle>
                  <CardDescription className="text-blue-200 text-lg">
                    Ready to join the most exclusive student summit? Let's discuss your participation!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Include country code"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType" className="text-white">
                          Inquiry Type *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="registration">Registration Questions</SelectItem>
                            <SelectItem value="event-details">Event Details</SelectItem>
                            <SelectItem value="accommodation">Accommodation & Travel</SelectItem>
                            <SelectItem value="competition">Competition Information</SelectItem>
                            <SelectItem value="partnerships">Partnerships & Sponsorship</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-white">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your interest in the summit, your background, or any specific questions..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      />
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-400/20">
                      <h4 className="font-medium mb-3 text-white flex items-center gap-2">
                        <Star className="w-5 h-5 text-amber-400" />
                        What happens next?
                      </h4>
                      <ul className="text-sm text-blue-200 space-y-2">
                        <li>• 🚀 Instant WhatsApp notification to our team</li>
                        <li>• 📧 Email confirmation within 5 minutes</li>
                        <li>• 💬 Personal response within 24 hours</li>
                        <li>• 🎯 Priority support for serious candidates</li>
                        <li>• 🏆 Exclusive insights about the ₹5.5L+ prize pool</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message & Connect <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
              <p className="text-xl text-blue-200">Everything you need to know about joining the summit</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">How can I win the ₹3,00,000 first prize?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    Participate in "The Global Technocracy Challenge" - our flagship competition on AI governance. Form
                    teams, present innovative solutions, and compete with the world's brightest minds for the massive
                    prize pool.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">What makes this summit different?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    This is the only student summit modeled after G20/BRICS with government backing, massive prizes,
                    luxury accommodation, and direct access to global leaders. You'll represent your country on an
                    international stage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">How do I get selected?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    We're looking for elite students aged 18-30 from top universities worldwide. Strong academic
                    background, passion for AI ethics, and leadership potential are key. Limited to 200 participants
                    globally.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">What's included in my registration?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    3-day summit access, competition participation, luxury accommodation, all meals, cultural excursions
                    to Puri/Konark temples, networking events, and exclusive post-summit courses worth thousands.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}