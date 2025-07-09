import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Bot,
  Zap,
  Clock,
  DollarSign,
  BarChart,
  Workflow,
  Database,
  Mail,
  Terminal,
} from "lucide-react"
import Link from "next/link"

export default function AutomationPage() {
  const benefits = [
    "Reduce operational costs by up to 60% through process automation",
    "Eliminate human errors in repetitive tasks and data processing",
    "Free up your team to focus on strategic, high-value activities",
    "Improve customer response times and service quality",
    "Scale operations without proportional increase in workforce",
    "Ensure 24/7 availability for critical business processes",
    "Maintain consistent quality and compliance standards",
    "Generate detailed analytics and performance insights",
  ]

  const automationTypes = [
    {
      title: "Business Process Automation",
      description: "Streamline workflows, approvals, and routine business operations",
      icon: Workflow,
      examples: ["Invoice processing", "Employee onboarding", "Inventory management", "Report generation"],
    },
    {
      title: "Data Processing & Integration",
      description: "Automate data collection, transformation, and synchronization across systems",
      icon: Database,
      examples: ["CRM data sync", "Financial reporting", "Customer data migration", "Analytics dashboards"],
    },
    {
      title: "Customer Communication",
      description: "Intelligent chatbots and automated customer service solutions",
      icon: Mail,
      examples: ["Support ticket routing", "Email campaigns", "Lead qualification", "Follow-up sequences"],
    },
    {
      title: "Marketing Automation",
      description: "Personalized marketing campaigns and lead nurturing workflows",
      icon: BarChart,
      examples: ["Email marketing", "Social media posting", "Lead scoring", "Campaign optimization"],
    },
  ]

  const technologies = [
    "Zapier & Make.com Integration",
    "Custom Python & Node.js Scripts",
    "RPA (Robotic Process Automation)",
    "API Integrations & Webhooks",
    "AI-Powered Chatbots",
    "Workflow Management Systems",
    "Database Automation",
    "Cloud Function Deployment",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 font-mono">
            <Terminal className="w-3 h-3 mr-1" />
            AUTOMATION_SERVICES
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Business Process
            </span>
            <br />
            <span className="text-white">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation solutions. Reduce costs, eliminate errors,
            and scale efficiently while your team focuses on what matters most - growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 tech-glow"
            >
              <Link href="/get-quote">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 bg-transparent"
            >
              <Link href="/resources/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Automation Advantage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See immediate impact on your bottom line with measurable ROI from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">60%</div>
              <p className="text-gray-400">Average Cost Reduction</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">80%</div>
              <p className="text-gray-400">Time Savings</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <p className="text-gray-400">Error Reduction</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart className="h-8 w-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">3x</div>
              <p className="text-gray-400">Productivity Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Automation Solutions We Deliver</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple task automation to complex workflow orchestration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{type.title}</CardTitle>
                      <CardDescription className="text-gray-400">{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white mb-3">Common Use Cases:</h4>
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">{example}</span>
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
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 font-mono">
                <Terminal className="w-3 h-3 mr-1" />
                SUCCESS_STORY
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">E-commerce Order Processing Automation</h2>
              <p className="text-lg text-gray-300 mb-6">
                We automated the entire order fulfillment process for a growing e-commerce business, reducing processing
                time from 2 hours to 5 minutes per order while eliminating 99% of manual errors.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Order Processing:</span>
                    <p className="text-gray-400 text-sm">
                      Automated order validation, inventory checks, and payment processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Inventory Management:</span>
                    <p className="text-gray-400 text-sm">Real-time stock updates across multiple sales channels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Customer Communication:</span>
                    <p className="text-gray-400 text-sm">
                      Automated order confirmations, shipping updates, and delivery notifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Analytics & Reporting:</span>
                    <p className="text-gray-400 text-sm">Real-time dashboards and automated performance reports</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-lg border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">Results Achieved:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      96%
                    </div>
                    <div className="text-sm text-gray-400">Faster Processing</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      $50K
                    </div>
                    <div className="text-sm text-gray-400">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-lg border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <Bot className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-medium text-white mb-2">Our Approach</h4>
                <p className="text-sm text-gray-400">
                  We start with a thorough analysis of your current processes, identify automation opportunities, and
                  implement solutions that integrate seamlessly with your existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Automation?</h2>
            <p className="text-xl text-gray-300">
              Transform your business operations and unlock unprecedented efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-800/30 backdrop-blur-xl rounded-lg border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-12 border border-blue-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's identify the processes that are holding your business back and automate them for maximum efficiency.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 tech-glow"
            >
              <Link href="/get-quote">
                Start Your Automation Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
