import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Search, TrendingUp, Target, BarChart3, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function SEOPage() {
  const benefits = [
    "Increase organic traffic by 200-500% within 6-12 months",
    "Improve search rankings for high-value keywords",
    "Reduce customer acquisition costs compared to paid advertising",
    "Build long-term, sustainable traffic growth",
    "Enhance brand visibility and credibility online",
    "Generate qualified leads that convert at higher rates",
    "Outrank competitors in search results",
    "Maximize ROI with data-driven optimization strategies",
  ]

  const seoServices = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for search engines",
      icon: Zap,
      features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "Core Web Vitals"],
    },
    {
      title: "On-Page SEO",
      description: "Optimize individual pages for target keywords and user experience",
      icon: Target,
      features: ["Keyword Research", "Content Optimization", "Meta Tags", "Internal Linking"],
    },
    {
      title: "Content Strategy",
      description: "Create and optimize content that ranks and converts",
      icon: Globe,
      features: ["Content Planning", "Blog Strategy", "Keyword Mapping", "Content Optimization"],
    },
    {
      title: "SEO Analytics",
      description: "Track, measure, and optimize your SEO performance",
      icon: BarChart3,
      features: ["Ranking Tracking", "Traffic Analysis", "Conversion Tracking", "Competitor Analysis"],
    },
  ]

  const seoTools = [
    "Google Search Console",
    "Google Analytics 4",
    "Ahrefs & SEMrush",
    "Screaming Frog",
    "PageSpeed Insights",
    "GTmetrix",
    "Schema Markup Tools",
    "Keyword Research Tools",
    "Rank Tracking Software",
    "Technical SEO Audits",
    "Content Optimization",
    "Local SEO Tools",
  ]

  const industries = [
    "E-commerce & Retail",
    "SaaS & Technology",
    "Healthcare & Medical",
    "Legal & Professional Services",
    "Real Estate",
    "Finance & Insurance",
    "Education & Training",
    "Local Businesses",
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
          <Badge className="mb-4 bg-gray-800/50 text-green-400 border border-green-500/20 font-mono">
            $ seo --optimize --rank
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Technical & Content{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">SEO</span>{" "}
            Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Dominate search results with comprehensive SEO strategies that drive qualified traffic, increase
            conversions, and grow your business. From technical optimization to content strategy, we deliver results
            that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 px-8 py-3"
            >
              <Link href="/get-quote">
                Boost My Rankings <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 bg-transparent"
            >
              <Link href="/resources/case-studies">View SEO Results</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Impact Stats */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">SEO Results That Drive Growth</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our data-driven SEO strategies deliver measurable improvements in traffic, rankings, and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">400%</div>
              <p className="text-gray-400">Average Traffic Increase</p>
            </div>
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <p className="text-gray-400">Keywords in Top 10</p>
            </div>
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">250%</div>
              <p className="text-gray-400">Lead Generation Boost</p>
            </div>
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">6-12</div>
              <p className="text-gray-400">Months to Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive SEO Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Full-spectrum SEO solutions that cover every aspect of search optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-400">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
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
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                seo.success_story()
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">SaaS Company SEO Transformation</h2>
              <p className="text-lg text-gray-300 mb-6">
                We helped a B2B SaaS company increase their organic traffic by 450% and generate $2M+ in additional
                revenue through strategic SEO optimization and content marketing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Technical SEO Audit:</span>
                    <p className="text-gray-400 text-sm">
                      Fixed 200+ technical issues affecting crawlability and indexing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Content Strategy:</span>
                    <p className="text-gray-400 text-sm">
                      Created 100+ optimized blog posts targeting high-value keywords
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Link Building:</span>
                    <p className="text-gray-400 text-sm">Acquired 500+ high-quality backlinks from relevant sites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Performance Tracking:</span>
                    <p className="text-gray-400 text-sm">Implemented comprehensive analytics and reporting dashboard</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-semibold text-white mb-4">SEO Results Achieved:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      450%
                    </div>
                    <div className="text-sm text-gray-400">Organic Traffic Growth</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      $2M+
                    </div>
                    <div className="text-sm text-gray-400">Additional Revenue</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">SEO Tools & Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {seoTools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30"
                    >
                      <Search className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <h4 className="font-medium text-white mb-4">Our SEO Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="text-sm text-gray-300">SEO Audit & Analysis</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="text-sm text-gray-300">Keyword Research & Strategy</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="text-sm text-gray-300">Technical & On-Page Optimization</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <span className="text-sm text-gray-300">Content & Link Building</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      5
                    </div>
                    <span className="text-sm text-gray-300">Monitoring & Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Industries We Serve</h2>
          <p className="text-lg text-gray-400 mb-12">
            We deliver specialized SEO strategies tailored to your industry's unique challenges and opportunities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Invest in Professional SEO?</h2>
            <p className="text-xl text-gray-400">
              SEO is not just about rankings - it's about building sustainable, long-term growth for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50"
              >
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Search Results?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create an SEO strategy that drives qualified traffic, increases conversions, and grows your business
              sustainably.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 px-8 py-3"
            >
              <Link href="/get-quote">
                Start Your SEO Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
