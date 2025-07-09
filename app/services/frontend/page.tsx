import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Smartphone,
  Palette,
  Zap,
  Monitor,
  Code,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function FrontendPage() {
  const benefits = [
    "Increase user engagement with intuitive, responsive interfaces",
    "Improve conversion rates through optimized user experience design",
    "Reduce development time with reusable component libraries",
    "Ensure cross-browser compatibility and mobile responsiveness",
    "Enhance brand perception with modern, professional designs",
    "Boost performance with optimized code and best practices",
    "Future-proof applications with scalable architecture",
    "Improve accessibility compliance for broader user reach",
  ]

  const services = [
    {
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality",
      icon: Palette,
      features: ["User Research & Personas", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing"],
    },
    {
      title: "React Development",
      description: "Modern React applications with hooks, context, and best practices",
      icon: Code,
      features: ["Component Architecture", "State Management", "Performance Optimization", "Testing Integration"],
    },
    {
      title: "Responsive Design",
      description: "Mobile-first designs that work perfectly on all devices",
      icon: Smartphone,
      features: ["Mobile Optimization", "Progressive Web Apps", "Cross-browser Testing", "Performance Tuning"],
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast applications that keep users engaged",
      icon: Zap,
      features: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "Core Web Vitals"],
    },
  ]

  const technologies = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Styled Components",
    "Framer Motion",
    "React Query/SWR",
    "Zustand/Redux",
    "Storybook",
    "Jest & Testing Library",
    "Webpack & Vite",
    "Figma & Adobe XD",
    "Progressive Web Apps",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-mono mb-8">
            <Terminal className="h-4 w-4" />
            <span>{"> Frontend Development"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            Frontend Development & <span className="gradient-text">UI/UX Design</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Create stunning, high-performance user interfaces that engage your audience and drive conversions. From
            concept to deployment, we build modern web applications that users love to interact with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-transparent"
            >
              <Link href="/resources/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Frontend Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end frontend solutions that combine beautiful design with powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card border-slate-700/50 hover:border-purple-500/50 transition-all group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-400">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 font-mono">
                <Terminal className="h-3 w-3 mr-1" />
                Success Story
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">SaaS Dashboard Redesign</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We completely redesigned a complex SaaS dashboard, improving user satisfaction by 85% and reducing
                support tickets by 60% through intuitive UI/UX design and modern React architecture.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">User Research:</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Conducted interviews with 100+ users to identify pain points
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Design System:</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Created comprehensive component library and style guide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Performance:</span>
                    <p className="text-gray-300 text-sm mt-1">Achieved 90+ Lighthouse scores across all metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Accessibility:</span>
                    <p className="text-gray-300 text-sm mt-1">WCAG 2.1 AA compliance for inclusive user experience</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  Results Achieved:
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold gradient-text">85%</div>
                    <div className="text-sm text-gray-400">User Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">60%</div>
                    <div className="text-sm text-gray-400">Fewer Support Tickets</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-purple-400" />
                  Technologies We Use
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-colors"
                    >
                      <Monitor className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="h-4 w-4 text-pink-400" />
                  Our Development Process
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-300">Discovery & User Research</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-300">Design & Prototyping</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-300">Development & Testing</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-gray-300">Launch & Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Invest in Professional Frontend Development?
            </h2>
            <p className="text-xl text-gray-300">
              Great frontend development is the difference between users who stay and users who leave
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 glass-card rounded-xl hover:scale-105 transition-transform"
              >
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Amazing User Experiences?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's build frontend solutions that not only look great but perform exceptionally and drive real business
              results.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Start Your Frontend Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
