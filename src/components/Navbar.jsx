import React from "react";
import Button from "./Button";

function Navbar() {
    return (
        <div className="max-w-5xl mx-auto px-2 py-4 flex items-center justify-between border-b-[1px] border-zinc-700">
            <div className="flex gap-20">
                <div className="logo flex items-center gap-2">
                    <img
                        className="w-8 rounded-full"
                        src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/664dc8b6bc52b50450919857_webclip.webp"
                        alt="logo"
                    />
                    <h2 className="text-xl font-medium">Refokus</h2>
                </div>
                <div className="md:flex text-sm gap-10 items-center hidden">
                    {["Home", "Work", "Culture", "", "News"].map((item, idx) => (
                        <div key={idx}>
                            {item.length === 0 && <span className="w-[1px] h-6 bg-zinc-700"></span>}
                            <a className="flex items-center cursor-pointer">
                                {idx === 1 && (
                                    <span className="inline-block h-1 w-1 mr-1 bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.4)] rounded-full"></span>
                                )}
                                {item}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Button />
        </div>
    );
}

export default Navbar;
