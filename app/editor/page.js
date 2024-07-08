'use client'
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';

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
          <></>
        )
        break;
    }
  }
  const legendTemplate = (
    <div className="flex align-items-center gap-2 px-2">
        <span className="font-bold">Amy Elsner</span>
    </div>
);
  return (

    <section id="InputViewerPanel" className='editor-container' >
      <div className={viewerPanelVisibility}>
        <InputViewer />
      </div>

      <div className='flex flex-col gap-0'>
        <div className='corner-viewChanger'>
          <div className='flex flex-col'>

            <p className=' small-text w-full flex justify-start'> CURRENT VIEW </p>
            <FieldSet legendTemplate={legendTemplate}>
              <Button
                onClick={() => { }}
                unstyled type="small" className=' self-center flex justify-center align-middle px-[5px] py-[5px] w-fit' >
                <span className='smallButton-text px-[5px] '> ADD DEVICE +</span>
              </Button>

            </FieldSet>

          </div>

        </div>
        <div className='device-container' >
          {currentSelectedEditorDevice}
        </div>
      </div>

      <div id="InputEditorPanel" className={editorPanelVisibility}>
        <InputEditor />

      </div>

    </section>


  )
}

export default page