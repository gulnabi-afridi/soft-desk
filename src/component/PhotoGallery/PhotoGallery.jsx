import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import ImageGallery from "react-image-gallery";
import { RxCross2 } from "react-icons/rx";


function PhotoGallery() {

  // ===> states for dialogue
  const [open, setOpen] = React.useState(false);
  const [galleryImage, setGalleryImage] = useState(GalleryImage);

  const handleClickOpen = (id) => {
    const filteredGalleryImage = galleryImage.filter((item) => item.id >= id);
    setGalleryImage(filteredGalleryImage);
    setOpen(true);
  };

  const handleClose = () => {
    setGalleryImage(GalleryImage);
    setOpen(false);
  };

  return (
    <div className="w-full flex flex-col">
      {/* ======> gallery  */}
      <div className="w-full bg-black-light mt-4">
        <div className="w-full max-w-[1280px] m-auto">
          <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {GalleryImage.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleClickOpen(item.id)}
                  className="w-full h-[300px] relative rounded-[25px] cursor-pointer imgDiv"
                >
                  <Image
                    src={item.original}
                    className="object-cover hover:opacity-50 opacity-100 duration-1000"
                    fill
                    alt=""
                  />
                  {/* =====> overly on image */}
                  <div className="w-[60px] h-[60px] absolute left-[40%] top-[40%] bg-[#00000028] flex justify-center items-center rounded-full cursor-pointer duration-1000 opacity-0 addIcon">
                    <VscAdd className="text-white-main text-[26px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* ======> dialogue */}
      <Dialog
        fullScreen
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <ImageGallery items={galleryImage} />
        <RxCross2
          onClick={handleClose}
          className="text-[46px] cursor-pointer hover:text-brand-main text-white-main hover:scale-110 duration-500 absolute right-2 top-6"
        />
      </Dialog>
    </div>
  );
}

const GalleryImage = [
  {
    id: 1,
    original: "/Assets/gallery/1.jpg",
    thumbnail: "/Assets/gallery/1.jpg",
  },
  {
    id: 2,

    original: "/Assets/gallery/2.jpg",
    thumbnail: "/Assets/gallery/2.jpg",
  },
  {
    id: 3,

    original: "/Assets/gallery/3.jpg",
    thumbnail: "/Assets/gallery/3.jpg",
  },
  {
    id: 4,

    original: "/Assets/gallery/4.jpg",
    thumbnail: "/Assets/gallery/4.jpg",
  },
  {
    id: 5,

    original: "/Assets/gallery/5.jpg",
    thumbnail: "/Assets/gallery/5.jpg",
  },
  {
    id: 6,

    original: "/Assets/gallery/1.jpg",
    thumbnail: "/Assets/gallery/1.jpg",
  },
  {
    id: 7,

    original: "/Assets/gallery/1.jpg",
    thumbnail: "/Assets/gallery/1.jpg",
  },
  {
    id: 8,

    original: "/Assets/gallery/2.jpg",
    thumbnail: "/Assets/gallery/2.jpg",
  },
  {
    id: 9,

    original: "/Assets/gallery/3.jpg",
    thumbnail: "/Assets/gallery/3.jpg",
  },
  {
    id: 10,

    original: "/Assets/gallery/4.jpg",
    thumbnail: "/Assets/gallery/4.jpg",
  },
  {
    id: 11,

    original: "/Assets/gallery/5.jpg",
    thumbnail: "/Assets/gallery/5.jpg",
  },
  {
    id: 12,

    original: "/Assets/gallery/1.jpg",
    thumbnail: "/Assets/gallery/1.jpg",
  },
  {
    id: 13,

    original: "/Assets/gallery/1.jpg",
    thumbnail: "/Assets/gallery/1.jpg",
  },
  {
    id: 14,

    original: "/Assets/gallery/1.jpg",
    thumbnail: "/Assets/gallery/1.jpg",
  },
  {
    id: 15,

    original: "/Assets/gallery/1.jpg",
    thumbnail: "/Assets/gallery/1.jpg",
  },
];

export default PhotoGallery;
