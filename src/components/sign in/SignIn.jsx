import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

import login from '../login.json'; //Component 2
import lang from '../../assets/images/translate.png' //Component 2

const SignIn = () => {
  return (
    <div className=' w-screen bg-black sm:bg-hero-pattern pt-6 flex flex-col sm:gap-10 '>
        <Link to='/'> <img src={logo} alt="Logo" className=' w-24 md:w-32 lg:w-40 drop-shadow-sm translate-x-5 sm:translate-x-7 xl:translate-x-44'/> </Link>
        
        {/* Component 1 */}
        <div className=' w-full flex flex-col m-auto rounded sm:bg-black/70 sm:w-[460px] justify-start items-start px-4 sm:px-16 pt-10 pb-16'>
            <div className=' h-auto sm:h-[80%] w-full m-auto flex flex-col gap-5 justify-start '>
                <h1 className=' text-white font-bold text-3xl'>Sign In</h1>
                <div id='email' className=' border border-white/60 rounded w-11/12 sm:w-full  flex flex-col justify-center items-start bg-black/60 px-2 has-[:focus]:outline has-[:focus]:outline-offset-2 has-[:focus]:outline-white'>
                    <input type="email" id='signin' className=' translate-y-4 bg-transparent border-none outline-none text-white w-full peer caret-red-600'/>
                    <label htmlFor='signin' className=' text-white -translate-y-3 peer-focus:-translate-y-7 peer-focus:scale-75 transition duration-300 ease-in-out drop-shadow-md'>Email address</label>
                </div>
                <div id='password' className=' border border-white/60 rounded w-11/12 sm:w-full flex flex-col justify-center items-start bg-black/60 px-2 has-[:focus]:outline has-[:focus]:outline-offset-2 has-[:focus]:outline-white'>
                    <input type="password" id='pass' className=' translate-y-4 bg-transparent border-none outline-none text-white w-full peer caret-red-600'/>
                    <label htmlFor='pass' className=' text-white -translate-y-3 peer-focus:-translate-y-7 peer-focus:scale-75 transition duration-300 ease-in-out drop-shadow-md'>Password</label>
                </div>
                <button className='w-11/12 sm:w-full text-center text-white font-bold bg-[#e50914] rounded py-2 hover:bg-red-700'> Sign In</button>
                <p className='text-white font-bold text-center w-11/12 sm:w-full'>OR</p>
                <button className='w-11/12 text-center sm:w-full text-white font-bold bg-[#4d4a4a] rounded py-2 hover:bg-[#302f2f]'> Use a sign-in code</button>
                <p className='text-white text-center font-bold w-11/12'>Forgot password?</p>
            </div>
            <br />
            <div className=' pl-4'>
                <input type="checkbox" name="auto" id="auto" className='translate-y-[3px] -translate-x-2  w-[18px] h-[18px] rounded hover:ring-2 hover:ring-red-600 checked:accent-gray-800 ' /> &nbsp;
                <label htmlFor="auto" className=' text-white'>Remember Me</label> 
            </div>
            <br />
            <div>
                <p className='text-white'> New to Netflix? <strong className='text-white underline cursor-pointer'> Sign up now. </strong> </p>
            </div>
            <br />
            <div>
                <p className='text-white text-sm font-light block cp:inline'> This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                <span className=' text-blue-600 text-sm font-light block cp:inline cursor-pointer'> Learn more.</span>
            </div>
            
        </div>

        <hr className='w-full bg-white sm:invisible'/>

        {/* Component 2 */}
        <div className=' w-full flex flex-col m-auto rounded sm:bg-black/70 justify-start items-start px-4 sm:px-24 pt-10 pb-16'>
            <p className=' text-white/70 text-base'> Questions? Call <span className=' hover:underline hover:cursor-pointer'> 000-800-919-1694 </span> </p>
            <br />
            <div className=' w-11/12 grid grid-cols-2 lg:grid-cols-4 gap-2 justify-between'>
                {login.map((link,index)=>{
                    return <p className='text-white/70 text-sm underline hover:cursor-pointer' key={index}>{link.link}</p>
                })}
            </div>
            <br />
            <div className=' flex flex-row items-start justify-start  -ml-4 '>
                <img src={lang} alt="Language" className=' h-4 w-4 self-center translate-x-7 md:translate-x-8 drop-shadow-md'/>
                <select defaultValue="English" name="languageSelect" id="language" className=' text-white/70 border border-white px-4 py-1 pl-8 bg-transparent rounded focus:outline focus:outline-2 focus:outline-white drop-shadow'>
                    <option value="English" lang='en' label='English' className='bg-white text-black hover:bg-blue-500 mr-1 drop-shadow-md'> English </option>
                    <option value="Hindi" lang='hi' label='हिन्दी' className='bg-white text-black hover:bg-blue-500 drop-shadow-md'> हिन्दी </option>
                </select>
            </div>
        </div>
        
    </div>
  )
}

export default SignIn