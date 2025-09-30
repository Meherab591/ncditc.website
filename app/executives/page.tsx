import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Linkedin, Github } from "lucide-react"

const executives = [
  {
    name: "Ahmed Rahman",
    role: "President",
    department: "Computer Science",
    year: "3rd Year",
    image: "/professional-male-student.png",
    email: "ahmed@example.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Fatima Khan",
    role: "Vice President",
    department: "Software Engineering",
    year: "3rd Year",
    image: "/professional-female-student.png",
    email: "fatima@example.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Karim Hassan",
    role: "General Secretary",
    department: "Information Technology",
    year: "2nd Year",
    image: "/professional-male-student-2.jpg",
    email: "karim@example.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Nadia Islam",
    role: "Treasurer",
    department: "Computer Science",
    year: "2nd Year",
    image: "/professional-female-student-2.jpg",
    email: "nadia@example.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Rafiq Ahmed",
    role: "Technical Lead",
    department: "Software Engineering",
    year: "3rd Year",
    image: "/professional-male-student-3.jpg",
    email: "rafiq@example.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sadia Begum",
    role: "Event Coordinator",
    department: "Information Technology",
    year: "2nd Year",
    image: "/professional-female-student-3.jpg",
    email: "sadia@example.com",
    linkedin: "#",
    github: "#",
  },
]

export default function ExecutivesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Executive Committee</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Meet the dedicated leaders driving NCDITC forward
            </p>
          </div>

          {/* Executives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={executive.image || "/placeholder.svg"} alt={executive.name} />
                    <AvatarFallback className="text-2xl">
                      {executive.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-xl mb-1">{executive.name}</h3>
                  <p className="text-primary font-semibold mb-2">{executive.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{executive.department}</p>
                  <p className="text-sm text-muted-foreground mb-4">{executive.year}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={`mailto:${executive.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={executive.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={executive.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
