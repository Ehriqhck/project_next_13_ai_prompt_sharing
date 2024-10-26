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
  ]);




  const productTemplate = (product) => {
    return (
      <div className="">
        <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="" />
        <div>
          {product.name}

        </div>
      </div>
    );
  };


  return (
    <div className="">
      <NoSsr>
        <Carousel value={products} autoplayInterval={3000} numVisible={3} numScroll={1}  orientation="vertical" itemTemplate={productTemplate} />
      </NoSsr>
      <section className='w-full flex-center flex-col pt-[64px]' >
        <div className="flex w-full">
          <h1 className='h1 '>
            <span className=' font-[200] text-left'> Input Mappings Done </span> <br /> <span className="font-[800]">Easy.</span>
          </h1>
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
  );
}

export default Home
