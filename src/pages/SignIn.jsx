import React from 'react'

function SignIn() {
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="images/signin.jpg" alt="signIn" className='w-full rounded-2xl'/>
        </div>
        
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input className='w-full' type="text" placeholder='email address'></input>
          </form>
        </div>

      </div>
    </section>
  )
}

export default SignIn
