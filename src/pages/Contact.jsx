import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', format: 'Podcast', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's map your repurposing plan."
        subtitle="Tell us what you already create. We'll reply within one business day with next steps."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <h3>Thanks — message received.</h3>
                <p>Someone from our strategy team will reply within one business day at the email you provided.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jordan Lee" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jordan@company.com" />
                </div>
                <div className="form-row">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company Inc." />
                </div>
                <div className="form-row">
                  <label htmlFor="format">Main content format</label>
                  <select id="format" name="format" value={form.format} onChange={handleChange}>
                    <option>Podcast</option>
                    <option>Webinar</option>
                    <option>Long-form blog</option>
                    <option>YouTube video</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="message">What are you hoping to repurpose?</label>
                  <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="A few sentences about what you create and how often." />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send message</button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>Email</h3>
              <p>hello@reloopmedia.com</p>
            </div>
            <div className="info-card">
              <h3>Phone</h3>
              <p>+1 (415) 555-0142</p>
            </div>
            <div className="info-card">
              <h3>Office</h3>
              <p>Remote-first team &mdash; HQ in Austin, TX</p>
            </div>
            <div className="info-card">
              <h3>Response time</h3>
              <p>We reply to every inquiry within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
