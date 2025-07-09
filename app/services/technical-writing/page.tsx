import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, FileText, Users, Target, BookOpen, Edit, Search } from "lucide-react"
import Link from "next/link"

export default function TechnicalWritingPage() {
  const benefits = [
    "Clear, user-friendly documentation that reduces support tickets",
    "Improved user onboarding and product adoption rates",
    "Enhanced brand credibility through professional content",
    "Better SEO performance with optimized technical content",
    "Streamlined internal processes with clear procedures",
    "Reduced training time for new team members",
    "Compliance with industry standards and regulations",
    "Increased customer satisfaction and retention",
  ]

  const services = [
    {
      title: "User Manuals & Guides",
      description: "Comprehensive user documentation that makes complex products accessible to all skill levels",
      icon: BookOpen,
    },
    {
      title: "Process Documentation",
      description: "Step-by-step procedures and workflows that ensure consistency across your organization",
      icon: Target,
    },
    {
      title: "UX Research & Content",
      description: "User-centered content strategy based on research and usability testing",
      icon: Users,
    },
    {
      title: "Technical Content Strategy",
      description: "Strategic planning for all your technical content needs and information architecture",
      icon: Edit,
    },
    {
      title: "Knowledge Base Creation",
      description: "Searchable, organized knowledge bases that empower users to find answers quickly",
      icon: Search,
    },
    {
      title: "Training Materials",
      description: "Educational content and training resources for internal teams and customers",
      icon: FileText,
    },
  ]

  const industries = [
    "SaaS & Technology Companies",
    "Healthcare & Medical Devices",
    "Financial Services",
    "Manufacturing & Engineering",
    "E-commerce & Retail",
    "Education & E-learning",
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-gray-800/50 text-orange-400 border border-orange-500/20 font-mono">
            $ technical-writing --user-focused
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Technical Writing
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Transform complex technical information into clear, actionable content that your users actually understand
            and use. From user manuals to UX research, we create content that bridges the gap between technology and
            people.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0 px-8 py-3"
          >
            <Link href="/get-quote">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Technical Writing Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We specialize in creating technical content that serves both your business goals and user needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center bg-gray-800/30 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                success_story.load()
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">SaaS Platform Documentation Overhaul</h2>
              <p className="text-lg text-gray-300 mb-6">
                We completely redesigned the user documentation for a growing SaaS platform, resulting in a 65%
                reduction in support tickets and 40% improvement in user onboarding completion rates.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">User Research & Analysis:</span>
                    <p className="text-gray-400 text-sm">Conducted interviews with 50+ users to identify pain points</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Content Restructuring:</span>
                    <p className="text-gray-400 text-sm">Reorganized 200+ articles with improved navigation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Interactive Elements:</span>
                    <p className="text-gray-400 text-sm">Added screenshots, videos, and step-by-step tutorials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Ongoing Maintenance:</span>
                    <p className="text-gray-400 text-sm">Established content update processes and style guides</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-semibold text-white mb-3">Results Achieved:</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      65%
                    </div>
                    <div className="text-sm text-gray-400">Fewer Support Tickets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      40%
                    </div>
                    <div className="text-sm text-gray-400">Better Onboarding</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Our Writing Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Discovery & Research</h4>
                    <p className="text-sm text-gray-400">Understanding your audience, product, and goals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Content Strategy</h4>
                    <p className="text-sm text-gray-400">Planning structure, tone, and information architecture</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Writing & Design</h4>
                    <p className="text-sm text-gray-400">Creating clear, engaging content with visual elements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Testing & Refinement</h4>
                    <p className="text-sm text-gray-400">User testing and iterative improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50">
                <span className="text-gray-300 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Professional Technical Writing Matters</h2>
            <p className="text-xl text-gray-400">
              Quality technical content is an investment that pays dividends in user satisfaction and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50"
              >
                <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Improve Your Technical Content?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create documentation and content that your users will actually read, understand, and act upon.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0 px-8 py-3"
            >
              <Link href="/get-quote">
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
