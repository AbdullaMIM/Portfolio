import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link, animateScroll as scroll } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'> 
        
        {/* Container - Description */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ffb915]'>HELLO THERE, {"[ MY NAME IS ]"}</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohamed Abdulla</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm an undergraduate student at SLIIT
                and passionate developer with a strong focus on creating responsive, full-stack applications. 
                I am dedicated to enhancing my skills in both front-end and back-end technologies, 
                and am committed to staying up-to-date with the latest advancements in the field.
            </p>

            <div>
                <Link to="projects" offset={-75} smooth={true} duration={500}>
                 <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffb915] hover:border-[#ffb915]'>
                    View Projects
                    <span> <HiArrowNarrowRight className='ml-3'/> </span>
                 </button>
                </Link>
                 
             
            </div>

        </div>

        

    </div>
  )
}

export default Home