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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, FolderPlus, Calendar, MapPin, Camera, Upload, Settings } from "lucide-react"

interface Event {
  id: string
  name: string
  date: string
  type: "Wedding" | "Corporate" | "Party"
  location: string
  description: string
  photoCount: number
  coverImage: string
  tags: string[]
  status: "active" | "archived" | "processing"
  createdAt: string
  updatedAt: string
}

interface EventManagerProps {
  events: Event[]
  onEventCreate?: (event: Omit<Event, "id" | "createdAt" | "updatedAt">) => void
  onEventUpdate?: (id: string, event: Partial<Event>) => void
  onEventDelete?: (id: string) => void
  isAdmin?: boolean
}

export function EventManager({
  events,
  onEventCreate,
  onEventUpdate,
  onEventDelete,
  isAdmin = false,
}: EventManagerProps) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    type: "Wedding" as const,
    location: "",
    description: "",
    tags: "",
    coverImage: "",
  })

  const handleCreateEvent = () => {
    if (!formData.name || !formData.date || !formData.location) return

    const newEvent = {
      ...formData,
      photoCount: 0,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      status: "processing" as const,
    }

    onEventCreate?.(newEvent)
    setFormData({
      name: "",
      date: "",
      type: "Wedding",
      location: "",
      description: "",
      tags: "",
      coverImage: "",
    })
    setIsCreateDialogOpen(false)
  }

  const handleUpdateEvent = () => {
    if (!editingEvent) return

    const updatedData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      updatedAt: new Date().toISOString(),
    }

    onEventUpdate?.(editingEvent.id, updatedData)
    setEditingEvent(null)
    setFormData({
      name: "",
      date: "",
      type: "Wedding",
      location: "",
      description: "",
      tags: "",
      coverImage: "",
    })
  }

  const startEdit = (event: Event) => {
    setEditingEvent(event)
    setFormData({
      name: event.name,
      date: event.date,
      type: event.type,
      location: event.location,
      description: event.description,
      tags: event.tags.join(", "),
      coverImage: event.coverImage,
    })
  }

  const getStatusColor = (status: Event["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-600"
      case "processing":
        return "bg-yellow-600"
      case "archived":
        return "bg-gray-600"
      default:
        return "bg-gray-600"
    }
  }

  if (!isAdmin) {
    return (
      <div className="text-center py-8">
        <Settings className="h-12 w-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">Admin access required to manage events</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-gradient">Event Management</h2>
          <p className="text-gray-400 mt-1">Organize and manage your photo booth events</p>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-enhanced border-0 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">Create New Event</DialogTitle>
              <DialogDescription className="text-gray-400">
                Add a new event to organize your photo booth sessions
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Event Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass-enhanced border-0 bg-transparent"
                  placeholder="Smith Wedding"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="glass-enhanced border-0 bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Event Type</Label>
                <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger className="glass-enhanced border-0 bg-transparent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wedding">Wedding</SelectItem>
                    <SelectItem value="Corporate">Corporate</SelectItem>
                    <SelectItem value="Party">Party</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="glass-enhanced border-0 bg-transparent"
                  placeholder="Napa Valley"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="glass-enhanced border-0 bg-transparent"
                  placeholder="Beautiful outdoor wedding ceremony and reception"
                  rows={3}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="glass-enhanced border-0 bg-transparent"
                  placeholder="outdoor, elegant, spring, vineyard"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateEvent} className="bg-purple-600 hover:bg-purple-700">
                <FolderPlus className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="glass-enhanced border-0 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="font-display text-lg mb-2 group-hover:text-purple-400 transition-colors">
                    {event.name}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <Badge className={`${getStatusColor(event.status)} text-white text-xs`}>{event.status}</Badge>
                  </div>
                </div>

                <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost" onClick={() => startEdit(event)} className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onEventDelete?.(event.id)}
                    className="h-8 w-8 p-0 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Camera className="h-4 w-4" />
                  <span>{event.photoCount} photos</span>
                </div>

                <p className="text-sm text-gray-300 line-clamp-2">{event.description}</p>

                {event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {event.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                    {event.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                        +{event.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500">
                    Updated {new Date(event.updatedAt || event.createdAt).toLocaleDateString()}
                  </span>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    <Upload className="mr-1 h-3 w-3" />
                    Upload Photos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Event Dialog */}
      <Dialog open={!!editingEvent} onOpenChange={() => setEditingEvent(null)}>
        <DialogContent className="glass-enhanced border-0 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Edit Event</DialogTitle>
            <DialogDescription className="text-gray-400">Update event information and settings</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Event Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-enhanced border-0 bg-transparent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-date">Event Date</Label>
              <Input
                id="edit-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="glass-enhanced border-0 bg-transparent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-type">Event Type</Label>
              <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                <SelectTrigger className="glass-enhanced border-0 bg-transparent">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Wedding">Wedding</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                  <SelectItem value="Party">Party</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-location">Location</Label>
              <Input
                id="edit-location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="glass-enhanced border-0 bg-transparent"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="glass-enhanced border-0 bg-transparent"
                rows={3}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="edit-tags">Tags (comma-separated)</Label>
              <Input
                id="edit-tags"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="glass-enhanced border-0 bg-transparent"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setEditingEvent(null)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateEvent} className="bg-purple-600 hover:bg-purple-700">
              <Edit className="mr-2 h-4 w-4" />
              Update Event
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {events.length === 0 && (
        <div className="text-center py-12">
          <FolderPlus className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Events Yet</h3>
          <p className="text-gray-400 mb-6">Create your first event to start organizing photos</p>
          <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" />
            Create First Event
          </Button>
        </div>
      )}
    </div>
  )
}
