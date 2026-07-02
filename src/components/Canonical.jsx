import { Head } from 'vite-react-ssg'

const SITE_URL = 'https://test-repurpose.vercel.app'

export default function Canonical({ path }) {
  return (
    <Head>
      <link rel="canonical" href={`${SITE_URL}${path}`} />
    </Head>
  )
}
