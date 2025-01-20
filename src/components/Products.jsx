import React, { useState } from 'react'
import Product from './Product';
import { motion } from 'framer-motion';

function Products() {

    const products = [
        {
            id: 0,
            title: "Arqitel",
            description: "A cutting-edge architecture platform designed to inspire and empower architects, enabling them to create groundbreaking, futuristic structures with innovative tools and resources.",
            live: true,
            case: false
        },
        {
            id: 1,
            title: "TTR",
            description: "The ultimate travel resource platform that provides comprehensive guides, curated itineraries, and expert advice for wanderlust enthusiasts who seek unforgettable experiences around the globe.",
            live: true,
            case: false
        },
        {
            id: 2,
            title: "YIR 2024",
            description: "A feature-rich Year-in-Review platform that curates and showcases the most significant events, trends, and highlights from the past year, presented in an engaging and interactive format.",
            live: true,
            case: true
        },
        {
            id: 3,
            title: "Yahoo!",
            description: "A globally recognized web services provider offering a wide range of solutions, including email, news, search engines, and entertainment, connecting millions of users every day.",
            live: true,
            case: true
        }
    ];

    const [pos, setPos] = useState(0);
    const [color, setColor] = useState(0);

    const moveImg = (val) => {
        setPos(val * 250);

        if (val === 0) {
            setColor("bg-[#08072A]")
        }
        else if (val === 1) {
            setColor("bg-[#af58f6]")
        }
        else if (val === 2) {
            setColor("bg-[#48357F]")
        }
        else if (val === 3) {
            setColor("bg-[#FF7A2C]")
        }
    }






    return (
        <div className='mt-20 relative'>
            {products.map((item, idx) => (
                <Product val={item} key={idx} move={moveImg} count={idx} />
            ))}
            <div className='h-full w-full absolute pointer-events-none left-0 top-0'>
                <motion.div transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} initial={{ y: pos, }} animate={{ y: pos + `px` }} className='window h-[250px] absolute left-[25%] w-[30%] overflow-hidden z-50'>
                    <motion.video transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} animate={{ y: -pos }} className='h-full w-full object-cover rounded-md' loop muted autoPlay src="/assets/vdo.webm" />
                    <motion.div transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} animate={{ y: -pos }} className='window h-full w-full  overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-md' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/667d026ddba9301ca7143513_4297605234.webp" />
                    </motion.div>
                    <motion.div transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} animate={{ y: -pos }} className='window h-full w-full overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-md' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp" />
                    </motion.div>
                    <motion.div transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} animate={{ y: -pos }} className='window h-full w-full overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-md' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp" />
                    </motion.div>
                </motion.div>
            </div>
            <motion.div transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} initial={{ y: pos, }} animate={{ y: pos + `px` }} className={`${color} absolute w-full h-48 top-8`}></motion.div>
        </div>
    )
}

export default Products