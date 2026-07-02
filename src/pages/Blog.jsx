import PageHero from '../components/PageHero.jsx'
import Canonical from '../components/Canonical.jsx'

const posts = [
  {
    title: 'Why one blog post should become five different assets',
    category: 'Strategy',
    date: 'Jun 18, 2026',
    excerpt: 'Most teams treat a blog post as a finish line. The highest-leverage teams treat it as raw material — here is the breakdown we use with every client.',
  },
  {
    title: 'The 40-second rule for short-form video hooks',
    category: 'Video',
    date: 'Jun 04, 2026',
    excerpt: 'After cutting thousands of clips, we found the first three seconds decide almost everything. Here is how our editors choose the moment to open on.',
  },
  {
    title: 'How AI answer engines actually read your content',
    category: 'AI & Search',
    date: 'May 22, 2026',
    excerpt: 'Structuring content for AI visibility is not the same as classic SEO. We walk through the formatting choices that make repurposed content citable.',
  },
  {
    title: 'Podcast to newsletter: a template that keeps subscribers opening',
    category: 'Email',
    date: 'May 09, 2026',
    excerpt: 'A breakdown of the newsletter structure we reuse across every podcast client, and why it consistently beats generic recap emails.',
  },
  {
    title: 'What we look for before taking on a new repurposing client',
    category: 'Behind the Scenes',
    date: 'Apr 27, 2026',
    excerpt: 'Not every piece of content is worth repurposing. Here is the checklist our strategists use during a free audit call.',
  },
  {
    title: 'Carousels vs. single-image posts: what the data actually shows',
    category: 'Social',
    date: 'Apr 11, 2026',
    excerpt: 'We pulled engagement data across 40+ client accounts to settle the debate on our own team.',
  },
]

export default function Blog() {
  return (
    <>
      <Canonical path="/blog" />
      <PageHero
        eyebrow="Blog"
        title="Notes on repurposing, distribution, and AI-era content."
        subtitle="What we're learning from running repurposing pipelines for dozens of brands."
      />

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((p) => (
              <article key={p.title} className="blog-card">
                <div className="blog-card-meta">
                  <span className="tag">{p.category}</span>
                  <span className="blog-date">{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="link-arrow">Read more →</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
