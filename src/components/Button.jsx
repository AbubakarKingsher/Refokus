import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
    return (
        <button className="md:text-sm sm:text-[11px] text-[6px] md:px-3 whitespace-nowrap px-1 md:py-2 sm:py-1 sm:gap-0 gap-1 md:w-40 sm:w-28 relative z-20 bg-white text-black rounded-full font-medium flex items-center justify-between">
            {title}
            <span className="md:text-lg text-sm">
                <IoIosReturnRight />
            </span>
        </button>
    );
}

export default Button;
