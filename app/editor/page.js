'use client'

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
          <Device_VKB_GLADIATOR_NXT_EVO_LEFT className="min-w-[330px]" />
        )
        break;
    }
  }

  return (

    <section id="InputViewerPanel" className='editor-container' >
      <div className={viewerPanelVisibility}>
        <InputViewer />
      </div>

      <div className='device-container' >
        {currentSelectedEditorDevice}
      </div>
      <div id="InputEditorPanel" className={editorPanelVisibility}>
        <InputEditor />

      </div>

    </section>


  )
}

export default page