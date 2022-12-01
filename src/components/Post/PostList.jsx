import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

export default function PostList() {
  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <div>
      <Post />
    </div>
  )
}
