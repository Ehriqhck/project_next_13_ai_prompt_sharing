'use client'

import React from 'react'
import InputTable from '@app/editor/InputTable'
import { Context, SelectContext, SelectedEditorActionContext, EditorPanelTitleContext, SelectedEditorDeviceContext, SelectedInputTableInputContext } from '@components/Provider';

import { Utils } from '@app/editor/utils.js'

import { useContext, useState } from 'react';



const Editor = ({ show }) => {
  const [selectedInput, setSelectedInput] = useState("CONTEXT INPUT: DEFAULT");
  const [selectedAction, setSelectedAction] = useState("CONTEXT ACTION: DEFAULT")
  const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
  const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext)
  const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)
  const { selectedEditorDevice, setselectedEditorDevice } = useContext(SelectedEditorDeviceContext)
  const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
  const [isLoading, setIsLoading] = useState(false)
  const { profileContext, setprofileContext } = useContext(Context);


  const getInputTitle = () => {
    try {
      var name = (editorPanelTitle).toUpperCase();
      return (name)
    } catch (error) {
      return ("SELECT A BUTTON");
    }
  }




  return (


    <div className='panel-default ' id="editorPanel">
      <div class="panel-title mt-[-7px] ">
        <div className='flex flex-row '>

          <span class="text-legend-heading px-[5px] "> BIND EDITOR PANEL</span>
          {/* <p className='text-legend-heading'> {treeTableDialogueSelection.label} </p> */}


        </div>
      </div>


      <div className='flex flex-row pt-[24px] mb-[12px]'>
        <div className='flex'>

          {Utils.getSelectedDeviceIcon(
            sessionStorage.getItem('selectedEditorDevice'),
            '40px', '', true)}
        </div>

        <p className='title-colon text-input-title  '> :</p>
        <p className=' corner-test   self-center'>
          {Utils.getEditorPanelDeviceTitle(sessionStorage.getItem('selectedEditorDevice'))}
        </p>
      </div>


      <div className='flex flex-col gap-[2px] w-[100%]' >
        <div className="inputTable-inset flex flex-col gap-[0px]">

          <InputTable
            onInputSelect={setSelectedInput}
          />
        </div>

      </div>

    </div>
  )
}

export default Editor