"use client";
import { useState } from "react";
import Feed from "@components/Feed";
// import GameVerDropdown from "@components/GameVerDropdown";
// import HatUp from '@components/Device_VKB_SpaceEvo';
// import ActionTable from '@app/editor/ActionTable.jsx'
import NoSsr from "@components/NoSsr";
import React from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import Image from 'next/image'
import CommunityIcon from 'components/generic/Icons/CommunityIcon.jsx'
const Home = () => {
  const [products, setProducts] = useState([
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    { name: 'aaaaaaaaaaaaa' }
  ]);




  const productTemplate = (product) => {
    return (
      <div className="flex w-full flex-col ">
        {/* <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="" /> */}
        <div className=" flex flex-row gap-[4px]">

          <p className="uppercase self-center ml-[12px] flex  text-[#CEFCFF] font-['Exo_2'] text-[15px] font-medium  tracking-[0.1em] carousel-active">
            {product.name}

          </p>
        </div>
      </div>
    );
  };
  const newsItemTemplate = (product) => {
    return (
      <button type="default" className="flex  flex-col  h-[180px] w-[180px] ">
        <div className=" flex flex-row gap-[4px]">
asd
          <p className="uppercase self-center ml-[12px] flex  text-[#CEFCFF] font-['Exo_2'] text-[15px] font-medium  tracking-[0.1em] carousel-active">
            {product.name}

          </p>
        </div>
      </button>
    );
  };

  return (
    <div className="flex flex-col w-full text-[#DAF0EA]">
      <div className="flex flex-col w-full  hero-bg  ">
        <div className="bg-multiply w-full h-full flex flex-col px-[128px]  content-between">
          <div className="flex flex-col w-fit font-['varino'] mt-[12vh] self-start mb-[128px]">
            <p className="logo-gradient-white text-[54px] self-center mb-[-8px]"> TRICHORD </p>
            <div className=" px-[36px] logo-gradient-white text-[27px] self-center flex flex-row  w-full place-content-between">
              <p>E</p> <p>D</p> <p>I</p> <p>T</p> <p>O</p> <p>R</p>
            </div>
          </div>

          <div className="flex flex-col ">


            <section classname="override-uaStyle-section  ">
              <div className=" flex spacer-noH h-[280px] w-[1px] " />
              <div className=" flex flex-col gap-[32px]">
                <div className=" flex flex-col  ml-[32px] ">
                  <div className="flex flex-row  font-['exo_2'] mb-[16px] uppercase gap-[8px] ">
                    <div className="flex  circle wh-[9px] self-center mt-[1px]"></div>
                    <p className="flex">Ready for patch 4.0 </p>
                  </div>

                  <Button type="smooth" className="flex  w-fit whitespace-nowrap text-[#CEFCFF]  font-['exo_2'] uppercase h-[40px]"  >
                    <p> Enter Editor </p>
                  </Button>
                </div>

                <div className=" flex flex-col  ml-[32px] ">
                  <div className="flex flex-row  font-['exo_2'] mb-[16px] uppercase gap-[8px] ">
                    <div className="flex  self-center">
                      <CommunityIcon height="32px" />
                    </div>
                    <p className="flex self-center">JOIN THE COMMUNITY </p>
                  </div>
                  <div className=" flex flex-col gap-[16px]">
                    <Button type="smooth" className="flex  w-fit whitespace-nowrap  font-['exo_2'] uppercase h-[40px]"  >
                      <p className="  "> Join the Trichord Discord </p>
                    </Button>

                    <Button type="smooth" className="flex  w-fit whitespace-nowrap  font-['exo_2'] uppercase h-[40px]"  >
                      <p className="  "> Follow Our Youtube </p>
                    </Button>
                  </div>


                </div>
              </div>
            </section>
          </div>

          <NoSsr>
            <div className="flex flex-col gap-[4px] ">
              <div className="flex flex-row  font-['exo_2'] mb-[16px] uppercase gap-[8px] ">
                <div className="flex  self-center">
                  <CommunityIcon height="32px" />
                </div>
                <p className="flex self-center">LATEST NEWS & UPDATES </p>
              </div>
              <Carousel value={products}
                circular numVisible={4} numScroll={1}
                orientation="horizontal" itemTemplate={newsItemTemplate}
                showIndicators={true} showNavigators={true}
              />
            </div>
          </NoSsr>
          <section className='w-full self-end flex-col pt-[64px] h-full justify-end pb-[128px]' >

            <NoSsr>
              <div className="flex flex-row gap-[4px] hero-carousel">
                <p className=" flex flex-col    self-center justify-center align-middle
          font-['exo_2']  text-[#CEFCFF] text-[15px] font-medium  tracking-[0.1em]
          ">STOP</p>
                <div className="spacer-noH h-[36px]" />
                <Carousel value={products}
                  circular autoplayInterval={5000} numVisible={3} numScroll={1}
                  verticalViewPortHeight="80px" orientation="vertical" itemTemplate={productTemplate}
                  showIndicators={false} showNavigators={false}
                />
              </div>
            </NoSsr>

            <div className="flex gap-[20px] flex-col mb-[0px] self-end justify-end align-bottom ">
              <p className=" flex flex-col    self-center justify-center align-middle
          font-['exo_2']  text-[#00FFB9] text-[15px] font-bold  tracking-[0.2em]
          "> DISCOVER MORE BELOW </p>
              <div className="flex flex-col self-center">
                <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_486711)" />
                  <defs>
                    <linearGradient id="paint0_linear_2417_486711" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00FFD1" >
                        <animate attributeName="stop-color"
                          values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                          calcMode="spline"
                          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                          begin='-0.70s'
                        />
                      </stop>
                      <stop offset="1" stop-color="#00876F" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className=" mt-[-18px]">
                  <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_4867)" />
                    <defs>
                      <linearGradient id="paint0_linear_2417_4867" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00FFD1" >
                          <animate attributeName="stop-color"
                            values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                            calcMode="spline"
                            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                            begin='1.4s'
                          />
                        </stop>
                        <stop offset="1" stop-color="#00876F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>


            {/* <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p> */}

            {/* <Feed /> */}
            {/* <GameVerDropdown/> */}
            {/* <HatUp/> */}
            {/* <ActionTable/> */}
          </section>

        </div>


      </div>
      <div className=" w-full h-[1000px] flex flex-col px-[128px] justify-center 
      homepage-bg-gradient bg-multiply">


        <section className='w-full flex-center flex-col pt-[64px]' >
          <div className="flex w-full">
            <h1 className='h1 '>
              <span className=' font-[200] text-left'> Input Mappings Done </span> <br /> <span className="font-[800]">Easy.</span>
            </h1>
          </div>





        </section>
      </div>
    </div>
  );
}

export default Home
