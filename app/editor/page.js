'use client'
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import CubeFrontIcon from '@public/assets/icons/actions/gameCategory/CubeFrontIcon.jsx';
import CubeBackIcon from '@public/assets/icons/actions/gameCategory/CubeBackIcon.jsx';

import React from 'react'
import Device_VKB_GLADIATOR_NXT_EVO_LEFT from '@components/Device_VKB_GLADIATOR_NXT_EVO_LEFT.jsx';
import Device_VKB_GLADIATOR_NXT_EVO_RIGHT from '@components/Device_VKB_GLADIATOR_NXT_EVO_RIGHT.jsx';
import InputEditor from './InputEditor';
import InputViewer from './InputViewer'
import { useState, useContext, useEffect } from 'react';
import { ShowEditorPanelContext, ShowViewerPanelContext, SelectedEditorDeviceContext } from '@components/Provider';
import clsx from 'clsx';
const page = () => {

  const { showViewerPanel, setshowViewerPanel } = useContext(ShowViewerPanelContext);
  const { showEditorPanel, setshowEditorPanel } = useContext(ShowEditorPanelContext);
  const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
  const [isLoading, setIsLoading] = useState(false)

  const [showInputEditor, setInputEditor] = useState(true);
  const [currentSelectedEditorDevice, setCurrentSelectedEditorDevice] = useState(<></>)

  const editorPanelVisibility = clsx({
    'hidden': !showEditorPanel,
    'show': showEditorPanel,
  })
  const viewerPanelVisibility = clsx({
    'hidden': !showViewerPanel,
    'show': showViewerPanel
  })

  const [activeIndex, setActiveIndex] = useState(0);

  const itemRenderer = (item, itemIndex) => (
    <Button type="device_orientation" className="p-menuitem-link flex align-items-center flex-col justify-center align-middle gap-2 mx-[8px] " onClick={() => setActiveIndex(itemIndex)}>
      {getDeviceOrientations(item)}
      <span className="small-text flex self-center">{item.name}</span>
    </Button>
  );

  const getDeviceOrientations = (item) => {
    if (item.name == "FRONT") {
      return (<CubeFrontIcon width="24px"></CubeFrontIcon>);
    }
    if (item.name == "BACK") {
      return (<CubeBackIcon width="24px"></CubeBackIcon>);
    }

  }

  const items = [
    {
      name: 'FRONT',
      image: <CubeBackIcon width="24" />,
      template: (item) => itemRenderer(item, 0)
    },
    {
      name: 'BACK',
      image: <CubeFrontIcon width="24" />,
      template: (item) => itemRenderer(item, 1)
    },
  ];

  useEffect(() => {
    try {
      setIsLoading(true);
      setCurrentSelectedEditorDevice(getSelectedEditorDevice(selectedEditorDevice));

    } catch (error) {
      console.log(error);
    }
    finally {
      console.log("selectedEditorDevice VVV");
      console.log(selectedEditorDevice);
      setIsLoading(false);
    }

  }, [selectedEditorDevice])

  const getSelectedEditorDevice = (selected) => {
    console.log(selected);

    switch (selected) {
      case "VKB_GLADIATOR_NXT_EVO_RIGHT":
        return (
          <Device_VKB_GLADIATOR_NXT_EVO_RIGHT className="min-w-[330px]" />
        );
        break;

      case "VKB_GLADIATOR_NXT_EVO_LEFT":
        return (
          <Device_VKB_GLADIATOR_NXT_EVO_LEFT className="min-w-[330px]" />
        )
        break;
      default:
        return (
          <></>
        )
        break;
    }
  }

  const legendTemplate = (
    <div className="flex align-items-center gap-2 px-2 w-[20px]" >
      <span className="font-bold">Amy Elsner</span>
    </div>
  );

  return (

    <section id="InputViewerPanel" className='editor-container' >
      <div className={viewerPanelVisibility}>
        <InputViewer />
      </div>

      <div className='flex flex-col gap-0'>
        <div className=''>
          <div className='flex flex-col'>

            <p className=' small-text w-full flex justify-start'> CURRENT VIEW </p>
            <TabMenu unstyled className='corner-test' type="device_orientation" model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />

          </div>
        </div>
        <div className='device-container' >
          {currentSelectedEditorDevice}
        </div>
      </div>
      <div id="InputEditorPanel" className={editorPanelVisibility}>
        <InputEditor />
      </div>
    </section >
  )
}

export default page