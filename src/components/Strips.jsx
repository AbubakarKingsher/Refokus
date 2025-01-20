import React from 'react'
import Strip from './Strip';

function Strips() {

    const strips = [
        { id: 0, name: "CSS Design Awards", number: 48 },
        { id: 1, name: "No-Code conf 2024", number: 2 },
        { id: 2, name: "Awwwards", number: 11 },
        { id: 3, name: "CSS Design Awards", number: 48 },
        { id: 4, name: "No-Code conf 2024", number: 2 },
        { id: 5, name: "Awwwards", number: 11 },
    ];


    return (
        <div className='flex mt-11 w-full font-["satoshi-regular"]'>
            {strips.map((item, idx) => (
                <Strip val={item} key={idx} leftBorderNone={item.id === 5 ? "border-r-none" : "border-r-[.5px]"} />
            ))}
        </div>
    )
}

export default Strips