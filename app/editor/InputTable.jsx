import { Button } from 'primereact/button';
import { Utils } from '@app/editor/utils.js'
import ActionList from '@components/ActionList.jsx'
import clsx from 'clsx';

import { Dialog } from 'primereact/dialog';
import GameActionTable from 'app/editor/GameActionTable.jsx'
import React, { useState, useEffect, useContext } from 'react';
import BindButton from './BindButton';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { SessionDeviceInputs } from './SessionDeviceInputs';
import { Tree } from 'primereact/tree';
import { classNames } from 'primereact/utils';

import RotationalAxisIcon from '@public/assets/icons/actions/gameCategory/RotationalAxisIcon.jsx'
import { SelectContext, SelectedActionContext, SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext, Context, SelectedInputTableInputContext } from '@components/Provider';
import DeviceAxisSelector from '@app/editor/DeviceAxisSelector.jsx'
import AxisDataTable from '@app/editor/AxisDataTable.jsx'
export default function TreeTableDialogue() {
    const [visible, setVisible] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [selectedKey, setSelectedKey] = useState('');
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);

    const { profileContext, setprofileContext } = useContext(Context);

    const [filterOptions] = useState([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [metaKey, setMetaKey] = useState(true);
    useEffect(() => {
        // console.log("AOSIJF:OAKSLFH:ALSFHJALKFHALKS:HF ____________");
        // console.log(sessionStorage.getItem('selectedEditorDevice'));
        // console.log(JSON.parse(sessionStorage.getItem('loadedProfile')));
        // console.log(sessionStorage.getItem('selectedEditorDeviceViewOrientation'));

        try {
            // SessionDeviceInputs.getTreeTableNodes(
            //     sessionStorage.getItem('selectedEditorDevice'),
            //     JSON.parse(sessionStorage.getItem('loadedProfile'),
            //     "Front"
            //     )).then((data) => setNodes(data));

            SessionDeviceInputs.getTreeTableNodes().then((data) => {
                sessionStorage.setItem('cache_ButtonInputTableData', JSON.stringify(data))
                setNodes(data)
            });
        } catch (error) {
            console.log(error);

        }
    }, [ selectedEditorDevice, profileContext, SelectedEditorDeviceViewOrientationContext, selectedInputTableInput]);


    const buttonTableClassName = clsx({
        'show': sessionStorage.getItem('inputTableFilter') == 'buttons',
        'hidden': sessionStorage.getItem('inputTableFilter') == 'Axis',

    });
    const axisTableClassName = clsx({
        'show': sessionStorage.getItem('inputTableFilter') == 'axis',
        'hidden': sessionStorage.getItem('inputTableFilter') == 'buttons',

    });


    const togglerTemplate = (node, options) => {
        const getSlotIcon = (node) => {

            if (!Object.hasOwn(node.data, 'slotName')) {
                return <> {node.label}</>;
            } else {
                return (
                    <div className='flex corner-inputTableIcons'>
                        {Utils.getInputSlotIcons(node.data.slotName, "25px", "25px")}
                    </div>
                )
            }
        }

        // if node is a button
        if (!Object.hasOwn(node.data, 'slotName')) {

            return (
                <Button type="inputTable" className=" flex flex-col   " tabIndex={-1} onClick={options.onClick}>

                    <div className='flex flex-row content-start  self-start gap-[8px] '>
                        <div className='flex flex-row  h-fit'>
                            {Utils.getInputIcon(node.label, "30px", "30px")}
                        </div>
                        <p className='text-inputTable'> {node.label} </p>
                        {/* <div className="spacer-dialogue" />
    
                        <span className='self-center justify-center '>{label}</span> */}
                        {/* <div className="spacer-dialogue" /> */}
                        {/* {expanded} */}
                    </div>

                </Button>
            );
        } else {
            return (
                <Button type="inputTable" className=" flex flex-col   " tabIndex={-1} onClick={options.onClick}>

                    <div className='flex flex-col content-start  self-start gap-[8px] '>
                        <div className='flex flex-row  h-fit'>
                            {Utils.getInputIcon(node.label, "30px", "30px")}
                        </div>
                        <div className='flex flex-row gap-[8px]'>
                            <div className='flex '>
                                {/* {getCategoryHeader(node)} */}

                                {getSlotIcon(node)}
                            </div>
                            <p className='text-inputTable'> {node.label} </p>

                        </div>
                        <div className='flex flex-col ml-[2px]'>
asd
                            <ActionList layers={node.data.layers} input_direction="inputTable" />

                        </div>
                        {/* <div className="spacer-dialogue" />

                    <span className='self-center justify-center '>{label}</span> */}
                        {/* <div className="spacer-dialogue" /> */}
                        {/* {expanded} */}
                    </div>

                </Button>
            );
        };
    }



    const nodeTemplate = (node, options) => {

        // check if node is category with child array of game actions
        if (Object.hasOwn(node.data, 'layers')) {

            return (
                // <span className={options.className} >
                //     <div className='flex flex-row'>

                //         {Utils.getInputSlotIcons(node.data.slotName, "100px", "100px")}
                //         <ActionList layers={node.data.layers} input_direction="press" />

                //     </div>
                // </span>
                <></>
            )

        } else {
            return <span className={options.className}>
                <div className='flex flex-row'>


                </div>
            </span>;
        }
    }
    const getInputTableType = () => {
        switch (sessionStorage.getItem('selectedEditorInputTableInput')) {
            case "Axis":
                return (
                                            <AxisDataTable />

                );
                break;

            case "buttons":
                return (
                    <Tree
                        togglerTemplate={togglerTemplate}
                        selectionMode="single" selectionKeys={selectedKey}
                        onSelectionChange={(e) => {
                        }}
                        type="inputTable"
                        unstyled
                        onNodeClick={(e) => {
                            setSelectedAction(e.node);
                            // console.log(e.node.key);
                        }}
                        // onNodeClick={(e) => {
                        //     console.log("WHAT IS NODE???:   " + e.data);
                        // }}
                        nodeTemplate={nodeTemplate} value={nodes} filter filterBy='label' filterMode="strict" filterPlaceholder="Lenient Filter" className=""
                    />
                )
                break;
        }
    }
    return (
        <div className="flex w-full flex-col gap-[8px] pb-[8px] w-[100%] content-center self-center">
            <div className='flex flex-col corner-viewChanger'>
                <div className='flex flex-row gap-[3px] ml-[4px] mt-[-8px] mb-[4px] self-center align-middle'>
                    {/* <EyeIcon width="14px" /> */}
                    <p className=' small-text w-full flex   align-middle justify-center self-center'> SHOW INPUTS </p>
                </div>
                <DeviceAxisSelector></DeviceAxisSelector>

            </div>
            {/* <p className='text-base'>// SELECT MODIFIER LAYER (OPTIONAL)</p> */}
            {/* <Button onClick={() => {
                console.log(sessionStorage.getItem('selectedEditorDeviceViewOrientation'),
                    JSON.parse(sessionStorage.getItem('loadedProfile')));
                console.log(sessionStorage.getItem('selectedEditorDevice'));

                // console.log("CONTEXT:");
                // console.log(profileContext);
            }}>check sessionStorage
            </Button>
            <Button onClick={() => {
                sessionStorage.clear();
                // console.log("CONTEXT:");
                // console.log(profileContext);
            }}>CLEAR sessionStorage
            </Button> */}
            <div className={axisTableClassName}>

                <AxisDataTable />
            </div>
            {/* <AxisDataTable /> */}
            <div className={buttonTableClassName}>
                <Tree
                    togglerTemplate={togglerTemplate}
                    selectionMode="single" selectionKeys={selectedKey}
                    onSelectionChange={(e) => {
                    }}
                    type="inputTable"
                    unstyled
                    onNodeClick={(e) => {
                        setSelectedAction(e.node);
                        // console.log(e.node.key);
                    }}
                    // onNodeClick={(e) => {
                    //     console.log("WHAT IS NODE???:   " + e.data);
                    // }}
                    nodeTemplate={nodeTemplate} value={JSON.parse(sessionStorage.getItem('cache_ButtonInputTableData'))} filter filterBy='label' filterMode="strict" filterPlaceholder="Lenient Filter" className=""
                />
            </div>
        </div>
    );
}
