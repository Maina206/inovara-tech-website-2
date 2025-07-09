"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Send,
  CheckCircle,
  Code,
  Bot,
  Smartphone,
  Search,
  Brain,
  Database,
  Terminal,
  Zap,
  Clock,
  DollarSign,
  PenTool,
  Workflow,
  Globe,
  BarChart3,
} from "lucide-react"

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    services: [] as string[],
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { id: "frontend", name: "Frontend Development", icon: Smartphone },
    { id: "backend", name: "Backend Development", icon: Database },
    { id: "automation", name: "Automation & AI Solutions", icon: Bot },
    { id: "ai-training", name: "AI Model Training", icon: Brain },
    { id: "artificial-intelligence", name: "Artificial Intelligence", icon: Brain },
    { id: "documentation", name: "Software & API Documentation", icon: Code },
    { id: "technical-writing", name: "Technical Writing", icon: PenTool },
    { id: "seo", name: "SEO Services", icon: Search },
    { id: "wordpress", name: "WordPress Development", icon: Globe },
    { id: "integration", name: "System Integration", icon: Workflow },
    { id: "data-annotation", name: "Data Annotation", icon: BarChart3 },
  ]

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <Card className="max-w-md w-full glass-card">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for your interest. We'll review your requirements and get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl"
            >
              Send Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    )
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
            <span>{"> Get your project quote"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            Get Your <span className="gradient-text">Quote</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Tell us about your project and we'll provide a detailed proposal within 24 hours
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-blue-400" />
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-400">Let us know how to reach you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-gray-300">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-400" />
                    Project Details
                  </CardTitle>
                  <CardDescription className="text-gray-400">Help us understand your project scope</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="projectType" className="text-gray-300">
                      Project Type
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                    >
                      <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="new-project" className="text-white">
                          New Project
                        </SelectItem>
                        <SelectItem value="existing-improvement" className="text-white">
                          Existing Project Improvement
                        </SelectItem>
                        <SelectItem value="consultation" className="text-white">
                          Consultation
                        </SelectItem>
                        <SelectItem value="maintenance" className="text-white">
                          Maintenance & Support
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-gray-300 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Budget Range
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                    >
                      <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="5k-15k" className="text-white">
                          $5,000 - $15,000
                        </SelectItem>
                        <SelectItem value="15k-50k" className="text-white">
                          $15,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k-100k" className="text-white">
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value="100k+" className="text-white">
                          $100,000+
                        </SelectItem>
                        <SelectItem value="discuss" className="text-white">
                          Let's Discuss
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-gray-300 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Timeline
                    </Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                    >
                      <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="asap" className="text-white">
                          ASAP
                        </SelectItem>
                        <SelectItem value="1-3-months" className="text-white">
                          1-3 months
                        </SelectItem>
                        <SelectItem value="3-6-months" className="text-white">
                          3-6 months
                        </SelectItem>
                        <SelectItem value="6-12-months" className="text-white">
                          6-12 months
                        </SelectItem>
                        <SelectItem value="flexible" className="text-white">
                          Flexible
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Services Selection */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Services Needed</CardTitle>
                <CardDescription className="text-gray-400">
                  Select all services that apply to your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-colors bg-slate-800/30"
                    >
                      <Checkbox
                        id={service.id}
                        checked={formData.services.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                        className="border-slate-500"
                      />
                      <div className="flex items-center gap-2">
                        <service.icon className="h-4 w-4 text-blue-400" />
                        <Label htmlFor={service.id} className="text-gray-300 cursor-pointer text-sm">
                          {service.name}
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
                {formData.services.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {formData.services.map((serviceId) => {
                      const service = services.find((s) => s.id === serviceId)
                      return service ? (
                        <Badge
                          key={serviceId}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                        >
                          {service.name}
                        </Badge>
                      ) : null
                    })}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Project Description */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Project Description</CardTitle>
                <CardDescription className="text-gray-400">
                  Tell us more about your project, goals, and any specific requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your project in detail..."
                  className="min-h-32 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl tech-glow"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Quote Request
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                We'll review your request and get back to you within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
