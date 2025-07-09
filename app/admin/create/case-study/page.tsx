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
import { addCaseStudy, calculateReadTime } from "@/lib/content-store"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function CreateCaseStudyPage() {
  const router = useRouter()
  const [isPublishing, setIsPublishing] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [technologies, setTechnologies] = useState<string[]>([])
  const [newTechnology, setNewTechnology] = useState("")
  const [results, setResults] = useState([{ metric: "", value: "", description: "" }])
  const [showPreview, setShowPreview] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    client: "",
    industry: "",
    projectDuration: "",
    teamSize: "",
    category: "",
    challenge: "",
    solution: "",
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialPosition: "",
    featuredImage: "",
  })

  const categories = ["Documentation", "Automation", "AI", "Development", "SEO", "WordPress", "Integration"]

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleAddTechnology = () => {
    if (newTechnology.trim() && !technologies.includes(newTechnology.trim())) {
      setTechnologies([...technologies, newTechnology.trim()])
      setNewTechnology("")
    }
  }

  const handleRemoveTechnology = (techToRemove: string) => {
    setTechnologies(technologies.filter((tech) => tech !== techToRemove))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleResultChange = (index: number, field: string, value: string) => {
    const newResults = [...results]
    newResults[index] = { ...newResults[index], [field]: value }
    setResults(newResults)
  }

  const addResult = () => {
    setResults([...results, { metric: "", value: "", description: "" }])
  }

  const removeResult = (index: number) => {
    setResults(results.filter((_, i) => i !== index))
  }

  const handlePublish = async () => {
    setIsPublishing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
      // Create case study object
      const caseStudy = {
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description,
        client: formData.client,
        industry: formData.industry,
        projectDuration: formData.projectDuration,
        teamSize: formData.teamSize,
        category: formData.category,
        challenge: formData.challenge,
        solution: formData.solution,
        tags,
        technologies,
        results: results.filter((r) => r.metric && r.value),
        testimonial: {
          quote: formData.testimonialQuote,
          author: formData.testimonialAuthor,
          position: formData.testimonialPosition,
        },
        image: formData.featuredImage || "/placeholder.svg?height=400&width=800",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        }),
        readTime: calculateReadTime(formData.challenge + formData.solution),
        status: "published" as const,
      }

      // Add to content store
      const newCaseStudy = addCaseStudy(caseStudy)
      console.log("Published case study:", newCaseStudy)

      setIsPublishing(false)
      router.push("/admin/success?type=case-study&action=published")
    } catch (error) {
      console.error("Error publishing case study:", error)
      setIsPublishing(false)
      router.push("/admin/success?type=case-study&action=published&status=failed")
    }
  }

  const handleSaveDraft = async () => {
    try {
      const draftCaseStudy = {
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description,
        client: formData.client,
        industry: formData.industry,
        projectDuration: formData.projectDuration,
        teamSize: formData.teamSize,
        category: formData.category,
        challenge: formData.challenge,
        solution: formData.solution,
        tags,
        technologies,
        results: results.filter((r) => r.metric && r.value),
        testimonial: {
          quote: formData.testimonialQuote,
          author: formData.testimonialAuthor,
          position: formData.testimonialPosition,
        },
        image: formData.featuredImage || "/placeholder.svg?height=400&width=800",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        }),
        readTime: calculateReadTime(formData.challenge + formData.solution),
        status: "draft" as const,
      }

      const newDraft = addCaseStudy(draftCaseStudy)
      console.log("Saved draft:", newDraft)
      router.push("/admin/success?type=case-study&action=saved")
    } catch (error) {
      console.error("Error saving draft:", error)
      router.push("/admin/success?type=case-study&action=saved&status=failed")
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
                <h1 className="text-3xl font-bold text-gray-900">Create Case Study</h1>
                <p className="text-gray-600 mt-1">Document a successful project</p>
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
                <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Case Study Preview</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-8">
                    {/* Hero Section */}
                    <div className="text-center space-y-4">
                      <h1 className="text-4xl font-bold text-gray-900">{formData.title || "Case Study Title"}</h1>
                      <p className="text-xl text-gray-600">
                        {formData.subtitle || "Case study subtitle will appear here..."}
                      </p>
                      <p className="text-gray-600 max-w-3xl mx-auto">
                        {formData.description || "Case study description will appear here..."}
                      </p>
                    </div>

                    {formData.featuredImage && (
                      <div className="mb-8">
                        <img
                          src={formData.featuredImage || "/placeholder.svg"}
                          alt="Featured"
                          className="w-full h-96 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=400&width=800"
                          }}
                        />
                      </div>
                    )}

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 p-6 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Client</h3>
                        <p className="text-gray-600">{formData.client || "Client Name"}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Industry</h3>
                        <p className="text-gray-600">{formData.industry || "Industry"}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Duration</h3>
                        <p className="text-gray-600">{formData.projectDuration || "Duration"}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Team Size</h3>
                        <p className="text-gray-600">{formData.teamSize || "Team Size"}</p>
                      </div>
                    </div>

                    {/* Challenge */}
                    {formData.challenge && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                        <div className="prose max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: formData.challenge.replace(/\n/g, "<br>") }} />
                        </div>
                      </div>
                    )}

                    {/* Solution */}
                    {formData.solution && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                        <div className="prose max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: formData.solution.replace(/\n/g, "<br>") }} />
                        </div>
                      </div>
                    )}

                    {/* Results */}
                    {results.some((r) => r.metric && r.value) && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {results
                            .filter((r) => r.metric && r.value)
                            .map((result, index) => (
                              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-3xl font-bold text-[#C00000] mb-2">{result.value}</div>
                                <div className="font-semibold text-gray-900 mb-1">{result.metric}</div>
                                <div className="text-sm text-gray-600">{result.description}</div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {technologies.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Testimonial */}
                    {formData.testimonialQuote && (
                      <div className="bg-gray-50 p-8 rounded-lg">
                        <blockquote className="text-lg italic text-gray-700 mb-4">
                          "{formData.testimonialQuote}"
                        </blockquote>
                        <div className="text-sm text-gray-600">
                          <strong>{formData.testimonialAuthor || "Client Name"}</strong>
                          {formData.testimonialPosition && <span>, {formData.testimonialPosition}</span>}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {tags.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
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
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="E.g., E-commerce Platform API Documentation"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle *</Label>
                <Input
                  id="subtitle"
                  placeholder="E.g., Transforming Developer Experience for a Multi-Vendor Marketplace"
                  value={formData.subtitle}
                  onChange={(e) => handleInputChange("subtitle", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the project and its impact..."
                  className="min-h-[100px]"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Client Name *</Label>
                  <Input
                    id="client"
                    placeholder="E.g., TechMart Solutions"
                    value={formData.client}
                    onChange={(e) => handleInputChange("client", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Input
                    id="industry"
                    placeholder="E.g., E-commerce"
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectDuration">Project Duration *</Label>
                  <Input
                    id="projectDuration"
                    placeholder="E.g., 3 months"
                    value={formData.projectDuration}
                    onChange={(e) => handleInputChange("projectDuration", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team Size *</Label>
                  <Input
                    id="teamSize"
                    placeholder="E.g., 4 specialists"
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange("teamSize", e.target.value)}
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

          {/* Challenge & Solution */}
          <Card>
            <CardHeader>
              <CardTitle>Challenge & Solution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="challenge">The Challenge *</Label>
                <Textarea
                  id="challenge"
                  placeholder="Describe the challenges the client was facing..."
                  className="min-h-[200px]"
                  value={formData.challenge}
                  onChange={(e) => handleInputChange("challenge", e.target.value)}
                />
                <p className="text-sm text-gray-500">Use bullet points (•) to list specific challenges.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="solution">Our Solution *</Label>
                <Textarea
                  id="solution"
                  placeholder="Describe your approach and solution..."
                  className="min-h-[300px]"
                  value={formData.solution}
                  onChange={(e) => handleInputChange("solution", e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  Use **bold text** for section headers and bullet points for details.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle>Results & Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="grid md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg">
                  <Input
                    placeholder="Metric name"
                    value={result.metric}
                    onChange={(e) => handleResultChange(index, "metric", e.target.value)}
                  />
                  <Input
                    placeholder="Value (e.g., 300%)"
                    value={result.value}
                    onChange={(e) => handleResultChange(index, "value", e.target.value)}
                  />
                  <Input
                    placeholder="Description"
                    value={result.description}
                    onChange={(e) => handleResultChange(index, "description", e.target.value)}
                  />
                  <Button variant="outline" onClick={() => removeResult(index)} disabled={results.length === 1}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addResult} variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Result
              </Button>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a technology..."
                  value={newTechnology}
                  onChange={(e) => setNewTechnology(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddTechnology()}
                />
                <Button onClick={handleAddTechnology}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tech}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTechnology(tech)} />
                  </Badge>
                ))}
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

          {/* Testimonial */}
          <Card>
            <CardHeader>
              <CardTitle>Client Testimonial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="testimonialQuote">Quote</Label>
                <Textarea
                  id="testimonialQuote"
                  placeholder="Client testimonial quote..."
                  className="min-h-[100px]"
                  value={formData.testimonialQuote}
                  onChange={(e) => handleInputChange("testimonialQuote", e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="testimonialAuthor">Author Name</Label>
                  <Input
                    id="testimonialAuthor"
                    placeholder="E.g., Sarah Chen"
                    value={formData.testimonialAuthor}
                    onChange={(e) => handleInputChange("testimonialAuthor", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testimonialPosition">Position & Company</Label>
                  <Input
                    id="testimonialPosition"
                    placeholder="E.g., CTO, TechMart Solutions"
                    value={formData.testimonialPosition}
                    onChange={(e) => handleInputChange("testimonialPosition", e.target.value)}
                  />
                </div>
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
                    !formData.title ||
                    !formData.subtitle ||
                    !formData.description ||
                    !formData.client ||
                    !formData.challenge ||
                    !formData.solution ||
                    isPublishing
                  }
                  className="bg-[#C00000] hover:bg-[#A00000]"
                >
                  {isPublishing ? "Publishing..." : "Publish Case Study"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
