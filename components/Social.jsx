import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/adarshrajan11',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/adarsh-rajan-17479b1ab/',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
]
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
