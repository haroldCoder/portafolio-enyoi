import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export default function Mode(props) {
  return (
    <>
    {
        props.mode ?
        <LightModeIcon style={{color: "#FFF"}}/>
        :
        <ModeNightIcon style={{color: "#FFF"}}/>
    }
    </>
  )
}
