import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const cases = [
  {
    tag: 'B2B SaaS',
    client: 'Ledgerly (fintech SaaS)',
    challenge: 'A weekly founder podcast with strong episodes but almost no distribution beyond the podcast app itself.',
    approach: 'Turned each episode into 10 short clips, a blog post, and a LinkedIn carousel highlighting one key insight.',
    results: ['312% increase in LinkedIn impressions in 90 days', '4,800 new email subscribers from repurposed blog content', '19 inbound demo requests attributed to short-form clips'],
  },
  {
    tag: 'Creator / Coaching',
    client: 'Alma Fitness Coaching',
    challenge: 'One long-form YouTube video per week, but no time to cut it down for Instagram or TikTok.',
    approach: 'Weekly batch of 12 vertical clips, an audiogram series, and a monthly recap newsletter.',
    results: ['2.1x follower growth across Instagram and TikTok in 6 months', '58% of new coaching clients cited short-form clips as first touchpoint', 'Freed up 6+ hours/week previously spent on manual editing'],
  },
  {
    tag: 'B2B Services',
    client: 'Northwind Legal Consulting',
    challenge: 'Deeply researched blog posts with strong SEO but almost zero visibility in AI answer engines.',
    approach: 'Restructured existing articles for answer-first formatting, added schema markup, and built a supporting FAQ layer.',
    results: ['Cited by AI search assistants for 14 target queries within 60 days', '46% increase in organic search traffic to updated articles', 'Newsletter open rate up from 22% to 31%'],
  },
  {
    tag: 'E-commerce',
    client: 'Basincamp Outdoor Gear',
    challenge: 'A quarterly webinar series with good attendance live, but the recordings were never used again.',
    approach: 'Converted each webinar into a 4-part email mini-course plus a highlight reel for paid social retargeting.',
    results: ['3.4x return on ad spend for retargeting campaigns using highlight reels', '890 mini-course completions across two webinar cycles', 'Webinar content now the top acquisition channel for the email list'],
  },
]

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="What repurposing actually moves for our clients."
        subtitle="A few of the brands who send us one piece of content and get a full content calendar back."
      />

      <section className="section">
        <div className="container">
          <div className="case-list">
            {cases.map((c) => (
              <article key={c.client} className="case-card">
                <div className="case-card-header">
                  <span className="tag">{c.tag}</span>
                  <h3>{c.client}</h3>
                </div>
                <div className="case-card-body">
                  <div>
                    <h4>Challenge</h4>
                    <p>{c.challenge}</p>
                  </div>
                  <div>
                    <h4>Approach</h4>
                    <p>{c.approach}</p>
                  </div>
                  <div>
                    <h4>Results</h4>
                    <ul className="check-list">
                      {c.results.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <h2>Want results like these?</h2>
          <p>Send us your best-performing piece of content and we'll show you the repurposing plan for it.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get a free audit</Link>
        </div>
      </section>
    </>
  )
}
