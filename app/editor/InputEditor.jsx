'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'
import ActionTable from '@app/editor/ActionTable'
import InputTable from '@app/editor/InputTable'
import { Context, SelectedEditorActionTableTargetContext, SelectContext, SelectedEditorActionContext, EditorPanelTitleContext, SelectedEditorDeviceContext, SelectedInputTableInputContext } from '@components/Provider';
import LayerChip from '@components/generic/LayerChip';
import ModLayerSelector from '@components/actionSelector/ModLayerSelector.js';
import BindButton from '@app/editor/BindButton.jsx'
import PanelSwitchButtonMobile from './PanelSwitchButtonMobile.js';
import { Utils } from '@app/editor/utils.js'
import GameActionTable from '@app/editor/GameActionTable.jsx'
import TreeTableDialogue from '@app/editor/TreeTableDialogue.jsx'
import { createContext, useContext, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


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
      <div class="panel-title ">
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

        {/* <p className='text-base ml-[0px]'></p> */}
        <p className='title-colon text-input-title  '> :</p>
        <p className='text-input-title corner-test text-input-title '>{editorPanelTitle.toUpperCase()}</p>
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