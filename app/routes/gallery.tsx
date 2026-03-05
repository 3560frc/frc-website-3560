import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { useState, useEffect } from "react";



export default function Gallery() {
  const [imageOpen, setImageOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string>("/gallery/0C7861F3-5A61-4C52-8B8E-0B14D6AE52B2_Original.webp");

  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    const images = import.meta.glob("/public/gallery/*.webp");
    const imagePaths = []
    for (const image in images) {
      imagePaths.push(image.split('/public/')[1])
    }

    const randomArray = imagePaths.sort(() => Math.random() - .5);
    setImageList(randomArray)
  }, []);

  return <>
    <Navbar />
    <div className="px-[45px] lg:px-[145px] mt-20">
      <h2 className="font-[Passion_One] text-3xl mb-3">GALLERY</h2>
      <div className="list-none columns-4 gap-[.25rem] pb-10">
        {imageList.map((image, i) => {
          return (
            <img className="hover:scale-105 outline-[.25rem] outline-wolf-black transition-transform w-full mb-[0.25rem]" rel="preload" src={image} onClick={() => { setActiveImage(image); setImageOpen(true) }} />
          )
        })}
      </div>
    </div>
    <div className={`${imageOpen ? "bg-black/80 backdrop-blur-xs opacity-100" : "opacity-0"} transition-opacity duration-500 w-screen h-screen fixed top-0 left-0 z-50 flex items-center justify-center pointer-events-none`}></div>
    <div className={`${imageOpen ? "scale-100" : "scale-0"} transition-transform duration-500 w-screen py-8 h-screen fixed top-0 left-0 z-50 flex items-center justify-center`} onClick={() => setImageOpen(false)}>
      <img className="rounded-xl object-contain h-full z-50 cursor-pointer" src={activeImage} />
    </div>
    <Footer />
  </>
}
