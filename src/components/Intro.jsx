import React from 'react'
import {docs} from '../assets/Assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Intro = () => {

    useGSAP(()=>{
      gsap.fromTo(('.vedio'),{
       x:-550,
       y:-150,
       borderRadius:0,
       yoyo:true,
        
      },{
        x:0,
        y:0,
        duration:3,
        ease:'bounce.inOut'

      })
    },[])
  return (
    <div id='Intro'>
       <p className='  sm:text-2xl font-bold mt-20 text-center uppercase'>Introduction Of <span className='text-blue-400'>Our</span>  Gang  <span className='text-blue-400'>Members.</span> </p>
       <div className="vedio  py-8 flex justify-center  mt-20 ">
       <video className='h-[400px] w-[400px] border-b-[4px] border-l-[4px] p-4 border-transparent  hover:border-blue-400 duration-500 cursor-pointer ' controls>
        <source  src={docs.vedio} type="video/mp4" />
      
      </video>
      </div>
    </div>
  )
}

export default Intro