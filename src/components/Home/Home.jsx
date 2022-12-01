import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PostList from '../Post/PostList'
import Form from '../Form/Form'
import { getPosts } from '../../redux/actions/posts'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <div>
      <PostList />
      <Form />
    </div>
  )
}
