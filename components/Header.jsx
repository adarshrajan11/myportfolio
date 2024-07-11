import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 xl:py12 text white '>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo goes here */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Adarsh <span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className='hidden xl:flex'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
