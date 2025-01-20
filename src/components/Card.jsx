import { motion } from 'framer-motion'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function Card({ width, heading, pera, phelaTxt, btn, hover }) {
    return (
        <motion.div whileHover={{ backgroundColor: hover ? "#7551f8" : "#2f2f31", padding: "15px" }} hover className={`${width} w-[300px] h-64 p-3 bg-[#262629] rounded-lg flex flex-col justify-between cursor-pointer`}>
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className='text-sm'>Get In Touch</h3>
                    <IoIosArrowRoundForward size={25} />
                </div>
                <h2 className='text-2xl mt-3'>{phelaTxt}</h2>
            </div>
            <div>
                {heading && <h1 className='md:text-5xl text-4xl font-[satoshi-bold] mb-3 font-medium'>Start a Project</h1>}
                {btn && <button className='text-sm border-[1px] border-zinc-400 py-2 px-5 rounded-full'>Contect us</button>}
            </div>
            {pera && <p className='text-sm opacity-30 font-[satoshi-regular]'>Explore what drives our team.</p>}
        </motion.div>
    )
}

export default Card