import { scroll, useScroll } from "framer-motion";
import React, { useState } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/667d026ddba9301ca7143513_4297605234.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp",
      top: "35%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/5dbfbe5b9bf13e1ebb54e91f/6595c1f5a32f7660a90a9120_refokus-hero.jpg",
      top: "50%",
      left: "30%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/667c85a1151f26218228b9d3_Refokus.png",
      top: "50%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/65f43207d485843526415f97/673db488452829be8c67fd11_Thumbnail.jpg",
      top: "40%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp",
      top: "55%",
      left: "40%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (progress) => {
    function showImages(val) {
      setImages((prve) =>
        prve.map((item, idx) =>
          val.indexOf(idx) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    let parsentage = Math.floor(progress * 100);

    if (parsentage === 0) {
      showImages([]);
    } else if (parsentage === 2) {
      showImages([0]);
    } else if (parsentage === 4) {
      showImages([0, 1]);
    } else if (parsentage === 5) {
      showImages([0, 1, 2]);
    } else if (parsentage === 6) {
      showImages([0, 1, 2, 3]);
    } else if (parsentage === 8) {
      showImages([0, 1, 2, 3, 4]);
    } else if (parsentage === 10) {
      showImages([0, 1, 2, 3, 4, 5]);
    }
  });

  return (
    <div className="relative h-fit text-center">
      <h1 className="text-[30vw] font-normal">Work</h1>
      <div className="w-full absolute top-0 h-full">
        {images.map((item, idx) => (
          <div key={idx}>
            {item.isActive && (
              <img
                style={{ top: item.top, left: item.left }}
                className="w-[20vw] md:rounded-lg rounded-sm absolute"
                src={item.url}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
