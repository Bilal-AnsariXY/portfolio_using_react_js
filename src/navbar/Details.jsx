import React from 'react'

const Details = () => {
  return (
    <div id='details' className='h-screen w-full flex flex-col justify-evenly items-center'>
      <div className= 'flex flex-col justify-evenly items-center'>
        <h1 className = 'font-bold'>News App</h1>
        <p>i created news app with using React js . i use the api to show the news . here i add the click button, searching feature on it</p>
      </div>
      <div className= 'flex flex-col justify-evenly items-center'>
        <h1 className = 'font-bold'>Calculator</h1>
        <p>i created calculator using js . here i implement the (eval) function and use the error handling on it</p>
      </div>
      <div className= 'flex flex-col justify-evenly items-center'>
        <h1 className = 'font-bold'>Password Generator</h1>
        <p>i created password generator using js here i implement the (random) keyword to generate the solid strong passwords</p>
      </div>
      <div className= 'flex flex-col justify-evenly items-center'>
        <h1 className = 'font-bold'>Tik Tac Toe</h1>
        <p>
          here i use the array to check the winning condition
        </p>
      </div>
      <div className= 'flex flex-col justify-evenly items-center'>
        <h1 className = 'font-bold'>For more details you can go to the my github account </h1>
        <button className='border p-1 rounded bg-[#d9d9d9] m-1' onClick={()=>{window.open("https://github.com/Bilal-AnsariXY")}}>github account</button>
      </div>
    </div>
  )
}

export default Details
