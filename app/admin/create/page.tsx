"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateContentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedType, setSelectedType] = useState<string | null>(null)

  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "blog" || type === "case-study") {
      setSelectedType(type)
    }
  }, [searchParams])

  const handleTypeSelection = (type: "blog" | "case-study") => {
    setSelectedType(type)
    router.push(`/admin/create?type=${type}`)
  }

  if (selectedType === "blog") {
    router.push("/admin/create/blog")
    return null
  }

  if (selectedType === "case-study") {
    router.push("/admin/create/case-study")
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-[#C00000] hover:text-[#A00000]">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create New Content</h1>
              <p className="text-gray-600 mt-1">Choose the type of content you want to create</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog Option */}
          <Card
            className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#C00000]"
            onClick={() => handleTypeSelection("blog")}
          >
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Blog Post</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                Create informative blog articles to share insights, tutorials, and industry knowledge with your
                audience.
              </p>

              <div className="text-left space-y-2">
                <h4 className="font-medium text-gray-900">Blog posts include:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Title and excerpt</li>
                  <li>• Author and publication date</li>
                  <li>• Categories and tags</li>
                  <li>• Featured image</li>
                  <li>• Rich text content</li>
                  <li>• SEO metadata</li>
                </ul>
              </div>

              <Button className="w-full bg-[#C00000] hover:bg-[#A00000]">Create Blog Post</Button>
            </CardContent>
          </Card>

          {/* Case Study Option */}
          <Card
            className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#C00000]"
            onClick={() => handleTypeSelection("case-study")}
          >
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Case Study</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                Document successful projects and showcase your expertise with detailed case studies that highlight
                results and impact.
              </p>

              <div className="text-left space-y-2">
                <h4 className="font-medium text-gray-900">Case studies include:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Project overview and client info</li>
                  <li>• Challenge description</li>
                  <li>• Solution approach</li>
                  <li>• Results and metrics</li>
                  <li>• Technologies used</li>
                  <li>• Client testimonials</li>
                </ul>
              </div>

              <Button className="w-full bg-[#C00000] hover:bg-[#A00000]">Create Case Study</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
