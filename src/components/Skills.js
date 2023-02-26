import React from 'react'

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import ReactIcon from "../assets/react.png"
import Java from "../assets/java.png"
import Node from "../assets/node.png"
import Figma from "../assets/figma.png"
import MongoDB from "../assets/mongo.png"
import MySQL from "../assets/mysql.png"
import TailwindCSS from "../assets/tailwind.png"


const Skills = () => {
  return (
    <div name="skills" className='w-full h-full bg-[#0a192f] text-gray-300'>
       
        {/* Container - Skills */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff3131]'>Skills</p>
                <p className='py-4'>I possess hands-on experience with the following cutting-edge technologies.</p>
            </div>

            {/* Container - All Icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={HTML} alt="HTML Icon"/>
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={CSS} alt="CSS Icon"/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={JavaScript} alt="JavaScript Icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={ReactIcon} alt="React Icon"/>
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={Node} alt="Node Icon"/>
                    <p className='my-4'>Node</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={Java} alt="Java Icon"/>
                    <p className='my-4'>Java</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={MySQL} alt="MySQL Icon"/>
                    <p className='my-4'>MySQL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={MongoDB} alt="MongoDB Icon"/>
                    <p className='my-4'>MongoDB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={TailwindCSS} alt="TailwindCSS Icon"/>
                    <p className='my-4'>TailwindCSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={Figma} alt="Figma Icon"/>
                    <p className='my-4'>Figma</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills