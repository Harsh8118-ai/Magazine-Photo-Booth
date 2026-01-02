import { notFound } from "next/navigation"
import BlogLuxuryBooths from "@/components/blogs/MainBlog"
import BlogMagazineWeddingTrend from "@/components/blogs/BlogOne"
import BlogLuxuryPhotoBoothIdeas from "@/components/blogs/BlogTwo"
import BlogInstagramWorthyWedding from "@/components/blogs/BlogThree"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

// Map slugs to blog components
const blogComponentMap = {
  "about-the-luxury-booths": <BlogLuxuryBooths />,
  "magazine-photo-booth-wedding-trend-india-2026": <BlogMagazineWeddingTrend />,
  "best-photo-booth-ideas-luxury-weddings": <BlogLuxuryPhotoBoothIdeas />,
  "instagram-worthy-wedding-ideas": <BlogInstagramWorthyWedding />,
} as const

type BlogSlug = keyof typeof blogComponentMap

export function generateStaticParams() {
  return Object.keys(blogComponentMap).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  if (!(slug in blogComponentMap)) {
    notFound()
  }

  const typedSlug = slug as BlogSlug

  return (
    <div>
      {blogComponentMap[typedSlug]}
    </div>
  )
}
