'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'home', path: '/' },
  { name: 'service', path: '/services ' },

  { name: 'resume', path: '/resume' },
  { name: 'works', path: '/works' },
  { name: 'contact', path: '/contact' },
]
const Nav = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && 'text-accent boder-b2 border-accent'
            }`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
