import { Link } from 'react-router-dom'

const stats = [
  { value: '1,200+', label: 'assets repurposed / month' },
  { value: '38', label: 'brands served' },
  { value: '4.6x', label: 'avg. content output increase' },
  { value: '9 days', label: 'avg. turnaround' },
]

const formats = [
  { from: 'Podcast episode', to: '12 short clips, 1 blog post, 6 quote graphics' },
  { from: 'Webinar recording', to: 'Email course, LinkedIn carousel, highlight reel' },
  { from: 'Long-form blog', to: 'Twitter/X thread, newsletter, 3 short videos' },
  { from: 'YouTube video', to: 'Shorts, transcript SEO page, audiogram' },
]

const steps = [
  { n: '01', title: 'You create once', copy: 'Send us your podcast, webinar, blog post, or long-form video — whatever your core format already is.' },
  { n: '02', title: 'We map the repurposing plan', copy: 'Our editors identify the highest-leverage moments and match them to the platforms your audience actually lives on.' },
  { n: '03', title: 'You get a full content batch', copy: 'Clips, carousels, blog posts, newsletters and graphics land in your shared folder, captioned and ready to post.' },
  { n: '04', title: 'We track what performs', copy: 'Monthly reporting shows which repurposed formats are driving reach, so the next batch gets sharper.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Content repurposing agency</span>
            <h1>One piece of content. Ten places it works harder.</h1>
            <p className="lede">
              Reloop Media takes the podcast, webinar, or blog post you already made and turns it into a
              week of platform-native content — without adding a single hour to your team's plate.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a strategy call</Link>
              <Link to="/case-studies" className="btn btn-outline">See the results</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card hero-card-1">🎙️ Podcast ep. 042</div>
            <div className="hero-card hero-card-2">📄 SEO blog post</div>
            <div className="hero-card hero-card-3">✂️ 12 short clips</div>
            <div className="hero-card hero-card-4">✉️ Newsletter draft</div>
            <div className="hero-card hero-card-5">🖼️ Carousel x3</div>
          </div>
        </div>
      </section>

      <section className="section stats-strip">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What we turn it into</span>
            <h2>Your one format becomes a whole content calendar</h2>
          </div>
          <div className="format-grid">
            {formats.map((f) => (
              <div key={f.from} className="format-card">
                <div className="format-from">{f.from}</div>
                <div className="format-arrow">becomes</div>
                <div className="format-to">{f.to}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>A repeatable system, not a one-off favor</h2>
          </div>
          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.n} className="step-card">
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <h2>Stop creating from scratch every week.</h2>
          <p>Send us one piece of content. We'll show you what it can become — free, no commitment.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get a free repurposing audit</Link>
        </div>
      </section>
    </>
  )
}
