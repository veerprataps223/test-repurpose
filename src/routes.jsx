import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Pricing from './pages/Pricing.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
