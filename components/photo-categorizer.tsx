"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tag, Plus, X, Filter, Search, Star, Heart, Camera, Palette } from "lucide-react"

interface Photo {
  id: string
  url: string
  filename: string
  tags: string[]
  category: string
  timestamp: string
  featured: boolean
  liked: boolean
  people: string[]
  location?: string
  equipment?: string
}

interface PhotoCategorizerProps {
  photos: Photo[]
  onPhotosUpdate?: (photos: Photo[]) => void
  availableTags?: string[]
  availableCategories?: string[]
}

const defaultCategories = [
  "Ceremony",
  "Reception",
  "Portraits",
  "Group Photos",
  "Candid Moments",
  "Details",
  "Behind the Scenes",
  "Favorites",
]

const defaultTags = [
  "bride",
  "groom",
  "family",
  "friends",
  "dancing",
  "cake",
  "bouquet",
  "rings",
  "kiss",
  "laughter",
  "tears",
  "celebration",
  "outdoor",
  "indoor",
  "sunset",
  "golden hour",
]

export function PhotoCategorizer({
  photos,
  onPhotosUpdate,
  availableTags = defaultTags,
  availableCategories = defaultCategories,
}: PhotoCategorizerProps) {
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])
  const [isTagDialogOpen, setIsTagDialogOpen] = useState(false)
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false)
  const [newTag, setNewTag] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterTags, setFilterTags] = useState<string[]>([])

  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch =
      searchTerm === "" ||
      photo.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = filterCategory === "all" || photo.category === filterCategory

    const matchesTags = filterTags.length === 0 || filterTags.some((tag) => photo.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  const handlePhotoSelect = (photoId: string) => {
    setSelectedPhotos((prev) => (prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]))
  }

  const handleSelectAll = () => {
    if (selectedPhotos.length === filteredPhotos.length) {
      setSelectedPhotos([])
    } else {
      setSelectedPhotos(filteredPhotos.map((photo) => photo.id))
    }
  }

  const handleBulkTagging = () => {
    if (selectedPhotos.length === 0 || selectedTags.length === 0) return

    const updatedPhotos = photos.map((photo) => {
      if (selectedPhotos.includes(photo.id)) {
        const newTags = [...new Set([...photo.tags, ...selectedTags])]
        return { ...photo, tags: newTags }
      }
      return photo
    })

    onPhotosUpdate?.(updatedPhotos)
    setSelectedPhotos([])
    setSelectedTags([])
    setIsTagDialogOpen(false)
  }

  const handleBulkCategorization = () => {
    if (selectedPhotos.length === 0 || !selectedCategory) return

    const updatedPhotos = photos.map((photo) => {
      if (selectedPhotos.includes(photo.id)) {
        return { ...photo, category: selectedCategory }
      }
      return photo
    })

    onPhotosUpdate?.(updatedPhotos)
    setSelectedPhotos([])
    setSelectedCategory("")
    setIsCategoryDialogOpen(false)
  }

  const handleToggleFeatured = (photoId: string) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, featured: !photo.featured }
      }
      return photo
    })
    onPhotosUpdate?.(updatedPhotos)
  }

  const handleToggleLiked = (photoId: string) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, liked: !photo.liked }
      }
      return photo
    })
    onPhotosUpdate?.(updatedPhotos)
  }

  const addNewTag = () => {
    if (newTag.trim() && !availableTags.includes(newTag.trim())) {
      setSelectedTags([...selectedTags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove))
  }

  const toggleFilterTag = (tag: string) => {
    setFilterTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gradient">Photo Categorizer</h2>
          <p className="text-gray-400 mt-1">Organize and tag your event photos</p>
        </div>

        <div className="flex items-center space-x-2">
          {selectedPhotos.length > 0 && (
            <>
              <Badge className="bg-purple-600 text-white">{selectedPhotos.length} selected</Badge>

              <Dialog open={isTagDialogOpen} onOpenChange={setIsTagDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Tag className="mr-2 h-4 w-4" />
                    Tag Photos
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-enhanced border-0 text-white">
                  <DialogHeader>
                    <DialogTitle>Add Tags to Selected Photos</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Add tags to {selectedPhotos.length} selected photos
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add custom tag..."
                        className="glass-enhanced border-0 bg-transparent"
                        onKeyPress={(e) => e.key === "Enter" && addNewTag()}
                      />
                      <Button onClick={addNewTag} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label>Available Tags</Label>
                      <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                        {availableTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant={selectedTags.includes(tag) ? "default" : "secondary"}
                            className={`cursor-pointer ${
                              selectedTags.includes(tag) ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
                            }`}
                            onClick={() =>
                              setSelectedTags((prev) =>
                                prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
                              )
                            }
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {selectedTags.length > 0 && (
                      <div className="space-y-2">
                        <Label>Selected Tags</Label>
                        <div className="flex flex-wrap gap-2">
                          {selectedTags.map((tag) => (
                            <Badge key={tag} className="bg-purple-600 text-white">
                              {tag}
                              <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsTagDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleBulkTagging} className="bg-purple-600 hover:bg-purple-700">
                      Apply Tags
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Palette className="mr-2 h-4 w-4" />
                    Categorize
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-enhanced border-0 text-white">
                  <DialogHeader>
                    <DialogTitle>Categorize Selected Photos</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Set category for {selectedPhotos.length} selected photos
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Category</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="glass-enhanced border-0 bg-transparent">
                          <SelectValue placeholder="Choose a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCategoryDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleBulkCategorization} className="bg-green-600 hover:bg-green-700">
                      Apply Category
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}

          <Button onClick={handleSelectAll} variant="outline" size="sm">
            {selectedPhotos.length === filteredPhotos.length ? "Deselect All" : "Select All"}
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="glass-enhanced border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search photos..."
                  className="pl-10 glass-enhanced border-0 bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="glass-enhanced border-0 bg-transparent">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {availableCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                {availableTags.slice(0, 10).map((tag) => (
                  <Badge
                    key={tag}
                    variant={filterTags.includes(tag) ? "default" : "secondary"}
                    className={`cursor-pointer text-xs ${
                      filterTags.includes(tag) ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => toggleFilterTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Photos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {filteredPhotos.map((photo) => (
          <Card key={photo.id} className="glass-enhanced border-0 group relative overflow-hidden">
            <div className="aspect-square relative">
              <img src={photo.url || "/placeholder.svg"} alt={photo.filename} className="w-full h-full object-cover" />

              {/* Selection Overlay */}
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
                onClick={() => handlePhotoSelect(photo.id)}
              >
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    selectedPhotos.includes(photo.id) ? "bg-purple-600 border-purple-600" : "border-white"
                  }`}
                >
                  {selectedPhotos.includes(photo.id) && <div className="w-3 h-3 bg-white rounded-sm" />}
                </div>
              </div>

              {/* Photo Actions */}
              <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="sm"
                  variant="ghost"
                  className={`h-6 w-6 p-0 ${photo.featured ? "text-yellow-400" : "text-gray-400"}`}
                  onClick={() => handleToggleFeatured(photo.id)}
                >
                  <Star className="h-4 w-4" fill={photo.featured ? "currentColor" : "none"} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className={`h-6 w-6 p-0 ${photo.liked ? "text-red-400" : "text-gray-400"}`}
                  onClick={() => handleToggleLiked(photo.id)}
                >
                  <Heart className="h-4 w-4" fill={photo.liked ? "currentColor" : "none"} />
                </Button>
              </div>

              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <div className="text-xs text-white">
                  <div className="font-medium truncate">{photo.filename}</div>
                  <div className="text-gray-300">{photo.category}</div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="absolute top-2 left-2 flex space-x-1">
                {photo.featured && (
                  <Badge className="bg-yellow-600 text-white text-xs">
                    <Star className="h-3 w-3" />
                  </Badge>
                )}
                {photo.liked && (
                  <Badge className="bg-red-600 text-white text-xs">
                    <Heart className="h-3 w-3" />
                  </Badge>
                )}
              </div>
            </div>

            {/* Tags */}
            {photo.tags.length > 0 && (
              <CardContent className="p-2">
                <div className="flex flex-wrap gap-1">
                  {photo.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                  {photo.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                      +{photo.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <Camera className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Photos Found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}
