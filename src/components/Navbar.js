import React, {useState} from 'react'
import Logo from '../assets/MALOGO1.png'
import CV from '../assets/Abdulla_Resume.pdf'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
   
   // useState hook for handleClick function of humburgerIcon 
   const [nav, setNav] = useState(false)
   const handleClick = () => setNav(!nav)

   return (
    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

      {/* Logo Image */}
      <div>
         <img src={Logo} alt='Logo' style={{ width: '80px'}}/>
      </div>

      {/* Menu */}
         <ul className='hidden md:flex'>
            <li>
              <Link to="home" offset={-200} smooth={true} duration={500}>
                 Home
              </Link>
            </li>
            <li>
               <Link  to="about" smooth={true} duration={500}>
                 About
               </Link>
            </li>
            <li>
               <Link  to="skills" offset={-100} smooth={true} duration={500}>
                 Skills
               </Link>
            </li>
            <li>
               <Link  to="projects" offset={-65} smooth={true} duration={500}>
                 Projects
               </Link>
            </li>
            <li>
               <Link  to="contact"  offset={-75} smooth={true} duration={500}>
                 Contact
               </Link>
            </li>
         </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
         <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                 Home
            </Link>
         </li>
         <li className='py-6 text-4xl'>
             {' '}
             <Link  onClick={handleClick}  to="about" smooth={true} duration={500}>
                 About
             </Link>
         </li>
         <li className='py-6 text-4xl'>
              {' '}
              <Link onClick={handleClick} to="skills" offset={-75} smooth={true} duration={500}>
                 Skills
              </Link>
         </li>
         <li className='py-6 text-4xl'>
                {' '}
                <Link  onClick={handleClick} to="projects" offset={-75} smooth={true} duration={500}>
                  Projects
                </Link>
         </li>
         <li className='py-6 text-4xl'>
               {' '}
               <Link onClick={handleClick} to="contact" offset={-80} smooth={true} duration={500}>
                 Contact
               </Link>
         </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
         <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/mohamed-abdulla-4126841b8" target="_blank" rel="noreferrer">
                    Linkedin<FaLinkedin size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/AbdullaMIM" target="_blank" rel="noreferrer">
                    Github<FaGithub size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#16a34a]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="mailto: mohamedabdulla9823@gmail.com">
                    Email<HiOutlineMail size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cc3434]'>
                <a className='flex justify-between items-center w-full text-gray-300' href={CV} download={"Abdulla_Resume"}>
                    Resume<BsFillPersonLinesFill size={30}/>
                </a>
            </li>

         </ul>
      </div>


    </div>
  )
}

export default Navbar