import React from 'react'
import { Post } from '../types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImageUrl = post.metadata.featured_image?.imgix_url ?? ''
  const authorName = post.metadata.author?.metadata.name ?? 'Unknown Author'

  return (
    <article className="border rounded-lg overflow-hidden shadow-lg">
      {featuredImageUrl && (
        <img
          src={`${featuredImageUrl}?w=600&h=400&fit=crop&auto=format`}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-sm text-gray-500 mt-1">{authorName}</p>
        <p className="text-md mt-2">{post.metadata.excerpt}</p>
      </div>
    </article>
  )
}