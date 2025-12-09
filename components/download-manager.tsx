"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, Package, CheckCircle, XCircle, Clock, Trash2, RefreshCw, Archive } from "lucide-react"

interface DownloadItem {
  id: string
  type: "single" | "bulk" | "zip"
  filename: string
  status: "pending" | "downloading" | "completed" | "failed"
  progress: number
  size: string
  quality: string
  photos: string[]
  createdAt: string
  completedAt?: string
  downloadUrl?: string
}

interface DownloadManagerProps {
  downloads: DownloadItem[]
  onDownloadStart?: (photos: string[], quality: string, type: "single" | "bulk" | "zip") => void
  onDownloadCancel?: (downloadId: string) => void
  onDownloadRetry?: (downloadId: string) => void
  onDownloadDelete?: (downloadId: string) => void
}

export function DownloadManager({
  downloads,
  onDownloadStart,
  onDownloadCancel,
  onDownloadRetry,
  onDownloadDelete,
}: DownloadManagerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedQuality, setSelectedQuality] = useState("high")
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])

  const activeDownloads = downloads.filter((d) => d.status === "downloading" || d.status === "pending")
  const completedDownloads = downloads.filter((d) => d.status === "completed")
  const failedDownloads = downloads.filter((d) => d.status === "failed")

  const getStatusIcon = (status: DownloadItem["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-400" />
      case "downloading":
        return <RefreshCw className="h-4 w-4 text-blue-400 animate-spin" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-400" />
    }
  }

  const getStatusColor = (status: DownloadItem["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-600"
      case "downloading":
        return "bg-blue-600"
      case "completed":
        return "bg-green-600"
      case "failed":
        return "bg-red-600"
    }
  }

  const handleBulkDownload = (type: "bulk" | "zip") => {
    if (selectedPhotos.length === 0) return
    onDownloadStart?.(selectedPhotos, selectedQuality, type)
    setSelectedPhotos([])
    setIsOpen(false)
  }

  const formatFileSize = (bytes: string) => {
    const size = Number.parseInt(bytes)
    if (size < 1024) return `${size} B`
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
    if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(1)} MB`
    return `${(size / (1024 * 1024 * 1024)).toFixed(1)} GB`
  }

  const totalActiveSize = activeDownloads.reduce((sum, download) => sum + Number.parseInt(download.size), 0)
  const totalCompletedSize = completedDownloads.reduce((sum, download) => sum + Number.parseInt(download.size), 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-gradient">Download Manager</h2>
          <p className="text-gray-400 mt-1">Manage your photo downloads and archives</p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Download className="mr-2 h-4 w-4" />
              New Download
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-enhanced border-0 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">Create Download</DialogTitle>
              <DialogDescription className="text-gray-400">Select photos and quality for download</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Quality</label>
                <Select value={selectedQuality} onValueChange={setSelectedQuality}>
                  <SelectTrigger className="glass-enhanced border-0 bg-transparent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="original">Original (Full Resolution)</SelectItem>
                    <SelectItem value="high">High Quality (2048px)</SelectItem>
                    <SelectItem value="medium">Medium Quality (1024px)</SelectItem>
                    <SelectItem value="low">Low Quality (512px)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Selected Photos</label>
                <div className="glass-enhanced rounded-lg p-4 max-h-40 overflow-y-auto">
                  {selectedPhotos.length === 0 ? (
                    <p className="text-gray-400 text-center">No photos selected</p>
                  ) : (
                    <div className="space-y-2">
                      {selectedPhotos.map((photoId) => (
                        <div key={photoId} className="flex items-center justify-between">
                          <span className="text-sm">{photoId}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setSelectedPhotos(selectedPhotos.filter((id) => id !== photoId))}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => handleBulkDownload("bulk")}
                disabled={selectedPhotos.length === 0}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Individual
              </Button>
              <Button
                onClick={() => handleBulkDownload("zip")}
                disabled={selectedPhotos.length === 0}
                className="bg-green-600 hover:bg-green-700"
              >
                <Archive className="mr-2 h-4 w-4" />
                Download as ZIP
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="glass-enhanced border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{activeDownloads.length}</div>
                <div className="text-sm text-gray-400">Active Downloads</div>
                <div className="text-xs text-gray-500">{formatFileSize(totalActiveSize.toString())}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-enhanced border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{completedDownloads.length}</div>
                <div className="text-sm text-gray-400">Completed</div>
                <div className="text-xs text-gray-500">{formatFileSize(totalCompletedSize.toString())}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-enhanced border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <XCircle className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{failedDownloads.length}</div>
                <div className="text-sm text-gray-400">Failed</div>
                <div className="text-xs text-gray-500">Need Retry</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Downloads */}
      {activeDownloads.length > 0 && (
        <Card className="glass-enhanced border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <RefreshCw className="h-5 w-5 text-blue-400" />
              <span>Active Downloads</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeDownloads.map((download) => (
              <div key={download.id} className="glass rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(download.status)}
                    <div>
                      <div className="font-medium">{download.filename}</div>
                      <div className="text-sm text-gray-400 flex items-center space-x-4">
                        <span>{download.photos.length} photos</span>
                        <span>{download.quality} quality</span>
                        <span>{formatFileSize(download.size)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getStatusColor(download.status)} text-white`}>{download.status}</Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onDownloadCancel?.(download.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {download.status === "downloading" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{download.progress}%</span>
                    </div>
                    <Progress value={download.progress} className="h-2" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Completed Downloads */}
      {completedDownloads.length > 0 && (
        <Card className="glass-enhanced border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Completed Downloads</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {completedDownloads.map((download) => (
              <div key={download.id} className="glass rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <div className="font-medium">{download.filename}</div>
                      <div className="text-sm text-gray-400 flex items-center space-x-4">
                        <span>{download.photos.length} photos</span>
                        <span>{download.quality} quality</span>
                        <span>{formatFileSize(download.size)}</span>
                        <span>Completed {new Date(download.completedAt!).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {download.downloadUrl && (
                      <Button size="sm" asChild className="bg-green-600 hover:bg-green-700">
                        <a href={download.downloadUrl} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onDownloadDelete?.(download.id)}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Failed Downloads */}
      {failedDownloads.length > 0 && (
        <Card className="glass-enhanced border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-red-400" />
              <span>Failed Downloads</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {failedDownloads.map((download) => (
              <div key={download.id} className="glass rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <XCircle className="h-5 w-5 text-red-400" />
                    <div>
                      <div className="font-medium">{download.filename}</div>
                      <div className="text-sm text-gray-400 flex items-center space-x-4">
                        <span>{download.photos.length} photos</span>
                        <span>{download.quality} quality</span>
                        <span>Failed {new Date(download.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      onClick={() => onDownloadRetry?.(download.id)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Retry
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onDownloadDelete?.(download.id)}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {downloads.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Downloads Yet</h3>
          <p className="text-gray-400 mb-6">Start downloading photos to see them here</p>
          <Button onClick={() => setIsOpen(true)} className="bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Create First Download
          </Button>
        </div>
      )}
    </div>
  )
}
