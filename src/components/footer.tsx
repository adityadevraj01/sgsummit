import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/sgs-logo.png"
                alt="Students Global Summit"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <div className="text-lg font-bold text-white">Students Global Summit</div>
                <div className="text-sm text-blue-300">2025</div>
              </div>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Empowering Tomorrow's Architects: The leaders of new digital era
            </p>
            {/* Discord CTA */}
            <div className="mb-4">
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <a href="https://discord.gg/jDTtjfzU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Join our Discord
                </a>
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-slate-700 text-blue-300 hover:bg-slate-800 bg-transparent"
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-slate-700 text-blue-300 hover:bg-slate-800 bg-transparent"
              >
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-slate-700 text-blue-300 hover:bg-slate-800 bg-transparent"
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-slate-700 text-blue-300 hover:bg-slate-800 bg-transparent"
              >
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-300 hover:text-cyan-400 transition-colors">
                  About Summit
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-blue-300 hover:text-cyan-400 transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-blue-300 hover:text-cyan-400 transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-300 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-blue-300">Puri, Odisha, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-blue-300">info@studentglobalsummit.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-blue-300">
            © 2025 Students Global Summit. All rights reserved. | Organized by E-Cell VSSUT
          </p>
        </div>
      </div>
    </footer>
  )
}