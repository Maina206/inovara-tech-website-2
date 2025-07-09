"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, Building, Timer, CheckCircle, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getCaseStudyById, getAllCaseStudies, type CaseStudy } from "@/lib/content-store"

export default function CaseStudyPage() {
  const params = useParams()
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [relatedStudies, setRelatedStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = Number.parseInt(params.id as string)
    if (isNaN(id)) {
      setLoading(false)
      return
    }

    // Get the case study
    const study = getCaseStudyById(id)
    setCaseStudy(study)

    if (study) {
      // Get related case studies (same category, excluding current study)
      const allStudies = getAllCaseStudies()
      const related = allStudies.filter((s) => s.id !== study.id && s.category === study.category).slice(0, 2)
      setRelatedStudies(related)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading case study...</p>
        </div>
      </div>
    )
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Case Study Not Found
          </h1>
          <p className="text-slate-300 mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Link href="/resources/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/resources/case-studies" className="text-purple-400 hover:text-purple-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Badge variant="secondary" className="bg-slate-700/50 text-purple-400 border-purple-500/30">
              {caseStudy.category}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2 leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-slate-400 mb-6">{caseStudy.subtitle}</p>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-purple-400" />
              <span>{caseStudy.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-400" />
              <span>{caseStudy.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <span>{caseStudy.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Hero Image */}
            {caseStudy.image && (
              <Card className="mb-8 overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              </Card>
            )}

            {/* Project Overview */}
            <Card className="mb-8 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">{caseStudy.description}</p>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/30">
                    <Building className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-400">Industry</p>
                    <p className="font-semibold text-white">{caseStudy.industry}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/30">
                    <Timer className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-400">Duration</p>
                    <p className="font-semibold text-white">{caseStudy.projectDuration}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/30">
                    <Users className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-400">Team Size</p>
                    <p className="font-semibold text-white">{caseStudy.teamSize}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/30">
                    <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-400">Status</p>
                    <p className="font-semibold text-white">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Challenge */}
            <Card className="mb-8 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-red-400 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-lg max-w-none prose-p:text-slate-300 prose-ul:text-slate-300 prose-strong:text-white prose-li:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: caseStudy.challenge.replace(/\n/g, "<br>") }}
                />
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="mb-8 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-lg max-w-none prose-p:text-slate-300 prose-ul:text-slate-300 prose-strong:text-white prose-li:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: caseStudy.solution.replace(/\n/g, "<br>") }}
                />
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="mb-8 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                  Results & Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-600/30"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        {result.value}
                      </div>
                      <div className="font-semibold text-white mb-1">{result.metric}</div>
                      <div className="text-sm text-slate-400">{result.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="mb-8 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-3 py-1 bg-slate-700/30 text-purple-400 border-purple-500/30 hover:bg-slate-700/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            {caseStudy.testimonial.quote && (
              <Card className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/25">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 mb-4 opacity-80" />
                  <blockquote className="text-lg italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-semibold">
                      {caseStudy.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{caseStudy.testimonial.author}</div>
                      <div className="text-sm opacity-90">{caseStudy.testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* Tags */}
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Project Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-slate-700/30 text-purple-400 border-purple-500/30 hover:bg-slate-700/50 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Case Studies */}
              {relatedStudies.length > 0 && (
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Related Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedStudies.map((study) => (
                      <div key={study.id} className="border-b border-slate-700/50 last:border-b-0 pb-4 last:pb-0">
                        <Link href={`/resources/case-studies/${study.id}`}>
                          <h4 className="font-medium text-sm line-clamp-2 mb-2 text-slate-300 hover:text-purple-400 cursor-pointer transition-colors">
                            {study.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-slate-400 mb-2 line-clamp-2">{study.description}</p>
                        <div className="text-xs text-slate-500 flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {study.date}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/25">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Ready for Similar Results?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Let's discuss how we can help transform your business with our proven solutions.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-lg transition-all duration-300"
                  >
                    <Link href="/get-quote">Start Your Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
