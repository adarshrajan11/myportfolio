'use client'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'

const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rerum dolores neque tempore eaque. Corporis dolore quas officia. Officiis deserunt sit minus eius vero quis hic assumenda illum corporis corrupti.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Adarsh Rajan',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+91 7306807724',
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ years',
    },

    {
      fieldName: 'Nationality',
      fieldValue: 'Indian',
    },

    {
      fieldName: 'Freelance',
      fieldValue: 'avialable',
    },
    {
      fieldName: 'Location',
      fieldValue: 'Kerala, India',
    },

    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi, Malayalam',
    },
  ],
}
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rerum dolores neque tempore eaque. Corporis dolore quas officia. Officiis deserunt sit minus eius vero quis hic assumenda illum corporis corrupti.',
  items: [
    {
      company: 'Softzane solution',
      position: 'Intern',
      duration: '3 months 2021',
    },
    {
      company: 'GBS-PLUS PVT LTD',
      position: 'Junior Software Developer',
      duration: 'April 2022 - Present',
    },
  ],
}
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati reru dolores neque tempore eaque. Corporis dolore quas officia. Offici',
  items: [
    {
      institution: 'University institute of technology',
      degree: 'Bachelor Of Computer Application',
      duration: '2021',
    },
    {
      institution: 'DDU-GKY',
      degree: 'Junior Software developer',
      duration: '2021',
    },
    {
      institution: 'Online Course',
      degree: 'Web development using react',
      duration: '2022-2023',
    },
  ],
}
const skills = {
  title: 'My Skills',
  description:
    'lorem ipsum sit dilat hinokami kagura choto matte kudasai yamete kudasai oamewa mou shindeiru nani. Hajime mashite orewa adarsh rajan desu anathana kotho motho ureshi desu arigathona minna gambare gambare ',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3Alt />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
  ],
}
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='conatiner mx-auto w-full'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skill'>Skill</TabsTrigger>
            <TabsTrigger value='about'>About</TabsTrigger>
          </TabsList>

          <TabsContent className='w-full' value='experience'>
            <div>
              <h3> {experience.title} </h3>
              <p> {experience.description} </p>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {item.position}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent className='w-full' value='education'>
            <div>
              <h3> {education.title} </h3>
              <p> {education.description} </p>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {item.institution}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.degree}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent className='w-full h-full' value='skill'>
            <div>
              <h3> {skills.title} </h3>
              <p> {skills.description} </p>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent
            className='w-full h-full text-center xl:text-left'
            value='about'
          >
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                {about.description}
              </p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-7 max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='flex items-center justify-center xl:justify-start gap-6'
                    >
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-md'>{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
