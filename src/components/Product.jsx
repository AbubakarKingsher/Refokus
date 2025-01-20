import React from 'react'
import Button from './Button'

function Product({ val, move, count, }) {


    return (
        <div onMouseEnter={() => move(count)} className={`flex px-5 h-[250px] items-center justify-between relative z-50`}>
            <h1 className='text-[5vw]'>{val.title}</h1>
            <div className='w-[40%]'>
                <p className='md:text-xs text-[8px] leading-[11px] font-[satoshi-regular] w-[100%] mb-5'>{val.description}</p>
                <div className='flex items-center gap-5'>
                    {val.live && <Button title='Live Website' />}
                    {val.case && <Button title='Case Study' />}
                </div>
            </div>
        </div>
    )
}

export default Product