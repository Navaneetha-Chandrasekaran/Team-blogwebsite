import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className=' text-5xl lg:text-7xl leading-snug font-bold mb-5'>contact page</h2>
        <form className='px-4'>
                           <div className='mb-5'>
                            <input type="email" name='email' id='email' placeholder='Enter your Email'
                            className=' rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base
                            font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                           </div>
                           <div className='mb-5'>
                            <input type="" name='' id='problem' placeholder=' whats the problem'
                            className=' rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base
                            font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                           </div>
                           <div className='mb-5'>
                            <input type="" name='' id='feedback' placeholder=' Feedback'
                            className=' rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base
                            font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                           </div>
                           <div>
                            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-200 py-3 px-8
                            text-base font-semibold text-white outline-none'>Submit</button>
                           </div>
                      </form>
      </div>
    </div>
  )
}

export default Contact