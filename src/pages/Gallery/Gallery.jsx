import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import GallerySection from '../../components/sections/Gallery'
import './Gallery.css'

const Gallery = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.GALLERY).title
    pageEnter(document.querySelector('.sf-page-gallery'))
  }, [])

  return (
    <div className="sf-page-gallery">
      <PageBanner title="Gallery" description="A look inside the Score.fit training experience." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Gallery' }]} />
      <GallerySection />
    </div>
  )
}

export default Gallery
