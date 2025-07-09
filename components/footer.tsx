import Link from "next/link"
import { Mail, Linkedin, Twitter, Github, Terminal, Code, Zap, Shield } from "lucide-react"

export default function Footer() {
  const services = [
    { name: "Software Documentation", href: "/services/software-documentation" },
    { name: "AI Solutions", href: "/services/artificial-intelligence" },
    { name: "Full-Stack Development", href: "/services/frontend" },
    { name: "SEO Services", href: "/services/seo" },
  ]

  const resources = [
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Blog", href: "/resources/blog" },
    { name: "About Us", href: "/about" },
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white">Inovara Tech</span>
                <span className="text-xs font-mono text-gray-400 -mt-1">{"// Building Tomorrow"}</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Empowering enterprises with cutting-edge technology solutions. From AI automation to cloud-native
              architectures.
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 group"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-400" />
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <Mail className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="text-white font-medium text-sm">hello@inovaratech.com</div>
                  <div className="text-gray-400 text-xs">Response within 24h</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <div className="text-blue-300 text-sm font-mono">{"> Ready to start your project?"}</div>
                <Link
                  href="/get-quote"
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  Get a free consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>© 2024 Inovara Tech. All rights reserved.</span>
            <span className="hidden md:block font-mono text-xs">{"// Built with ❤️ and ☕"}</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
