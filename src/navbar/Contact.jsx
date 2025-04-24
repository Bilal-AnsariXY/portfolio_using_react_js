import React, { useState } from 'react'

const Contact = () => {
  const [name,setName] = useState("");
  const [mob,setMob] = useState("");
  const [mail,setMail] = useState("");
  const [tarea,setTarea] = useState("");
  function sub()
  {
    if(name !== "" && mob !=="" && mail !== "")
    console.log(name,mob,mail,tarea);
    setName("");
    setMob("");
    setMail("");
    setTarea("");
  }
  return (
    <div id='contact' className='flex h-100 items-center justify-evenly flex-col flex-wrap'>
      <h1 className='text-2xl border-b'> Contact Me </h1>
      <form className='flex flex-wrap items-center justify-center ' onSubmit={(e)=>
        {
          e.preventDefault();
          sub();
      }}>
        <div className='flex  flex-col justify-evenly h-50 border-e pr-8'>
          <h1 className='text-xl'>
            +8393999833
          </h1>
          <h1 className='text-xl'>
            bilalansarino1@gmail.com
          </h1>
          <h1 className='text-xl'>
            Dheradun Turner Road 
          </h1>
        </div>
        <div className='flex flex-col justify-evenly h-50 ml-10 items-center'>
          <input type="text" placeholder='name' value={name} onChange={(e)=>{
            setName(e.target.value)
          }} className='border ps-2 rounded'/>
          <input type="tel" placeholder='phone no' value={mob} onChange={(e)=>{
            setMob(e.target.value)
          }}  className='border ps-2 rounded'/>
          <input type="email" placeholder='e-mail' value={mail} onChange={(e)=>{
            setMail(e.target.value)
          }} className='border ps-2 rounded'/>
          <textarea value={tarea} onChange={(e)=>{setTarea(e.target.value)}} className='border ps-2 rounded w-48 h-10' placeholder='write your query'></textarea>
          <button type='submit' className=' w-20 bg-[#d9d9d9] rounded'>submit</button>
        </div>
          
      </form>
    </div>
  )
}

export default Contact
