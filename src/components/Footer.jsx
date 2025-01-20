import React from 'react'

function Footer() {
    return (
        <div className='mx-auto p-4 flex justify-between flex-wrap sm:flex-row flex-col md:px-10 px-5'>
            <h1 className='sm:text-[10vw] text-[15vw] font-semibold tracking-tight leading-none mb-7'>refokus.</h1>
            <div className='flex gap-16'>
                <div>
                    <h3 className='text-sm font-medium mb-10 opacity-50'>Socials</h3>
                    {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, idx) => (
                        <h4 key={idx} className='text-sm font-normal mb-2 opacity-30 cursor-pointer font-[satoshi-regular]'>{item}</h4>
                    ))}
                </div>
                <div>
                    <h3 className='text-sm font-medium mb-10 opacity-50'>Socials</h3>
                    {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, idx) => (
                        <h4 key={idx} className='text-sm font-normal mb-2 opacity-30 cursor-pointer font-[satoshi-regular]'>{item}</h4>
                    ))}
                </div>
            </div>
            <div>
                <p className='md:text-base text-xs font-medium mb-5 whitespace-nowrap mt-7 font-[satoshi-regular]'>Refolus is a pioneering <br /> digital agency driven by <br /> desing and empowered by <br /> tenchnology.</p>
                <button className='flex gap-4 py-2 rounded md:px-4 px-2 bg-blue-600 items-center'>
                    <img className='w-6' src="./public/assets/w.png" />
                    <h4 className='text-sm font-medium'>Enterprise Partner</h4>
                </button>
            </div>
        </div>
    )
}

export default Footer