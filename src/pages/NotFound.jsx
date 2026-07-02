import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>This page didn't make it into the repurposing plan.</h1>
        <p>The page you're looking for doesn't exist. Let's get you back on track.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  )
}
