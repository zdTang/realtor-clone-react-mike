import React from 'react'
import { useState } from 'react'  

function Profile() {
  const [formData, setFormData] =  React.useState({
    name: '',
    email:"example@gmail.com"
  });

  const { name, email } = formData;


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  }



  // const handleSubmit = (e
  return (
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          <input type="text" id='name' placeholder='Name' value={name} disabled 
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"/>
           <input type="text" id='email' placeholder='Email' value={email} disabled 
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"/>
        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg px-3 mb-6'>
          <p>Do you want to change your name? <strong className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit </strong></p>
          <p className='text-blue-600 hover:text-blue-700 transition ease-in-out duration-200 cursor-pointer'>Sign out</p>
        </div>
        </form>
      </div>
    </section>  
  )
}

export default Profile
