import bg_img from '../../assets/images/bg.jpg'; //Component 1
import logo from '../../assets/images/logo.svg'; //Component 1
import lang from '../../assets/images/translate.png'; //Component 1, Component 7

import tv from '../../assets/images/tv.jpg'; //Component 2
import tv_video from '../../assets/videos/video-tv.mp4'; //Component 2

import boxshot from '../../assets/images/boxshot.jpg'; //Component 3
import mobile from '../../assets/images/mobile.jpg'; //Component 3
import download from '../../assets/videos/Success.gif'; //Component 3

import devices_video from '../../assets/videos/video-devices.mp4'; //Component 4
import devices from '../../assets/images/devices.jpg'; //Component 4

import kids from '../../assets/images/kids.jpg'; //Component 5

import questions from '../questions.json'; //Component 6
import plus from '../../assets/images/plus.svg'; //Component 6

import links from '../links.json'; //Component 7

import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

  const [ans,setAns] = useState(-1);
  const [previousIndex, setPreviousIndex]= useState(-1);

  function toggleAns(index){

    if(previousIndex>=0){
        document.querySelectorAll('#plus')[previousIndex].classList.remove('rotate-plus');
        document.querySelectorAll('#plus')[previousIndex].classList.add('rotate-cross');
    }

    if(ans===index){
        setAns(-1);
        setPreviousIndex(-1);
    } 
    else{
        setAns(index);
        document.querySelectorAll('#plus')[index].classList.add('rotate-plus');
        setPreviousIndex(index);
    }

  }
  return (
    <>
        {/* 1st Component */}
        <div className="h-[70vh] lg:h-screen w-full bg-[center_80%] bg-cover bg-no-repeat" id="home" style={{backgroundImage: `url(${bg_img})`}}>
            
            <div id='box' className='h-full lg:h-screen w-screen absolute m-0'>

                <div className=' w-11/12 xl:w-9/12 m-auto mt-6 flex flex-row justify-between items-center relative bg-transparent'>
                    <img src={logo} alt="logo" className=' w-20 lg:w-40 drop-shadow-sm'/>
                    <div className='flex flex-row gap-3 md:gap-6'>
                        <img src={lang} alt="Language" className=' h-4 w-4 self-center translate-x-10 md:translate-x-12 drop-shadow-md'/>
                        <select defaultValue="English" name="languageSelect" id="language" className=' text-white border border-white px-4 py-1 pl-8 bg-transparent rounded focus:outline focus:outline-2 focus:outline-white drop-shadow'>
                            <option value="English" lang='en' label='English' className='bg-white text-black hover:bg-blue-500 mr-1 drop-shadow-md'> English </option>
                            <option value="Hindi" lang='hi' label='हिन्दी' className='bg-white text-black hover:bg-blue-500 drop-shadow-md'> हिन्दी </option>
                        </select>
                        <Link to='/login'> <button type="button" className=' text-white bg-[#e50914] rounded py-1 px-4 hover:bg-red-700 drop-shadow-md transition duration-300 ease-in-out'> Sign In</button> </Link> 
                    </div>
                </div>

                <div className=' flex flex-col w-11/12 md:w-10/12 xl:w-8/12 m-auto gap-3 lg:gap-6 text-center bg-transparent mt-20 lg:mt-44 relative'>
                    <h2 className=' text-white font-extrabold text-3xl lg:text-5xl drop-shadow-md'>Unlimited movies, TV shows and more</h2>
                    <h5 className=' text-white lg:font-semibold text-xl lg:text-2xl drop-shadow-md'>Watch anywhere. Cancel anytime.</h5>
                    <p className=' text-white lg:font-semibold text-lg lg:text-xl w-10/12 m-auto md:w-full drop-shadow-md'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
                    <div className=' flex md:flex-row flex-col justify-center items-center w-11/12 md:w-9/12 m-auto lg:gap-2 gap-3'>
                        <div id='email-phone' className=' border border-white/60 rounded w-11/12 md:w-7/12 flex flex-col justify-center items-start bg-black/60 px-2 has-[:focus]:outline has-[:focus]:outline-offset-2 has-[:focus]:outline-white'>
                            <input type="email" id='signin' className='border-1 border-red-900 translate-y-4 bg-transparent border-none outline-none text-white w-full peer caret-red-600'/>
                            <label htmlFor='signin' className=' text-white -translate-y-4 peer-focus:-translate-y-7 peer-focus:scale-75 transition duration-300 ease-in-out drop-shadow-md'>Email address</label>
                        </div>
                        <button className='text-white bg-[#e50914] rounded py-2 px-4 hover:bg-red-700 lg:font-medium lg:text-2xl md:text-xl md:py-3 lg:py-[10px] lg:px-4 drop-shadow-md transition duration-300 ease-in-out'>Get Started &gt; </button>
                    </div>
                    
                </div>
            </div>

        </div>
        <hr className=' h-2 w-screen bg-[#232323] -mt-1 border-none'/>

        {/* 2nd Component */}

        <div className='w-full h-[80vh] md:h[70vh] lg:h-[83vh] bg-black m-auto py-8 px-4' id='container'>
            <div className='w-full md:w-11/12 lg:w-10/12 h-full flex flex-col lg:flex-row lg:justify-center items-center m-auto'>
                <div className=' w-11/12 lg:w-[52%]'>
                    <h1 className=' text-white font-extrabold text-[2rem] lg:text-5xl drop-shadow-md text-center lg:text-start'> Enjoy on your TV </h1>
                    <br />
                    <h5 className=' text-white lg:font-medium text-lg lg:text-2xl drop-shadow-md text-center lg:text-start'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
                </div>
                <div className='w-10/12 sm:w-9/12 md:w-8/12 lg:w-[45%] relative lg:-top-24 xl:-top-20'>
                    <div className=' absolute h-auto w-full m-auto text-white top-12 md:top-14 lg:-top-3 xl:-top-8'>
                        <video src={tv_video} width="" height="" draggable="false" autoPlay="true" loop="true" muted="true" className=' -top-6 w-[74%] lg:w-[76%] m-auto'/>
                    </div>
                    <div className=' absolute h-auto w-full m-auto lg:-top-16 xl:-top-24 z-50'>
                        <img src={tv} alt="TV" className='w-[90%]'/>
                    </div>
                </div>
            </div>
        </div>
        <hr className=' h-2 w-screen bg-[#232323] -mt-2 border-none'/>

        {/* 3rd Component */}

        <div className='w-full h-[90vh] md:h-[100vh] lg:h-[83vh] bg-black m-auto px-1 lg:py-8 lg:px-4 pb-6' id='container'>
            <div className='w-full xl:w-11/12 h-full flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:items-center  m-auto  relative'>
                
                <div className=' h-3/5 lg:h-auto w-10/12 sm:w-9/12 md:w-8/12 lg:w-[40%]  m-auto z-10 relative pb-0 -mt-5 md:-mt-20 lg:mt-10'>
                    <img src={mobile} alt="mobile" className=' lg:scale-105 xl:w-4/5 xl:h-96 xl:scale-110 m-auto'/>
                    
                    <div className=' flex flex-row border-2 border-white px-2 py-1 bg-black rounded-lg text-white justify-between w-8/12 md:w-8/12 lg:w-8/12 m-auto z-50 relative -top-28 h-20 xl:h-24'>
                        
                        <div className=' w-3/12  flex-grow-0'>
                            <img src={boxshot} alt="boxshot" className='h-16 lg:w-10 lg:h-14 xl:w-12 xl:h-20'/>
                        </div>

                        <div className=' flex flex-col justify-center items-start w-7/12  flex-grow'>
                            <span className=' drop-shadow-md font-semibold text-sm '>Stranger Things</span>
                            <span className=' text-blue-500 drop-shadow-md text-sm '> Downloading... </span>
                        </div>

                        <div className='  p-0 w-3/12 flex justify-center items-center flex-grow-0 '>
                            <img src={download} alt="download" className=' h-12 lg:h-16'/>
                        </div>

                    </div>
                </div>

                <div className=' w-10/12 lg:w-[52%]  m-auto'>
                    <h1 className=' text-white font-extrabold text-[2rem] lg:text-5xl drop-shadow-md text-center lg:text-start'> Download your shows to watch offline </h1>
                    <br />
                    <h5 className=' text-white lg:font-medium text-lg lg:text-2xl drop-shadow-md text-center lg:text-start lg:w-11/12'>Save your favourites easily and always have something to watch.</h5>
                </div>
            </div>
        </div>
        <hr className=' h-2 w-screen bg-[#232323] -mt-2 border-none'/>

        {/* 4th Component */}

        <div className='w-full h-[80vh] md:h[70vh] lg:h-[83vh] bg-black m-auto py-8 px-4' id='container'>
            <div className='w-full md:w-11/12 lg:w-10/12 h-full flex flex-col lg:flex-row lg:justify-center items-center m-auto'>
                <div className=' w-11/12 lg:w-[52%]'>
                    <h1 className=' text-white font-extrabold text-[2rem] lg:text-5xl drop-shadow-md text-center lg:text-start'> Watch everywhere </h1>
                    <br />
                    <h5 className=' text-white lg:font-medium text-lg lg:text-2xl drop-shadow-md text-center lg:text-start'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h5>
                </div>
                <div className=' w-10/12 sm:w-9/12 md:w-8/12 lg:w-[45%] relative lg:-top-24 xl:-top-20'>
                    <div className='absolute h-auto w-full m-auto text-white top-5 -left-6 md:top-7 lg:scale-110 lg:-left-6 lg:-top-9 xl:scale-110 xl:-top-14 xl:-left-6'>
                        <video src={devices_video} width="" height="" draggable="false" autoPlay="true" loop="true" muted="true" className=' w-[54%] lg:w-[46%] xl:w-[50%] m-auto'/>
                    </div>
                    <div className=' absolute h-auto w-full m-auto lg:-top-16 xl:-top-24 z-50'>
                        <img src={devices} alt="devices" className='w-[90%]'/>
                    </div>
                </div>
            </div>
        </div>
        <hr className=' h-2 w-screen bg-[#232323] -mt-2 border-none'/>

        {/* 5th Component */}

        <div className='w-full h-[90vh] md:h-[100vh] lg:h-[83vh] bg-black m-auto px-1 lg:py-8 lg:px-4 pb-6' id='container'>
            <div className='w-full xl:w-11/12 h-full flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:items-center  m-auto '>
                
                <div className=' lg:h-auto w-10/12 sm:w-9/12 md:w-8/12 lg:w-[40%]  m-auto z-10'>
                    <img src={kids} alt="kids" className=' lg:scale-105 xl:w-4/5 xl:h-96 xl:scale-110 m-auto'/>
                </div>

                <div className=' w-10/12 lg:w-[52%]  m-auto'>
                    <h1 className=' text-white font-extrabold text-[2rem] lg:text-5xl drop-shadow-md text-center lg:text-start'> Create profiles for kids </h1>
                    <br />
                    <h5 className=' text-white lg:font-medium text-lg lg:text-2xl drop-shadow-md text-center lg:text-start lg:w-9/12'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h5>
                </div>
            </div>
        </div>
        <hr className=' h-2 w-screen bg-[#232323] -mt-2 border-none'/>

        {/* FAQs 6th Component */}

        <div id='container' className='w-full bg-black pt-14 h-auto pb-14'>
            <div className='w-[90%] md:w-8/12 xl:w-7/12 m-auto '>
                <h1 className=' text-white font-extrabold text-[2rem] lg:text-5xl drop-shadow-md text-center'> Frequently Asked Questions </h1>
            </div>
            <br />
            <div className='w-[90%] xl:w-9/12 m-auto flex flex-col gap-2 *:bg-[#302f2f] *:py-5 *:px-3 '> 
            {/*  '*:' sets properties for all immediate child */}
                
                    {questions.map((que, index)=>{
                        
                        return <> <button className=' hover:bg-[#4d4a4a] transition duration-700 ease-in-out' onClick={()=>toggleAns(index)}>
                                    <div key={index} className='flex felx-row justify-between items-center '> 
                                        <span className='text-white font-semibold text-lg md:text-xl xl:text-2xl drop-shadow'> {que.question}  </span>
                                        <img src={plus} alt="plus" id='plus'/>
                                    </div>
                                    
                                </button>
                                {ans===index ? 
                                    <div className='flex flex-col justify-start items-center py-5 px-3 transition duration-700 ease-in-out -mt-[7px]'> 
                                        <span className='text-white font-semibold text-lg md:text-xl xl:text-2xl drop-shadow'> {que.ans}  </span>
                                        <br />
                                        <span className='text-white font-semibold text-lg md:text-xl xl:text-2xl drop-shadow'> {que.ans2}  </span>
                                </div> : ""} </>
                    })}
                
            </div>
            <br />
            <div className='w-11/12 xl:w-8/12 m-auto'>
                <h5 className=' text-white lg:font-medium text-lg lg:text-xl xl:text-2xl drop-shadow-md text-center lg:text-center xl:text-start lg:w-full'>Ready to watch? Enter your email or mobile number to create or restart your membership.</h5>
                <br />
                <div className=' flex sm:flex-row flex-col justify-center items-center w-11/12 md:w-9/12 lg:w-11/12 m-auto lg:gap-2 gap-3'>
                    <div id='email-phone' className=' border border-white/60 rounded w-11/12 sm:w-8/12 md:w-7/12 flex flex-col justify-center items-start bg-black/60 px-2 has-[:focus]:outline has-[:focus]:outline-offset-2 has-[:focus]:outline-white'>
                        <input type="email" id='signin' className='border-1 border-red-900 translate-y-4 bg-transparent border-none outline-none text-white w-full peer caret-red-600'/>
                        <label htmlFor='signin' className=' text-white -translate-y-4 peer-focus:-translate-y-7 peer-focus:scale-75 transition duration-300 ease-in-out drop-shadow-md'>Email address</label>
                    </div>
                    <button className='text-white bg-[#e50914] rounded py-2 px-4 hover:bg-red-700 lg:font-medium lg:text-2xl md:text-xl sm:py-[12px] md:py-[10px] lg:py-[10px] lg:px-4 drop-shadow-md transition duration-300 ease-in-out'>Get Started &gt; </button>
                </div>

            </div>
            
        </div>
        <hr className=' h-2 w-screen bg-[#232323] -mt-2 border-none'/>

        {/* Footer- 7th Component */}
        <div id='container' className='w-full bg-black pt-12 h-auto pb-14'>
            <div className='w-[90%] md:w-8/12 xl:w-9/12 m-auto flex flex-col'>
                <p className='text-white/70 font-light text-base'>Questions? Call <span className=' cursor-pointer underline'> 000-800-919-1694 </span></p>
                <br />
                <div className=' grid grid-cols-2 lg:grid-cols-4 justify-between gap-1'>
                    {links.map((link,index)=>{
                        return <p className='text-white/70 font-light text-base cursor-pointer underline' key={index}>{link.link}</p>
                    })}    
                </div>
                <br />
                <div className=' flex flex-row items-start justify-start  -ml-4 '>
                    <img src={lang} alt="Language" className=' h-4 w-4 self-center translate-x-7 md:translate-x-8 drop-shadow-md'/>
                    <select defaultValue="English" name="languageSelect" id="language" className=' text-white border border-white px-4 py-1 pl-8 bg-transparent rounded focus:outline focus:outline-2 focus:outline-white drop-shadow'>
                        <option value="English" lang='en' label='English' className='bg-white text-black hover:bg-blue-500 mr-1 drop-shadow-md'> English </option>
                        <option value="Hindi" lang='hi' label='हिन्दी' className='bg-white text-black hover:bg-blue-500 drop-shadow-md'> हिन्दी </option>
                    </select>
                </div>
                <br />
                <p className='text-white/70 font-light text-base'>Netflix India</p>
            </div>
        </div>
    </>
    
    
  )
}

export default Home;