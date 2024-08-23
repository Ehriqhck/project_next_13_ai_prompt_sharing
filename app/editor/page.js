'use client'
import { Button } from 'primereact/button'
import { TabMenu } from 'primereact/tabmenu'
import CubeFrontIcon from '@public/assets/icons/actions/gameCategory/CubeFrontIcon.jsx'
import CubeBackIcon from '@public/assets/icons/actions/gameCategory/CubeBackIcon.jsx'
import RotateIcon from '@public/assets/icons/actions/gameCategory/RotateIcon.jsx'
import EyeIcon from '@public/assets/icons/actions/gameCategory/EyeIcon.jsx'
import XAxisIcon from '@public/assets/icons/actions/gameCategory/XAxisIcon.jsx'
import YAxisIcon from '@public/assets/icons/actions/gameCategory/YAxisIcon.jsx'
import ZAxisIcon from '@public/assets/icons/actions/gameCategory/ZAxisIcon.jsx'
import RotateYIcon from '@public/assets/icons/actions/gameCategory/RotateYIcon.jsx'
import RotateXIcon from '@public/assets/icons/actions/gameCategory/RotateXIcon.jsx'

import React from 'react'
import Device_VKB_GLADIATOR_NXT_EVO_LEFT from '@components/Device_VKB_GLADIATOR_NXT_EVO_LEFT.jsx'
import Device_VKB_GLADIATOR_NXT_EVO_RIGHT from '@components/Device_VKB_GLADIATOR_NXT_EVO_RIGHT.jsx'
import Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK from '@components/Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK.jsx'

import InputEditor from './InputEditor'
import InputViewer from './InputViewer'
import { useState, useContext, useEffect } from 'react'
import {
  ShowEditorPanelContext,
  ShowViewerPanelContext,
  SelectedEditorDeviceContext,
  SelectedEditorDeviceViewOrientationContext,
  SelectContext,
  SelectedInputTableInputContext
} from '@components/Provider'
import clsx from 'clsx'
const page = () => {
  const { showViewerPanel, setshowViewerPanel } = useContext(
    ShowViewerPanelContext
  )
  const { showEditorPanel, setshowEditorPanel } = useContext(
    ShowEditorPanelContext
  )
  const { selectedEditorDevice, setSelectedEditorDevice } = useContext(
    SelectedEditorDeviceContext
  )
  const {
    selectedEditorDeviceViewOrientation,
    setSelectedEditorDeviceViewOrientation
  } = useContext(SelectedEditorDeviceViewOrientationContext)
  const { selectedViewerInput, setSelectedViewerInput } =
    useContext(SelectContext)
  const { selectedInputTableInput, setSelectedInputTableInput } = useContext(
    SelectedInputTableInputContext
  )

  const [isLoading, setIsLoading] = useState(false)

  const [showInputEditor, setInputEditor] = useState(true)
  const [currentSelectedEditorDevice, setCurrentSelectedEditorDevice] =
    useState(<></>)

  const editorPanelVisibility = clsx({
    hidden: !showEditorPanel,
    show: showEditorPanel
  })
  const viewerPanelVisibility = clsx({
    hidden: !showViewerPanel,
    show: showViewerPanel
  })

  const [activeIndexDeviceView, setActiveIndexactiveIndexDeviceView] =
    useState(0)

  // useEffect(() => {
  //   sessionStorage.setItem('selectedEditorDeviceViewOrientation', 'Front')
  //   // sessionStorage.setItem('selectedEditorDeviceButton', '');
  //   sessionStorage.setItem('selectedEditorInputTableInput', item.inputId)
  //   setSelectedEditorDeviceViewOrientation('Front')
  // }, [])

  useEffect(() => {
    try {
      setIsLoading(true)

      setCurrentSelectedEditorDevice(
        getSelectedEditorDevice(sessionStorage.getItem('selectedEditorDevice'))
      )
    } catch (error) {
      console.log(error)
    } finally {
      console.log('selectedEditorDevice VVV')
      console.log(sessionStorage.getItem('selectedEditorDevice'))
      console.log(sessionStorage.getItem('deviceViewOrientation'))

      setIsLoading(false)
    }
  }, [
    selectedEditorDevice,
    selectedEditorDeviceViewOrientation,
    SelectedEditorDeviceViewOrientationContext
  ])

  const deviceViewRenderer = (item, itemIndex) => (
    <Button
      type='device_orientation'
      className='p-menuitem-link flex align-items-center flex-col justify-center align-middle gap-2 mx-[6px] w-[50px] h-[50px] '
      onClick={() => {
        // if (item.name == "Main Stick") {
        //   console.log("Changing view orientation to:" + item.name);
        //   sessionStorage.setItem('selectedEditorDeviceViewOrientation', item.name);
        //   setSelectedEditorDeviceViewOrientation(item.name);

        //   setActiveIndexactiveIndexDeviceView(itemIndex)
        // } else {
        //   sessionStorage.setItem('selectedEditorDeviceViewOrientation', item.name);
        //   sessionStorage.setItem('selectedEditorDeviceButton', '');
        //   setSelectedViewerInput(null);
        //   setSelectedEditorDeviceViewOrientation(item.name);
        //   setSelectedInputTableInput(item.inputId);

        //   console.log("Changing view orientation to:" + item.name);
        //   setActiveIndexactiveIndexDeviceView(itemIndex)
        // }
        sessionStorage.setItem('selectedEditorDeviceViewOrientation', item.name)
        // sessionStorage.setItem('selectedEditorDeviceButton', '');
        sessionStorage.setItem('selectedEditorInputTableInput', item.inputId)
        setSelectedViewerInput(null)
        setSelectedEditorDeviceViewOrientation(item.name)
        setSelectedInputTableInput(item.inputId)

        console.log('Changing view orientation to:' + item.name)
        setActiveIndexactiveIndexDeviceView(itemIndex)
      }}
    >
      {getDeviceOrientations(item)}
      <span className='small-text flex self-center'>{item.name}</span>
    </Button>
  )
  const deviceAxisRenderer = (item, itemIndex) => (
    <Button
      type='device_axis'
      className='mx-[4px]'
      onClick={() => setActiveIndexactiveIndexDeviceAxis(itemIndex)}
    >
      {getDeviceAxis(item)}
      <span className='small-text flex self-center'>{item.name}</span>
    </Button>
  )

  const getDeviceOrientations = item => {
    if (item.name == 'Front') {
      return <CubeFrontIcon width='24px'></CubeFrontIcon>
    }
    if (item.name == 'Back') {
      return <CubeBackIcon width='24px'></CubeBackIcon>
    }
    if (item.name == 'Main Axis') {
      return <CubeBackIcon width='24px'></CubeBackIcon>
    }
  }
  const getDeviceAxis = item => {
    if (item.name == 'TWIST Y') {
      return <RotateYIcon width='24px'></RotateYIcon>
    }
    if (item.name == 'TWIST X') {
      return <RotateXIcon width='24px'></RotateXIcon>
    }
    if (item.name == 'PUSH/PULL X') {
      return <XAxisIcon width='24px'></XAxisIcon>
    }
    if (item.name == 'PUSH/PULL Z') {
      return <ZAxisIcon width='24px'></ZAxisIcon>
    }
    if (item.name == 'PUSH/PULL Y') {
      return <YAxisIcon width='24px'></YAxisIcon>
    }
  }

  const itemsDeviceView = [
    {
      name: 'Front',
      inputId: 'Front',
      template: item => deviceViewRenderer(item, 0)
    },
    {
      name: 'Back',
      inputId: 'Back',

      template: item => deviceViewRenderer(item, 1)
    }
    // {
    //   name: 'Main Stick',
    //   template: (item) => deviceViewRenderer(item, 1)
    // },
  ]

  const getSelectedEditorDevice = selectedDevice => {
    switch (sessionStorage.getItem('selectedEditorDevice')) {
      case 'VKB_GLADIATOR_NXT_EVO_RIGHT':
        return (
          <Device_VKB_GLADIATOR_NXT_EVO_RIGHT
            className='min-w-[330px]'
            view={sessionStorage.getItem('selectedEditorDevice')}
          />
          // <Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK className="min-w-[330px]" view={sessionStorage.getItem("deviceViewOrientation")}/>
        )
        break

      case 'VKB_GLADIATOR_NXT_EVO_LEFT':
        return (
          <Device_VKB_GLADIATOR_NXT_EVO_LEFT
            className='min-w-[330px]'
            view={sessionStorage.getItem('deviceViewOrientation')}
          />
        )
        break
      default:
        return (
          // <>{selected}</>
          <></>
        )
        break
    }
  }

  return (
    <section id='InputViewerPanel' className='editor-container'>
      <div className={viewerPanelVisibility}>
        <InputViewer />
      </div>

      <div className='flex flex-col gap-0'>
        <div className='flex flex-col w-full '>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-[3px] ml-[4px]'>
              <EyeIcon width='14px' />
              <p className=' small-text w-full flex justify-start'>
                {' '}
                DEVICE VIEW{' '}
              </p>
            </div>
            {/* <TabMenu unstyled
              className='corner-viewChanger'
              type="device_orientation"
              model={itemsDeviceAxis}
              activeIndex={activeIndexDeviceAxis}
              onTabChange={(e) => setActiveIndexactiveIndexDeviceAxis(e.index)}
            /> */}
            <TabMenu
              unstyled
              className='corner-viewChanger'
              type='device_orientation'
              model={itemsDeviceView}
              activeIndex={activeIndexDeviceView}
              onTabChange={e => setActiveIndexactiveIndexDeviceView(e.index)}
            />
          </div>

          <div className='device-container'>{currentSelectedEditorDevice}</div>
        </div>
      </div>
      <div id='InputEditorPanel' className={editorPanelVisibility}>
        <InputEditor />
      </div>
    </section>
  )
}

export default page
