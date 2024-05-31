"use client";
import React from 'react'
import { DataTable } from 'primereact/datatable';
import { useState, useEffect, useContext } from 'react';
import { Button, Column } from 'primereact/button';
import { Context } from '@components/Provider.jsx'
import { parse } from 'postcss';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

const DataTableProfileCards = (props) => {
    const [selected, setSelected] = useState({
        name: 'No Selection',
        devices: '0',
        dateLastModified: 'No Selection',
        dateCreated: 'No Selection'

    })
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    const [filters, setFilters] = useState({

        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },

    });
    // const [profile, setProfile] = useState({
    //     TEST_PROhFILE_1: {
    //         profileName: 'TEST PROFILE 1',
    //         dateModified: '',
    //         dateCreated: '',
    //         saved: {
    //             VKB_GLADIATOR_EVO: {
    //                 buttons: {
    //                     circleSwitch: {
    //                         top: {
    //                             name: 'CIRCLE SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'CIRCLE SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'CIRCLE SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'CIRCLE SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'CIRCLE SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     hatSwitch: {
    //                         top: {
    //                             name: 'HAT SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'HAT SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'HAT SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'HAT SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'HAT SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     pillSwitch: {
    //                         top: {
    //                             name: 'PILL SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'PILL SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'PILL SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'PILL SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'PILL SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     redButton: {
    //                         press: {
    //                             name: 'RED BUTTON PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     chipSwitch: {
    //                         top: {
    //                             name: 'CHIP SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'CHIP SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'CHIP SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'CHIP SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'CHIP SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // },
    // {
    //     TEST_PROFILE_2: {
    //         profileName: 'TEST PROFILE 2',
    //         dateModified: '',
    //         dateCreated: '',
    //         saved: {
    //             VKB_GLADIATOR_EVO: {
    //                 buttons: {
    //                     circleSwitch: {
    //                         top: {
    //                             name: 'CIRCLE SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'CIRCLE SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'CIRCLE SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'CIRCLE SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'CIRCLE SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     hatSwitch: {
    //                         top: {
    //                             name: 'HAT SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'HAT SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'HAT SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'HAT SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'HAT SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     pillSwitch: {
    //                         top: {
    //                             name: 'PILL SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'PILL SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'PILL SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'PILL SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'PILL SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     redButton: {
    //                         press: {
    //                             name: 'RED BUTTON PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     },
    //                     chipSwitch: {
    //                         top: {
    //                             name: 'CHIP SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         bottom: {
    //                             name: 'CHIP SWITCH DOWN',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         press: {
    //                             name: 'CHIP SWITCH PRESS',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         },
    //                         left: {
    //                             name: 'CHIP SWITCH LEFT',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
    //                             ]
    //                         },
    //                         right: {
    //                             name: 'CHIP SWITCH UP',
    //                             layers: [
    //                                 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
    //                                 'SECOND LAYER',
    //                                 'THIRD LAYER'
    //                             ]
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // })
    const [loading, setLoading] = useState(true)
    const [devices, setDevices] = useState([{
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
    }, {
        id: '1020',
        code: 'f230fh0asdg3',
        name: 'Bamboo Watdch',
        description: 'Prodddasuct Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }]);



   
    const footer = `In total there are ${devices ? devices.length : 0} products.`;

    const parseDevices = Object.keys(props.context).map(key => (
        {
            name: key,
            devices: Object.keys(props.context[key]?.saved)?.length,
            dateLastModified: props.context[key].dateModified,
            dateCreated: props.context[key].dateCreated,

        }

    ))
    // useEffect(() => {
    //     console.log(props.context);
    //     console.log(profileContext);
    //     setProfile(props.context)
    // }, [profile, props])

    const imageBodyTemplate = (device) => {
        return (

                <Button  onClick={(e) => {
                    console.log(device)
                    setSelected(device)
                }}
                type='profile-card-button'
                    className='flex flex-col min-w-[250px]  w-[345px]  control-profile-card-bg  px-[16px] pb-[8px] pt-[14px] gap-[8px] '>
                    <div className='flex w-full'>
                        <p className=' control-profile-card-title'>{device.name} </p>
                    </div>

                    <div className='flex flex-row justify-between mb-[4px]  w-[100%]'>
                        <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                            <p className='flex control-profile-card-device-number'>{device.devices}</p>
                            <p className='flex control-profile-card-device self-end '>DEVICES</p>
                        </div>

                        <div className='flex flex-col  justify-between gap-[2px] '>
                            <p className='control-profile-card-body mb-[2px]'>LAST MODIFIED</p>
                            <p className='control-profile-card-body'>July 3rd, 12:10AM {device.dateLastModified}</p>
                        </div>
                    </div>
                </Button>


        )
    };
    const paginatorBodyTemplate = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',

        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    asd  {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    }

    return (
        <div className='flex flex-row  control-profile-selector'>
            <DataTable 
            className='min-w-[345px] w-full'
             filterDisplay="row" type='profile card' value={parseDevices} footer={footer} rows={3} paginator={true} selectionMode='single' paginatorTemplate={paginatorBodyTemplate}>
                <Column field="name" filter filterPlaceholder='search'  body={imageBodyTemplate}></Column>

            </DataTable>

            <div>
                <Button unstyled onClick={(e) => {
                    console.log(e)
                }}
                    className='flex flex-col min-w-[250px] control-profile-card-bg  w-[345px] p-[8px] gap-[8px] '>
                    <div className='flex w-full'>
                        <p className='ml-[8px] ml-[0px] control-profile-card-title'>{selected.name} </p>
                    </div>

                    <div className='flex flex-row justify-between mb-[4px]'>
                        <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                            <p className='flex control-profile-card-device-number justify-self-end  self-end'>{selected.devices}</p>
                            <p className='flex control-profile-card-device self-end '>DEVICES</p>
                        </div>

                        <div className='flex flex-col  justify-between '>
                            <p className='control-profile-card-body whitespace-nowrap'>LAST MODIFIED</p>
                            <p className='control-profile-card-body whitespace-nowrap'> {selected.dateLastModified}</p>
                        </div>
                    </div>
                </Button>
            </div>
        </div>

    )
}

export default DataTableProfileCards