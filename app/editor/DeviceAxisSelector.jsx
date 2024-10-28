"use client"
import React from 'react'
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import XAxisIcon from '@public/assets/icons/actions/gameCategory/XAxisIcon.jsx';
import YAxisIcon from '@public/assets/icons/actions/gameCategory/YAxisIcon.jsx';
import ZAxisIcon from '@public/assets/icons/actions/gameCategory/ZAxisIcon.jsx';
import RotateYIcon from '@public/assets/icons/actions/gameCategory/RotateYIcon.jsx';
import RotateXIcon from '@public/assets/icons/actions/gameCategory/RotateXIcon.jsx';
import { useState, useContext, useEffect } from 'react';
import { SelectedEditorDeviceViewOrientationContext, SelectedInputTableInputContext } from '@components/Provider'
import RotationalAxisIcon from '@public/assets/icons/actions/gameCategory/RotationalAxisIcon.jsx'

const DeviceAxisSelector = () => {
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);

    const [activeIndexDeviceAxis, setActiveIndexactiveIndexDeviceAxis] = useState(0);
 
    
    const getDeviceAxis = (item) => {
        // if (item.name == "Y AXIS") {
        //     return (<RotateYIcon width="24px"></RotateYIcon>);
        // }
        // if (item.name == "X AXIS") {
        //     return (<RotateXIcon width="24px"></RotateXIcon>);
        // }
        if (item.name == "AXIS INPUTS") {
            return (<RotationalAxisIcon height="18px" width="18px" className="flex self-center align-middle" />
            );
        }
        if (item.name == "Z AXIS") {
            return (<ZAxisIcon width="24px"></ZAxisIcon>);
        }
        if (item.name == "Y AXIS") {
            return (<YAxisIcon width="24px"></YAxisIcon>);
        }
    }
    const itemsDeviceAxis = [
        {
            name: 'AXIS INPUTS',
            inputId: "Axis",
            template: (item) => deviceAxisRenderer(item, 0)
        },
        {
            name: 'BUTTON INPUTS',
            inputId: "buttons",

            template: (item) => deviceAxisRenderer(item, 1)
        },
        // {
        //     name: 'Z AXIS',
        //     inputId: "Z_Axis",

        //     template: (item) => deviceAxisRenderer(item, 2)
        // },
        // {
        //     name: 'PUSH/PULL Y',
        //     template: (item) => deviceAxisRenderer(item, 3)
        // },
        // {
        //     name: 'PUSH/PULL Z',
        //     template: (item) => deviceAxisRenderer(item, 4)
        // },
    ];

    const deviceAxisRenderer = (item, itemIndex) => (
        <Button type="device_axis" className='mx-[4px] flex gap-[4px]'
            onClick={() => {
                console.log("SETTING INPUTTABLE INPUT TO:");
                console.log(item.inputId);
                setSelectedInputTableInput(item.inputId);
                sessionStorage.setItem('inputTableFilter', item.inputId);

                // setSelectedEditorDeviceViewOrientation(item.name)
                setActiveIndexactiveIndexDeviceAxis(itemIndex)
            }}


        >
            {getDeviceAxis(item)}


            <span className="small-text flex self-center">{item.name}</span>
        </Button>
    );
    return (
        <TabMenu unstyled
            className='flex flex-row w-full '
            type="device_orientation"
            model={itemsDeviceAxis}
            activeIndex={activeIndexDeviceAxis}
            onTabChange={(e) => setActiveIndexactiveIndexDeviceAxis(e.index)}
        />)
}


export default DeviceAxisSelector