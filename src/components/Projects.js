import React from 'react'
import travelImg  from "../assets/travel.avif"
import taskImg  from "../assets/task.avif"
import imsImg  from "../assets/imsn.avif"
import scImg  from "../assets/sc.avif"
import pmsImg  from "../assets/pms.avif"
import ecuiImg  from "../assets/ecuid.avif"

const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      
       {/* Projects Container  */}
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           
           <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#ffb915]'>Projects</p>
              <p className='py-6'>Check out some of my recent projects</p>
           </div>

            {/* Project Cards Container  */}
            {/* content-div is custom css */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              
              {/* Grid Item */}
              <div style={{backgroundImage: `url(${travelImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Travel Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://tourlanka.netlify.app" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/AbdullaMIM/Travel-App" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${taskImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Task Management System 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${imsImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Inventory Management System
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/AbdullaMIM/Inventory-Mangement-System" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${scImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Frontend Design of Software Company
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://powersoftplc.netlify.app/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/AbdullaMIM/React-Tailwind" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${pmsImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Power Mangement Sytem - ElectroGrid
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${ecuiImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Ecommerce Application - UI Design
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://www.figma.com/file/fhBw97kNDJLHvAHOAakMvV/HCI-2022?node-id=409%3A7595&t=6EULlkJaxQfQ20mk-1" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Design</button>
                        </a>
                    </div>
                </div>
              </div>


            </div>

        </div>
         
    </div>
  )
}

export default Projects