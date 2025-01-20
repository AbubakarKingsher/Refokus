import React from 'react'

function Strip({ val, leftBorderNone }) {
    return (
        <div className={`border-zinc-600 flex items-center justify-center gap-2 md:px-5 border-t-[.5px] border-b-[.5px] ${leftBorderNone} md:h-16 h-8 w-[16.66%] whitespace-nowrap`}>
            <h1 className='md:text-[1vw] text-[1.1vw] font-semibold leading-[2vw]'>{val.name}</h1>
            <h2 className='md:text-[1.2vw] text-[1.2vw] font-semibold leading-[2vw]'>{val.number}</h2>
        </div>
    )
}

export default Strip