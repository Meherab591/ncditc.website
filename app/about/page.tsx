import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About NCDITC</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Learn about our mission, vision, and the values that drive us forward
            </p>
          </div>

          {/* Club Logos */}
          <div className="flex justify-center items-center gap-8 mb-16">
            <Image
              src="/images/college-logo.jpeg"
              alt="Noubahini College Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
            <Image src="/images/club-logo.png" alt="NCDITC Logo" width={120} height={120} className="rounded-full" />
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Noubahini College Dhaka Information Technology Club (NCDITC) is a student-led organization
                    dedicated to fostering a passion for technology and innovation among students at Noubahini College
                    Dhaka.
                  </p>
                  <p>
                    Founded with the vision of creating a vibrant tech community, NCDITC provides a platform for
                    students to explore various aspects of information technology, from programming and web development
                    to artificial intelligence and cybersecurity.
                  </p>
                  <p>
                    We organize regular workshops, seminars, hackathons, and project showcases to help our members
                    develop practical skills and stay updated with the latest technological trends. Our club is more
                    than just a learning space—it's a community where friendships are formed, ideas are shared, and
                    innovation thrives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower students with technical knowledge and practical skills, fostering innovation and preparing
                  them for successful careers in technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading technology club in Bangladesh, recognized for producing skilled tech
                  professionals and innovative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovation, collaboration, continuous learning, inclusivity, and excellence in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Activities */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Technical Workshops</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Regular hands-on sessions covering programming languages, frameworks, and emerging technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Hackathons</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Competitive coding events where teams build innovative solutions to real-world problems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Project Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Collaborative projects that help members build practical experience and portfolio-worthy work.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Guest Lectures</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sessions with industry professionals sharing insights and career guidance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Study Groups</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Peer learning sessions for exam preparation and skill development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Tech Talks</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Discussions on latest tech trends, innovations, and industry developments.
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
