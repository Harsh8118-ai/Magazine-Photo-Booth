import Image from "next/image"
import { Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  readTime: string
  category: string
}

export default function BlogCard({ title, excerpt, image, readTime, category }: BlogCardProps) {
  return (
    <Card className="glassmorphism overflow-hidden hover:neon-glow transition-all duration-300">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{category}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-400 text-sm">
            <Clock size={16} className="mr-1" />
            {readTime}
          </div>
          <button className="text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-300">
            Read More →
          </button>
        </div>
      </div>
    </Card>
  )
}
