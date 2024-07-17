'use client'
import React from 'react'
import CountUp from 'react-countup'
const stats = [
  {
    num: 2,
    text: 'years of experience',
  },
  {
    num: 40,
    text: '  projects completed',
  },
  {
    num: 4,
    text: 'Technologies mastered',
  },
  {
    num: 500,
    text: 'code commits',
  },
]
const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none '>
          {stats.map((item, index) => {
            return (
              <div
                className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className='text-4xl xl:text-6xl font-extrabold'
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[50px]:' : 'max-w-[100px]'
                  } leading-snug text-white/80   text-center`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats