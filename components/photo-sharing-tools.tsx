"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Share2, Copy, Mail, Facebook, Twitter, Link, QrCode, Download, Eye, Clock, Settings, Plus } from "lucide-react"

interface SharedAlbum {
  id: string
  name: string
  description: string
  photos: string[]
  shareUrl: string
  qrCode: string
  password?: string
  expiresAt?: string
  allowDownloads: boolean
  allowComments: boolean
  views: number
  downloads: number
  createdAt: string
}

interface PhotoSharingToolsProps {
  photos: string[]
  albums: SharedAlbum[]
  onCreateAlbum?: (album: Omit<SharedAlbum, "id" | "shareUrl" | "qrCode" | "views" | "downloads" | "createdAt">) => void
  onUpdateAlbum?: (albumId: string, updates: Partial<SharedAlbum>) => void
  onDeleteAlbum?: (albumId: string) => void
}

export function PhotoSharingTools({
  photos,
  albums,
  onCreateAlbum,
  onUpdateAlbum,
  onDeleteAlbum,
}: PhotoSharingToolsProps) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    password: "",
    expiresAt: "",
    allowDownloads: true,
    allowComments: true,
  })

  const handleCreateAlbum = () => {
    if (!formData.name || selectedPhotos.length === 0) return

    const newAlbum = {
      ...formData,
      photos: selectedPhotos,
      expiresAt: formData.expiresAt || undefined,
      password: formData.password || undefined,
    }

    onCreateAlbum?.(newAlbum)
    setFormData({
      name: "",
      description: "",
      password: "",
      expiresAt: "",
      allowDownloads: true,
      allowComments: true,
    })
    setSelectedPhotos([])
    setIsCreateDialogOpen(false)
  }

  const handleShare = (album: SharedAlbum, platform: string) => {
    const url = album.shareUrl
    const text = `Check out these photos: ${album.name}`

    switch (platform) {
      case "copy":
        navigator.clipboard.writeText(url)
        break
      case "email":
        window.open(`mailto:?subject=${encodeURIComponent(album.name)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`)
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
        navigator.clipboard.writeText(url)
        break
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const isExpired = (expiresAt?: string) => {
    if (!expiresAt) return false
    return new Date(expiresAt) < new Date()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-gradient">Photo Sharing</h2>
          <p className="text-gray-400 mt-1">Create and manage shared photo albums</p>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Create Album
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-enhanced border-0 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">Create Shared Album</DialogTitle>
              <DialogDescription className="text-gray-400">
                Create a shareable album with selected photos
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="album-name">Album Name</Label>
                  <Input
                    id="album-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-enhanced border-0 bg-transparent"
                    placeholder="Wedding Photos"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expires-at">Expires At (Optional)</Label>
                  <Input
                    id="expires-at"
                    type="datetime-local"
                    value={formData.expiresAt}
                    onChange={(e) => setFormData({ ...formData, expiresAt: e.target.value })}
                    className="glass-enhanced border-0 bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="glass-enhanced border-0 bg-transparent"
                  placeholder="Beautiful moments from our special day"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password Protection (Optional)</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="glass-enhanced border-0 bg-transparent"
                  placeholder="Enter password"
                />
              </div>

              <div className="space-y-3">
                <Label>Permissions</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="allow-downloads"
                      checked={formData.allowDownloads}
                      onChange={(e) => setFormData({ ...formData, allowDownloads: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="allow-downloads" className="text-sm">
                      Allow downloads
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="allow-comments"
                      checked={formData.allowComments}
                      onChange={(e) => setFormData({ ...formData, allowComments: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="allow-comments" className="text-sm">
                      Allow comments
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Selected Photos ({selectedPhotos.length})</Label>
                <div className="glass-enhanced rounded-lg p-4 max-h-40 overflow-y-auto">
                  {selectedPhotos.length === 0 ? (
                    <p className="text-gray-400 text-center">No photos selected</p>
                  ) : (
                    <div className="grid grid-cols-4 gap-2">
                      {selectedPhotos.slice(0, 8).map((photoId) => (
                        <div
                          key={photoId}
                          className="aspect-square bg-gray-700 rounded flex items-center justify-center"
                        >
                          <span className="text-xs text-gray-400">Photo</span>
                        </div>
                      ))}
                      {selectedPhotos.length > 8 && (
                        <div className="aspect-square bg-gray-700 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-400">+{selectedPhotos.length - 8}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleCreateAlbum}
                disabled={!formData.name || selectedPhotos.length === 0}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Create Album
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <Card key={album.id} className="glass-enhanced border-0 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="font-display text-lg mb-2 group-hover:text-purple-400 transition-colors">
                    {album.name}
                  </CardTitle>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-blue-600 text-white text-xs">{album.photos.length} photos</Badge>
                    {album.password && <Badge className="bg-yellow-600 text-white text-xs">Protected</Badge>}
                    {isExpired(album.expiresAt) && <Badge className="bg-red-600 text-white text-xs">Expired</Badge>}
                  </div>
                </div>

                <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-4">
                {album.description && <p className="text-sm text-gray-300 line-clamp-2">{album.description}</p>}

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{album.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{album.downloads}</span>
                    </div>
                  </div>
                  {album.expiresAt && (
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Expires {formatDate(album.expiresAt)}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">Created {formatDate(album.createdAt)}</div>
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(album, "copy")}
                      className="h-8 w-8 p-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(album, "email")}
                      className="h-8 w-8 p-0"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(album, "facebook")}
                      className="h-8 w-8 p-0"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(album, "twitter")}
                      className="h-8 w-8 p-0"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      <Link className="mr-1 h-3 w-3" />
                      Share Link
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      <QrCode className="mr-1 h-3 w-3" />
                      QR Code
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {albums.length === 0 && (
        <div className="text-center py-12">
          <Share2 className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Shared Albums Yet</h3>
          <p className="text-gray-400 mb-6">Create your first shared album to start sharing photos</p>
          <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" />
            Create First Album
          </Button>
        </div>
      )}
    </div>
  )
}
