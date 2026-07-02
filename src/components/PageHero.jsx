export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
