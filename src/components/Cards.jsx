import React from 'react'
import Card from './Card'

function Cards() {

    return (
        <div className='max-w-5xl mx-auto mt-20 flex justify-center gap-2 px-5 mb-24 sm:flex-nowrap flex-wrap'>
            <Card width={"md:w-1/3"} heading={false} pera={true} phelaTxt={"Up Next: Culture"} btn={false} hover={false} />
            <Card width={"md:w-2/3"} heading={true} pera={false} phelaTxt={"Let's get to it"} btn={true} hover={true} />
        </div>
    )
}

export default Cards