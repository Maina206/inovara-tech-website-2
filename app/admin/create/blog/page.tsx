"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, X, Save, Eye } from "lucide-react"
import Link from "next/link"
import { addBlog, calculateReadTime } from "@/lib/content-store"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function CreateBlogPage() {
  const router = useRouter()
  const [isPublishing, setIsPublishing] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "Inovara Tech Team",
    category: "",
    content: "",
    featuredImage: "",
    metaTitle: "",
    metaDescription: "",
  })

  const [showPreview, setShowPreview] = useState(false)

  const categories = ["Documentation", "Automation", "AI", "Development", "SEO", "WordPress", "Technical Writing"]

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePublish = async () => {
    setIsPublishing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
      // Create blog post object
      const blogPost = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author,
        category: formData.category,
        tags,
        image: formData.featuredImage || "/placeholder.svg?height=250&width=400",
        metaTitle: formData.metaTitle || formData.title,
        metaDescription: formData.metaDescription || formData.excerpt,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        readTime: calculateReadTime(formData.content),
        status: "published" as const,
      }

      // Add to content store
      const newBlog = addBlog(blogPost)
      console.log("Published blog post:", newBlog)

      setIsPublishing(false)
      router.push("/admin/success?type=blog&action=published")
    } catch (error) {
      console.error("Error publishing blog:", error)
      setIsPublishing(false)
      router.push("/admin/success?type=blog&action=published&status=failed")
    }
  }

  const handleSaveDraft = async () => {
    try {
      const draftPost = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author,
        category: formData.category,
        tags,
        image: formData.featuredImage || "/placeholder.svg?height=250&width=400",
        metaTitle: formData.metaTitle || formData.title,
        metaDescription: formData.metaDescription || formData.excerpt,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        readTime: calculateReadTime(formData.content),
        status: "draft" as const,
      }

      const newDraft = addBlog(draftPost)
      console.log("Saved draft:", newDraft)
      router.push("/admin/success?type=blog&action=saved")
    } catch (error) {
      console.error("Error saving draft:", error)
      router.push("/admin/success?type=blog&action=saved&status=failed")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/create" className="text-[#C00000] hover:text-[#A00000]">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Create Blog Post</h1>
                <p className="text-gray-600 mt-1">Write and publish a new blog article</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleSaveDraft}>
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Dialog open={showPreview} onOpenChange={setShowPreview}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Blog Post Preview</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Preview Content */}
                    <div className="border-b pb-6">
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{formData.title || "Blog Post Title"}</h1>
                      <p className="text-lg text-gray-600 mb-4">
                        {formData.excerpt || "Blog post excerpt will appear here..."}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>By {formData.author}</span>
                        <span>•</span>
                        <span>
                          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                        </span>
                        <span>•</span>
                        <span>{calculateReadTime(formData.content)}</span>
                        {formData.category && (
                          <>
                            <span>•</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">{formData.category}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {formData.featuredImage && (
                      <div className="mb-6">
                        <img
                          src={formData.featuredImage || "/placeholder.svg"}
                          alt="Featured"
                          className="w-full h-64 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=250&width=400"
                          }}
                        />
                      </div>
                    )}

                    <div className="prose max-w-none">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: formData.content || "<p>Blog content will appear here...</p>",
                        }}
                      />
                    </div>

                    {tags.length > 0 && (
                      <div className="border-t pt-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Tags:</h3>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter blog post title..."
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief description of the blog post..."
                  className="min-h-[100px]"
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C00000]"
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                  >
                    <option value="">Select category...</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image URL</Label>
                <Input
                  id="featuredImage"
                  placeholder="https://example.com/image.jpg"
                  value={formData.featuredImage}
                  onChange={(e) => handleInputChange("featuredImage", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                />
                <Button onClick={handleAddTag}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle>Content *</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your blog post content here... You can use HTML tags for formatting."
                className="min-h-[400px]"
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-2">
                You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, etc. for
                formatting.
              </p>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  placeholder="SEO title (leave blank to use post title)"
                  value={formData.metaTitle}
                  onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  placeholder="SEO description (leave blank to use excerpt)"
                  className="min-h-[80px]"
                  value={formData.metaDescription}
                  onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Publish Actions */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Ready to publish? Make sure all required fields are filled out.</p>
                <Button
                  onClick={handlePublish}
                  disabled={
                    !formData.title || !formData.excerpt || !formData.category || !formData.content || isPublishing
                  }
                  className="bg-[#C00000] hover:bg-[#A00000]"
                >
                  {isPublishing ? "Publishing..." : "Publish Blog Post"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
