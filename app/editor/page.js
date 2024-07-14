'use client'
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import CubeFrontIcon from '@public/assets/icons/actions/gameCategory/CubeFrontIcon.jsx';
import CubeBackIcon from '@public/assets/icons/actions/gameCategory/CubeBackIcon.jsx';
import RotateIcon from '@public/assets/icons/actions/gameCategory/RotateIcon.jsx';
import EyeIcon from '@public/assets/icons/actions/gameCategory/EyeIcon.jsx';
import XAxisIcon from '@public/assets/icons/actions/gameCategory/XAxisIcon.jsx';
import YAxisIcon from '@public/assets/icons/actions/gameCategory/YAxisIcon.jsx';
import ZAxisIcon from '@public/assets/icons/actions/gameCategory/ZAxisIcon.jsx';
import RotateYIcon from '@public/assets/icons/actions/gameCategory/RotateYIcon.jsx';
import RotateXIcon from '@public/assets/icons/actions/gameCategory/RotateXIcon.jsx';

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

  const [activeIndexDeviceView, setActiveIndexactiveIndexDeviceView] = useState(0);
  const [activeIndexDeviceAxis, setActiveIndexactiveIndexDeviceAxis] = useState(0);

  const deviceViewRenderer = (item, itemIndex) => (
    <Button type="device_orientation" className="p-menuitem-link flex align-items-center flex-col justify-center align-middle gap-2 mx-[6px] w-[50px] h-[50px] " onClick={() => setActiveIndexactiveIndexDeviceView(itemIndex)}>
      {getDeviceOrientations(item)}
      <span className="small-text flex self-center">{item.name}</span>
    </Button>
  );
  const deviceAxisRenderer = (item, itemIndex) => (
    <Button type="device_orientation" onClick={() => setActiveIndexactiveIndexDeviceAxis(itemIndex)}>
      {getDeviceAxis(item)}
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
  const getDeviceAxis = (item) => {
    if (item.name == "TWIST Y") {
      return (<RotateYIcon width="24px"></RotateYIcon>);
    }
    if (item.name == "TWIST X") {
      return (<RotateXIcon width="24px"></RotateXIcon>);
    }
    if (item.name == "PUSH/PULL X") {
      return (<XAxisIcon width="24px"></XAxisIcon>);
    }
    if (item.name == "PUSH/PULL Z") {
      return (<ZAxisIcon width="24px"></ZAxisIcon>);
    }
    if (item.name == "PUSH/PULL Y") {
      return (<YAxisIcon width="24px"></YAxisIcon>);
    }
  }

  const itemsDeviceView = [
    {
      name: 'FRONT',
      template: (item) => deviceViewRenderer(item, 0)
    },
    {
      name: 'BACK',
      template: (item) => deviceViewRenderer(item, 1)
    },
  ];

  const itemsDeviceAxis = [
    {
      name: 'TWIST Y',
      template: (item) => deviceAxisRenderer(item, 0)
    },
    {
      name: 'TWIST X',
      template: (item) => deviceAxisRenderer(item, 1)
    },
    {
      name: 'PUSH/PULL X',
      template: (item) => deviceAxisRenderer(item, 2)
    },
    {
      name: 'PUSH/PULL Y',
      template: (item) => deviceAxisRenderer(item, 3)
    },
    {
      name: 'PUSH/PULL Z',
      template: (item) => deviceAxisRenderer(item, 4)
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
        <div className='flex flex-row w-full content-between'>
          <div className='flex flex-col'>

            <div className='flex flex-row gap-[3px] ml-[4px]'>
              <EyeIcon width="14px" />
              <p className=' small-text w-full flex justify-start'> DEVICE VIEW </p>
            </div>

            <TabMenu unstyled className='corner-viewChanger' type="device_orientation" model={itemsDeviceView} activeIndex={activeIndexDeviceView} onTabChange={(e) => setActiveIndexactiveIndexDeviceView(e.index)} />

          </div>
          <div className='flex flex-col'>

            <div className='flex flex-row gap-[3px] ml-[4px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" class="self-center w-[14px] "><path fill="#fff" d="m7.888 12.389-.964-.963a.425.425 0 1 1 .602-.601l1.7 1.7a.425.425 0 0 1 0 .6l-1.7 1.7a.425.425 0 1 1-.602-.6l.985-.985a16.478 16.478 0 0 1-2.289-.233C6.237 15.2 7.33 16.65 8.5 16.65c1.704 0 3.244-3.075 3.389-7.038l-.963.963a.425.425 0 1 1-.601-.6l1.7-1.7a.425.425 0 0 1 .6 0l1.7 1.7a.425.425 0 1 1-.6.6l-.985-.984c-.146 4.394-1.91 7.909-4.24 7.909-1.72 0-3.132-1.916-3.812-4.688C1.916 12.132 0 10.721 0 9c0-1.72 1.916-3.132 4.688-3.812C5.368 2.416 6.779.5 8.5.5c1.277 0 2.402 1.053 3.182 2.811a.425.425 0 1 1-.777.345C10.247 2.17 9.369 1.35 8.5 1.35c-1.17 0-2.263 1.45-2.88 3.643.901-.158 1.871-.243 2.88-.243C13.166 4.75 17 6.566 17 9c0 1.277-1.053 2.402-2.811 3.182a.425.425 0 0 1-.345-.777C15.33 10.747 16.15 9.869 16.15 9c0-1.791-3.396-3.4-7.65-3.4a15.63 15.63 0 0 0-3.099.301A15.63 15.63 0 0 0 5.1 9c0 1.106.109 2.154.301 3.099a15.34 15.34 0 0 0 2.487.29M4.493 6.12C2.3 6.737.85 7.83.85 9s1.45 2.263 3.643 2.88c-.158-.901-.243-1.871-.243-2.88s.085-1.979.243-2.88"></path><path fill="url(#axis_svg__a)" fill-opacity="0.3" d="m7.888 12.389-.964-.963a.425.425 0 1 1 .602-.601l1.7 1.7a.425.425 0 0 1 0 .6l-1.7 1.7a.425.425 0 1 1-.602-.6l.985-.985a16.478 16.478 0 0 1-2.289-.233C6.237 15.2 7.33 16.65 8.5 16.65c1.704 0 3.244-3.075 3.389-7.038l-.963.963a.425.425 0 1 1-.601-.6l1.7-1.7a.425.425 0 0 1 .6 0l1.7 1.7a.425.425 0 1 1-.6.6l-.985-.984c-.146 4.394-1.91 7.909-4.24 7.909-1.72 0-3.132-1.916-3.812-4.688C1.916 12.132 0 10.721 0 9c0-1.72 1.916-3.132 4.688-3.812C5.368 2.416 6.779.5 8.5.5c1.277 0 2.402 1.053 3.182 2.811a.425.425 0 1 1-.777.345C10.247 2.17 9.369 1.35 8.5 1.35c-1.17 0-2.263 1.45-2.88 3.643.901-.158 1.871-.243 2.88-.243C13.166 4.75 17 6.566 17 9c0 1.277-1.053 2.402-2.811 3.182a.425.425 0 0 1-.345-.777C15.33 10.747 16.15 9.869 16.15 9c0-1.791-3.396-3.4-7.65-3.4a15.63 15.63 0 0 0-3.099.301A15.63 15.63 0 0 0 5.1 9c0 1.106.109 2.154.301 3.099a15.34 15.34 0 0 0 2.487.29M4.493 6.12C2.3 6.737.85 7.83.85 9s1.45 2.263 3.643 2.88c-.158-.901-.243-1.871-.243-2.88s.085-1.979.243-2.88"></path><defs><linearGradient id="axis_svg__a" x1="8.5" x2="8.5" y1="-3.879" y2="9.258" gradientUnits="userSpaceOnUse"><stop offset="0.521" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#AD0000" stop-opacity="0.36"></stop></linearGradient></defs></svg>
              <p className=' small-text w-full flex justify-start'> DEVICE AXIS </p>
            </div>
            <TabMenu unstyled
              className='corner-viewChanger '
              type="device_orientation"
              model={itemsDeviceAxis}
              activeIndex={activeIndexDeviceAxis}
              onTabChange={(e) => setActiveIndexactiveIndexDeviceAxis(e.index)}
            />

          </div>
          <div className='device-container' >
            {currentSelectedEditorDevice}
          </div>
        </div>
      </div>
      <div id="InputEditorPanel" className={editorPanelVisibility}>
        <InputEditor />
      </div>
    </section >
  )
}

export default page