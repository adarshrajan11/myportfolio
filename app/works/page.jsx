'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut doloremque, obcaecati debitis magnam provident molestiae reprehenderit consequatur sapiente consequuntur quae, eaque vero quos tenetur. Cupiditate nisi omnis recusandae quaerat natus!',
    stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut doloremque, obcaecati debitis magnam provident molestiae reprehenderit consequatur sapiente consequuntur quae, eaque vero quos tenetur. Cupiditate nisi omnis recusandae quaerat natus!',
    stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut doloremque, obcaecati debitis magnam provident molestiae reprehenderit consequatur sapiente consequuntur quae, eaque vero quos tenetur. Cupiditate nisi omnis recusandae quaerat natus!',
    stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '',
    live: '',
    github: '',
  },
]

const Works = () => {
  const [project, setProject] = useState(projects[0])
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-10'
    >
      <div className='contrainer mxauto'>
        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
          <div className='flex flex-col gap-[30px] h-[50%]'>
            <div className='text-8xl leading-none font-extrabold text-transparent text-outline '>
              {project.num}
            </div>
            {/* Project category */}
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
              {project.category} project
            </h2>
            {/* project Description */}
            <p className='text-[18px] text-white text-opacity-80'>
              {project.description}
            </p>
            {/* Stack */}
            <ul className='flex gap-4'>
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                )
              })}
            </ul>
            <div className='border border-white/20'></div>
            <div className='flex items-center gap-4'>
              {/* Live project */}
              <Link href={project.live}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github project */}
              <Link href={project.github}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      <TooltipContent>
                        <p>Github Project</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[50%]'>Slider</div>
      </div>
    </motion.section>
  )
}

export default Works
