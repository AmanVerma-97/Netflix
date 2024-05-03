import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'; 

const Error = () => {
  return (
    <>
        <nav className=' w-full py-[22px] 2xl:py-[23px] pl-10 bg-black'>
            <Link to='/'> <img src={logo} alt="Logo" className='w-[88px]'/> </Link>
        </nav>
        <div className=' bg-hero-pattern w-screen h-auto min-h-[90vh] pt-20 lg:pt-40'>

            <div className=' w-8/12 lg:w-[690px] m-auto flex flex-col gap-6 justify-center items-center'>
                <h1 className=' text-white font-extrabold text-4xl lg:text-7xl drop-shadow-lg'>Lost your way?</h1>
                <h3 className=' text-white font-semibold text-base lg:text-2xl drop-shadow-md text-center'>Sorry, we can't find the page. You'll find a lot to explore at home page. </h3>
                <Link to='/'><button className=' bg-white hover:bg-slate-300 text-black px-4 py-2 hover:text-red-700 font-semibold text-base lg:text-xl rounded-md drop-shadow-md'> Netflix Home</button></Link> 
                <p className='text-white font-light text-xl lg:text-3xl inline drop-shadow-md'> Error Code <span className=' font-semibold'> NSES-404 </span> </p>
            </div>
        </div>
    </>
    
  )
}

export default Error