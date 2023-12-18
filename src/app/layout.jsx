import SiteNavbar from '@/components/SiteNavbar'
import './globals.css'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'BRTA',
  description: 'Vehicle license provideor',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body>
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
