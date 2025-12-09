"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { TrendingUp, Camera, Download, Heart, Calendar, Activity, Award } from "lucide-react"

interface EventAnalyticsProps {
  events: Array<{
    id: string
    name: string
    date: string
    type: string
    photoCount: number
    downloads: number
    likes: number
    featured: number
  }>
}

export function EventAnalytics({ events }: EventAnalyticsProps) {
  // Calculate analytics data
  const totalEvents = events.length
  const totalPhotos = events.reduce((sum, event) => sum + event.photoCount, 0)
  const totalDownloads = events.reduce((sum, event) => sum + event.downloads, 0)
  const totalLikes = events.reduce((sum, event) => sum + event.likes, 0)

  // Event type distribution
  const eventTypeData = events.reduce(
    (acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const pieData = Object.entries(eventTypeData).map(([type, count]) => ({
    name: type,
    value: count,
  }))

  // Monthly event data
  const monthlyData = events.reduce(
    (acc, event) => {
      const month = new Date(event.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })
      const existing = acc.find((item) => item.month === month)
      if (existing) {
        existing.events += 1
        existing.photos += event.photoCount
      } else {
        acc.push({ month, events: 1, photos: event.photoCount })
      }
      return acc
    },
    [] as Array<{ month: string; events: number; photos: number }>,
  )

  // Top performing events
  const topEvents = [...events].sort((a, b) => b.downloads + b.likes - (a.downloads + a.likes)).slice(0, 5)

  const COLORS = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-gradient mb-2">Event Analytics</h2>
        <p className="text-gray-400">Insights and performance metrics for your events</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-enhanced border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalEvents}</div>
                <div className="text-sm text-gray-400">Total Events</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-enhanced border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <Camera className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalPhotos.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Total Photos</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-enhanced border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                <Download className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalDownloads.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Total Downloads</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-enhanced border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalLikes.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Total Likes</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Event Type Distribution */}
        <Card className="glass-enhanced border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Event Type Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card className="glass-enhanced border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Monthly Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="events" stroke="#8b5cf6" strokeWidth={2} name="Events" />
                <Line type="monotone" dataKey="photos" stroke="#3b82f6" strokeWidth={2} name="Photos" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Events */}
      <Card className="glass-enhanced border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Top Performing Events</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topEvents.map((event, index) => (
              <div key={event.id} className="flex items-center justify-between p-4 glass rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{event.name}</div>
                    <div className="text-sm text-gray-400 flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </span>
                      <Badge className="bg-gray-700 text-gray-300">{event.type}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{event.photoCount}</div>
                    <div className="text-gray-400">Photos</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{event.downloads}</div>
                    <div className="text-gray-400">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{event.likes}</div>
                    <div className="text-gray-400">Likes</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
