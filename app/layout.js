import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import Stairtransition from '@/components/stairtransition'

const inter = Inter({ subsets: ['latin'] })
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrains_Mono',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jetBrainsMono.variable}>
        <Stairtransition />
        <PageTransition>
          <Header />
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
