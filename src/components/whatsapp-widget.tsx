"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumbers = [
    { number: "919439019933", label: "Primary Support" },
    { number: "917205574661", label: "Secondary Support" },
  ]

  const quickMessages = [
    "Hi! I need help with registration for Students Global Summit 2025",
    "Can you provide more details about the event schedule?",
    "I have questions about accommodation and travel",
    "What are the requirements for international students?",
  ]

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg animate-pulse-glow"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* WhatsApp Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-fade-in-up">
          <Card className="shadow-xl border-green-200">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </CardTitle>
              <CardDescription className="text-green-100">
                Get instant help for Students Global Summit 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div>
                <h4 className="font-medium mb-2">Contact Numbers:</h4>
                <div className="space-y-2">
                  {whatsappNumbers.map((contact) => (
                    <Button
                      key={contact.number}
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent"
                    >
                      <a href={`https://wa.me/${contact.number}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {contact.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Quick Messages:</h4>
                <div className="space-y-2">
                  {quickMessages.map((message, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-2 text-xs"
                    >
                      <a
                        href={`https://wa.me/919439019933?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {message}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-muted-foreground text-center">
                Click any option to start chatting on WhatsApp
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
