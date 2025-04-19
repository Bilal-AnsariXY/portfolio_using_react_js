import React from 'react'
import news from './news.webp'
import pasword from './pasword.webp'
import advice from './advice.jpeg'
import calculator from './calculator.avif'
import jobFinder from './jobFinder.png'
import tikTacToe from './tikTacToe.png'



const Projects = () => {
  return (
    <div className='flex h-auto w-full justify-evenly items-center flex-wrap'>
        <div className='h-auto p-1 rounded w-50 mt-5 '>
          <div className='h-30 w-full bg-cover bg-center ' style={{ backgroundImage: `url(${news})` }}></div>
          <h2 className='font-bold'>NEWS WEBSITE</h2>
          <p>this is a news website which i created in React JS</p>
          <button className='border rounded p-1 bg-[#d9d9d9]' onClick={()=>{window.open('https://news-react-three-pi.vercel.app/')}}>check site</button>
        </div>
        <div className='h-auto p-1 rounded w-50 mt-5 '>
          <div className='h-30 w-full bg-cover bg-center ' style={{ backgroundImage: `url(${pasword})` }}></div>
          <h2 className='font-bold'>PASSWORD GENERATOR</h2>
          <p>this is a password generater website which i created in React JS</p>
          <button className='border rounded p-1 bg-[#d9d9d9]' onClick={()=>{window.open('https://bilal-ansarixy.github.io/password_explorin//')}}>check site</button>
        </div>
        <div className='h-auto p-1 rounded w-50 mt-5 '>
          <div className='h-30 w-full bg-cover bg-center ' style={{ backgroundImage: `url(${jobFinder})` }}></div>
          <h2 className='font-bold'>JOB FINDER</h2>
          <p>this is a jobFinder website which i created in React JS</p>
          <button className='border rounded p-1 bg-[#d9d9d9]' onClick={()=>{window.open(' https://bilal-ansarixy.github.io/job-finder/')}}>check site</button>
        </div>
        <div className='h-auto p-1 rounded w-50 mt-5 '>
          <div className='h-30 w-full bg-cover bg-center ' style={{ backgroundImage: `url(${tikTacToe})` }}></div>
          <h2 className='font-bold'>TIC TAC TOE</h2>
          <p>this is a tic tak toe website which i created in React JS</p>
          <button className='border rounded p-1 bg-[#d9d9d9]' onClick={()=>{window.open('https://bilal-ansarixy.github.io/tic-tak-toe-js/')}}>check site</button>
        </div>
        <div className='h-auto p-1 rounded w-50 mt-5 '>
          <div className='h-30 w-full bg-cover bg-center ' style={{ backgroundImage: `url(${advice})` }}></div>
          <h2 className='font-bold'>ADVICE</h2>
          <p>this is a advice website which i created in React JS</p>
          <button className='border rounded p-1 bg-[#d9d9d9]' onClick={()=>{window.open('https://bilal-ansarixy.github.io/advice-js/')}}>check site</button>
        </div>
        <div className='h-auto p-1 rounded w-50 mt-5 '>
          <div className='h-30 w-full bg-cover bg-center ' style={{ backgroundImage: `url(${calculator})` }}></div>
          <h2 className='font-bold'>CALCULATOR</h2>
          <p>this is a calculator website which i created in React JS</p>
          <button className='border rounded p-1 bg-[#d9d9d9]' onClick={()=>{window.open('https://bilal-ansarixy.github.io/claculator-js/')}}>check site</button>
        </div>
    
      

    </div>
  )
}

export default Projects
