import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Globe,
  Lightbulb,
  BookOpen,
  Award,
  ArrowRight,
  Star,
  Target,
  Zap,
  Play,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center">
        {/* Video Background Placeholder - Replace with actual video URL */}
        <div className="absolute inset-0">
          <div className="video-background bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
          <div className="video-overlay"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="animate-fade-in-up animate-stagger-1">
              <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2 animate-float">
                December 7, 2025 • Puri, Odisha, India
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="gradient-text animate-gradient-shift">Students Global</span>
                <br />
                <span className="text-foreground">Summit 2025</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                Awareness on the governance of AI & its Ethics
              </p>
              <p className="text-lg text-bg mb-12 max-w-3xl mx-auto leading-relaxed">
                Fostering diplomatic dialogue, cultural exchange, and critical collaboration among future leaders,
                promoting technological equity for a more inclusive global society.
              </p>
            </div>

            <div className="animate-fade-in-up animate-stagger-2 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button asChild size="lg" className="animate-pulse-glow text-xl px-10 py-4 h-auto">
                <Link href="/register">
                  Register Now <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-xl px-10 py-4 h-auto bg-transparent border-2 hover:bg-white hover:text-primary"
              >
                <Link href="/schedule">
                  <Play className="mr-3 w-6 h-6" />
                  Watch Promo
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animate-stagger-3">
              <div className="text-center professional-card p-6 rounded-xl bg-card/50 backdrop-blur-sm">
                <div className="text-4xl font-bold gradient-text mb-3">200</div>
                <div className="text-muted-foreground font-medium">Global Participants</div>
              </div>
              <div className="text-center professional-card p-6 rounded-xl bg-card/50 backdrop-blur-sm">
                <div className="text-4xl font-bold gradient-text mb-3">₹5.5L</div>
                <div className="text-muted-foreground font-medium">Total Prize Money</div>
              </div>
              <div className="text-center professional-card p-6 rounded-xl bg-card/50 backdrop-blur-sm">
                <div className="text-4xl font-bold gradient-text mb-3">3</div>
                <div className="text-muted-foreground font-medium">Days of Innovation</div>
              </div>
              <div className="text-center professional-card p-6 rounded-xl bg-card/50 backdrop-blur-sm">
                <div className="text-4xl font-bold gradient-text mb-3">100+</div>
                <div className="text-muted-foreground font-medium">Elite Universities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">The Global Technocracy Workshop</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              High-stakes, team-based debate on AI ethics and international collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Card className="professional-card border-primary/20 shadow-2xl bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Trophy className="w-8 h-8 text-secondary animate-float" />
                    Competition Topic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg italic mb-6 leading-relaxed font-medium text-muted-foreground">
                    "The benefits of rapidly advancing Artificial Intelligence can only be realized through comprehensive international collaboration on its ethical development and deployment."
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-base">Policy drafting and strategic solution generation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-base">Critical thinking and diplomatic skills development</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-right">
              <div className="grid gap-6">
                <Card className="professional-card bg-gradient-to-r from-secondary/20 to-secondary/10 border-secondary/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-secondary mb-2">1st Prize</div>
                        <div className="text-muted-foreground font-medium">Winner</div>
                      </div>
                      <div className="text-4xl font-bold gradient-text">₹3,00,000</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="professional-card bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">2nd Prize</div>
                        <div className="text-muted-foreground font-medium">Runner-up</div>
                      </div>
                      <div className="text-4xl font-bold gradient-text">₹1,50,000</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="professional-card bg-gradient-to-r from-muted/50 to-muted/25 border-muted backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold mb-2">3rd Prize</div>
                        <div className="text-muted-foreground font-medium">Third Place</div>
                      </div>
                      <div className="text-4xl font-bold gradient-text">₹1,00,000</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Event Details</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about the summit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="professional-card text-center bg-card/80 backdrop-blur-sm animate-fade-in-up animate-stagger-1">
              <CardHeader className="pb-4">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
                <CardTitle className="text-2xl">When</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-3 gradient-text">December 7, 2025</p>
                <p className="text-muted-foreground font-medium">3 Days of Innovation</p>
                <p className="text-sm text-muted-foreground mt-2">Puri, Odisha, India</p>
              </CardContent>
            </Card>

            <Card className="professional-card text-center bg-card/80 backdrop-blur-sm animate-fade-in-up animate-stagger-2">
              <CardHeader className="pb-4">
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-6 animate-float" />
                <CardTitle className="text-2xl">Where</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-3 gradient-text">MayFair, Puri</p>
                <p className="text-muted-foreground font-medium">Odisha, India</p>
                <p className="text-sm text-muted-foreground mt-2">Cultural Heritage City</p>
              </CardContent>
            </Card>

            <Card className="professional-card text-center bg-card/80 backdrop-blur-sm animate-fade-in-up animate-stagger-3">
              <CardHeader className="pb-4">
                <Users className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
                <CardTitle className="text-2xl">Who</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-3 gradient-text">200 Participants</p>
                <p className="text-muted-foreground font-medium">Elite Global Students</p>
                <p className="text-sm text-muted-foreground mt-2">100+ Universities</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center animate-fade-in-up animate-stagger-4">
            <Button asChild size="lg" className="text-xl px-10 py-4 h-auto animate-pulse-glow">
              <Link href="/schedule">
                View Full Schedule <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Why Attend the Summit?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unique opportunities for future global leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="professional-card animate-fade-in-up animate-stagger-1 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Incubation Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Present innovative solutions to government-backed incubation programs and leading technology companies
                  for mentorship and resources.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-fade-in-up animate-stagger-2 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Exclusive Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Access to high-value post-summit courses: Prompt Engineering, AI Ethics & Governance, Applied Machine
                  Learning, and Generative AI.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-fade-in-up animate-stagger-3 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Cultural Immersion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Guided visits to Jagannath Temple and Konark Temple, authentic Odia cultural programs, and traditional
                  cuisine experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-fade-in-up animate-stagger-4 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with 200 elite participants from top global universities and build lifelong professional
                  relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-fade-in-up animate-stagger-5 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Gain recognition from government dignitaries, industry leaders, and academic institutions for your
                  contributions to AI governance.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-fade-in-up animate-stagger-6 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Post-Summit Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Join an exclusive online platform for continuous collaboration, networking, and ongoing project
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white animate-gradient-shift relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Ready to Shape the Future of AI?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed animate-fade-in-up animate-stagger-1">
            Join 200 elite students from around the world in this groundbreaking summit. Register now and be part of the
            conversation that will define tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-stagger-2">
            <Button asChild size="lg" variant="secondary" className="text-xl px-10 py-4 h-auto animate-pulse-glow">
              <Link href="/register">Register Now - From $497</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-xl px-10 py-4 h-auto border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}