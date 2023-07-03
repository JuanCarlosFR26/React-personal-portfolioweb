import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a className='' href='https://www.linkedin.com/feed/' target='_blank'><BsLinkedin/></a>
        <a className='' href='' target='_blank'><FaGithub/></a>
        <a className='' href='' target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials