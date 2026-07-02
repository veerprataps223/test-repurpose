import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const tiers = [
  {
    name: 'Starter',
    price: '$1,900',
    period: '/ month',
    tagline: 'For creators and small teams testing repurposing for the first time.',
    features: [
      '1 source asset per month (podcast, webinar or blog)',
      '8 short-form video clips',
      '1 SEO-structured blog post',
      '1 LinkedIn/Instagram carousel',
      '9 business day turnaround',
    ],
    cta: 'Start with Starter',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$4,200',
    period: '/ month',
    tagline: 'For teams publishing weekly who want a full repurposing pipeline.',
    features: [
      '2–4 source assets per month',
      '15+ short-form video clips',
      '2 SEO-structured blog posts',
      'Weekly newsletter draft',
      '3 carousels + quote/stat graphics',
      'AI & search visibility formatting',
      '7 business day turnaround',
      'Dedicated Slack channel',
    ],
    cta: 'Start with Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    tagline: 'For brands with multiple shows, hosts, or content lines to manage.',
    features: [
      'Unlimited source assets',
      'Full video, design & copy team assigned',
      'Multi-brand / multi-host support',
      'Custom reporting & analytics',
      'Priority 5 business day turnaround',
      'Quarterly strategy reviews',
    ],
    cta: 'Talk to sales',
    highlight: false,
  },
]

const faqs = [
  { q: 'What counts as a "source asset"?', a: 'Any single piece of long-form content you already produce — a podcast episode, a webinar recording, or a long-form blog post. We use it as the raw material for everything else.' },
  { q: 'Do you need access to our brand assets?', a: 'Yes — during onboarding we collect your brand guide, fonts, colors, and any templates so every deliverable looks native to your brand from the first batch.' },
  { q: 'Can we mix and match formats?', a: 'Yes. Growth and Scale plans let you allocate your monthly output across clips, carousels, blog posts and newsletters however fits your calendar.' },
  { q: 'Is there a contract or can we cancel anytime?', a: 'Plans are month-to-month with a 2-batch minimum so our team has time to learn your brand voice. Cancel anytime after that with 30 days notice.' },
  { q: 'Do you handle publishing/scheduling too?', a: 'By default we deliver ready-to-post files to your shared folder. Scale plans can include direct scheduling through your social tools on request.' },
]

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans built around how much content you already create."
        subtitle="Every plan includes editing, design, and strategy — no add-on fees for the basics."
      />

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {tiers.map((t) => (
              <div key={t.name} className={`pricing-card ${t.highlight ? 'is-highlight' : ''}`}>
                {t.highlight && <span className="pricing-badge">Most popular</span>}
                <h3>{t.name}</h3>
                <p className="pricing-tagline">{t.tagline}</p>
                <div className="pricing-price">
                  <span className="price-value">{t.price}</span>
                  <span className="price-period">{t.period}</span>
                </div>
                <ul className="check-list">
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${t.highlight ? 'btn-primary' : 'btn-outline'} btn-block`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Questions</span>
            <h2>Pricing FAQ</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
