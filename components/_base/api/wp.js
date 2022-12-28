import { useEffect, useState } from 'react'
import Image from "next/image";

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://www.diogorusso.com/wp-json/wp/v2/posts?per_page=24')
      const data = await res.json()
      setPosts(data)
    }
    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map(post => (
        <div key={post.id} className="p-4 bg-white rounded-lg shadow-md">
          {/* <img className="w-full rounded-lg" src={post.featured_image_src} alt={post.title.rendered} /> */}
          {/* <Image
        src={post.featured_image_src} // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      /> */}
           <h1>{post.featured_image_src} bb</h1> 
          <h2 className="mt-2 text-2xl font-bold">{post.title.rendered}</h2>
          <p className="mt-2 text-gray-700">{post.excerpt.rendered}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsPage
