import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Canonical from '../components/Canonical.jsx'

const services = [
  {
    icon: '🎬',
    title: 'Video → Social Clips',
    summary: 'Long-form video or podcast recordings cut into scroll-stopping short clips for Reels, TikTok, Shorts and LinkedIn.',
    includes: ['8–15 vertical clips per source', 'Captions & motion text burned in', 'Hook-first editing for retention', 'Platform-specific aspect ratios'],
  },
  {
    icon: '📝',
    title: 'Podcast → Blog & Show Notes',
    summary: 'Every episode becomes a fully edited, SEO-structured blog post plus timestamped show notes for your website.',
    includes: ['1,200–2,000 word article', 'On-page SEO optimization', 'Pull quotes & key takeaways', 'Timestamped show notes'],
  },
  {
    icon: '✉️',
    title: 'Content → Newsletter',
    summary: 'We distill your best content into a punchy, platform-native email your list actually opens.',
    includes: ['Weekly or bi-weekly cadence', 'Subject line A/B options', 'CTA aligned to your funnel', 'ESP-ready HTML'],
  },
  {
    icon: '🖼️',
    title: 'Blog → Carousels & Graphics',
    summary: 'Written content reformatted into swipeable LinkedIn and Instagram carousels, quote cards and stat graphics.',
    includes: ['5–10 slide carousels', 'On-brand templated design', 'Quote & stat graphic packs', 'Source files included'],
  },
  {
    icon: '🎓',
    title: 'Webinar → Mini Course',
    summary: 'Recorded webinars restructured into a modular email or LMS mini-course that keeps generating leads.',
    includes: ['3–5 module breakdown', 'Lesson summaries & worksheets', 'Email drip sequence', 'Optional LMS packaging'],
  },
  {
    icon: '🔎',
    title: 'AI & Search Visibility',
    summary: 'We structure repurposed content so it is legible to AI answer engines and search crawlers, not just humans.',
    includes: ['Schema & metadata cleanup', 'Answer-first content structure', 'Citation-friendly formatting', 'GEO/AI-crawler audit'],
  },
]

export default function Services() {
  return (
    <>
      <Canonical path="/services" />
      <PageHero
        eyebrow="Services"
        title="Every format your audience scrolls through, covered."
        subtitle="Pick one service or bundle the full pipeline — we adapt to however your team already creates."
      />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul className="check-list">
                  {s.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Engagement models</span>
            <h2>Work with us the way that fits your team</h2>
          </div>
          <div className="engagement-grid">
            <div className="engagement-card">
              <h3>Done-for-you retainer</h3>
              <p>Hand off a source asset each month; we run the full repurposing pipeline and deliver a ready-to-post batch.</p>
            </div>
            <div className="engagement-card">
              <h3>Single project</h3>
              <p>One webinar, one podcast season, one flagship blog — repurposed as a standalone project with a fixed scope.</p>
            </div>
            <div className="engagement-card">
              <h3>Embedded team support</h3>
              <p>Our editors plug into your existing content calendar and Slack, working as an extension of your in-house team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <h2>Not sure which service fits?</h2>
          <p>Tell us what you already create — we'll map the repurposing plan for free.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Talk to our team</Link>
        </div>
      </section>
    </>
  )
}
