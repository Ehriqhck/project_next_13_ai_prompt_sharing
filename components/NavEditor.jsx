"use client";
import { TabMenu } from 'primereact/tabmenu';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Spacer from "components/generic/Spacer.jsx"
const NavEditor = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRenderer = (item, itemIndex) => (
    
    <a className="navMenu-item " onClick={() => setActiveIndex(itemIndex)}>
      {/* <img
        alt={item.name}
        src={`https://primefaces.org/cdn/primereact/images/avatar/${item.image}`}
        style={{ width: '32px' }} /> */}
      <span className="navMenu-text flex">{item.name}</span>
    </a>
  );
  const items = [
    {
      name: 'Amy Elsner',
      image: 'amyelsner.png',
      template: (item) => itemRenderer(item, 0)
    },
    {
      name: 'Anna Fali',
      image: 'annafali.png',
      template: (item) => itemRenderer(item, 1)
    },
    {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png',
      template: (item) => itemRenderer(item, 2)
    }
  ];
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className=' w-full'>
      <div className='nav  w-full mb-[-1px] pt-3 flex flex-between flex-row'>
        <div className="flex flex-row gap-[28px] title-left">
          <div className="flex flex-col">

            <p className="title-text">HOME</p>
          </div>

          {/* <Spacer className=""/> */}
          <div className="spacer" />

          <div className="flex flex-col">

            <p className="title-text">EDITOR</p>
          </div>


        </div>


        {/* Desktop Navigation */}
        <div className='sm:flex '>
          {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
              <Link href='/create-control-profile' className='black_btn hidden'>
                Create Control Profile
              </Link>

              <button type='button' onClick={signOut} className='outline_btn'>
                Sign Out
              </button>

              <Link href='/profile'>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className='black_btn'
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
      </div>

      <TabMenu unstyled model={items} activeIndex={activeIndex} onTabChange={(e) => {
        setActiveIndex(e.index);
        console.log("TAB INDEX: " + e.index);
      }}
      />
      {/* Mobile Navigation */}
      {/* <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown '>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-control-profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Control Profile
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div> */}
    </nav>
  );
};

export default NavEditor;
