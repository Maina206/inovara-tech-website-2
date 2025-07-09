"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, User, ArrowRight, Terminal, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllBlogs, type BlogPost } from "@/lib/content-store"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Load blogs from our content store
    const posts = getAllBlogs()
    setBlogPosts(posts)
  }, [])

  const categories = [
    "All",
    "Documentation",
    "Automation",
    "AI",
    "Development",
    "SEO",
    "WordPress",
    "Technical Writing",
  ]
  const popularTags = ["API", "React", "Node.js", "AI", "SEO", "Automation", "Documentation", "Best Practices"]

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag.toLowerCase())
    setSelectedCategory("All")
    setVisiblePosts(6) // Reset visible posts when filtering
  }

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6)
  }

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
            <span>{"> Tech insights & tutorials"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            Tech <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Insights, tutorials, and best practices from our team of technology experts
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10 py-3 text-lg bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className={
                    category === selectedCategory
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-slate-800/50 border-slate-600 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {displayedPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={post.image || "/placeholder.svg?height=250&width=400"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>

                        <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>

                        <CardDescription className="text-gray-400 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs cursor-pointer border-slate-600 text-gray-400 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50 transition-colors"
                              onClick={() => handleTagClick(tag)}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>

                          <Button
                            asChild
                            variant="ghost"
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto"
                          >
                            <Link href={`/resources/blog/${post.id}`}>
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 bg-slate-800/50 border-slate-600 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                  onClick={handleLoadMore}
                >
                  Load More Articles ({filteredPosts.length - visiblePosts} remaining)
                </Button>
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Popular Tags */}
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-400" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer border-slate-600 text-gray-400 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50 transition-colors"
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Stay Updated</CardTitle>
                  <CardDescription className="text-gray-400">
                    Get the latest tech insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Your email address"
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="border-b border-slate-700 last:border-b-0 pb-4 last:pb-0">
                      <Link href={`/resources/blog/${post.id}`}>
                        <h4 className="font-medium text-sm line-clamp-2 mb-2 text-gray-300 hover:text-blue-300 cursor-pointer transition-colors">
                          {post.title}
                        </h4>
                      </Link>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
