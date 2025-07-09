import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Code, FileText, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function SoftwareDocumentationPage() {
  const benefits = [
    "Improved developer adoption and onboarding",
    "Reduced support tickets and queries",
    "Enhanced API usability and integration",
    "Clear, searchable documentation structure",
    "Interactive examples and code samples",
    "Version control and maintenance support",
  ]

  const features = [
    {
      title: "API Reference Documentation",
      description: "Comprehensive endpoint documentation with request/response examples",
      icon: Code,
    },
    {
      title: "Developer Guides",
      description: "Step-by-step tutorials and integration guides",
      icon: FileText,
    },
    {
      title: "Interactive Examples",
      description: "Live code samples and testing environments",
      icon: Zap,
    },
    {
      title: "User-Friendly Design",
      description: "Clean, searchable, and mobile-responsive documentation",
      icon: Users,
    },
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
          <Badge className="mb-4 bg-gray-800/50 text-cyan-400 border border-cyan-500/20 font-mono">
            $ docs --generate --interactive
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Software & API{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Clear, developer-friendly documentation and API references tailored to your software. Transform complex
            technical information into accessible, actionable content.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 px-8 py-3"
          >
            <Link href="/get-quote">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Deliver</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive documentation solutions that make your software accessible to developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-gray-800/30 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Project Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                case_study.execute()
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">E-commerce API Documentation Project</h2>
              <p className="text-lg text-gray-300 mb-6">
                We created comprehensive API documentation for a multi-vendor e-commerce platform, resulting in a 300%
                increase in developer adoption and 60% reduction in support tickets.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Complete REST API reference with 150+ endpoints</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Interactive testing environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">SDK documentation for 5 programming languages</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Comprehensive integration guides</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white bg-transparent"
              >
                View Full Case Study
              </Button>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2">GET /api/v1/products</div>
                <div className="text-gray-500">// Retrieve product catalog</div>
                <div className="mt-4 text-blue-400">Response:</div>
                <div className="text-white ml-2">{"{"}</div>
                <div className="text-white ml-4">"products": [...]</div>
                <div className="text-white ml-4">"pagination": {"{"}</div>
                <div className="text-white ml-6">"page": 1,</div>
                <div className="text-white ml-6">"total": 150</div>
                <div className="text-white ml-4">{"}"}</div>
                <div className="text-white ml-2">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Benefits of Professional Documentation</h2>
            <p className="text-xl text-gray-400">
              Well-crafted documentation is an investment that pays dividends in developer satisfaction and adoption
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50"
              >
                <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Improve Your Documentation?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create documentation that developers love to use and reference.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 px-8 py-3"
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
