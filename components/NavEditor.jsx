"use client";
import { useContext } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Spacer from "components/generic/Spacer.jsx"
import { Context, SelectedDeviceContext } from '@components/Provider.jsx'

import { usePathname } from 'next/navigation'

const NavEditor = () => {
  const { selectedDevice, setSelectedDevice } = useContext(SelectedDeviceContext);
  const [pathname, setPathname] = useState()
  const [devices, setDevices] = useState([
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
  ]);
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [profileName, setProfileName] = useState("no profile loaded")
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

  useEffect(() => {
    // setPathname(usePathname())
  }, []);




  // console.log(Object.getOwnPropertyNames(profileContext?.deviceProfiles?.deviceProfiles?.saved) );

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

  // setDevices(
  //   Object.getOwnPropertyNames(profileContext?.deviceProfiles?.deviceProfiles?.saved).map((device) => {
  //     return ({
  //       name: device,
  //       template: (item) => itemRenderer(item, 0)
  //     })
  //   })
  // )
  const urlPath = usePathname();
  console.log(urlPath);
  switch (urlPath) {

    case "/editor/profile-select":
      return (
        <nav className=' w-full'>
          <div className='nav  w-full mb-[-1px] pt-3 flex flex-between flex-row'>
            <div className="flex flex-row gap-[28px] title-left">
              <div className="flex flex-col">

                <p className="title-text">HOME</p>
              </div>

              <div className="spacer" />

              <div className="flex flex-col">

                <p className="title-text">EDITOR</p>
              </div>


            </div>

            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="text-base">// CURRENT PROFILE</p>
                <div> </div>
              </div>
              <p className="text-profile-title slant">{profileName}</p>
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




        </nav>
      )
      break;
    case "/editor":
      return (
        <div className='nav flex flex-col  w-full'>
          <nav className=' flex-between  mb-[15px] pt-3'>
            <div className="flex flex-row gap-[30px] title-left">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <p className="text-base">// CURRENT asdasdPROFILE</p>
                  <div> </div>
                </div>
                <p className="text-profile-title slant">"PROFILE NAME"</p>
              </div>

              {/* <Spacer className=""/> */}
              <div className="spacer" />

              <div className="flex flex-col">
                <div className="flex flex-row">
                  <p className="text-base">// CURRENT DEVICE</p>
                  <div> </div>
                </div>
                <p className="text-profile-title slant">VKB GLADIATOR NXT EVO</p>
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


          </nav>

          <TabMenu unstyled model={devices} activeIndex={activeIndex} onTabChange={(e) => {
            setActiveIndex(e.index);
            console.log("TAB INDEX: " + e.index);
          }} />
        </div>

      )
      break;
    default:
      return (<nav className='nav flex-between w-full mb-[12px] pt-3'>
        <div className="flex flex-row gap-[30px] title-left">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="text-base">// CURRENT PROFILE</p>
              <div> </div>
            </div>
            <p className="text-profile-title slant">"PROFILE NAME"</p>
          </div>

          {/* <Spacer className=""/> */}
          <div className="spacer" />

          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="text-base">// CURRENT DEVICE</p>
              <div> </div>
            </div>
            <p className="text-profile-title slant">VKB GLADIATOR NXT EVO</p>
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


      </nav>)

  }

};

export default NavEditor;
