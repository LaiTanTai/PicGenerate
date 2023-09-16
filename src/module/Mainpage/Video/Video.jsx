import React, { useState } from 'react'
import './Video.scss'
function Video() {
    const [picstate,setPicstate] = useState({
        'pic1':true,
        'pic2':false,
        'pic3':false
    })
    const handleMouseEnter = (number)=>{
        const setstatestart = {
            'pic1':false,
            'pic2':false,
            'pic3':false
        }
        const newstate = {
            ...setstatestart,
            [number]:true
        }
        setPicstate(newstate)
    }
  return (
    <div className='Video'>
        <div className='allText'>
            <h1 className='video_text_h1'>Introducing video generation</h1>
            <p className='video_text_p'>Provide a prompt and watch Gencraft create unique videos for you in a matter of seconds.</p>
            <button className='video_text_generate_button'><img src='./img/star.svg' alt='star'/>  Generate Now</button>
        </div>
        <div className='allImage1'>
            <div onMouseEnter={()=>handleMouseEnter('pic1')} className={`video_hidden ${picstate.pic1 ? 'show' : ''}`}>
                <video className='video_source' width='280px' height='280px' autoPlay loop >
                    <source  src='./video/video1.mp4' type="video/mp4"></source>
                </video>
            </div>
            <div onMouseEnter={()=>handleMouseEnter('pic2')} className={`video_hidden ${picstate.pic2 ? 'show' : ''}`}>
                <video className='video_source' width='280px' height='280px'  autoPlay loop >
                    <source  src='./video/video2.mp4' type="video/mp4"></source>
                </video>
            </div>
            <div onMouseEnter={()=>handleMouseEnter('pic3')} className={`video_hidden ${picstate.pic3 ? 'show' : ''}`}>
                <video className='video_source' width='280px' height='280px' autoPlay loop >
                    <source  src='./video/video3.mp4' type="video/mp4"></source>
                </video>
            </div>
        </div>
        <div className='allImage2'>
            <div onMouseEnter={()=>handleMouseEnter('pic1')} className={`video_hidden ${picstate.pic1 ? 'show' : ''}`}>
                <video className='video_source' width='200px' height='200px' autoPlay loop >
                    <source  src='./video/video1.mp4' type="video/mp4"></source>
                </video>
            </div>
            <div onMouseEnter={()=>handleMouseEnter('pic2')} className={`video_hidden ${picstate.pic2 ? 'show' : ''}`}>
                <video className='video_source' width='200px' height='200px'  autoPlay loop >
                    <source  src='./video/video2.mp4' type="video/mp4"></source>
                </video>
            </div>
            <div onMouseEnter={()=>handleMouseEnter('pic3')} className={`video_hidden ${picstate.pic3 ? 'show' : ''}`}>
                <video className='video_source' width='200px' height='200px' autoPlay loop >
                    <source  src='./video/video3.mp4' type="video/mp4"></source>
                </video>
            </div>
        </div>
    </div>
  )
}

export default Video