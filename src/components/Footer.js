import React from 'react'

import Logo from '../assets/MALOGO1.png'
import {BsHeartFill} from 'react-icons/bs'

const Footer = () => {
  return (

    <div className='w-full bg-[#0a192f] text-gray-300 flex flex-rows items-center justify-center gap-2 font-mono pt-8 pb-6'>
                <p>© 2023. All rights reserved - Made with </p> 
                <BsHeartFill />   
                <p> by </p>  
                <img src={Logo} alt='Logo' style={{ width: '50px'}}/>
    </div>
  )
}

export default Footer