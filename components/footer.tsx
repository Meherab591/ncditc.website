import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/club-logo.png" alt="NCDITC Logo" width={48} height={48} className="rounded-full" />
              <div>
                <h3 className="font-bold text-lg">NCDITC</h3>
                <p className="text-sm text-muted-foreground">Innovate. Create. Evolve.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Noubahini College Dhaka Information Technology Club - Empowering students through technology and
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/executives" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Executives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Noubahini College Dhaka
                <br />
                Dhaka, Bangladesh
              </p>
              <a
                href="mailto:ncditc@example.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                ncditc@example.com
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NCDITC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
