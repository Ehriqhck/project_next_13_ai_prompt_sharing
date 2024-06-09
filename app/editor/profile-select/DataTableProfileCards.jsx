"use client";
import React from 'react'
import { DataTable } from 'primereact/datatable';
import { useState, useEffect, useContext } from 'react';
import { Button, Column } from 'primereact/button';
import { Context } from '@components/Provider.jsx'
import { parse } from 'postcss';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { log } from 'util';
import { err } from '@iconfu/svg-inject';

const DataTableProfileCards = (props) => {
    const [context, setContext] = useState({
    })
    const [isLoading, setIsLoading] = useState(false)

    const [selectedPreview, setSelectedPreview] = useState({
        profileName: "loading",
        deviceList: ["none"],
        deviceAmount: '-',

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

    useEffect(() => {

        try {
            setIsLoading(true)
            setContext(props?.context)

            // props?.context
            setDevices(props?.context)
            console.log("GALSKDJALSKDJ");
            console.log(context);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }


    })


    const footer = `In total there are ${devices ? devices.length : 0} products.`;

    // const parseDevices = Object.keys(context?.deviceProfiles).map(key => (
    //     {
    //         name: key,
    //         devices: Object.keys(context[key]?.saved),
    //         deviceAmount: Object.keys(context[key]?.saved)?.length,
    //         dateLastModified: context[key].dateModified,
    //         dateCreated: context[key].dateCreated,

    //     })

    // )
    // setDevices(parseDevices);

    const imageBodyTemplate = (profile) => {

        return (

            <Button onClick={(e) => {
                try {
                    setLoading(true);
                    console.log(Object.entries(profile?.savedDevices).length);
                    setSelectedPreview({
                        deviceAmount: profile.deviceAmount,
                        profileName: profile.profileName,
                        deviceList: Object.keys(profile?.savedDevices)
                    });
                    console.log("new selection");
                    console.log(selectedPreview);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false)
                }


            }}
                type='profile-card-button'
                className='flex flex-col min-w-[250px]  w-[345px]  control-profile-card-bg  px-[16px] pb-[8px] pt-[14px] gap-[8px] '>
                <div className='flex w-full'>
                    <p className=' control-profile-card-title'>{profile.profileName} </p>
                </div>

                <div className='flex flex-row justify-between mb-[4px]  w-[100%]'>
                    <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                        <p className='flex control-profile-card-device-number justify-self-end  self-end'>
                       {profile.deviceAmount}

                        </p>

                        <p className='flex control-profile-card-device self-end '>DEVICES</p>
                    </div>

                    <div className='flex flex-col  justify-between gap-[2px] '>
                        <p className='control-profile-card-body mb-[2px]'>LAST MODIFIED</p>
                        <p className='control-profile-card-body'>July 3rd, 12:10AM {profile.dateLastModified}</p>
                    </div>
                </div>
            </Button>

        )
    };

    const getSelectedProfile = (selectedDevice) => {
        // console.log(selected);
        // const deviceList = Object.keys(selectedDevice.deviceList).map(device => {
        //     <li> {device.deviceList}</li>
        // })

        // // console.log(deviceList);
        // return deviceList;
    }

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
                filterDisplay="row" type='profile card' value={devices} footer={footer} rows={3} paginator={true} selectionMode='single' paginatorTemplate={paginatorBodyTemplate}>
                <Column field="name" filter filterPlaceholder='search' body={imageBodyTemplate}></Column>

            </DataTable>
            <div className='ml-[36px] flex flex-col'>
                <div className='min-w-[600px] flex flex-col p-[16px] min-h-[385px] panel-white  gap-[16px]'>
                    <p className="font-['Exo_2'] text-[24px] leading-[24px] font-medium"> Title </p>

                    <div>
                        <div className='flex flex-row gap-[36px]'>
                            <div flex flex-col>
                                <p className="font-['Exo_2'] text-[10pt] font-medium "> LAST MODIFIED </p>
                                <p> - </p>
                            </div>
                            <div flex flex-col>
                                <p className="font-['Exo_2'] text-[10pt] font-medium "> GAME VERSION </p>
                                <p> - </p>
                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <p className="font-['Exo_2'] text-[10pt] font-medium "> PROFILE DEVICES </p>
                            
                            {
                                selectedPreview.deviceList
                            }

                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-[3px] mt-[16px]'>
                    <p className="font-['Exo_2'] text-[10pt] font-medium">SELECTED PROFILE </p>
                    <Button unstyled onClick={(e) => {
                        // console.log("ASDAKSDHKASJ" + e.devices[0])
                        console.log(e);
                    }}
                        className='flex flex-col min-w-[250px] control-profile-card-bg  w-[345px] p-[8px] gap-[8px] '>
                        <div className='flex w-full'>
                            <p className='ml-[8px] ml-[0px] control-profile-card-title'>{selectedPreview.profileName} </p>
                        </div>

                        <div className='flex flex-row justify-between mb-[4px]'>
                            <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                                <p className='flex control-profile-card-device-number justify-self-end  self-end'>{selectedPreview.deviceAmount}</p>
                                <p className='flex control-profile-card-device self-end '>DEVICES</p>
                            </div>

                            <div className='flex flex-col  justify-between '>
                                <p className='control-profile-card-body whitespace-nowrap'>LAST MODIFIED</p>
                                <p className='control-profile-card-body whitespace-nowrap'> {selectedPreview.dateLastModified}</p>
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DataTableProfileCards