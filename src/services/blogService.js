import { BLOG_POSTS } from '../data/blogData'
import api from './api'

export const getBlogPosts = async () => {
  try {
    const { data } = await api.get('/blog')
    return data
  } catch {
    return BLOG_POSTS
  }
}

export const getBlogPostById = async (id) => {
  try {
    const { data } = await api.get(`/blog/${id}`)
    return data
  } catch {
    return BLOG_POSTS.find((post) => post.id === id) ?? null
  }
}
