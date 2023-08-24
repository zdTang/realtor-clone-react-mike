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
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"/>
        </form>
      </div>
    </section> 
  )
}

export default Profile
