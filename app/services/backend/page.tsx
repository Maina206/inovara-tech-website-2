import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Server, Database, Shield, Zap, Cloud, Code, Terminal, Cpu, Globe } from "lucide-react"
import Link from "next/link"

export default function BackendPage() {
  const benefits = [
    "Scale to millions of users with robust, high-performance architecture",
    "Ensure 99.9% uptime with reliable, fault-tolerant systems",
    "Protect sensitive data with enterprise-grade security measures",
    "Reduce operational costs through efficient resource utilization",
    "Enable rapid feature development with well-structured APIs",
    "Maintain data integrity with ACID-compliant database design",
    "Support global users with distributed, low-latency infrastructure",
    "Simplify maintenance with clean, documented, testable code",
  ]

  const services = [
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs that power modern applications",
      icon: Code,
      features: ["REST & GraphQL APIs", "API Documentation", "Rate Limiting & Throttling", "Versioning Strategy"],
    },
    {
      title: "Database Design",
      description: "Optimized database architecture for performance and scalability",
      icon: Database,
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup & Recovery"],
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud deployments on AWS, GCP, or Azure",
      icon: Cloud,
      features: ["Auto-scaling", "Load Balancing", "CDN Integration", "Monitoring & Alerts"],
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards",
      icon: Shield,
      features: ["Authentication & Authorization", "Data Encryption", "GDPR/HIPAA Compliance", "Security Audits"],
    },
  ]

  const technologies = [
    "Node.js & Express",
    "Python & Django/FastAPI",
    "PostgreSQL & MongoDB",
    "Redis & Elasticsearch",
    "Docker & Kubernetes",
    "AWS/GCP/Azure",
    "GraphQL & REST APIs",
    "Microservices Architecture",
    "CI/CD Pipelines",
    "Monitoring & Logging",
    "Message Queues",
    "Serverless Functions",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono mb-8">
            <Terminal className="h-4 w-4" />
            <span>{"> Backend Development"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            Backend Development & <span className="gradient-text">Cloud Infrastructure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Build the foundation of your digital success with scalable, secure, and high-performance backend systems.
            From APIs to databases, we create the invisible infrastructure that powers exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Build Your Backend <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-transparent"
            >
              <Link href="/resources/case-studies">View Architecture Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Performance That Scales</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our backend solutions are built to handle growth from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Server className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <p className="text-gray-300">Uptime Guarantee</p>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">&lt;100ms</div>
              <p className="text-gray-300">API Response Time</p>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">10M+</div>
              <p className="text-gray-300">Requests/Day</p>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <p className="text-gray-300">Security Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Backend Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive backend solutions that form the backbone of successful applications
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
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
                Architecture Success
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Fintech Platform Scaling</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We architected and built a high-frequency trading platform that processes over 1 million transactions
                per day with sub-50ms latency, handling $100M+ in daily trading volume.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Microservices Architecture:</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Distributed system with 15+ microservices for maximum scalability
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Real-time Processing:</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Event-driven architecture with Redis and message queues
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Security & Compliance:</span>
                    <p className="text-gray-300 text-sm mt-1">SOC 2 Type II compliance with end-to-end encryption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Auto-scaling Infrastructure:</span>
                    <p className="text-gray-300 text-sm mt-1">
                      Kubernetes deployment with automatic scaling based on demand
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-400" />
                  Performance Metrics:
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold gradient-text">1M+</div>
                    <div className="text-sm text-gray-400">Daily Transactions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">45ms</div>
                    <div className="text-sm text-gray-400">Average Latency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  Backend Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                    >
                      <Server className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-cyan-400" />
                  Our Architecture Approach
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-300">Requirements Analysis & Planning</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-300">System Design & Architecture</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-300">Development & Testing</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Professional Backend Development Matters
            </h2>
            <p className="text-xl text-gray-300">
              Your backend is the foundation that determines whether your application succeeds or fails at scale
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Scalable Backend Systems?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's architect backend solutions that grow with your business and provide the reliability your users
              expect.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Start Your Backend Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
