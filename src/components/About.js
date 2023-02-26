import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        
        <div className='flex flex-col justify-center items-center w-full h-full'>
            
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
               <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-[#ff3131]'>About</p>
               </div>
               <div></div>  
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p>Hello, Greetings from Abdulla, nice to meet you. Please take a moment to explore.</p>
                </div>
                <div>
                    <p>As a SLIIT undergraduate with a keen interest in full stack development, I am committed to designing user-friendly web applications. I strive to provide top-notch solutions through optimal coding practices, always seeking out new challenges and keeping up with the latest technologies.</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default About