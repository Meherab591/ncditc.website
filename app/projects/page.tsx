import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "College Management System",
    description:
      "A comprehensive web application for managing student records, attendance, grades, and administrative tasks.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "In Progress",
    github: "#",
    demo: "#",
  },
  {
    title: "NCDITC Website",
    description: "Official website for the club featuring event management, member profiles, and project showcases.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Library System",
    description: "Digital library management system with book tracking, reservation, and recommendation features.",
    tags: ["Python", "Django", "MySQL", "Bootstrap"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
  {
    title: "Campus Navigator App",
    description: "Mobile application to help students navigate the campus and find classrooms, facilities, and events.",
    tags: ["React Native", "Firebase", "Google Maps API"],
    status: "In Progress",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Study Assistant",
    description: "An AI-powered chatbot that helps students with homework, exam preparation, and learning resources.",
    tags: ["Python", "OpenAI API", "Flask", "React"],
    status: "Planning",
    github: "#",
    demo: "#",
  },
  {
    title: "Event Management Portal",
    description:
      "Platform for organizing and managing college events, workshops, and competitions with registration features.",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    status: "In Progress",
    github: "#",
    demo: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore the innovative projects built by NCDITC members
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary/10 via-background to-blue-500/10 border-primary/20 inline-block">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-3">Have a Project Idea?</h2>
                <p className="text-muted-foreground mb-6 max-w-md text-pretty">
                  We're always looking for new project ideas and collaborators
                </p>
                <Button asChild>
                  <a href="/contact">Share Your Idea</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
