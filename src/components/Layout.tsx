import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'
import portfolioData from '../data/portfolio.json'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title = 'Portfolio', description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || portfolioData.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <nav>
          <Link href="/">
            <h1>{portfolioData.contact.name}</h1>
          </Link>
          <ul>
            {portfolioData.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; 2025 {portfolioData.contact.name}. All rights reserved.</p>
      </footer>
    </>
  )
}