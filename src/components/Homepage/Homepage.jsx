import React from 'react'
import bgImage from '../../assets/background.png'
function Homepage() {
  return (
    <div>
        <div className='grid grid-cols-8 m-10 text-center font-bold'>
            <h1 className='col-span-2 text-left ml-10'>Edureka</h1>
            <h1 className='col-span-1'>Home</h1>
            <h1 className='col-span-1'>Contact</h1>
            <h1 className='col-span-1'>About us</h1>
            <h1 className='col-span-1'>Feedback</h1>
            <h1 className='col-span-2 text-right mr-1'>Logo</h1>
        </div>
        <div className='relative'>
            <div className='absolute text-white align-middle mt-[20%] ml-10'>
                <h1 className='font-bold text-xl'>Mordern <br /> LEARNING 4.0 </h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Eum placeat aliquam rerum harum illo quia tenetur iste <br />
                    suscipit cumque vitae id, eius obcaecati repellat maiores <br />
                    impedit fuga tempore, sit non.
                </p>
                <div className='mt-[15%] space-x-[20%]'>
                    <button className='font-bold bg-gray-600 text-white w-[30%] p-3'>Try Now</button>
                    <button className='font-bold bg-yellow-400 text-white w-[30%] p-3'>Remind me</button>
                </div>
            </div>
            <img className='min-w-full bac' src={bgImage} alt="background" />
        </div>
    </div>
  )
}
export default Homepage
