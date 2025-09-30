import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Lightbulb, Trophy, ArrowRight, Terminal } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Terminal className="h-4 w-4" />
                Innovate. Create. Evolve.
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                NOUBAHINI COLLEGE DHAKA
                <span className="block text-primary mt-2">IT CLUB</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                Join the premier technology club at Noubahini College Dhaka. Explore cutting-edge technologies,
                participate in workshops, hackathons, and build amazing projects with fellow tech enthusiasts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">NCDITC Terminal</span>
                </div>
                <div className="bg-background rounded p-4 font-mono text-sm">
                  <div className="text-green-500">
                    <span className="text-primary">user@ncditc</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-muted-foreground">$</span> ./welcome.sh
                  </div>
                  <div className="mt-2 text-muted-foreground">Initializing NCDITC...</div>
                  <div className="mt-1 text-primary">✓ Loading innovation modules</div>
                  <div className="mt-1 text-primary">✓ Connecting tech enthusiasts</div>
                  <div className="mt-1 text-primary">✓ Building the future</div>
                  <div className="mt-3 text-foreground">Welcome to NCDITC! 🚀</div>
                  <div className="mt-1 animate-pulse">_</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the opportunities and resources available to all NCDITC members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Workshops</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regular hands-on workshops on web development, AI, mobile apps, and more
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connect with like-minded students and build lasting friendships
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Projects</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Work on real-world projects and build your portfolio
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Competitions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Participate in hackathons and coding competitions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-blue-500/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Join Our Community?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Become a part of NCDITC and start your journey in technology with us
              </p>
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
