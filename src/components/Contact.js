import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
      
       <form method="POST" action="https://getform.io/f/29a3084e-0ccf-44b3-95d1-b50597bc2cc3" className='flex flex-col max-w-[600px] w-full'>
           
           <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-[#ffb915] text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4'>Route all the queries to email and connect with me on social media.</p>
           </div>
           
           <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name="Name" required/>
           <input className='bg-[#ccd6f6] p-2 my-4 rounded-md' type="email" placeholder='Email' name="Email" required/>
           <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Subject' name="Subject" required/>
           <textarea className='bg-[#ccd6f6] p-2 my-4 rounded-md' placeholder='Message' name="Message" rows="10" required></textarea>
           <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#ffb915] hover:border-[#ffb915]'>SEND MESSAGE</button>
     
       </form>

    </div>
  )
}

export default Contact