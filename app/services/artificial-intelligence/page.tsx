import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Brain,
  Cpu,
  Eye,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  Target,
  Terminal,
} from "lucide-react"
import Link from "next/link"

export default function ArtificialIntelligencePage() {
  const benefits = [
    "Increase operational efficiency by up to 40% with intelligent automation",
    "Make data-driven decisions with predictive analytics and insights",
    "Enhance customer experience through personalized AI interactions",
    "Reduce costs while improving accuracy in complex processes",
    "Scale your business intelligence without proportional resource increase",
    "Stay competitive with cutting-edge AI technology implementation",
    "Automate complex decision-making processes with machine learning",
    "Generate actionable insights from unstructured data sources",
  ]

  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models for prediction, classification, and pattern recognition",
      icon: Brain,
      capabilities: ["Predictive Analytics", "Recommendation Systems", "Fraud Detection", "Demand Forecasting"],
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis, sentiment analysis, and language understanding",
      icon: MessageSquare,
      capabilities: [
        "Chatbots & Virtual Assistants",
        "Document Analysis",
        "Sentiment Analysis",
        "Language Translation",
      ],
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automated visual recognition and processing",
      icon: Eye,
      capabilities: ["Object Detection", "Quality Control", "Medical Imaging", "Security Monitoring"],
    },
    {
      title: "AI Strategy & Consulting",
      description: "Strategic planning and roadmap development for AI implementation",
      icon: Target,
      capabilities: ["AI Readiness Assessment", "Technology Selection", "Implementation Planning", "ROI Analysis"],
    },
  ]

  const industries = [
    {
      name: "Healthcare",
      applications: ["Medical diagnosis assistance", "Drug discovery", "Patient monitoring", "Treatment optimization"],
    },
    {
      name: "Finance",
      applications: ["Risk assessment", "Algorithmic trading", "Fraud detection", "Credit scoring"],
    },
    {
      name: "Retail & E-commerce",
      applications: [
        "Personalized recommendations",
        "Inventory optimization",
        "Price optimization",
        "Customer segmentation",
      ],
    },
    {
      name: "Manufacturing",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"],
    },
  ]

  const technologies = [
    "TensorFlow & PyTorch",
    "OpenAI GPT Integration",
    "Scikit-learn & Pandas",
    "Computer Vision (OpenCV)",
    "Natural Language Toolkit",
    "Cloud AI Services (AWS, GCP, Azure)",
    "MLOps & Model Deployment",
    "Custom Neural Networks",
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
            AI_SOLUTIONS
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations, enhance decision-making,
            and unlock new opportunities for growth. From machine learning to computer vision, we deliver AI solutions
            that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 tech-glow"
            >
              <Link href="/get-quote">
                Explore AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 bg-transparent"
            >
              <Link href="/resources/case-studies">View AI Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Impact Stats */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The AI Advantage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Businesses implementing AI solutions see transformative results across key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <p className="text-gray-400">Efficiency Increase</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <p className="text-gray-400">Accuracy Improvement</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">60%</div>
              <p className="text-gray-400">Risk Reduction</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="h-8 w-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-400">Automated Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your specific business needs and objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
                    <h4 className="font-medium text-white mb-3">Key Capabilities:</h4>
                    {service.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">{capability}</span>
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
              <h2 className="text-3xl font-bold text-white mb-6">Predictive Maintenance for Manufacturing</h2>
              <p className="text-lg text-gray-300 mb-6">
                We developed a machine learning system that predicts equipment failures 2-3 weeks in advance, reducing
                unplanned downtime by 75% and maintenance costs by $2M annually for a manufacturing client.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Data Integration:</span>
                    <p className="text-gray-400 text-sm">Connected 500+ sensors across 50 production lines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">ML Model Development:</span>
                    <p className="text-gray-400 text-sm">
                      Custom algorithms for anomaly detection and failure prediction
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Real-time Monitoring:</span>
                    <p className="text-gray-400 text-sm">24/7 automated monitoring with instant alert system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Dashboard & Analytics:</span>
                    <p className="text-gray-400 text-sm">
                      Executive dashboards with predictive insights and recommendations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-lg border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">Measurable Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      75%
                    </div>
                    <div className="text-sm text-gray-400">Downtime Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      $2M
                    </div>
                    <div className="text-sm text-gray-400">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-lg border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">AI Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <Brain className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-4">Our AI Development Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="text-sm text-gray-300">Data Assessment & Strategy</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="text-sm text-gray-300">Model Development & Training</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="text-sm text-gray-300">Testing & Validation</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <span className="text-sm text-gray-300">Deployment & Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Across Industries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver industry-specific AI solutions that address unique challenges and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI for Your Business?</h2>
            <p className="text-xl text-gray-300">
              Artificial intelligence isn't just the future—it's the competitive advantage your business needs today
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Embrace AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how artificial intelligence can transform your business operations and drive unprecedented
              growth.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 tech-glow"
            >
              <Link href="/get-quote">
                Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
