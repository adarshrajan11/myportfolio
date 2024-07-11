import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Service',
    path: '/services',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/' />
          <h1 className='text-4xl font-semibold'>
            Adarsh
            <span className='text-accent'>.</span>
          </h1>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className='mb-4 text-xl hover: text-accent transition-all'
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
