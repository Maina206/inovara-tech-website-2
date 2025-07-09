import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Bot,
  Smartphone,
  Puzzle,
  WorkflowIcon as Wordpress,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Network,
  Lock,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Software & API Documentation",
      description: "Developer-first documentation with interactive examples",
      icon: Code,
      href: "/services/software-documentation",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Automation & AI Solutions",
      description: "Intelligent workflows powered by cutting-edge AI",
      icon: Bot,
      href: "/services/automation",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Frontend & Backend Development",
      description: "Scalable applications built with modern tech stacks",
      icon: Smartphone,
      href: "/services/frontend",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "System Integration",
      description: "Seamless connectivity across complex architectures",
      icon: Puzzle,
      href: "/services/integration",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "WordPress & SEO",
      description: "High-performance websites optimized for search",
      icon: Wordpress,
      href: "/services/wordpress",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "AI Model Training & Data Annotation",
      description: "Custom ML models with precision-labeled datasets",
      icon: Brain,
      href: "/services/ai-training",
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  const whyChooseUs = [
    {
      title: "Agile Development",
      description: "Rapid iteration with continuous deployment",
      icon: Zap,
      color: "text-yellow-400",
    },
    {
      title: "Deep Tech Expertise",
      description: "Full-stack mastery across modern frameworks",
      icon: Target,
      color: "text-blue-400",
    },
    {
      title: "Security First",
      description: "Enterprise-grade security in every solution",
      icon: Shield,
      color: "text-green-400",
    },
    {
      title: "DevOps Culture",
      description: "Infrastructure as code with automated pipelines",
      icon: Users,
      color: "text-purple-400",
    },
  ]

  const techStack = [
    { name: "Cloud Native", icon: Cloud },
    { name: "AI/ML", icon: Brain },
    { name: "DevOps", icon: Terminal },
    { name: "Database", icon: Database },
    { name: "Microservices", icon: Network },
    { name: "Security", icon: Lock },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono mb-8">
            <Terminal className="h-4 w-4" />
            <span>{"> Building the future of technology"}</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="gradient-text">Smart</span> <span className="text-white">Solutions</span>
            <br />
            <span className="text-white">for</span> <span className="gradient-text">Tomorrow</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light">
            Empowering enterprises with <span className="text-blue-400 font-semibold">cutting-edge technology</span>,{" "}
            from AI automation to cloud-native architectures
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="service-button-primary">
              <Link href="/get-quote">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="service-button-outline bg-transparent">
              <Link href="/resources/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-16 px-4 border-y border-blue-500/20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-lg font-mono text-blue-400 mb-2">{"// Our Technology Stack"}</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-lg glass-effect hover:bg-white/20 transition-all duration-300 group"
              >
                <tech.icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-mono mb-6">
              <Cpu className="h-4 w-4" />
              <span>{"> What we build"}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end technology solutions designed for scale, performance, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white font-bold mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
                    <Link
                      href={service.href}
                      className="group-hover:translate-x-2 transform duration-300 inline-flex items-center"
                    >
                      Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-mono mb-6">
              <Shield className="h-4 w-4" />
              <span>{"> Why choose us"}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Built for <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine technical mastery with agile methodologies to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300">
                    <item.icon
                      className={`h-10 w-10 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", icon: Code },
              { number: "99.9%", label: "Uptime SLA", icon: Shield },
              { number: "50+", label: "Enterprise Clients", icon: Users },
              { number: "24/7", label: "Support Available", icon: Zap },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono mb-8">
            <Terminal className="h-4 w-4" />
            <span>{"> Ready to deploy?"}</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your ideas into scalable, high-performance solutions with our expert team
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="service-button-primary">
              <Link href="/get-quote">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="service-button-outline bg-transparent">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
