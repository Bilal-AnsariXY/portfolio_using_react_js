import React, { useEffect, useState } from 'react'

const About = () => {
  const [data,setData] = useState(null);
  useEffect(()=>
  {
    async function fun(){
      try{
        const api = await fetch("https://api.github.com/users/Bilal-AnsariXY");
        const xxx = await api.json();
        setData(xxx);
        console.log(xxx)
        // console.log(data);
      }
      catch(error)
      {
        console.log(error);
      }
    }
    fun()
  },[])
 
  return (
    <div className='flex w-screen h-120 items-center justify-evenly flex-wrap'>
      <div className='flex flex-col items-center  flex-wrap '>
        
        <h2 className='m-2 text-xl'>
          I am a software devloper a passionate Web Developer and Problem Solver.
        </h2>
        <h1 className='m-2 text-3xl'>
          HI , This is Bilal Ahmed Al Ansari
        </h1>
        <table className="table-auto border border-black m-3 ">
          <tr>
            <th className="border border-black px-4 py-2">Profession</th>
            <th className="border border-black px-4 py-2">Age</th>
            <th className="border border-black px-4 py-2">From</th>
            <th className="border border-black px-4 py-2">Qulification</th>
            
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">REACT JS Devloper</td>
            <td className="border border-black px-4 py-2">23</td>
            <td className="border border-black px-4 py-2">DHERADUN</td>
            <td className="border border-black px-4 py-2">Btech CSE </td>
          </tr>
        </table>
      </div>
      <div>
          {
            data ? 
            (
              <div className='h-50 w-50 bg-cover bg-center rounded-full'
              style={{ backgroundImage: `url(${data.avatar_url})` }}
              ></div>
            ):
            (<p>Loading</p>)
          }
      </div>
    </div>
  )
}
export default About
