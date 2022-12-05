import React from "react";

export default function Hero() {
  return (
    <>
    <section className="flex items-center hero">
      <div className="absolute inset-0 z-20 flex flex-col justify-center w-full text-center md:relative md:w-1/2 hero-caption">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          E-commerce 
          <br className="" />
         barang loak kota malang
        </h1>
        <h2 className="px-8 my-6 text-base tracking-wide md:px-0 md:text-lg">
          Kami menyediakan aplikasi yang mempermudah 
          <br className="hidden lg:block" />
          Penjualan barang loak di kota malang
        </h2>
        <div>
          <a
            href="/products"
            className="flex-none inline-block px-8 py-3 mt-4 text-black transition duration-200 bg-blue-400 rounded-full hover:bg-blue-800 hover:text-green-400"
          >
            Explore Now
          </a>
        </div>
      </div>
      <div className="inset-0 w-full md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className="inset-0 z-10 bg-black overlay opacity-35"></div>
          <div className="bottom-0 right-0 overlay md:inset-0">
            <button
              className="z-30 video hero-cta focus:outline-none modal-trigger"
              data-content='<div class="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
              <div class="absolute w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3h0_v1cdUIA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>'
            ></button>
          </div>
          <img
            src="images/Desain.jpeg"
            alt="hero 1"
            className="absolute inset-0 object-cover object-center w-full h-full md:relative"
          />
        </div>
      </div>
    </section>
    
    <div className="justify-center w-full mt-40 text-center item-center ">
    <h1 className="mb-5 text-xl text-sky-500 md:text-2xl">
          Dengan adanya aplikasi ini diharapkan dapat membantu
          <br className="" />
            penjual maupun pembeli barang loak di kota malang.
          <br/>
            Dan juga mempermudah transaksi dengan berbagai metode pembayaran 
        </h1>
    </div>
    </>
  );
}
