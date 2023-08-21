import React from 'react'

const Button = ({ name }) => {
    
    return (
        <div className='border-2 flex flex-nowrap border-gray-50 p-2 bg-gray-100 rounded-2xl cursor-pointer  hover:bg-slate-300 w-4/4'>
            {name}
        </div>
    )
}

export default Button