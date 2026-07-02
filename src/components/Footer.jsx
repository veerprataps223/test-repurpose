import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="brand">
            <span className="brand-mark">Re</span>loop
          </div>
          <p>One piece of content. Ten places it works harder.</p>
          <div className="social-row">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="X / Twitter">x</a>
            <a href="#" aria-label="YouTube">yt</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">Video → Social Clips</Link>
          <Link to="/services">Podcast → Article</Link>
          <Link to="/services">Webinar → Course</Link>
          <Link to="/services">Articles → Carousels</Link>
        </div>

        <div className="footer-col">
          <h4>Get started</h4>
          <p>hello@reloopmedia.com</p>
          <p>+1 (415) 555-0142</p>
          <Link to="/pricing" className="btn btn-outline btn-sm">See pricing</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Reloop Media. All rights reserved.</p>
        <p>Made for teams who create once and publish everywhere.</p>
      </div>
    </footer>
  )
}
