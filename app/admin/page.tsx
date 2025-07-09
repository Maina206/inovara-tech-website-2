"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Briefcase, Eye, Edit, Trash2, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { getAllBlogsForAdmin, getAllCaseStudiesForAdmin, type BlogPost, type CaseStudy } from "@/lib/content-store"

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])

  useEffect(() => {
    // Load content from store
    const allBlogs = getAllBlogsForAdmin()
    const allCaseStudies = getAllCaseStudiesForAdmin()
    setBlogs(allBlogs)
    setCaseStudies(allCaseStudies)
  }, [])

  const handleRefresh = () => {
    // Refresh the data
    const allBlogs = getAllBlogsForAdmin()
    const allCaseStudies = getAllCaseStudiesForAdmin()
    setBlogs(allBlogs)
    setCaseStudies(allCaseStudies)
  }

  const publishedBlogs = blogs.filter((blog) => blog.status === "published")
  const draftBlogs = blogs.filter((blog) => blog.status === "draft")
  const publishedCaseStudies = caseStudies.filter((cs) => cs.status === "published")
  const draftCaseStudies = caseStudies.filter((cs) => cs.status === "draft")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your blog posts and case studies</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={handleRefresh} variant="outline">
                Refresh
              </Button>
              <Button asChild className="bg-[#C00000] hover:bg-[#A00000]">
                <Link href="/admin/create">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Content
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Published Blogs</p>
                  <p className="text-2xl font-bold text-gray-900">{publishedBlogs.length}</p>
                </div>
                <FileText className="h-8 w-8 text-[#C00000]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Draft Blogs</p>
                  <p className="text-2xl font-bold text-gray-900">{draftBlogs.length}</p>
                </div>
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Published Case Studies</p>
                  <p className="text-2xl font-bold text-gray-900">{publishedCaseStudies.length}</p>
                </div>
                <Briefcase className="h-8 w-8 text-[#C00000]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Draft Case Studies</p>
                  <p className="text-2xl font-bold text-gray-900">{draftCaseStudies.length}</p>
                </div>
                <Briefcase className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Blog Posts */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Blog Posts
                  </CardTitle>
                  <CardDescription>Manage your blog content</CardDescription>
                </div>
                <Button asChild size="sm" className="bg-[#C00000] hover:bg-[#A00000]">
                  <Link href="/admin/create/blog">
                    <Plus className="h-4 w-4 mr-1" />
                    New Blog
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {blogs.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No blog posts yet. Create your first one!</p>
                ) : (
                  blogs.map((blog) => (
                    <div key={blog.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 line-clamp-1">{blog.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{blog.excerpt}</p>
                        </div>
                        <Badge variant={blog.status === "published" ? "default" : "secondary"} className="ml-2">
                          {blog.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {blog.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {blog.readTime}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {blog.category}
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/resources/blog/${blog.id}`}>
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Case Studies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Case Studies
                  </CardTitle>
                  <CardDescription>Manage your case studies</CardDescription>
                </div>
                <Button asChild size="sm" className="bg-[#C00000] hover:bg-[#A00000]">
                  <Link href="/admin/create/case-study">
                    <Plus className="h-4 w-4 mr-1" />
                    New Case Study
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {caseStudies.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No case studies yet. Create your first one!</p>
                ) : (
                  caseStudies.map((study) => (
                    <div key={study.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 line-clamp-1">{study.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{study.description}</p>
                        </div>
                        <Badge variant={study.status === "published" ? "default" : "secondary"} className="ml-2">
                          {study.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {study.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {study.readTime}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {study.category}
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/resources/case-studies/${study.id}`}>
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/admin/create/blog">
                  <FileText className="h-6 w-6" />
                  <span>Create Blog Post</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/admin/create/case-study">
                  <Briefcase className="h-6 w-6" />
                  <span>Create Case Study</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/resources/blog">
                  <Eye className="h-6 w-6" />
                  <span>View Blog</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
