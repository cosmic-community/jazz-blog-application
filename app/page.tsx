import React from 'react'
import { getPosts } from '../lib/cosmic'
import PostCard from '../components/PostCard'

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}