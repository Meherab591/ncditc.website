import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Linkedin } from "lucide-react"

const moderators = [
  {
    name: "Dr. Mohammad Ali",
    role: "Faculty Advisor",
    department: "Computer Science Department",
    image: "/professor-male.jpg",
    email: "dr.ali@noubahini.edu.bd",
    linkedin: "#",
  },
  {
    name: "Prof. Ayesha Siddiqua",
    role: "Co-Advisor",
    department: "Information Technology Department",
    image: "/professor-female.jpg",
    email: "prof.ayesha@noubahini.edu.bd",
    linkedin: "#",
  },
  {
    name: "Mr. Tanvir Hossain",
    role: "Technical Mentor",
    department: "Software Engineering Department",
    image: "/professor-male-2.jpg",
    email: "tanvir@noubahini.edu.bd",
    linkedin: "#",
  },
  {
    name: "Ms. Razia Sultana",
    role: "Event Coordinator",
    department: "Computer Science Department",
    image: "/professor-female-2.jpg",
    email: "razia@noubahini.edu.bd",
    linkedin: "#",
  },
]

export default function ModeratorsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty Moderators</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our dedicated faculty members who guide and support the club
            </p>
          </div>

          {/* Moderators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {moderators.map((moderator, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={moderator.image || "/placeholder.svg"} alt={moderator.name} />
                    <AvatarFallback className="text-2xl">
                      {moderator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{moderator.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{moderator.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{moderator.department}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={`mailto:${moderator.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={moderator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">About Our Moderators</h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Our faculty moderators play a crucial role in guiding NCDITC. They provide academic support,
                  mentorship, and help us organize events and activities. Their expertise and dedication ensure that our
                  club maintains high standards and continues to grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
