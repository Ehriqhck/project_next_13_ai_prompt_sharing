import { Button } from 'primereact/button';
import { Utils } from '@app/editor/utils.js'
import ActionList from '@components/ActionList.jsx'

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
import SeatIcon from '@public/assets/icons/actions/gameCategory/SeatIcon.jsx'
import ArrowRightIcon from '@public/assets/icons/actions/gameCategory/ArrowRightIcon.jsx'
import GenericSettingIcon from '@public/assets/icons/actions/gameCategory/GenericSettingIcon.jsx'
import QuantumIcon from '@public/assets/icons/actions/gameCategory/QuantumIcon.jsx'
import SalvageIcon from '@public/assets/icons/actions/gameCategory/SalvageIcon.jsx'
import ScanningIcon from '@public/assets/icons/actions/gameCategory/ScanningIcon.jsx'
import MiningIcon from '@public/assets/icons/actions/gameCategory/MiningIcon.jsx'
import CameraIcon from '@public/assets/icons/actions/gameCategory/CameraIcon.jsx'
import WarningIcon from '@public/assets/icons/actions/gameCategory/WarningIcon.jsx'
import SpaceshipIcon from '@public/assets/icons/actions/gameCategory/SpaceshipIcon.jsx'
import KeyIcon from '@public/assets/icons/actions/gameCategory/KeyIcon.jsx'
import GroundVehicleIcon from '@public/assets/icons/actions/gameCategory/GroundVehicleIcon.jsx'
import PlusIcon from '@public/assets/icons/actions/gameCategory/PlusIcon.jsx'
import MoveIcon from '@public/assets/icons/actions/gameCategory/MoveIcon.jsx'
import LandingIcon from '@public/assets/icons/actions/gameCategory/LandingIcon.jsx'
import SpeedometerIcon from '@public/assets/icons/actions/gameCategory/SpeedometerIcon.jsx'
import WifiIcon from '@public/assets/icons/actions/gameCategory/WifiIcon.jsx'
import TurretIcon from '@public/assets/icons/actions/gameCategory/TurretIcon.jsx'
import TargetingIcon from '@public/assets/icons/actions/gameCategory/TargetingIcon.jsx'
import TargetingIconHostile from '@public/assets/icons/actions/gameCategory/TargetingIconHostile.jsx'
import TargetingIconFriendly from '@public/assets/icons/actions/gameCategory/TargetingIconFriendly.jsx'
import TargetingIconAttacker from '@public/assets/icons/actions/gameCategory/TargetingIconAttacker.jsx'
import ResetIcon from '@public/assets/icons/actions/gameCategory/ResetIcon.jsx'
import CycleIcon from '@public/assets/icons/actions/gameCategory/CycleIcon.jsx'
import TargetingIconView from '@public/assets/icons/actions/gameCategory/TargetingIconView'
import BackwardIcon from '@public/assets/icons/actions/gameCategory/BackwardIcon.jsx'
import ForwardIcon from '@public/assets/icons/actions/gameCategory/ForwardIcon.jsx'
import OneIcon from '@public/assets/icons/actions/gameCategory/OneIcon.jsx'
import TwoIcon from '@public/assets/icons/actions/gameCategory/TwoIcon.jsx'
import ThreeIcon from '@public/assets/icons/actions/gameCategory/ThreeIcon.jsx'
import IncreaseIcon from '@public/assets/icons/actions/gameCategory/increaseIcon.jsx'
import DecreaseIcon from '@public/assets/icons/actions/gameCategory/decreaseIcon.jsx'
import FractureIcon from '@public/assets/icons/actions/gameCategory/fractureIcon.jsx'
import DisintegrateIcon from '@public/assets/icons/actions/gameCategory/disintegrateIcon.jsx'
import NudgeIcon from '@public/assets/icons/actions/gameCategory/nudgeIcon.jsx'
import AngleIcon from '@public/assets/icons/actions/gameCategory/angleIcon.jsx'
import FocusedBeamIcon from '@public/assets/icons/actions/gameCategory/FocusedBeamIcon.jsx'
import TractorBeamIcon from '@public/assets/icons/actions/gameCategory/TractorBeamIcon.jsx'
import LeftwardIcon from '@public/assets/icons/actions/gameCategory/LeftwardIcon.jsx'
import RightwardIcon from '@public/assets/icons/actions/gameCategory/RightwardIcon.jsx'
import SalvageBeamIcon from '@public/assets/icons/actions/gameCategory/SalvageBeamIcon.jsx'
import { getActionTypeIcon } from '@utils/getActionTypeIcon.jsx'
import LeftRightIcon from '@public/assets/icons/actions/gameCategory/LeftRightIcon.jsx'
import UpDownIcon from '@public/assets/icons/actions/gameCategory/UpDownIcon.jsx'
import InvertIcon from '@public/assets/icons/actions/gameCategory/InvertIcon.jsx'
import TurboIcon from '@public/assets/icons/actions/gameCategory/TurboIcon.jsx'
import ZoomInIcon from '@public/assets/icons/actions/gameCategory/ZoomInIcon.jsx'
import ZoomOutIcon from '@public/assets/icons/actions/gameCategory/ZoomOutIcon.jsx'
import ZoomIcon from '@public/assets/icons/actions/gameCategory/ZoomIcon.jsx'
import DockingIcon from '@public/assets/icons/actions/gameCategory/DockingIcon.jsx'
import WeaponsIcon from '@public/assets/icons/actions/gameCategory/WeaponsIcon.jsx'
import MissileIcon from '@public/assets/icons/actions/gameCategory/MissileIcon.jsx'
import RightSideIcon from '@public/assets/icons/actions/gameCategory/RightSideIcon.jsx'
import LeftSideIcon from '@public/assets/icons/actions/gameCategory/LeftSideIcon.jsx'
import FocusIcon from '@public/assets/icons/actions/gameCategory/FocusIcon.jsx'
import ExitIcon from '@public/assets/icons/actions/gameCategory/ExitIcon.jsx'
import ESPIcon from '@public/assets/icons/actions/gameCategory/ESPIcon.jsx'
import ManualGimbalIcon from '@public/assets/icons/actions/gameCategory/ManualGimbalIcon.jsx'
import AutoGimbalIcon from '@public/assets/icons/actions/gameCategory/AutoGimbalIcon.jsx'
import FixedGimbalIcon from '@public/assets/icons/actions/gameCategory/FixedGimbalIcon.jsx'
import LockIcon from '@public/assets/icons/actions/gameCategory/LockIcon.jsx'
import PIPIcon from '@public/assets/icons/actions/gameCategory/PIPIcon.jsx'
import LeadPIPIcon from '@public/assets/icons/actions/gameCategory/LeadPIPIcon.jsx'
import LagPIPIcon from '@public/assets/icons/actions/gameCategory/LagPIPIcon.jsx'
import HUDIcon from '@public/assets/icons/actions/gameCategory/HUDIcon.jsx'
import NextIcon from '@public/assets/icons/actions/gameCategory/NextIcon.jsx'
import PreviousIcon from '@public/assets/icons/actions/gameCategory/PreviousIcon.jsx'
import ShieldTopIcon from '@public/assets/icons/actions/gameCategory/ShieldTopIcon.jsx'
import ShieldLeftIcon from '@public/assets/icons/actions/gameCategory/ShieldLeftIcon.jsx'
import ShieldBottomIcon from '@public/assets/icons/actions/gameCategory/ShieldBottomIcon.jsx'
import ShieldRightIcon from '@public/assets/icons/actions/gameCategory/ShieldRightIcon.jsx'
import ShieldIcon from '@public/assets/icons/actions/gameCategory/ShieldIcon.jsx'
import TopIcon from '@public/assets/icons/actions/gameCategory/TopIcon.jsx'
import BottomIcon from '@public/assets/icons/actions/gameCategory/BottomIcon.jsx'
import ShieldAltIcon from '@public/assets/icons/actions/gameCategory/ShieldAltIcon.jsx'
import NoiseIcon from '@public/assets/icons/actions/gameCategory/NoiseIcon.jsx'
import DecoyIcon from '@public/assets/icons/actions/gameCategory/DecoyIcon.jsx'
import PowerTriangleIcon from '@public/assets/icons/actions/gameCategory/PowerTriangleIcon.jsx'
import ThrusterIcon from '@public/assets/icons/actions/gameCategory/ThrusterIcon.jsx'
import EngineIcon from '@public/assets/icons/actions/gameCategory/EngineIcon.jsx'
import SetMinIcon from '@public/assets/icons/actions/gameCategory/SetMinIcon.jsx'
import SetMaxIcon from '@public/assets/icons/actions/gameCategory/SetMaxIcon.jsx'
import PowerOnIcon from '@public/assets/icons/actions/gameCategory/PowerOnIcon.jsx'
import PowerOffIcon from '@public/assets/icons/actions/gameCategory/PowerOffIcon.jsx'
import PowerButtonIcon from '@public/assets/icons/actions/gameCategory/PowerButtonIcon.jsx'
import WipeIcon from '@public/assets/icons/actions/gameCategory/WipeIcon.jsx'
import FlashlightIcon from '@public/assets/icons/actions/gameCategory/FlashlightIcon.jsx'
import LadderIcon from '@public/assets/icons/actions/gameCategory/LadderIcon.jsx'
import ScoreboardIcon from '@public/assets/icons/actions/gameCategory/ScoreboardIcon.jsx'
import StopwatchIcon from '@public/assets/icons/actions/gameCategory/StopwatchIcon.jsx'
import BrakeIcon from '@public/assets/icons/actions/gameCategory/BrakeIcon.jsx'
import EyeIcon from '@public/assets/icons/actions/gameCategory/EyeIcon.jsx'
import RotateIcon from '@public/assets/icons/actions/gameCategory/RotateIcon.jsx'
import ChatBubbleIcon from '@public/assets/icons/actions/gameCategory/ChatBubbleIcon.jsx'
import UsersIcon from '@public/assets/icons/actions/gameCategory/UsersIcon.jsx'
import FOIPIcon from '@public/assets/icons/actions/gameCategory/FOIPIcon.jsx'
import VOIPIcon from '@public/assets/icons/actions/gameCategory/VOIPIcon.jsx'
import AudioWaveIcon from '@public/assets/icons/actions/gameCategory/AudioWaveIcon.jsx'
import EyeTrackerIcon from '@public/assets/icons/actions/gameCategory/EyeTrackerIcon.jsx'
import SpeakingIcon from '@public/assets/icons/actions/gameCategory/SpeakingIcon.jsx'
import InteractIcon from '@public/assets/icons/actions/gameCategory/InteractIcon.jsx'
import MonitorIcon from '@public/assets/icons/actions/gameCategory/MonitorIcon.jsx'
import InnerThoughtIcon from '@public/assets/icons/actions/gameCategory/InnerThoughtIcon.jsx'
import ChestIcon from '@public/assets/icons/actions/gameCategory/ChestIcon.jsx'
import MobiglassIcon from '@public/assets/icons/actions/gameCategory/MobiglassIcon.jsx'
import RadialMenuIcon from '@public/assets/icons/actions/gameCategory/RadialMenuIcon.jsx'
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

            SessionDeviceInputs.getTreeTableNodes().then((data) => setNodes(data));
        } catch (error) {
            console.log(error);

        }
    }, [selectedEditorDeviceViewOrientation, selectedEditorDevice, profileContext, SelectedEditorDeviceViewOrientationContext, selectedInputTableInput]);






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
        switch ("asd") {
            case "Axis":
                return (
                    <AxisDataTable />
                );
                break;

            default:
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
                    <RotationalAxisIcon height="22px" className="flex self-center align-middle" />
                    <p className=' small-text w-full flex   align-middle justify-center self-center'> MAIN STICK AXIS </p>
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
                                <AxisDataTable />

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
        </div>
    );
}
