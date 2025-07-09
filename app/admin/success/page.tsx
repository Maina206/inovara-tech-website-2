"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, ArrowLeft, Plus, Eye } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const type = searchParams.get("type") // "blog" or "case-study"
  const action = searchParams.get("action") // "published" or "saved"
  const status = searchParams.get("status") || "success" // "success" or "failed"

  const isSuccess = status === "success"
  const isBlog = type === "blog"
  const isPublished = action === "published"

  const getTitle = () => {
    if (!isSuccess) return "Action Failed"
    if (isBlog) {
      return isPublished ? "Blog Post Published!" : "Blog Draft Saved!"
    }
    return isPublished ? "Case Study Published!" : "Case Study Draft Saved!"
  }

  const getMessage = () => {
    if (!isSuccess) {
      return "There was an error processing your request. Please try again."
    }

    if (isBlog) {
      return isPublished
        ? "Your blog post has been successfully published and is now live on the website."
        : "Your blog post has been saved as a draft. You can continue editing it later."
    }

    return isPublished
      ? "Your case study has been successfully published and is now live on the website."
      : "Your case study has been saved as a draft. You can continue editing it later."
  }

  const getViewLink = () => {
    if (!isSuccess || !isPublished) return null
    return isBlog ? "/resources/blog" : "/resources/case-studies"
  }

  const handleGoBack = () => {
    router.push("/admin/create")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <Card className="text-center">
          <CardHeader>
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isSuccess ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {isSuccess ? (
                <CheckCircle className="h-8 w-8 text-green-600" />
              ) : (
                <AlertCircle className="h-8 w-8 text-red-600" />
              )}
            </div>
            <CardTitle className={`text-2xl ${isSuccess ? "text-green-900" : "text-red-900"}`}>{getTitle()}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600">{getMessage()}</p>

            <div className="space-y-3">
              {isSuccess && isPublished && getViewLink() && (
                <Button asChild className="w-full bg-[#C00000] hover:bg-[#A00000]">
                  <Link href={getViewLink()!}>
                    <Eye className="h-4 w-4 mr-2" />
                    View {isBlog ? "Blog Post" : "Case Study"}
                  </Link>
                </Button>
              )}

              <Button onClick={handleGoBack} variant="outline" className="w-full bg-transparent">
                <Plus className="h-4 w-4 mr-2" />
                Create Another {isBlog ? "Blog Post" : "Case Study"}
              </Button>

              <Button asChild variant="ghost" className="w-full">
                <Link href="/admin">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
