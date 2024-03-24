import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import GameActionTable from 'app/editor/GameActionTable.jsx'
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { GameActions } from './GameActions';
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


export default function TreeTableDialogue() {
    const [visible, setVisible] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [selectedKey, setSelectedKey] = useState('');

    const [filterOptions] = useState([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [metaKey, setMetaKey] = useState(true);
    useEffect(() => {
        GameActions.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </div>
            </div>
        );
    };

    let header = getHeader();
    const getHeaderIcon = (node) => {
        switch (node) {
            // Seat Icon
            case "":
                return (<div className='w-[25px]'> <SeatIcon /></div>)
            // Spaceship Icon + Ground Vehicle
            case "Vehicles":
                return (
                    <div className='flex flex-row gap-[5px] h-[42px] '>
                        <div className='flex flex-row gap-[5px] mx-[5px]'>
                            <SpaceshipIcon width='25px' />
                            {/* <div className='spacer'/> */}
                            <GroundVehicleIcon width='28px' />
                        </div>
                    </div>
                )
            // Spaceship Icon + Ground Vehicle
            case "Targeting":
                return (
                    <div className='flex flex-row gap-[5px] h-[42px] '>
                        <div className='flex flex-row gap-[5px] mx-[5px]'>
                            <TargetingIcon width='26px' />
                            {/* <div className='spacer'/> */}
                        </div>
                    </div>
                )
            // Spaceship Icon + Ground Vehicle
            case "Ground Vehicle":
                return (
                    <div className='flex flex-row gap-[5px] h-[42px] '>
                        <div className='flex flex-row gap-[5px] mx-[5px]'>
                            <GroundVehicleIcon width='26px' />
                            {/* <div className='spacer'/> */}
                        </div>
                    </div>
                )
            // Camera Icon
            case "View":
                return (
                    <div className='flex flex-row gap-[5px] h-[42px] '>
                        <div className='flex flex-row gap-[5px] mx-[6px] self-center align-middle'>
                            <CameraIcon width='26px' />
                            {/* <div className='spacer'/> */}
                        </div>
                    </div>
                )
            // Spaceship Icon
            case "Flight":
                return (
                    <div className='flex flex-row gap-[5px] h-[42px] '>
                        <div className='flex flex-row gap-[5px] mx-[5px]'>
                            <SpaceshipIcon width='25px' />
                            {/* <div className='spacer'/> */}
                            {/* <GroundVehicleIcon width='28px' /> */}
                        </div>
                    </div>)

            // Seat Icon 
            case "Seats & Operator Modes":
                return (
                    <div className='GameAction-Category-Heading '>
                        <SeatIcon width='25px' />
                        {/* <div className='spacer'/> */}
                    </div>
                )
            // Seat + Spaceship Icon 
            case "Cockpit":
                return (
                    <div className='GameAction-Category-Heading '>
                        {/* <div className='spacer'/> */}
                        <div className='flex flex-row gap-[5px] '>
                            <SpaceshipIcon width='25px' />
                            <SeatIcon width='25px' />

                            {/* <GroundVehicleIcon width='28px' /> */}
                        </div>
                    </div>
                )
            // Move Icon
            case "spaceship_movement-maneuvering":
            case "Movement":
                return (
                    <div className='GameAction-Category-Heading '>
                        <MoveIcon width='25px' />
                        {/* <div className='spacer'/> */}
                    </div>
                )
            // Quantum Icon
            case "Quantum Travel":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <QuantumIcon width='25px' />

                        </div>
                    </div>
                )
            case "Target Cycling":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <TargetingIcon width='25px' />

                        </div>
                        <div className='flex flex-row gap-[5px] '>
                            <CycleIcon width='25px' />

                        </div>
                    </div>
                )

            case "Docking":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <DockingIcon width='25px' />

                        </div>
                    </div>
                )
            case "Target Hailing":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <TargetingIcon width='25px' />

                        </div>
                        <div className='flex flex-row gap-[5px] '>
                            <WifiIcon width='25px' />

                        </div>
                    </div>
                )
            case "Radar":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <ScanningIcon width='25px' />

                        </div>

                    </div>
                )
            case "Mining":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <MiningIcon width='25px' />

                        </div>

                    </div>
                )
            case "Salvage":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <SalvageIcon width='25px' />

                        </div>

                    </div>
                )
            case "Turret Movement Advanced":
            case "Turret Movement":

                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px] '>
                            <TurretIcon width='25px' />

                        </div>

                    </div>
                )
            case "Weapons":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <WeaponsIcon width='29px' height='25px' />

                        </div>

                    </div>
                )
            case "Missiles":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <MissileIcon width='23px' />

                        </div>

                    </div>
                )
            case "Shields and Countermeasures":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <ShieldAltIcon height='22px' />

                        </div>

                    </div>
                )
            case "Power Triangle Assignment":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <PowerTriangleIcon height='22px' />

                        </div>

                    </div>
                )
            case "Power":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <PowerButtonIcon height='26px' />

                        </div>

                    </div>
                )
            case "HUD":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[5px]  outline-primary self-center'>
                            <HUDIcon height='26px' />

                        </div>

                    </div>
                )
            case "Lights":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <FlashlightIcon height='26px' />

                        </div>

                    </div>
                )
            case "Stopwatch":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <StopwatchIcon height='26px' />

                        </div>

                    </div>
                )
            case "Spectator":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <EyeIcon width='26px' />

                        </div>

                    </div>
                )
            default:
                break;
        }
    }

    const getCategoryHeader = (node) => {
        if (!Object.hasOwn(node.data, 'category')) {
            console.log('Node has no data.category' + Object.hasOwn(node.data, 'category'));
            return;
        } else {
            // console.log('NODE HAS DATA CATEGORY: ' + Object.hasOwn(node.data, 'category'));
            let stringCategory = node.data.category;
            const split = stringCategory.split(" / ");
            // console.log("SPLIT[0]: " + split);


            return (
                <div className='flex flex-row'>
                    {
                        split.map((category, index) => {
                            if (index == 0) {
                                return (
                                    <div className='flex flex-row'>
                                        {/* <div className="spacer-dialogue" /> */}

                                        <span className='self-center justify-center '>
                                            <p className='text-GameAction-Category-Heading'>{category} </p>
                                        </span>
                                        <span className='' aria-hidden="true">
                                            {getHeaderIcon(category)}

                                        </span>
                                    </div>

                                )
                            } else {
                                if (split[index + 1] === undefined) {
                                    return (
                                        <div className='flex flex-row'>
                                            <div className="spacer-dialogue" />
                                            <span className='self-center justify-center '>
                                                <p className='text-GameAction-Category-bold'>{category} </p>
                                            </span>
                                            <span className='' aria-hidden="true">
                                                {getHeaderIcon(category)}

                                            </span>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className='flex flex-row'>
                                            <div className="spacer-dialogue" />

                                            <span className='self-center justify-center '>
                                                <p className='text-GameAction-Category-Heading'>{category} </p>
                                            </span>
                                            <span className='' aria-hidden="true">
                                                {getHeaderIcon(category)}

                                            </span>
                                        </div>
                                    )
                                }


                            }

                        })
                    }
                </div>
            )
        }


    }

    const togglerTemplate = (node, options) => {
        if (!node) {
            return;
        }
        let label = <p className='self-center justify-center text-list-default '>{node.label?.toUpperCase()}</p>;
        const expanded = options.expanded;
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
            'gg-minimize-alt': expanded,
            'gg-arrows-expand-right': !expanded,
            // 'gg-arrows-expand-right': expanded

        });



        const toggleIcon = (expanded) => {
            if (!expanded) {
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z" fill="currentColor" /><path d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z" fill="currentColor" /></svg>
                )
            } else {
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.567 8.02947L20.9105 1.76929L22.3153 3.19282L15.9916 9.43352L19.5614 9.44772L19.5534 11.4477L12.5535 11.4199L12.5813 4.41992L14.5813 4.42788L14.567 8.02947Z" fill="currentColor" /><path d="M7.97879 14.5429L4.40886 14.5457L4.40729 12.5457L11.4073 12.5402L11.4128 19.5402L9.41277 19.5417L9.40995 15.9402L3.09623 22.2306L1.68463 20.8138L7.97879 14.5429Z" fill="currentColor" /></svg>
                )
            }

        }
        return (
            <button type="button" className="justify-center  p-tree-toggler flex flex-col  gap-[0px] pl-[2px]  " tabIndex={-1} onClick={options.onClick}>
                <div className='flex flex-row content-start justify-center self-start gap-[5px] '>
                    <div className='self-center justify-center '>
                        {getCategoryHeader(node)}
                    </div>
                    <div className='self-center justify-center flex '>
                        {getHeaderIcon(node)}
                    </div>
                    {/* <div className="spacer-dialogue" />

                    <span className='self-center justify-center '>{label}</span> */}
                    {/* <div className="spacer-dialogue" /> */}
                    {expanded}
                </div>

            </button>
        );
    };

    const getGameActionIcon = (node) => {
        switch (node.key) {

            // Reset Icon
            case "v_target_cycle_friendly_reset":
            case "v_target_cycle_attacker_reset":
            case "v_target_cycle_hostile_reset":
            case "v_target_cycle_all_reset":
            case "v_target_cycle_in_view_reset":
            case "v_target_cycle_pinned_reset":
            case "v_target_cycle_subitem_reset":
            case "v_salvage_reset_gimbal":
            case "v_weapon_reset_max_missiles":
            case "v_shield_reset_level":
            case "v_capacitor_assignment_reset":
            case "stopwatch_reset":

                return (
                    <div className=' self-center flex flex-row gap-[px]'>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <ResetIcon width='24px' />
                    </div>
                )
            // Reset Icon + Generic Settings Icon
            case "turret_recenter":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <ResetIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>
                    </div>
                )
            // Forward Icon
            case "v_target_cycle_hostile_fwd":
            case "v_target_cycle_friendly_fwd":
            case "v_target_cycle_attacker_fwd":
            case "v_target_cycle_all_fwd":
            case "v_target_cycle_in_view_fwd":
            case "v_target_cycle_pinned_fwd":
            case "v_target_cycle_subitem_fwd":
            case "v_strafe_forward_abs":
            case "v_strafe_forward_abs_rel":
            case "v_strafe_forward_rel":
            case "v_view_pitch_up":
            case "turret_pitch_up":
            case "v_pitch_up":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ForwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )

            //  Backward Icon
            case "v_target_cycle_hostile_back":
            case "v_target_cycle_attacker_back":
            case "v_target_cycle_friendly_back":
            case "v_target_cycle_all_back":
            case "v_target_cycle_pinned_back":
            case "v_target_cycle_subitem_back":
            case "v_target_cycle_in_view_back":
            case "v_strafe_back_abs":
            case "v_strafe_back_abs_rel-FIX THIS KEY":
            case "v_strafe_back_abs_rel":
            case "v_strafe_down":
            case "v_view_pitch_down":
            case "turret_pitch_down":
            case "v_pitch_down":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <BackwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )

            // Rightward Icon
            case "v_strafe_right":
            case "v_view_yaw_right":
            case "turret_yaw_left":
            case "v_yaw_right":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <RightwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Leftward Icon
            case "v_strafe_left":
            case "v_view_yaw_left":
            case "turret_yaw_right":
            case "v_yaw_left":

                return (

                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <LeftwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // UpDown Icon
            case "v_strafe_vertical":
            case "v_strafe_longitudinal_abs":
            case "v_strafe_longitudinal_abs_rel":
            case "v_strafe_longitudinal_rel":
            case "v_view_pitch":
            case "turret_pitch":
            case "v_pitch":

                // case "v_strafe_longitudinal_invert":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <UpDownIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // LeftRight Icon
            case "v_strafe_lateral":
            case "v_view_yaw":
            case "turret_yaw":
            case "v_yaw":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <LeftRightIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Turbo / Afterburner Icon
            case "v_afterburner":
            case "v_boost":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <TurboIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon
            case "turret_limiter_abs":
            case "turret_limiter_rel":
            case "turret_remote_zoom_in":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <SpeedometerIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Forward Icon
            case "v_move_forward":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <SpeedometerIcon width="26px" className='self-center' />
                            <ForwardIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Backward Icon
            case "v_move_back":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <SpeedometerIcon width="26px" className='self-center' />
                            <BackwardIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + UpDown Icon
            case "v_move":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <SpeedometerIcon width="26px" className='self-center' />
                            <UpDownIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Increase Icon
            case "turret_limiter_rel_increase":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <SpeedometerIcon width="24px" className='self-center' />
                            <IncreaseIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Decrease Icon
            case "turret_limiter_rel_decrease":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <SpeedometerIcon width="24px" className='self-center' />
                            <DecreaseIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Generic Settings Icon
            case "turret_limiter_toggle":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <SpeedometerIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>
                    </div>
                )

            // Zoom In Icon
            case "turret_instant_zoom":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                        </div>

                    </div>

                )
            // Zoom In Icon + Zoom Out Icon
            case "v_view_dynamic_zoom_abs":
            case "v_view_dynamic_zoom_rel":
                case "spectate_zoom":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                            <ZoomOutIcon width="24px" className='self-center' />

                        </div>

                    </div>

                )
            // Zoom In Icon + Zoom Out Icon + Generic Settings Icon
            case "v_view_dynamic_zoom_abs_toggle":
     
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                            <ZoomOutIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>

                    </div>

                )
            // Zoom In Icon + Increase Icon
            case "v_view_zoom_in":
            case "v_view_dynamic_zoom_rel_in":
            case "turret_remote_zoom_in":
                case "spectate_zoom_in":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                            <IncreaseIcon width="24px" className='self-center' />

                        </div>

                    </div>



                )

            // Zoom Out Icon
            case "v_view_zoom_out":
            case "v_view_dynamic_zoom_rel_out":
            case "turret_remote_zoom_out":
                case "spectate_zoom_out":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <ZoomOutIcon width="24px" className='self-center' />
                            <DecreaseIcon width="24px" className='self-center' />

                        </div>

                    </div>
                )
            // Zoom + Settings Icon
            case "v_view_dynamic_zoom_abs_toggle":
            case "turret_remote_zoom_toggle":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <ZoomIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>

                    </div>
                )
            // Zoom In Out Icon
            case "v_view_dynamic_zoom_abs":
            case "v_view_dynamic_zoom_rel":

                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='self-center'>
                            <ZoomIcon width='24px' />
                        </div>
                        <div className=' h-[24px] self-center'>
                            <DecreaseIcon />
                        </div>
                        <div className=' h-[24px] self-center'>
                            <IncreaseIcon />
                        </div>
                    </div>
                )

            // Zoom Icon
            case "v_view_freelook_mode":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='self-center'>
                            <ZoomIcon width='24px' />
                        </div>

                    </div>
                )
            // Invert Icon
            case "v_strafe_longitudinal_invert":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='self-center'>
                            <InvertIcon width='24px' />
                        </div>
                        <div className='w-[26px] self-center'>
                            <UpDownIcon width='26px' />
                        </div>
                    </div>

                )
            // Cycle Icon
            case "v_view_mode":
            case "v_view_cycle_fwd":
            case "v_toggle_docking_mode":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='self-center'>
                            <CycleIcon width='26px' />
                        </div>

                    </div>

                )
            // Cycle Icon + Weapons Icon
            case "turret_change_firemode":
            case "v_weapon_change_firemode":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px] '>

                            <CycleIcon width="24px" className='self-center' />
                            <WeaponsIcon width="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Angle Icon
            case "v_weapon_convergence_distance_rel":
            case 'v_weapon_convergence_distance_abs':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <AngleIcon height="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Turret Icon
            case "v_enter_remote_turret_1":
            case "v_enter_remote_turret_2":
            case "v_enter_remote_turret_3":

                return (
                    <div className=' self-center flex flex-row gap-[3px]'>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <TurretIcon width='25px' />
                    </div>
                )

            // Wifi/Communications Icon
            case "v_atc_loading_area_request":
            case "v_atc_request":
            case "v_target_hail":

                return (
                    <div className='w-[25px] self-center'>
                        <WifiIcon />
                    </div>
                )
            // Landing Icon
            case "v_deploy_landing_system":
            case "v_retract_landing_system":
            case "v_toggle_landing_system":

                return (
                    <div className='w-[25px] self-center'>
                        <LandingIcon />
                    </div>
                )
            // Quantum Icon
            case "v_toggle_quantum_mode":
            case "v_toggle_jump_request":
            case "v_engage_jump":
            case "v_toggle_qdrive_engagement":
            case "v_starmap":

                return (
                    <div className=' self-center flex flex-row gap-[3px]'>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <QuantumIcon width='25px' />
                    </div>
                )

            // Salvage Icon
            case "v_toggle_salvage_mode":
                return (
                    <div className='w-[25px] self-center'>
                        <SalvageIcon />
                    </div>
                )

            // Scanning Icon  
            case "v_toggle_scan_mode":
                return (
                    <div className='w-[25px] self-center'>
                        <ScanningIcon />
                    </div>
                )

            // Mining Icon  
            case "v_toggle_mining_mode":
                return (
                    <div className='w-[25px] self-center'>
                        <MiningIcon />
                    </div>
                )

            // Camera Icon  
            case "v_weapon_launch_missile_cinematic":
            case "v_weapon_launch_missile_cinematic_hold":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <CameraIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
    // Camera Icon  + Lock Icon
    case "spectate_toggle_lock_target":

            return (
                <div className='flex flex-row '>
                    <div className='mr-[3px] self-center'>
                        <ArrowRightIcon width="20px" />
                    </div>
                    <div className='flex flex-row gap-[3px] '>

                        <CameraIcon width="24px" className='self-center' />
                        <LockIcon width="24px" className='self-center' />

                    </div>
                </div>
            )


            // Warning Icon
            case "v_emergency_exit":
            case "v_self_destruct":
            case "v_eject":
            case "v_jettison_volatile_cargo":
                return (
                    <div className='w-[25px] self-center'>
                        <WarningIcon />
                    </div>
                )
                break;

            // Key Icon
            case "v_close_all_doors":
            case "v_lock_all_doors":
            case "v_toggle_all_doorlocks":
            case "v_open_all_doors":
            case "v_toggle_all_doors":
            case "v_lock_all_ports":
            case "v_unlock_all_ports":
            case "v_toggle_all_portlocks":
            case "v_unlock_all_doorlocks":

            case "v_toggle_all_doorlocks":
                return (
                    <div className='w-[25px] self-center'>
                        <KeyIcon />

                    </div>

                )
                break;
            case "v_toggle_all_doorlocks":
                return (
                    <div className='w-[25px] self-center'>
                        <KeyIcon />
                    </div>
                )
                break;

            // One Icon
            case "v_mining_use_consumable1":
            case "v_attack_group1":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <OneIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )


            // Two Icon
            case "v_mining_use_consumable2":
            case "v_attack_group2":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <TwoIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // One Icon + Two Icon
            case "v_attack_all":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>
                            <OneIcon height="25px" className='self-center ' />

                            <TwoIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Three Icon
            case "v_mining_use_consumable3":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ThreeIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // LeftSide Icon 
            case "v_salvage_toggle_fire_left":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <LeftSideIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // LeftSide Icon + Forward Icon
            case "v_salvage_nudge_up__left":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <ForwardIcon height="26px" className='self-center' />

                    </div>
                )
            // LeftSide Icon + Down Icon
            case "v_salvage_nudge_down__left":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <BackwardIcon height="26px" className='self-center' />

                    </div>
                )
            // LeftSide Icon + Leftward Icon
            case "v_salvage_nudge_left__left":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <LeftwardIcon height="26px" className='self-center' />

                    </div>
                )
            // LeftSide Icon + Rightward Icon
            case "v_salvage_nudge_right__left":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <RightwardIcon height="26px" className='self-center' />

                    </div>
                )
            // RightSide Icon 
            case "v_salvage_toggle_fire_right":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <RightSideIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // RightSide Icon + Upward Icon
            case "v_salvage_nudge_up__right":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <ForwardIcon height="26px" className='self-center' />

                    </div>
                )
            // RightSide Icon + Downward Icon
            case "v_salvage_nudge_down__right":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <BackwardIcon height="26px" className='self-center' />
                    </div>
                )
            // RightSide Icon + Leftward Icon
            case "v_salvage_nudge_left__right":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <LeftwardIcon height="26px" className='self-center' />
                    </div>
                )
            // RightSide Icon + Rightward Icon
            case "v_salvage_nudge_right__right":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <RightwardIcon height="26px" className='self-center' />
                    </div>
                )
            // Laser Icon + Cycle Icon
            case "v_toggle_mining_laser_fire":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <SalvageBeamIcon height="26px" className='self-center' />


                    </div>
                )
            // Laser Icon + Generic Icon
            case "v_salvage_toggle_beam_spacing_axis":
                return (

                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <div className='gap-[5px] flex flex-row'>
                            <SalvageBeamIcon height="26px" className='self-center' />
                            <GenericSettingIcon height="22px" className='self-center' />
                        </div>

                    </div>

                )
            // Laser Icon + Cycle Icon
            case "v_toggle_mining_laser_type":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <SalvageBeamIcon height="26px" className='self-center' />

                        <CycleIcon width="26px" className='self-center' />

                    </div>
                )
            // Laser Icon + Increase Icon
            case "v_increase_mining_throttle":
            case "v_salvage_increase_beam_spacing":

                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />

                        <SalvageBeamIcon height="26px" className='self-center' />

                        <IncreaseIcon width="26px" className='self-center' />

                    </div>
                )
            // Laser Icon + Decrease Icon
            case "v_decrease_mining_throttle":
            case "v_salvage_decrease_beam_spacing":

                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />

                        <SalvageBeamIcon height="26px" className='self-center' />

                        <DecreaseIcon width="26px" className='self-center' />

                    </div>
                )

            // Laser Icon + Decrease Icon + Decrease Icon
            case "v_mining_throttle":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <SalvageBeamIcon height="26px" className='self-center' />
                        <IncreaseIcon width="26px" className='self-center' />

                        <DecreaseIcon width="26px" className='self-center' />

                    </div>
                )
            // Laser Icon 
            case "v_salvage_beam_spacing_abs":
            case "v_salvage_beam_spacing_rel":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>


                            <SalvageBeamIcon height="26px" className='self-center' />

                            <GenericSettingIcon width="22px" className='self-center' />
                        </div>
                    </div>
                )

            // Focus Icon 
            case "v_salvage_focus_disintegrate":
            case "v_salvage_toggle_fire_focused":


                return (

                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />


                    </div>
                )
            // Focus Icon + Left Icon + Right Icon
            case "v_salvage_focus_all_heads":
                return (

                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <LeftSideIcon height="26px" className='self-center' />
                        <RightSideIcon height="26px" className='self-center' />


                    </div>
                )
            // Focus Icon + Left Icon
            case "v_salvage_focus_left":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <LeftSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Focus Icon + Right Icon
            case "v_salvage_focus_right":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <RightSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Focus Icon + Increase Icon 
            case "v_salvage_focus_disintegrate":
                return (

                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />


                    </div>
                )
            // Focus Icon + Fracture Icon 
            case "v_salvage_focus_fracture":
                return (

                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <FractureIcon height="26px" className='self-center' />


                    </div>
                )
            // Cycle Icon + Focus Icon
            case "v_salvage_cycle_modifiers_focused":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <FocusIcon height="26px" className='self-center' />
                    </div>
                )
            // Cycle Icon + Left Icon
            case "v_salvage_cycle_modifiers_left":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <LeftSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Cycle Icon + Left Icon
            case "v_salvage_cycle_modifiers_right":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <RightSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Cycle Icon + Salvage Icon
            case "v_salvage_cycle_modifiers_structural":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <SalvageIcon height="26px" className='self-center' />
                    </div>
                )
            // Angle Icon + Decrease Icon
            case "v_dec_scan_focus_level":
            case "v_weapon_convergence_distance_rel_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>

                            <AngleIcon height="24px" className='self-center ' />
                            <DecreaseIcon width="24px" className='self-center ' />
                        </div>

                    </div>

                )
            // Angle Icon + Increase Icon
            case "v_inc_scan_focus_level":
            case "v_weapon_convergence_distance_rel_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>

                            <AngleIcon height="24px" className='self-center ' />
                            <IncreaseIcon width="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Angle Icon + Reset Icon
            case "v_weapon_convergence_distance_set_default":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <ResetIcon width="24px" className='self-center ' />

                            <AngleIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Auto Gimbal Icon 
            case "v_weapon_gimbal_mode_set_auto":
            case "v_weapon_gimbal_mode_set_auto_long":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <AutoGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Manual Gimbal Icon 
            case "v_weapon_gimbal_mode_set_manual":
            case "v_weapon_gimbal_mode_set_manual_long":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <ManualGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Generic Settings Icon 
            case "v_weapon_manual_gimbal_cycle_source":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <ManualGimbalIcon height="24px" className='self-center ' />
                            <GenericSettingIcon height="22px" className='self-center ' />

                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Lock Icon 
            case "v_weapon_manual_gimbal_lock_vector":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[2px]  justify-center'>
                            <ManualGimbalIcon height="24px" className='self-center ' />
                            <LockIcon width="24px" className='self-center ' />

                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Auto Gimbal Icon + Fixed Gimbal Icon + Cycle Icon
            case "v_weapon_gimbal_mode_cycle_all":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  justify-center'>
                            <CycleIcon width="24px" className='self-center ' />
                            <AutoGimbalIcon height="24px" className='self-center ' />
                            <ManualGimbalIcon height="24px" className='self-center ' />

                            <FixedGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Fixed Gimbal Icon + Reset Icon
            case "v_weapon_gimbal_mode_cycle_fixed_auto":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  justify-center'>
                            <CycleIcon height="24px" className='self-center ' />

                            <FixedGimbalIcon width="24px" className='self-center ' />
                            <AutoGimbalIcon height="24px" className='self-center ' />

                        </div>

                    </div>
                )

            // Manual Gimbal Icon + Fixed Gimbal Icon + Reset Icon
            case "v_weapon_gimbal_mode_cycle_fixed_auto":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <CycleIcon height="24px" className='self-center ' />

                            <ManualGimbalIcon height="24px" className='self-center ' />
                            <FixedGimbalIcon width="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Fixed Gimbal Icon 
            case "v_weapon_gimbal_mode_set_fixed":
            case "v_weapon_gimbal_mode_set_fixed_long":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <FixedGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Empty
            case "v_salvage_toggle_fire_disintegrate":
            case "v_weapon_launch_missile":
            case "v_weapon_toggle_launch_missile":
            case "v_power_toggle":
            case "v_power_toggle":
            case "player":

                return (
                    <></>
                )
            // Increase Icon
            case "tractor_beam_vehicle_increase_distance":
            case "v_weapon_increase_max_missiles":
            case "v_power_throttle_up":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <IncreaseIcon width="26px" className='self-center ' />
                        </div>

                    </div>
                )
            // Decrease Icon
            case "tractor_beam_vehicle_decrease_distance":
            case "v_weapon_decrease_max_missiles":
            case "v_power_throttle_down":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <DecreaseIcon width="26px" className='self-center ' />
                        </div>

                    </div>
                )
            // Set Min Icon
            case "v_power_throttle_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <SetMinIcon width="22px" className='self-center ' />
                        </div>

                    </div>
                )
            // Fracture Icon + Focus Icon
            case "v_salvage_toggle_fire_fracture":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <FractureIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Exit Icon
            case "turret_remote_exit":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ExitIcon width="26px" className='self-center' />

                        </div>
                    </div>
                )
            // ESP Icon
            case "turret_esp_hold":
            case 'turret_esp_toggle':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] outline-primary self-center'>

                            <ESPIcon height="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // PIP Icon
            case "v_weapon_pip_combination_type_set_combined_all":
            case 'v_weapon_pip_combination_type_set_combined_weapon_group':
            case 'v_weapon_pip_combination_type_set_single':
            case 'v_weapon_pip_combination_type_toggle':

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // HUD Icon + Increase Icon
            case 'v_weapon_bombing_hud_range_increase':

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center '>
                            <div className='self-center outline-primary '>
                                <HUDIcon height="24px" />
                            </div>
                            <IncreaseIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // HUD Icon + Decrease Icon
            case 'v_weapon_bombing_hud_range_decrease':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center '>
                            <div className='self-center outline-primary '>
                                <HUDIcon height="24px" />
                            </div>
                            <DecreaseIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // HUD Icon + Reset Icon
            case 'v_weapon_bombing_hud_range_reset':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center '>
                            <div className='self-center outline-primary '>
                                <HUDIcon height="24px" />
                            </div>
                            <ResetIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
    // HUD Icon + Generic Settings Icon
    case 'spectate_toggle_hud':
        return (
            <div className='flex flex-row '>
                <div className='mr-[3px] self-center'>
                    <ArrowRightIcon width="20px" />
                </div>
                <div className='flex flex-row gap-[5px]  self-center '>
                    <div className='self-center outline-primary '>
                        <HUDIcon height="24px" />
                    </div>
                    <GenericSettingIcon width="22px" className='self-center ' />

                </div>
            </div>
        )
            // Lead PIP Icon + Lag PIP Icon
            case "v_weapon_pip_toggle_lead_lag":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <LeadPIPIcon width="25px" className='self-center ' />
                            <CycleIcon width="25px"></CycleIcon>
                            <LagPIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Lead PIP Icon
            case "v_weapon_pip_set_lead":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <LeadPIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Lag PIP Icon
            case "v_weapon_pip_set_lag":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <LagPIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )

            // Targeting Icon + Generic Settings Icon
            case "v_weapon_bombing_toggle_desired_impact_point":
            case "v_weapon_bombing_toggle_desired_impact_point_hold":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <TargetingIcon width="25px" className='self-center ' />
                            <GenericSettingIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Next Icon
            case "v_weapon_cycle_missile_fwd":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <NextIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
                    // Next Icon + Generic Settings Icon
                case "spectate_gen_nextmode":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <NextIcon width="25px" className='self-center ' />
                            <GenericSettingIcon width="23px" className='self-center ' />

                        </div>
                    </div>
                )
                       // Previous Icon + Generic Settings Icon
                       case "spectate_gen_prevmode":

                       return (
                           <div className='flex flex-row '>
                               <div className='mr-[3px] self-center'>
                                   <ArrowRightIcon width="20px" />
                               </div>
                               <div className='flex flex-row gap-[3px]  self-center'>
       
                                   <PreviousIcon width="25px" className='self-center ' />
                                   <GenericSettingIcon width="23px" className='self-center ' />
       
                               </div>
                           </div>
                       )
                          // Next Icon + Target Icon
                          case "spectate_next_target":

                          return (
                              <div className='flex flex-row '>
                                  <div className='mr-[3px] self-center'>
                                      <ArrowRightIcon width="20px" />
                                  </div>
                                  <div className='flex flex-row gap-[3px]  self-center'>
          
                                      <NextIcon width="25px" className='self-center ' />
                                      <TargetingIcon width="26px" className='self-center ' />
          
                                  </div>
                              </div>
                          )
                        // Previous Icon + Target Icon
                        case "spectate_prev_target":

                        return (
                            <div className='flex flex-row '>
                                <div className='mr-[3px] self-center'>
                                    <ArrowRightIcon width="20px" />
                                </div>
                                <div className='flex flex-row gap-[3px]  self-center'>
        
                                    <PreviousIcon width="25px" className='self-center ' />
                                    <TargetingIcon width="26px" className='self-center ' />
        
                                </div>
                            </div>
                        )
                        
            // Previous Icon
            case "v_weapon_cycle_missile_back":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PreviousIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Bottom Icon + Increase Icon
            case "v_shield_raise_level_back":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldBottomIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Front Icon + Increase Icon
            case "v_shield_raise_level_forward":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldTopIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Right Icon + Increase Icon
            case "v_shield_raise_level_right":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldRightIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Top Icon + Increase Icon
            case "v_shield_raise_level_up":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <TopIcon width="23px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Top Icon + Increase Icon
            case "v_shield_raise_level_down":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <BottomIcon width="23px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Left Icon + Increase Icon
            case "v_shield_raise_level_left":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldLeftIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Noise Icon
            case "v_weapon_countermeasure_noise_launch":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <NoiseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon
            case "v_weapon_countermeasure_decoy_launch":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon + Increase Icon
            case "v_weapon_countermeasure_decoy_burst_increase":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon + Decrease Icon
            case "v_weapon_countermeasure_decoy_burst_decrease":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />
                            <DecreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon + Warning Icon
            case "v_weapon_countermeasure_decoy_launch_panic":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />
                            <WarningIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon 
            case "v_power_toggle_thrusters":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Decrease Icon
            case "v_capacitor_assignment_engine_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <DecreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Decrease Icon + Set Min Icon
            case "v_capacitor_assignment_engine_combined_decrease_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <DecreaseIcon width="25px" className='self-center ' />

                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Increase Icon
            case "v_capacitor_assignment_engine_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <IncreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Increase Icon + Set Max Icon
            case "v_capacitor_assignment_engine_combined_increase_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <IncreaseIcon width="25px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Set Max Icon
            case "v_capacitor_assignment_engine_max":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Set Min Icon
            case "v_capacitor_assignment_engine_min":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Decrease Icon
            case "v_capacitor_assignment_shield_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Decrease Icon + Set Min Icon
            case "v_capacitor_assignment_shield_combined_decrease_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Increase Icon
            case "v_capacitor_assignment_shield_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Increase Icon + Set Max Icon
            case "v_capacitor_assignment_shield_combined_increase_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Set Max Icon
            case "v_capacitor_assignment_shield_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Set Min Icon
            case "v_capacitor_assignment_shield_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon 
            case "v_power_toggle_shields":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon 
            case "v_power_toggle_weapons":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Increase Icon
            case "v_capacitor_assignment_weapon_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Increase Icon + Set Max Icon
            case "v_capacitor_assignment_weapon_combined_increase_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Decrease Icon
            case "v_capacitor_assignment_weapon_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Decrease Icon  + Set Min Icon
            case "v_capacitor_assignment_weapon_combined_decrease_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Set Max Icon
            case "v_capacitor_assignment_weapon_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Set Min Icon
            case "v_capacitor_assignment_weapon_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  
            case "v_power_set_on":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            case "v_power_set_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Shield Icon
            case "v_power_set_shields_on":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <ShieldIcon width="28px" className='self-center ' />

                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power Off Icon  + Shield Icon
            case "v_power_set_shields_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <ShieldIcon width="28px" className='self-center ' />

                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power Off Icon  + Thruster Icon
            case "v_power_set_thrusters_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <EngineIcon width="28px" className='self-center ' />

                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Thruster Icon
            case "v_power_set_thrusters_on":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <EngineIcon width="28px" className='self-center ' />

                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Weapons Icon
            case "v_power_set_weapons_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="28px" className='self-center ' />
                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Weapons Icon
            case "v_power_set_weapons_on":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WeaponsIcon width="28px" className='self-center ' />
                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Scoreboard Icon 
            case "v_hud_open_scoreboard":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <ScoreboardIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Wipe Icon 
            case "visor_wipe":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>

                            <WipeIcon height="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Ladder Icon + Cycle Icon
            case "v_cycle_pitch_ladder_mode":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <CycleIcon height="26px" className='self-center ' />

                            <LadderIcon height="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Lock Icon + LeftRight Icon
            case "v_lock_rotation":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <LockIcon height="26px" className='self-center ' />

                            <UpDownIcon height="24px" className='self-center ' />
                            <LeftRightIcon height="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Brake Icon 
            case "v_brake":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <BrakeIcon height="25px" className='self-center ' />


                        </div>
                    </div>
                )
                  // Rotate Icon + UpDown Icon
            case "spectate_rotatepitch":
                case "spectate_rotatepitch_mouse":

            return (
                <div className='flex flex-row '>
                    <div className='mr-[3px] self-center'>
                        <ArrowRightIcon width="20px" />
                    </div>
                    <div className='flex flex-row gap-[5px]  self-center'>
                        <RotateIcon width="26px" height='26px' className='self-center ' />
                        <UpDownIcon height="24px" className='self-center ' />


                    </div>
                </div>
            )
                    // Rotate Icon + LeftRight Icon
                    case "spectate_rotateyaw":
                        case "spectate_rotateyaw_mouse":
        
                    return (
                        <div className='flex flex-row '>
                            <div className='mr-[3px] self-center'>
                                <ArrowRightIcon width="20px" />
                            </div>
                            <div className='flex flex-row gap-[5px]  self-center'>
                                <RotateIcon width="26px" height='26px' className='self-center ' />
                                <LeftRightIcon height="24px" className='self-center ' />
        
        
                            </div>
                        </div>
                    )
            default:
                return (

                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <GenericSettingIcon height="24px" className='self-center' />

                        </div>
                    </div>
                )
                break;
        }
    }
    const getCategoryIcon = (node) => {
        if (Object.hasOwn(node, 'children')) {
            return;
        }
        if (node.data.category === 'Electronic Access / Spectator') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <EyeIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === "Lights") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mx-[0px]'>
                        <FlashlightIcon width='30px' />
                    </div>

                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === "Ground Vehicle / General" || node.data.category === "Ground Vehicle / Movement") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mx-[3px]'>
                        <GroundVehicleIcon width='24px' />
                    </div>

                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === "Stopwatch") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mx-[0px]'>
                        <StopwatchIcon width='27px' />
                    </div>

                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Flight / Power') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mr-[3px] '>
                        <PowerButtonIcon width='28px' />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Flight / HUD') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mr-[3px] outline-primary '>
                        <HUDIcon height='24px' />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Power Triangle Assignment') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[27px] self-center mr-[3px] '>
                        <PowerTriangleIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Shields and Countermeasures') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <ShieldAltIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
      
        if (node.data.actionmapName === "spaceship_targeting_advanced") {
            switch (node.key) {
                // TargetingFriendly Icon
                case "v_target_cycle_friendly_back":
                case "v_target_cycle_friendly_fwd":
                case "v_target_cycle_friendly_reset":
                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>

                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='flex flex-row gap-[3px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconFriendly />
                                </div>
                                {getGameActionIcon(node)}
                            </div>

                        </div>
                    )
                case "v_target_cycle_all_back":
                case "v_target_cycle_all_fwd":
                case "v_target_cycle_all_reset":
                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>


                            <div className='flex flex-row gap-[3px]'>

                                {getGameActionIcon(node)}
                            </div>

                        </div>
                    )
                // TargetingHostile Icon
                case "v_target_cycle_attacker_back":
                case "v_target_cycle_attacker_fwd":
                case "v_target_cycle_attacker_reset":

                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>
                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>

                            <div className='flex flex-row gap-[3px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconAttacker />
                                </div>
                                {getGameActionIcon(node)}
                            </div>
                        </div>
                    )
                // TargetingHostile Icon
                case "v_target_cycle_hostile_back":
                case "v_target_cycle_hostile_fwd":
                case "v_target_cycle_hostile_reset":

                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>

                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>

                            <div className='flex flex-row gap-[3px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconHostile />
                                </div>
                                {getGameActionIcon(node)}
                            </div>
                        </div>
                    )
                case "v_target_cycle_in_view_back":
                case "v_target_cycle_in_view_fwd":
                case "v_target_cycle_in_view_reset":

                    return (

                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center '>
                                <TargetingIcon />
                            </div>
                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='w-[26px] self-center mr-[3px]'>
                                <TargetingIconView />
                            </div>
                            <div className='flex flex-row gap-[5px]'>
                                <div className='flex self-center content-center align-middle'>
                                    {getGameActionIcon(node)}
                                </div>
                            </div>
                        </div>
                    )
                case "v_target_cycle_pinned_back":
                case "v_target_cycle_pinned_fwd":
                case "v_target_cycle_pinned_reset":
                    return (

                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center '>
                                <TargetingIcon />
                            </div>
                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='w-[22px] self-center mr-[3px]'>
                                <GenericSettingIcon />
                            </div>
                            <div className='flex flex-row gap-[5px]'>
                                <div className='flex self-center content-center align-middle'>
                                    {getGameActionIcon(node)}
                                </div>
                            </div>
                        </div>
                    )
                case "v_target_cycle_subitem_back":
                case "v_target_cycle_subitem_fwd":
                case "v_target_cycle_subitem_reset":
                    return (

                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center '>
                                <TargetingIcon />
                            </div>
                            <div className='w-[26px] self-center mx-[3px]'>
                                <GenericSettingIcon />
                            </div>
                            <div className='flex flex-row gap-[5px]'>
                                <div className='flex self-center content-center align-middle'>
                                    {getGameActionIcon(node)}
                                </div>
                            </div>
                        </div>
                    )
                default:
                    break;
            }
        }

        if (node.data.actionmapName === "spaceship_targeting") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[26px] self-center mx-[3px]'>
                        <TargetingIcon />
                    </div>

                    <div className='w-[26px] self-center mx-[5px]'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }

        if (node.data.category === "Vehicles / Missiles") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[24px] self-center mx-[3px]'>
                        <MissileIcon />
                    </div>

                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.actionmapName === 'spaceship_docking') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mx-[3px]'>
                        <DockingIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.category === 'Vehicles / Salvage') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <SalvageIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }

        if (node.data.category === 'Vehicles / Salvage / Nudging') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center '>
                        <SalvageIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[px]'>
                        <NudgeIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.category === 'Vehicles / Salvage / Tractor Beam') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center '>
                        <SalvageIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center '>
                        <TractorBeamIcon />
                    </div>

                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle mx-[3px]'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Salvage / Disintegration Beam') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center '>
                        <SalvageIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[3px]'>
                        <DisintegrateIcon />
                    </div>

                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.actionmapName === 'turret_movement' || node.data.actionmapName === 'turret_advanced') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mx-[3px]'>
                        <TurretIcon />
                    </div>

                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Weapons') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <WeaponsIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.actionmapName === "spaceship_mining") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mx-[3px]'>
                        <MiningIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='flex flex-row gap-[5px]'>


                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }


        if (node.data.actionmapName === "spaceship_radar"
            ||
            node.data.actionmapName === "spaceship_scanning") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[26px] self-center '>
                        <ScanningIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>

                    {getGameActionIcon(node)}
                </div>
            )
        }
        // if (node.data.actionmapName === "spaceship_targeting_advanced") {
        //     return (<div className=' flex flex-row mr-[5px]'>
        //         {getActionTypeIcon.getIcon('vehicles')}

        //         <div className='w-[20px] self-center '>
        //             <ArrowRightIcon />
        //         </div>
        //         <div className='w-[26px] self-center mx-[3px]'>
        //             <TargetingIcon />
        //         </div>
        //         {getGameActionIcon(node)}

        //     </div>
        //     )
        // }
        if (node.data.actionmapName === "spaceship_target_hailing") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    {getGameActionIcon(node)}

                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[3px]'>
                        <TargetingIcon />
                    </div>
                </div>
            )
        }
        if (node.data.actionmapName === "spaceship_view") {
            return (<div className=' flex flex-row mr-[5px]'>
                {getActionTypeIcon.getIcon('vehicles')}

                {/* <div className='w-[20px] self-center mx-[3px]'>
                    <ArrowRightIcon />
                </div> */}
                <div className='w-[25px] self-center mx-[3px]'>
                    <CameraIcon />
                </div>
                <div className='w-[20px] self-center mx-[3px]'>
                    <ArrowRightIcon />
                </div>
                <div className=' self-center mx-[3px]'>
                    {getGameActionIcon(node)}

                </div>

            </div>
            )
        }
        if (node.data.category === "Flight / Movement / Maneuvering") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[25px] self-center mx-[0px]'>
                        <MoveIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className=' self-center mx-[0px]'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === "Flight / Movement / Limiters") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[25px] self-center mx-[0px]'>
                        <MoveIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[28px] self-center mx-[0px]'>
                        <SpeedometerIcon />
                    </div>
                </div>
            )
        }
        switch (node.data.category) {
            // Seat Icon
            case "Flight / Movement":
            case "Flight / Quantum Travel":

                return (
                    <div className=' flex flex-row mr-[5px]'>
                        <div className=' flex flex-row mr-[5px]'>
                            <div className='flex flex-row gap-[3px]'>
                                {getActionTypeIcon.getIcon('spaceship')}
                                <div className='w-[20px] self-center mx-[0px]'>
                                    <ArrowRightIcon />
                                </div>
                                {/* <div className='w-[25px]'> <MoveIcon /></div> */}
                            </div>

                        </div>
                        {getGameActionIcon(node)}
                    </div>
                )
            case "asdasd":
                return (
                    <div className=' flex flex-row mr-[5px]'>
                        <div className=' flex flex-row mr-[5px]'>
                            <div className='flex flex-row gap-[3px]'>
                                <div className='w-[25px]'> <MoveIcon /></div>

                                <div className='w-[20px] self-center mx-[0px]'>
                                    <ArrowRightIcon />
                                </div>
                            </div>

                        </div>
                        {getGameActionIcon(node)}
                    </div>
                )
            // Seat Icon
            case "Vehicles / Seats & Operator Modes":
                return (
                    <div className=' flex flex-row mr-[5px]'>
                        {getActionTypeIcon.getIcon('vehicles')}

                        <div className='w-[24px] self-center ml-[2px]'>
                            <SeatIcon />
                        </div>
                        <div className='w-[20px] self-center mx-[0px]'>
                            <ArrowRightIcon />
                        </div>
                        <div className='w-[24px] self-center ml-[2px]'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                )



            // Spaceship Icon + Ground Vehicle Icon
            case "Vehicles / Cockpit":
            case "Vehicles / View":
                return (

                    <div className=' flex flex-row mr-[5px] '>
                        {getActionTypeIcon.getIcon('vehicles')}
                        <div className='w-[25px] self-center '>
                            <SeatIcon />
                        </div>
                        <div className='w-[20px] self-center mx-[3px]'>
                            <ArrowRightIcon />
                        </div>
                        {getGameActionIcon(node)}
                    </div>
                )

            default:
                break;
        }
    }

    const nodeTemplate = (node, options) => {
        let label = <p>{node.label}</p>;

        // check if node is category with child array of game actions
        if (Object.hasOwn(node, 'children')) {
            label = <></>
        }

        return <span className={options.className}>
            <div className='flex flex-row'>

                {getCategoryIcon(node)}

                {label}

            </div>
        </span>;
    }

    return (
        <div className="card flex justify-content-center">
            <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={({ hide }) => (
                    <div className="panel flex flex-wrap justify-content-center gap-[5px] w-[100%] bg-striped">
                        <Tree
                            togglerTemplate={togglerTemplate}
                            selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)}
                            nodeTemplate={nodeTemplate} value={nodes} filter filterBy='label' filterMode="strict" filterPlaceholder="Lenient Filter" className="w-[1000px] md:w-30rem" />
                    </div>
                )}
            ></Dialog>
        </div>
    )
}