import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className=' mr-5 bg-white text-black inline-block text-center rounded-md p-6'>
          <img className='ml-2 h-32 w-32 rounded-full mb-3' src="{props.profile}" alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.name}</h1>
            <h2 className='m-4'>{props.age}, {props.gender}, {props.city}</h2>
            <button className='mt-5 bg-emerald-600 text-white px-2 py-1 border-emerald-600 border-2 rounded-md hover:bg-white hover:text-emerald-600'>Add Friend</button>
        </div>
    </div>
  )
}

export default Card