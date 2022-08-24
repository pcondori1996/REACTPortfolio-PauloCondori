import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFillDisplayFill} from 'react-icons/bs'

const HSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/paulosergio1996/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/pcondori1996" target="_blank"><AiFillGithub/></a>
        <a href="https://pcondori1996.github.io/Paulo_Condori_Portfolio/" target="_blank"><BsFillDisplayFill/></a>
    </div>

  )
}

export default HSocials