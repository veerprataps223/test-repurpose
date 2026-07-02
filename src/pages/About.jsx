import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const values = [
  {
    title: 'Create once, publish everywhere',
    copy: 'We believe the bottleneck for most brands isn\'t ideas — it\'s the manual work of reshaping one idea for ten different formats. That work is exactly what we automate and craft.',
  },
  {
    title: 'Editors first, tools second',
    copy: 'Software can chop a video into clips. It can\'t tell you which 40 seconds actually made someone stop scrolling. Every asset we produce is shaped by an editor who understands story and hooks.',
  },
  {
    title: 'Built for AI-era discovery',
    copy: 'Search and discovery no longer happen only through a feed — they happen through AI answer engines too. We structure repurposed content so it performs in both worlds.',
  },
  {
    title: 'Speed without sloppiness',
    copy: 'A 9-day average turnaround only matters if the output is good enough to publish without a second pass. We optimize for both.',
  },
]

const timeline = [
  { year: '2021', title: 'Founded as a two-person podcast editing shop', copy: 'Started by cutting audio for three indie podcasts, all repurposing work done manually in spare evenings.' },
  { year: '2022', title: 'First retainer clients, first playbook', copy: 'Formalized a repeatable repurposing system after a B2B SaaS client\'s webinar-to-content pipeline tripled their LinkedIn reach.' },
  { year: '2023', title: 'Built out a full production team', copy: 'Hired dedicated video editors, a copywriter, and a designer; expanded beyond podcasts into webinars and long-form blogs.' },
  { year: '2024', title: 'Added AI & search visibility as a core service', copy: 'Clients began asking whether their content was visible to AI answer engines, not just social feeds — we built that into every deliverable.' },
  { year: '2025', title: '38 active brand retainers', copy: 'Grew into a distributed team spanning editing, design, copy and strategy, serving SaaS, creator, and B2B service brands.' },
]

const team = [
  { name: 'Maya Okonkwo', role: 'Founder & Creative Director', bio: 'Ex-video producer for two mid-size media companies. Sets the editorial bar for every clip and carousel that ships.' },
  { name: 'Diego Fernandez', role: 'Head of Production', bio: 'Runs the day-to-day editing pipeline and QA process across the video and design team.' },
  { name: 'Priya Raman', role: 'Content Strategist', bio: 'Builds the repurposing plan for every new client, mapping source content to the platforms worth the effort.' },
  { name: 'Tom Halvorsen', role: 'SEO & AI Visibility Lead', bio: 'Focuses on making repurposed long-form content legible to both search engines and AI answer engines.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Reloop Media"
        title="We're the production team behind content that never gets used just once."
        subtitle="Reloop Media is a content repurposing agency: we take the podcast episode, webinar recording, or blog post you already made and turn it into a full week of platform-native assets."
      />

      <section className="section">
        <div className="container about-intro">
          <div className="about-intro-text">
            <h2>What we actually do</h2>
            <p>
              Most content teams create one flagship piece — a podcast episode, a webinar, a deeply researched
              blog post — and then move straight to the next one. The clips, carousels, newsletters and
              blog posts that could have come from that single piece never get made, because reshaping
              content for every platform is slow, specialized work that eats a full production team's time.
            </p>
            <p>
              Reloop Media exists to close that gap. You send us the source asset. Our editors, designers
              and strategists turn it into everything downstream: short-form video for TikTok, Reels and
              Shorts, a long-form blog post structured for search and AI answer engines, a newsletter draft,
              LinkedIn carousels, and quote graphics — typically delivered within 9 business days.
            </p>
            <p>
              We're not a tool you log into and operate yourself, and we're not a freelancer marketplace.
              We're a dedicated production team that learns your brand voice, your audience, and your goals,
              and gets faster and sharper with every batch.
            </p>
          </div>
          <div className="about-intro-facts">
            <div className="fact-card">
              <div className="fact-value">2021</div>
              <div className="fact-label">Founded</div>
            </div>
            <div className="fact-card">
              <div className="fact-value">14</div>
              <div className="fact-label">People on the team</div>
            </div>
            <div className="fact-card">
              <div className="fact-value">38</div>
              <div className="fact-label">Active brand retainers</div>
            </div>
            <div className="fact-card">
              <div className="fact-value">Remote</div>
              <div className="fact-label">Distributed across 6 countries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What we believe</span>
            <h2>The principles behind how we work</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our story</span>
            <h2>From a two-person editing shop to a full production team</h2>
          </div>
          <div className="timeline">
            {timeline.map((t) => (
              <div key={t.year} className="timeline-row">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-body">
                  <h3>{t.title}</h3>
                  <p>{t.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Leadership</span>
            <h2>The people shaping the work</h2>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-avatar" aria-hidden="true">{m.name.split(' ').map((n) => n[0]).join('')}</div>
                <h3>{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <h2>Want to see if we're a fit?</h2>
          <p>A 20-minute call is usually enough to tell whether your content is a good candidate for repurposing.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Book a call with us</Link>
        </div>
      </section>
    </>
  )
}
