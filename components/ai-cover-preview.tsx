"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Sparkles, Download } from "lucide-react"

export function AiCoverPreview() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedCover, setSelectedCover] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const coverTemplates = [
    { name: "Vogue Style", bg: "bg-gradient-to-br from-pink-500 to-purple-600" },
    { name: "Business Weekly", bg: "bg-gradient-to-br from-blue-600 to-indigo-700" },
    { name: "Glamour", bg: "bg-gradient-to-br from-gold to-yellow-500" },
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const generatePreview = async () => {
    setIsGenerating(true)
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
  }

  return (
    <Card className="glass border-0 max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
          <h3 className="font-display text-xl font-bold">AI Cover Preview</h3>
        </div>

        <div className="text-sm text-gray-400 mb-4 p-3 glass rounded-lg">
          <strong>Demo Only:</strong> This is a preview tool. Images are not stored and are used only for demonstration
          purposes.
        </div>

        {!uploadedImage ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-400 transition-colors"
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">Upload Your Portrait</p>
            <p className="text-gray-400">Click to select or drag and drop</p>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coverTemplates.map((template, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCover(index)}
                  className={`relative aspect-[3/4] rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedCover === index ? "ring-2 ring-purple-400 scale-105" : ""
                  } ${template.bg}`}
                >
                  <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="text-white font-bold text-lg mb-2">{template.name}</div>
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Preview"
                        className="w-20 h-20 rounded-full object-cover border-2 border-white"
                      />
                    </div>
                    <div className="text-white text-sm">Your Name Here</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                onClick={generatePreview}
                disabled={isGenerating}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                {isGenerating ? "Generating..." : "Generate Preview"}
              </Button>

              <Button
                variant="outline"
                className="glass border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={() => setUploadedImage(null)}
              className="w-full text-gray-400 hover:text-white"
            >
              Upload Different Image
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
