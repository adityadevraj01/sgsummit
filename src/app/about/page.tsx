import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Globe,
  Target,
  Users,
  Award,
  Building,
  Handshake,
  BookOpen,
  Trophy,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react"

export default function AboutPage() {
  const partners = [
    {
      name: "E-Cell VSSUT",
      role: "Organizing Committee",
      description: "Leading entrepreneurship cell driving innovation",
    },
    { name: "IIM Sambalpur", role: "Academic Partner", description: "Premier management institution" },
    { name: "VSSUT", role: "Host University", description: "Veer Surendra Sai University of Technology" },
    { name: "IEEE", role: "Co-Partner", description: "Institute of Electrical and Electronics Engineers" },
  ]

  const objectives = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Foster international cooperation on AI governance and ethical development among future leaders.",
    },
    {
      icon: Target,
      title: "Policy Innovation",
      description: "Develop tangible policy frameworks and strategic solutions for AI governance challenges.",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Cultivate diplomatic skills, critical thinking, and collaborative problem-solving abilities.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Exchange",
      description: "Facilitate interdisciplinary learning and cultural exchange among elite global students.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Students Global Summit 2025</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A groundbreaking international conference exclusively designed for the next generation of global thought
              leaders, creating unprecedented opportunities for diplomatic dialogue and technological innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                December 7, 2025
              </Badge>
              <Badge variant="outline" className="text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Puri, Odisha, India
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Building className="w-4 h-4 mr-2" />
                Government of Odisha
              </Badge>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To foster diplomatic dialogue, cultural exchange, and critical collaboration among future leaders,
                  promoting technological equity and ensuring equal access to innovation for a more inclusive and
                  responsibly governed global society. This is a motivational conference designed to inspire the next
                  generation to shape the future.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-secondary" />
                  Our Vision for 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To create a global platform where elite students from top universities worldwide can engage in
                  high-level discourse on AI governance and ethics, developing tangible solutions that will influence
                  the digital future and bridge the gap between technological advancement and ethical responsibility.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Objectives */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Summit Objectives for 2025</h2>
              <p className="text-xl text-muted-foreground">
                Addressing critical challenges in AI governance through collaborative innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {objectives.map((objective, index) => {
                const Icon = objective.icon
                return (
                  <Card
                    key={index}
                    className="text-center animate-fade-in-up hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{objective.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{objective.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">The Global Technocracy Challenge</CardTitle>
                <CardDescription className="text-lg">
                  The centerpiece competition addressing AI governance through international collaboration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Competition Topic</h3>
                  <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6 mb-6">
                    "This house believes that the benefits of rapidly advancing Artificial Intelligence can only be
                    realized through comprehensive international collaboration on its ethical development and
                    deployment."
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="font-semibold mb-2">1st Prize</h4>
                    <p className="text-2xl font-bold text-secondary">₹3,00,000</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">2nd Prize</h4>
                    <p className="text-2xl font-bold text-primary">₹1,50,000</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">3rd Prize</h4>
                    <p className="text-2xl font-bold">₹1,00,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Target Audience */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Who Should Attend</h2>
              <p className="text-xl text-muted-foreground">Elite students and future leaders from around the world</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Target Participants
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Student Profile</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Elite student specialists, aged 18-30</li>
                      <li>• Students from top global universities</li>
                      <li>• 200 total participants expected</li>
                      <li>• 100 international students (primary focus)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Academic Disciplines</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Engineering & Computer Science</li>
                      <li>• Data Science & AI/ML</li>
                      <li>• AI Ethics & Policy Studies</li>
                      <li>• Related interdisciplinary fields</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-secondary" />
                    Participant Mindset
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ideal Candidates</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Driven, intellectual futuristic visionaries</li>
                      <li>• Aspiring innovators and policymakers</li>
                      <li>• Future entrepreneurs and diplomatic leaders</li>
                      <li>• Motivated to impact global tech advancement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What We Seek</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Passion for ethical AI development</li>
                      <li>• Interest in international collaboration</li>
                      <li>• Commitment to responsible innovation</li>
                      <li>• Desire to shape the digital future</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Partners & Collaborators */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Partners & Collaborators</h2>
              <p className="text-xl text-muted-foreground">Leading institutions supporting the summit</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="animate-fade-in-up hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Handshake className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {partner.role}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What Makes Us Unique */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">What Makes This Summit Unique</CardTitle>
                <CardDescription className="text-lg">
                  Creating unprecedented value for the global student community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">The Gap We Fill</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      There exists a significant void for high-level, interdisciplinary student platforms where future
                      leaders can contribute meaningfully to global tech governance. Traditional academic conferences
                      often lack the diplomatic gravitas, substantial prizes, and practical policy focus needed to
                      address real-world AI governance challenges while providing life-changing opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Our Unique Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Students Global Summit 2025 bridges this gap by providing the world's most prestigious student
                      platform with government backing, massive prize pools (₹5.5L+), luxury experiences, and direct
                      access to global leaders. We create a space where students can engage in meaningful discourse,
                      develop tangible policy solutions, and build networks that will influence the future of AI
                      governance while representing their countries on a global stage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Post-Summit Value */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Beyond the Summit</h2>
              <p className="text-xl text-muted-foreground">Lasting impact and continued engagement</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    <a href="https://discord.gg/jDTtjfzU" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Community Platform
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Exclusive online space for continuous collaboration and networking
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Specialized Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access to AI/Tech courses: Prompt Engineering, AI Ethics, Applied ML
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Incubation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continued connections for promising projects and mentorship
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Global Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lifelong professional and personal connections worldwide
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center animate-fade-in-up">
            <Card className="bg-gradient-to-r from-primary to-secondary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Be Part of This Historic Summit</h3>
                <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                  Join 200 elite students from around the world in shaping the future of AI governance. This is your
                  opportunity to make a lasting impact on global technology policy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                    <Link href="/register">
                      Register Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    <Link href="/schedule">View Schedule</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}