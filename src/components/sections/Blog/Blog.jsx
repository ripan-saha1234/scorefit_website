import { BLOG_POSTS } from '../../../data/blogData'
import { formatDate, truncateText } from '../../../utils/formatters'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import Card from '../../common/Card'
import './Blog.css'

const Blog = () => (
  <section className="sf-blog">
    <Container>
      <SectionTitle eyebrow="Insights" title="Training notes from our coaches" />
      <div className="sf-blog__grid">
        {BLOG_POSTS.map((post) => (
          <Card key={post.id}>
            <p className="sf-blog__meta">{post.category} · {formatDate(post.date)}</p>
            <h3>{post.title}</h3>
            <p>{truncateText(post.excerpt, 110)}</p>
          </Card>
        ))}
      </div>
    </Container>
  </section>
)

export default Blog
