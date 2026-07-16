import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import BlogSection from '../../components/sections/Blog'
import './Blog.css'

const Blog = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.BLOG).title
    pageEnter(document.querySelector('.sf-page-blog'))
  }, [])

  return (
    <div className="sf-page-blog">
      <PageBanner title="Blog" description="Coaching insights, recovery tips, and performance notes." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Blog' }]} />
      <BlogSection />
    </div>
  )
}

export default Blog
