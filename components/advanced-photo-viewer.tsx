"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Share2,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Info,
  Copy,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"

interface Photo {
  id: string
  url: string
  filename: string
  timestamp: string
  tags: string[]
  category: string
  liked: boolean
  featured: boolean
  metadata?: {
    camera?: string
    settings?: string
    location?: string
    people?: string[]
    fileSize?: string
    dimensions?: string
  }
}

interface AdvancedPhotoViewerProps {
  photos: Photo[]
  currentPhotoIndex: number
  isOpen: boolean
  onClose: () => void
  onPhotoChange?: (index: number) => void
  onDownload?: (photo: Photo, quality: string) => void
  onToggleLike?: (photoId: string) => void
  onToggleFeatured?: (photoId: string) => void
}

export function AdvancedPhotoViewer({
  photos,
  currentPhotoIndex,
  isOpen,
  onClose,
  onPhotoChange,
  onDownload,
  onToggleLike,
  onToggleFeatured,
}: AdvancedPhotoViewerProps) {
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [downloadQuality, setDownloadQuality] = useState("original")
  const imageRef = useRef<HTMLImageElement>(null)

  const currentPhoto = photos[currentPhotoIndex]

  useEffect(() => {
    if (isOpen) {
      setZoom(1)
      setRotation(0)
      setShowInfo(false)
      setShowShareMenu(false)
    }
  }, [isOpen, currentPhotoIndex])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          handlePrevious()
          break
        case "ArrowRight":
          handleNext()
          break
        case "+":
        case "=":
          handleZoomIn()
          break
        case "-":
          handleZoomOut()
          break
        case "r":
          handleRotate()
          break
        case "i":
          setShowInfo(!showInfo)
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isOpen, showInfo])

  const handlePrevious = () => {
    if (currentPhotoIndex > 0) {
      onPhotoChange?.(currentPhotoIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentPhotoIndex < photos.length - 1) {
      onPhotoChange?.(currentPhotoIndex + 1)
    }
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.25))
  }

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  const handleDownload = (quality: string) => {
    onDownload?.(currentPhoto, quality)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Check out this photo from ${currentPhoto.filename}`

    switch (platform) {
      case "copy":
        navigator.clipboard.writeText(url)
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "instagram":
        // Instagram doesn't support direct sharing, so copy to clipboard
        navigator.clipboard.writeText(url)
        break
    }
    setShowShareMenu(false)
  }

  if (!currentPhoto) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-screen w-full h-full bg-black/95 border-0 p-0">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
              <div className="text-white">
                <div className="font-semibold">{currentPhoto.filename}</div>
                <div className="text-sm text-gray-300">
                  {currentPhotoIndex + 1} of {photos.length}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggleLike?.(currentPhoto.id)}
                className={`text-white hover:bg-white/20 ${currentPhoto.liked ? "text-red-400" : ""}`}
              >
                <Heart className="h-5 w-5" fill={currentPhoto.liked ? "currentColor" : "none"} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggleFeatured?.(currentPhoto.id)}
                className={`text-white hover:bg-white/20 ${currentPhoto.featured ? "text-yellow-400" : ""}`}
              >
                <Star className="h-5 w-5" fill={currentPhoto.featured ? "currentColor" : "none"} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowInfo(!showInfo)}
                className="text-white hover:bg-white/20"
              >
                <Info className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50">
          <Button
            variant="ghost"
            size="lg"
            onClick={handlePrevious}
            disabled={currentPhotoIndex === 0}
            className="text-white hover:bg-white/20 disabled:opacity-50"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleNext}
            disabled={currentPhotoIndex === photos.length - 1}
            className="text-white hover:bg-white/20 disabled:opacity-50"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Main Image */}
        <div className="flex items-center justify-center w-full h-full p-16">
          <img
            ref={imageRef}
            src={currentPhoto.url || "/placeholder.svg"}
            alt={currentPhoto.filename}
            className="max-w-full max-h-full object-contain transition-transform duration-300"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
            }}
          />
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={handleZoomOut} className="text-white hover:bg-white/20">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <div className="w-24">
                  <Slider
                    value={[zoom]}
                    onValueChange={(value) => setZoom(value[0])}
                    min={0.25}
                    max={3}
                    step={0.25}
                    className="text-white"
                  />
                </div>
                <Button variant="ghost" size="sm" onClick={handleZoomIn} className="text-white hover:bg-white/20">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <span className="text-white text-sm">{Math.round(zoom * 100)}%</span>
              </div>

              <Button variant="ghost" size="sm" onClick={handleRotate} className="text-white hover:bg-white/20">
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="text-white hover:bg-white/20"
                >
                  <Share2 className="h-4 w-4" />
                </Button>

                {showShareMenu && (
                  <Card className="absolute bottom-full right-0 mb-2 glass-enhanced border-0 p-2">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" onClick={() => handleShare("copy")}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleShare("facebook")}>
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleShare("twitter")}>
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleShare("instagram")}>
                        <Instagram className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                )}
              </div>

              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDownload(downloadQuality)}
                  className="text-white hover:bg-white/20"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        {showInfo && (
          <div className="absolute top-16 right-4 w-80 z-50">
            <Card className="glass-enhanced border-0 text-white">
              <CardContent className="p-4 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Photo Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Filename:</span>
                      <span>{currentPhoto.filename}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span>{new Date(currentPhoto.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span>{currentPhoto.category}</span>
                    </div>
                    {currentPhoto.metadata?.dimensions && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Dimensions:</span>
                        <span>{currentPhoto.metadata.dimensions}</span>
                      </div>
                    )}
                    {currentPhoto.metadata?.fileSize && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">File Size:</span>
                        <span>{currentPhoto.metadata.fileSize}</span>
                      </div>
                    )}
                  </div>
                </div>

                {currentPhoto.tags.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-1">
                      {currentPhoto.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {currentPhoto.metadata?.camera && (
                  <div>
                    <h4 className="font-semibold mb-2">Camera Info</h4>
                    <div className="space-y-1 text-sm">
                      <div className="text-gray-400">{currentPhoto.metadata.camera}</div>
                      {currentPhoto.metadata.settings && (
                        <div className="text-gray-400">{currentPhoto.metadata.settings}</div>
                      )}
                    </div>
                  </div>
                )}

                {currentPhoto.metadata?.people && currentPhoto.metadata.people.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">People</h4>
                    <div className="flex flex-wrap gap-1">
                      {currentPhoto.metadata.people.map((person) => (
                        <Badge key={person} className="bg-blue-600 text-white text-xs">
                          {person}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
