import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

export default function Social() {
  return (
    <div className='flex justify-between social'>
        <a href="https://www.facebook.com/profile.php?id=100073088183904"><FacebookIcon className='icon-social' style={{fontSize: 60}} /></a>
        <a href="https://www.instagram.com/koder_alvarez/"><GitHubIcon className='icon-social' style={{fontSize: 60}} /></a>
        <a href="https://www.linkedin.com/in/harold-casta%C3%B1o-816180216/"><LinkedInIcon className='icon-social' style={{fontSize: 60}} /></a>
        <a href="https://github.com/haroldCoder/"><LanguageIcon className='icon-social' style={{fontSize: 60}} /></a>
    </div>
  )
}
