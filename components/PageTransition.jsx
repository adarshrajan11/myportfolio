'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageTransition = ({ children }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: 'easeInOut' },
          }}
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none z-40 flex'
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
