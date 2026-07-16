import { GALLERY_ITEMS } from '../../../data/galleryData'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import './Gallery.css'

const Gallery = () => (
  <section className="sf-gallery">
    <Container>
      <SectionTitle title="Inside Score.fit" description="Training floor energy, coached sessions, and member milestones." />
      <div className="sf-gallery__grid">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.id} className="sf-gallery__item">
            <div className="sf-gallery__placeholder" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </Container>
  </section>
)

export default Gallery
