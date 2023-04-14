import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import {motion} from 'framer-motion'

export default function Social(props) {
  const socialVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };
  
  const iconVariants = {
    initial: {
      scale: 0.8,
    },
    animate: {
      scale: 1,
    },
  };
  return (
    <motion.div
      className={`flex justify-between social ${props.mode ? 'bg-gray-800' : ' bg-[#c2c2c2]'}`}
      variants={socialVariants}
      initial="initial"
      animate="animate"
    >
      <motion.a className='bg-white rounded-full' href="https://www.facebook.com/profile.php?id=100073088183904" variants={iconVariants}>
        <FacebookIcon className="icon-social" style={{ fontSize: 60 }} />
      </motion.a>
      <motion.a className='bg-white rounded-full' href="https://github.com/haroldCoder/" variants={iconVariants}>
        <GitHubIcon className="icon-social" style={{ fontSize: 60 }} />
      </motion.a>
      <motion.a className='bg-white rounded-full' href="https://www.linkedin.com/in/harold-casta%C3%B1o-816180216/" variants={iconVariants}>
        <LinkedInIcon className="icon-social" style={{ fontSize: 60 }} />
      </motion.a>
      <motion.a className='bg-white rounded-full' href="https://website-harold-koderx.netlify.app/" variants={iconVariants}>
        <LanguageIcon className="icon-social" style={{ fontSize: 60 }} />
      </motion.a>
    </motion.div>
  )
}
