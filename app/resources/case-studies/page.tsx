"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Terminal, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllCaseStudies, type CaseStudy } from "@/lib/content-store"

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])

  useEffect(() => {
    // Load case studies from our content store
    const studies = getAllCaseStudies()
    setCaseStudies(studies)
  }, [])

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
            <span>{"> Real projects, real results"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore how we've helped businesses transform their technology landscape and achieve measurable results
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Case Studies Coming Soon</h3>
              <p className="text-gray-400 text-lg mb-8">
                We're currently working on showcasing our latest projects and success stories.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Link href="/get-quote">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Card
                  key={study.id}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 tech-card"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg?height=300&width=500"}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {study.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {study.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {study.readTime}
                      </div>
                    </div>

                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                      {study.title}
                    </CardTitle>

                    <CardDescription className="text-gray-400 leading-relaxed">{study.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-slate-600 text-gray-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <Link href={`/resources/case-studies/${study.id}`}>
                        Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-mono mb-8">
            <Target className="h-4 w-4" />
            <span>{"> Ready to create your success story?"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Create Your <span className="gradient-text">Success Story</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business with our proven technology
            solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
          >
            <Link href="/get-quote">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
