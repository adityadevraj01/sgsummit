import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Globe,
  Utensils,
  Camera,
  Award,
  Lightbulb,
  MessageSquare,
  Plane,
} from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Event Schedule</h1>
            <p className="text-xl text-muted-foreground mb-8">
              3 days of innovation, collaboration, and cultural immersion
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                December 7, 2025
              </Badge>
              <Badge variant="outline" className="text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                MayFair, Puri, Odisha
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Users className="w-4 h-4 mr-2" />
                200 Participants
              </Badge>
            </div>
          </div>

          {/* Schedule Tabs */}
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1" className="text-sm md:text-base">
                Day 1 - Inauguration
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-sm md:text-base">
                Day 2 - Workshop Challenge
              </TabsTrigger>
              <TabsTrigger value="day3" className="text-sm md:text-base">
                Day 3 - Culture & Awards
              </TabsTrigger>
            </TabsList>

            {/* Day 1 */}
            <TabsContent value="day1" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Day 1: Formal Inauguration & Diplomatic Foundations</h2>
                <p className="text-muted-foreground">Setting the stage for global collaboration</p>
              </div>

              <div className="space-y-6">
                {/* Morning Session */}
                <Card className="animate-fade-in-up">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        Morning Session (09:00 - 13:00)
                      </CardTitle>
                      <Badge variant="secondary">Grand Inauguration</Badge>
                    </div>
                    <CardDescription>Official opening ceremony and keynote addresses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          09:00-09:30
                        </div>
                        <div>
                          <h4 className="font-medium">Delegate Welcome & Registration Check-in</h4>
                          <p className="text-sm text-muted-foreground">Final registration and welcome reception</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          09:30-10:00
                        </div>
                        <div>
                          <h4 className="font-medium">Dignitary Arrival & Welcome Procession</h4>
                          <p className="text-sm text-muted-foreground">Official welcome for distinguished guests</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          10:00-11:00
                        </div>
                        <div>
                          <h4 className="font-medium">Official Lamp Lighting & Flag Hosting</h4>
                          <p className="text-sm text-muted-foreground">
                            Ceremonial opening with flags of all participating countries
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              Keynote by Government of Odisha
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          11:00-11:30
                        </div>
                        <div>
                          <h4 className="font-medium">Inaugural Address by International Student Leader</h4>
                          <p className="text-sm text-muted-foreground">
                            Inspiring address on global impact and youth leadership
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          11:30-12:00
                        </div>
                        <div>
                          <h4 className="font-medium">Opening Remarks by Partner Institutions</h4>
                          <p className="text-sm text-muted-foreground">
                            VSSUT, IEEE, and partner university representatives
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          12:00-13:00
                        </div>
                        <div>
                          <h4 className="font-medium">Expert Panel: "The Global Landscape of AI"</h4>
                          <p className="text-sm text-muted-foreground">
                            Opportunities and challenges in AI development
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lunch */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Grand Inauguration Lunch (13:00 - 14:00)</h4>
                        <p className="text-sm text-muted-foreground">Networking lunch with authentic Odia cuisine</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Afternoon Session */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-secondary" />
                      Afternoon Session (14:00 - 17:00)
                    </CardTitle>
                    <CardDescription>Country perspectives and collaborative brainstorming</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          14:00-16:00
                        </div>
                        <div>
                          <h4 className="font-medium">Country Perspective Presentations</h4>
                          <p className="text-sm text-muted-foreground">
                            Each delegation presents their nation's stance on AI development and ethics (5-7 min each)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          16:00-17:00
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Interactive Session: "Setting the Stage for Global Governance"
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Facilitated group discussion preparing for the main challenge
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Evening */}
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-primary" />
                      Evening Program (19:00 onwards)
                    </CardTitle>
                    <CardDescription>Welcome reception and cultural showcase</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-background/80 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          19:00-20:00
                        </div>
                        <div>
                          <h4 className="font-medium">Networking Mixer</h4>
                          <p className="text-sm text-muted-foreground">Informal networking and relationship building</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-background/80 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          20:00-21:00
                        </div>
                        <div>
                          <h4 className="font-medium">Authentic Odia Cultural Performance</h4>
                          <p className="text-sm text-muted-foreground">
                            Traditional Odissi dance and music performances
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-background/80 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          21:00+
                        </div>
                        <div>
                          <h4 className="font-medium">Gala Welcome Dinner</h4>
                          <p className="text-sm text-muted-foreground">Featuring local and international cuisine</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Day 2 */}
            <TabsContent value="day2" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Day 2: The Global Technocracy Workshop</h2>
                <p className="text-muted-foreground">Full-day workshop challenge with compulsory sessions, guided breaks, and mentoring — final results announced on Day 3 by distinguished leaders</p>
              </div>

              <div className="space-y-6">
                {/* Competition Alert */}
                <Card className="border-secondary bg-secondary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Trophy className="w-8 h-8 text-secondary" />
                      <div>
                        <h3 className="text-lg font-bold">Competition Day</h3>
                        <p className="text-muted-foreground">
                          Teams collaborate in the workshop on: "This house believes that the benefits of rapidly advancing AI can only be
                          realized through comprehensive international collaboration"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Morning Competition */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      Morning Session (09:00 - 13:00)
                    </CardTitle>
                    <CardDescription>Preliminary rounds and team preparation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          09:00-09:30
                        </div>
                        <div>
                          <h4 className="font-medium">Delegate Briefing & Strategy Session</h4>
                          <p className="text-sm text-muted-foreground">Final instructions and team preparation time</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          09:30-12:30
                        </div>
                        <div>
                          <h4 className="font-medium">Parallel Debate Sessions - Preliminary Rounds</h4>
                          <p className="text-sm text-muted-foreground">
                            Teams compete in preliminary rounds with live judge feedback
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              Multiple Venues
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Confidential Scoring
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          12:30-13:00
                        </div>
                        <div>
                          <h4 className="font-medium">Judges' Initial Deliberation</h4>
                          <p className="text-sm text-muted-foreground">
                            Selection of finalist teams for afternoon rounds
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lunch */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Competition Lunch Break (13:00 - 14:00)</h4>
                        <p className="text-sm text-muted-foreground">Refreshments and team strategy discussions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Afternoon Finals */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-secondary" />
                      Afternoon Session (14:00 - 17:00)
                    </CardTitle>
                    <CardDescription>Semi-finals and grand finals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          14:00-14:30
                        </div>
                        <div>
                          <h4 className="font-medium">Announcement of Finalist Teams</h4>
                          <p className="text-sm text-muted-foreground">
                            Public announcement of teams advancing to finals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          14:30-16:00
                        </div>
                        <div>
                          <h4 className="font-medium">The Global Technocracy Workshop Finals</h4>
                          <p className="text-sm text-muted-foreground">
                            Finalist teams present refined policy proposals to judges and delegates
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className="text-xs">₹5.5L Total Prizes</Badge>
                            <Badge variant="outline" className="text-xs">
                              Live Audience
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          16:00-17:00
                        </div>
                        <div>
                          <h4 className="font-medium">Judges' Final Deliberation</h4>
                          <p className="text-sm text-muted-foreground">
                            Closed session to determine winners (results announced Day 3)
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Evening Networking */}
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Evening Program (19:30 onwards)
                    </CardTitle>
                    <CardDescription>Delegate and mentor interaction night</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-background/80 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          19:30-21:00
                        </div>
                        <div>
                          <h4 className="font-medium">Informal Networking & Mentor Meet-up</h4>
                          <p className="text-sm text-muted-foreground">
                            Relaxed professional networking with industry mentors and experts
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-background/80 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          21:00+
                        </div>
                        <div>
                          <h4 className="font-medium">Dinner & Continued Networking</h4>
                          <p className="text-sm text-muted-foreground">Casual dinner with ongoing conversations</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Day 3 */}
            <TabsContent value="day3" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Day 3: Policy, Prizes, and Legacy</h2>
                <p className="text-muted-foreground">Cultural immersion and celebratory conclusion</p>
              </div>

              <div className="space-y-6">
                {/* Cultural Excursion */}
                <Card className="bg-gradient-to-r from-secondary/5 to-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-secondary" />
                      Morning Session (09:00 - 13:30)
                    </CardTitle>
                    <CardDescription>Cultural immersion and exploration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-background/80 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          09:00-10:00
                        </div>
                        <div>
                          <h4 className="font-medium">Transportation Boarding</h4>
                          <p className="text-sm text-muted-foreground">Departure for cultural excursion</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          10:30-12:30
                        </div>
                        <div>
                          <h4 className="font-medium">Guided Excursion to Konark Sun Temple</h4>
                          <p className="text-sm text-muted-foreground">
                            UNESCO World Heritage Site visit with historical and architectural significance
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              UNESCO Heritage
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Guided Tour
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-background/80 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          12:30-13:30
                        </div>
                        <div>
                          <h4 className="font-medium">Return to Puri</h4>
                          <p className="text-sm text-muted-foreground">Journey back to summit venue</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lunch */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Cultural Excursion Lunch (13:30 - 14:30)</h4>
                        <p className="text-sm text-muted-foreground">Refreshments after temple visit</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Policy Session */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      Afternoon Session (15:00 - 17:00)
                    </CardTitle>
                    <CardDescription>Final policy drafting and presentations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          15:00-15:30
                        </div>
                        <div>
                          <h4 className="font-medium">Collaborative Policy Drafting Session</h4>
                          <p className="text-sm text-muted-foreground">
                            Teams work with mentors to finalize policy proposals for publication
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-2 text-sm font-medium text-secondary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          15:30-16:30
                        </div>
                        <div>
                          <h4 className="font-medium">Final Policy Presentations</h4>
                          <p className="text-sm text-muted-foreground">
                            Formal showcase of finalized policy briefs demonstrating summit outcomes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          16:30-17:00
                        </div>
                        <div>
                          <h4 className="font-medium">Open-Floor Q&A Session</h4>
                          <p className="text-sm text-muted-foreground">
                            Reflection session with organizing committee and mentors
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Closing Ceremony */}
                <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Evening Program (18:30 onwards)
                    </CardTitle>
                    <CardDescription className="text-white/90">Closing ceremony and farewell gala</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          18:30-19:00
                        </div>
                        <div>
                          <h4 className="font-medium">Arrival & Refreshments</h4>
                          <p className="text-sm text-white/80">Final gathering preparation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-white/20 rounded-lg border border-white/30">
                        <div className="flex items-center gap-2 text-sm font-medium min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          19:00-19:30
                        </div>
                        <div>
                          <h4 className="font-medium">Awards Presentation - The Moment!</h4>
                          <p className="text-sm text-white/80">Announcement and presentation of competition winners</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              1st: ₹3,00,000
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              2nd: ₹1,50,000
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              3rd: ₹1,00,000
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          19:30-20:00
                        </div>
                        <div>
                          <h4 className="font-medium">Closing Keynote Address</h4>
                          <p className="text-sm text-white/80">
                            Motivational speech on youth leadership and future impact
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          20:00-20:30
                        </div>
                        <div>
                          <h4 className="font-medium">Vote of Thanks & Official Farewell</h4>
                          <p className="text-sm text-white/80">
                            Gratitude and official closing by organizing committee
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2 text-sm font-medium min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          20:30+
                        </div>
                        <div>
                          <h4 className="font-medium">Farewell Gala Dinner & Final Networking</h4>
                          <p className="text-sm text-white/80">Celebration dinner and lasting connections</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Join This Incredible Journey?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience 3 days of innovation, competition, cultural immersion, and networking with 200 elite
                  students from around the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 py-3">
                    <Link href="/register">
                      Register Now <Plane className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3 bg-transparent">
                    <Link href="/contact">Contact Us</Link>
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