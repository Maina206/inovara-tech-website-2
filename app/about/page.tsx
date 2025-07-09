import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Bot, Smartphone, Search, Brain, Users, Target, Award, Terminal, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const services = [
    { name: "Software & API documentation", icon: Code },
    { name: "Automation and AI implementation", icon: Bot },
    { name: "Full-stack development", icon: Smartphone },
    { name: "SEO and WordPress services", icon: Search },
    { name: "Data annotation and model training", icon: Brain },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology trends to deliver cutting-edge solutions",
      icon: Target,
    },
    {
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and quality",
      icon: Award,
    },
    {
      title: "Client-First",
      description: "Your success drives our approach to every project and partnership",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono mb-8">
            <Terminal className="h-4 w-4" />
            <span>{"> About our mission"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            About <span className="gradient-text">Inovara Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A dynamic technology agency helping businesses thrive through tailored digital solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Inovara Tech is a dynamic technology agency helping businesses thrive through tailored digital
                solutions. We bridge the gap between complex technology and practical business outcomes, delivering
                solutions that drive real growth and efficiency.
              </p>
            </div>

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-mono mb-6">
                <Code className="h-4 w-4" />
                <span>{"> What we specialize in"}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Our <span className="gradient-text">Expertise</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-16">
              <p className="text-lg text-gray-300 leading-relaxed">
                As a lean, agile team, we offer personalized attention and hands-on expertise, whether you're scaling a
                product, streamlining workflows, or training cutting-edge AI models. Our approach blends innovation,
                precision, and a client-first mindset to help you succeed in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-mono mb-6">
              <Award className="h-4 w-4" />
              <span>{"> Our core values"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-mono mb-8">
            <Users className="h-4 w-4" />
            <span>{"> Our approach"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Our <span className="gradient-text">Approach</span>
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We believe in building long-term partnerships with our clients. Every project begins with understanding
              your unique challenges and goals. Our agile methodology ensures transparency, flexibility, and continuous
              communication throughout the development process.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're a startup looking to build your first product or an enterprise seeking to modernize your
              systems, we have the expertise and dedication to help you achieve your technology objectives.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
          >
            <Link href="/get-quote">
              <Zap className="h-5 w-5 mr-2" />
              Let's Work Together
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
