"use client"
import React from 'react'
import NavEditor from 'components/NavEditor.jsx'
import { Button } from 'primereact/button';
import { useContext, useState, useEffect } from 'react'
import { Context } from '@components/Provider.jsx'
import DataTableProfileCards from 'app/editor/profile-select/DataTableProfileCards.jsx'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const page = () => {
    const { data: session, status } = useSession();
    const [providers, setProviders] = useState(null);

    const [isLoading, setIsLoading] = useState(false)
    const { profileContext, setprofileContext } = useContext(Context);
    const [profiles, setProfiles] = useState(
        {
            TEST_PROhFILE_1: {
                profileName: 'TEST PROFILE 1',
                dateModified: '',
                dateCreated: '',
                saved: {
                    VKB_GLADIATOR_EVO: {
                        buttons: {
                            circleSwitch: {
                                top: {
                                    name: 'CIRCLE SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                bottom: {
                                    name: 'CIRCLE SWITCH DOWN',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                press: {
                                    name: 'CIRCLE SWITCH PRESS',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                left: {
                                    name: 'CIRCLE SWITCH LEFT',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                right: {
                                    name: 'CIRCLE SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                }
                            },
                            hatSwitch: {
                                top: {
                                    name: 'HAT SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                bottom: {
                                    name: 'HAT SWITCH DOWN',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                press: {
                                    name: 'HAT SWITCH PRESS',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                left: {
                                    name: 'HAT SWITCH LEFT',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                right: {
                                    name: 'HAT SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                }
                            },
                            pillSwitch: {
                                top: {
                                    name: 'PILL SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                bottom: {
                                    name: 'PILL SWITCH DOWN',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                press: {
                                    name: 'PILL SWITCH PRESS',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                left: {
                                    name: 'PILL SWITCH LEFT',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                right: {
                                    name: 'PILL SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                }
                            },
                            redButton: {
                                press: {
                                    name: 'RED BUTTON PRESS',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                }
                            },
                            chipSwitch: {
                                top: {
                                    name: 'CHIP SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                bottom: {
                                    name: 'CHIP SWITCH DOWN',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                press: {
                                    name: 'CHIP SWITCH PRESS',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                },
                                left: {
                                    name: 'CHIP SWITCH LEFT',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                                    ]
                                },
                                right: {
                                    name: 'CHIP SWITCH UP',
                                    layers: [
                                        'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                                        'SECOND LAYER',
                                        'THIRD LAYER'
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            // TEST_PROFILE_2: {
            //     profileName: 'TEST PROFILE 2',
            //     dateModified: '',
            //     dateCreated: '',
            //     saved: {
            //         VKB_GLADIATOR_EVO: {
            //             buttons: {
            //                 circleSwitch: {
            //                     top: {
            //                         name: 'CIRCLE SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     bottom: {
            //                         name: 'CIRCLE SWITCH DOWN',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     press: {
            //                         name: 'CIRCLE SWITCH PRESS',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     left: {
            //                         name: 'CIRCLE SWITCH LEFT',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     right: {
            //                         name: 'CIRCLE SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     }
            //                 },
            //                 hatSwitch: {
            //                     top: {
            //                         name: 'HAT SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     bottom: {
            //                         name: 'HAT SWITCH DOWN',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     press: {
            //                         name: 'HAT SWITCH PRESS',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     left: {
            //                         name: 'HAT SWITCH LEFT',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     right: {
            //                         name: 'HAT SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     }
            //                 },
            //                 pillSwitch: {
            //                     top: {
            //                         name: 'PILL SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     bottom: {
            //                         name: 'PILL SWITCH DOWN',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     press: {
            //                         name: 'PILL SWITCH PRESS',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     left: {
            //                         name: 'PILL SWITCH LEFT',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     right: {
            //                         name: 'PILL SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     }
            //                 },
            //                 redButton: {
            //                     press: {
            //                         name: 'RED BUTTON PRESS',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     }
            //                 },
            //                 chipSwitch: {
            //                     top: {
            //                         name: 'CHIP SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     bottom: {
            //                         name: 'CHIP SWITCH DOWN',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     press: {
            //                         name: 'CHIP SWITCH PRESS',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     },
            //                     left: {
            //                         name: 'CHIP SWITCH LEFT',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            //                         ]
            //                     },
            //                     right: {
            //                         name: 'CHIP SWITCH UP',
            //                         layers: [
            //                             'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            //                             'SECOND LAYER',
            //                             'THIRD LAYER'
            //                         ]
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }


        })
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
    // console.log(profileContext);
    useEffect(() => {

        const fetchDeviceProfiles = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/deviceProfiles', {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: session?.user.id
                    })
                })
                const data = await response.json()

                setprofileContext(data)
                setDevices(Object.getOwnPropertyNames(data?.deviceProfiles?.TEST_PROFILE_1?.saved).map((device) => {
                    return ({
                        name: device,
                        template: (item) => itemRenderer(item, 0)
                    })
                })
                )
                setProfiles(data?.deviceProfiles)


            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
            // setProfileName(data?.deviceProfiles?.TEST_PROFILE_1?.saved['VKB_GLADIATOR_EVO'].profileName)

            // setProfiles(Object.keys(data?.deviceProfiles).map(key => (
            //     {
            //         name: key,
            //         devices: Object.keys(data[key]?.saved)?.length,
            //         dateLastModified: data[key].dateModified,
            //         dateCreated: data[key].dateCreated,
            //     }
            // )))
        }

        fetchDeviceProfiles()

    }, [isLoading]);


    return (
        <section>
            {/* <NavEditor/>
            <div>page</div> */}
            {/* <Button unstyled onClick={(e) => console.log(e)}
                className='flex flex-col min-w-[250px] control-profile-card-bg   p-[8px] gap-[8px] '>
                <div className='flex w-full'>
                    <p className='ml-[8px] ml-[0px] control-profile-card-title'>Profile Name </p>
                </div>

                <div className='flex flex-row justify-between mb-[4px]'>
                    <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                        <p className='flex control-profile-card-device-number'>6</p>
                        <p className='flex control-profile-card-device self-end '>DEVICES</p>
                    </div>

                    <div className='flex flex-col  justify-between '>
                        <p className='control-profile-card-body'>LAST MODIFIED</p>
                        <p className='control-profile-card-body'>July 3rd, 12:10AM</p>
                    </div>

                </div>

            </Button>

            <Button className='flex flex-col min-w-[250px]   p-[8px] gap-[8px] '>
                <div className='flex w-full'>
                    <p className='ml-[8px] ml-[0px] control-profile-card-title'>Profile Name </p>
                </div>

                <div className='flex flex-row justify-between mb-[4px]'>
                    <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                        <p className='flex control-profile-card-device-number'>6</p>
                        <p className='flex control-profile-card-device self-end '>DEVICES</p>
                    </div>

                    <div className='flex flex-col  justify-between '>
                        <p className='control-profile-card-body'>LAST MODIFIED</p>
                        <p className='control-profile-card-body'>July 3rd, 12:10AM</p>
                    </div>

                </div>

            </Button> */}

            <DataTableProfileCards profileDevices={devices} context={profiles} />
        </section>
    )
}

export default page