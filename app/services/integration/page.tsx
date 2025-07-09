import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Workflow, Database, Cloud, Zap, Terminal, Link2, Settings, Globe } from "lucide-react"
import Link from "next/link"

export default function IntegrationPage() {
  const benefits = [
    "Eliminate data silos and improve information flow across systems",
    "Reduce manual work through automated data synchronization",
    "Improve decision-making with unified, real-time data access",
    "Scale operations without increasing administrative overhead",
    "Enhance customer experience with seamless service delivery",
    "Reduce errors and inconsistencies from manual data entry",
    "Enable new business capabilities through connected systems",
    "Future-proof your technology stack with flexible integrations",
  ]

  const services = [
    {
      title: "API Integration",
      description: "Connect disparate systems through robust API connections",
      icon: Link2,
      features: [
        "REST & GraphQL APIs",
        "Webhook Implementation",
        "Rate Limiting & Security",
        "Error Handling & Retry Logic",
      ],
    },
    {
      title: "Database Integration",
      description: "Synchronize data across multiple database systems",
      icon: Database,
      features: ["Real-time Sync", "ETL Processes", "Data Transformation", "Conflict Resolution"],
    },
    {
      title: "Cloud Integration",
      description: "Connect cloud services and on-premise systems seamlessly",
      icon: Cloud,
      features: ["Multi-cloud Setup", "Hybrid Architecture", "Service Mesh", "Load Balancing"],
    },
    {
      title: "Workflow Automation",
      description: "Automate business processes across integrated systems",
      icon: Workflow,
      features: ["Process Orchestration", "Event-driven Architecture", "Business Rules Engine", "Monitoring & Alerts"],
    },
  ]

  const integrations = [
    "Salesforce & CRM Systems",
    "ERP & Financial Systems",
    "E-commerce Platforms",
    "Marketing Automation",
    "Payment Gateways",
    "Analytics & BI Tools",
    "Communication APIs",
    "Cloud Storage Services",
    "Authentication Systems",
    "Monitoring & Logging",
    "CI/CD Pipelines",
    "Third-party APIs",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono mb-8">
            <Terminal className="h-4 w-4" />
            <span>{"> System Integration"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            System Integration & <span className="gradient-text">API Connectivity</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Connect your business systems and unlock the power of unified data. We build seamless integrations that
            eliminate silos and create a cohesive technology ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Start Integration <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-transparent"
            >
              <Link href="/resources/case-studies">View Integration Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Integration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive integration solutions that connect your entire technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card border-slate-700/50 hover:border-blue-500/50 transition-all group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
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
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 font-mono">
                <Terminal className="h-3 w-3 mr-1" />
                Integration Success
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">E-commerce Platform Unification</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We integrated a multi-channel e-commerce operation, connecting Shopify, Amazon, inventory management,
                and accounting systems, reducing order processing time by 75% and eliminating data entry errors.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Real-time Inventory Sync:</span>
                    <p className="text-gray-300 text-sm mt-1">Automated inventory updates across all sales channels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Order Management:</span>
                    <p className="text-gray-300 text-sm mt-1">Unified order processing and fulfillment workflow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Financial Integration:</span>
                    <p className="text-gray-300 text-sm mt-1">Automatic accounting entries and financial reporting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Customer Analytics:</span>
                    <p className="text-gray-300 text-sm mt-1">Unified customer data and behavioral insights</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-400" />
                  Results Achieved:
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold gradient-text">75%</div>
                    <div className="text-sm text-gray-400">Faster Processing</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-gray-400">Error Reduction</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-400" />
                  Integration Capabilities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                    >
                      <Globe className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{integration}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-purple-400" />
                  Integration Process
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-300">System Analysis & Mapping</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-300">Integration Design & Planning</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-300">Development & Testing</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-gray-300">Deployment & Monitoring</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why System Integration Matters</h2>
            <p className="text-xl text-gray-300">
              Connected systems drive efficiency, reduce costs, and enable business growth
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Connect Your Systems?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's build integrations that eliminate data silos and create a unified, efficient technology ecosystem
              for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Start Your Integration Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
