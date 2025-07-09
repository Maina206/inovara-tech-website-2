import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Globe, Palette, Zap, Shield, Terminal, Smartphone, Settings } from "lucide-react"
import Link from "next/link"

export default function WordPressPage() {
  const benefits = [
    "Launch professional websites faster with WordPress expertise",
    "Improve search rankings with SEO-optimized WordPress development",
    "Reduce maintenance costs with properly built, secure websites",
    "Scale your content strategy with custom post types and fields",
    "Enhance user experience with responsive, fast-loading designs",
    "Integrate seamlessly with third-party tools and services",
    "Maintain brand consistency with custom themes and styling",
    "Future-proof your website with modern WordPress best practices",
  ]

  const services = [
    {
      title: "Custom Theme Development",
      description: "Bespoke WordPress themes tailored to your brand and needs",
      icon: Palette,
      features: ["Responsive Design", "Custom Post Types", "Advanced Custom Fields", "Performance Optimization"],
    },
    {
      title: "Plugin Development",
      description: "Custom functionality through purpose-built WordPress plugins",
      icon: Settings,
      features: ["Custom Functionality", "API Integrations", "Database Optimization", "Security Best Practices"],
    },
    {
      title: "E-commerce Solutions",
      description: "WooCommerce stores that convert visitors into customers",
      icon: Globe,
      features: ["WooCommerce Setup", "Payment Integration", "Inventory Management", "Order Processing"],
    },
    {
      title: "Performance & Security",
      description: "Fast, secure WordPress sites that rank well and stay protected",
      icon: Shield,
      features: ["Speed Optimization", "Security Hardening", "Backup Solutions", "Monitoring & Maintenance"],
    },
  ]

  const technologies = [
    "WordPress & WooCommerce",
    "PHP & MySQL",
    "Advanced Custom Fields",
    "Gutenberg Blocks",
    "REST API & GraphQL",
    "Elementor & Page Builders",
    "WPML & Multilingual",
    "Yoast SEO",
    "WP Rocket & Caching",
    "Wordfence Security",
    "Git & Version Control",
    "Docker & Local Dev",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono mb-8">
            <Terminal className="h-4 w-4" />
            <span>{"> WordPress Development"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            WordPress Development & <span className="gradient-text">Custom Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Build powerful, scalable WordPress websites that drive results. From custom themes to complex e-commerce
            solutions, we create WordPress sites that work as hard as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Start Your WordPress Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-transparent"
            >
              <Link href="/resources/case-studies">View WordPress Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">WordPress Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive WordPress solutions from simple websites to complex applications
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
                WordPress Success
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">E-commerce Platform Transformation</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We transformed a struggling online retailer's WordPress site, implementing custom WooCommerce solutions
                that increased conversion rates by 150% and reduced page load times by 60%.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Custom WooCommerce Theme:</span>
                    <p className="text-gray-300 text-sm mt-1">Mobile-first design optimized for conversions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Performance Optimization:</span>
                    <p className="text-gray-300 text-sm mt-1">Advanced caching and image optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">SEO Enhancement:</span>
                    <p className="text-gray-300 text-sm mt-1">Technical SEO and content optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Security Hardening:</span>
                    <p className="text-gray-300 text-sm mt-1">Enterprise-level security implementation</p>
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
                    <div className="text-3xl font-bold gradient-text">150%</div>
                    <div className="text-sm text-gray-400">Conversion Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">60%</div>
                    <div className="text-sm text-gray-400">Faster Load Times</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  WordPress Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                    >
                      <Settings className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-cyan-400" />
                  Development Process
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-300">Requirements & Planning</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-300">Design & Development</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-300">Testing & Optimization</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-gray-300">Launch & Maintenance</span>
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
              Why Choose Professional WordPress Development?
            </h2>
            <p className="text-xl text-gray-300">
              Expert WordPress development delivers results that DIY solutions simply can't match
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your WordPress Site?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's create a WordPress website that not only looks great but performs exceptionally and drives real
              business results.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
            >
              <Link href="/get-quote">
                Start Your WordPress Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
