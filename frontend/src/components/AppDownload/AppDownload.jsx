import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download Our App <br /> Tomato App</p>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
  )
}

export default AppDownload