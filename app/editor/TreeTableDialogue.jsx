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

                return (
                    <div className='w-[26px] self-center'>
                        <ResetIcon />
                    </div>
                )

            //   Forward Icon
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

                return (
                    <div className='w-[26px] self-center'>
                        <ForwardIcon />
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
                return (
                    <div className='w-[26px] self-center'>
                        <BackwardIcon />
                    </div>
                )

            // Rightward Icon
            case "v_strafe_right":
            case "v_view_yaw_right":

                return (
                    <div className='w-[26px] self-center'>
                        <RightwardIcon />
                    </div>
                )
            // Leftward Icon
            case "v_strafe_left":
            case "v_view_yaw_left":
                return (
                    <div className='w-[26px] self-center'>
                        <LeftwardIcon />
                    </div>
                )
            // UpDown Icon
            case "v_strafe_vertical":
            case "v_strafe_longitudinal_abs":
            case "v_strafe_longitudinal_abs_rel":
            case "v_strafe_longitudinal_rel":
            case "v_view_pitch":

                // case "v_strafe_longitudinal_invert":

                return (
                    <div className='w-[26px] self-center'>
                        <UpDownIcon />
                    </div>
                )
            // LeftRight Icon
            case "v_strafe_lateral":
            case "v_view_yaw":

                return (
                    <div className='w-[26px] self-center'>
                        <LeftRightIcon />
                    </div>
                )
            // Turbo / Afterburner Icon
            case "v_afterburner":
                return (
                    <div className='w-[26px] self-center'>
                        <TurboIcon />
                    </div>
                )
            // Zoom In Icon
            case "v_view_zoom_in":
            case "v_view_dynamic_zoom_rel_in":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='self-center'>
                            <ZoomInIcon width='24px' />
                        </div>
                        <div className=' h-[24px] self-center'>
                            <IncreaseIcon />
                        </div>


                    </div>
                )
            // Zoom Out Icon
            case "v_view_zoom_out":
            case "v_view_dynamic_zoom_rel_out":

                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='self-center'>
                            <ZoomOutIcon width='24px' />
                        </div>
                        <div className=' h-[24px] self-center'>
                            <DecreaseIcon />
                        </div>

                    </div>
                )
            // Zoom + Settings Icon
            case "v_view_dynamic_zoom_abs_toggle":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='self-center'>
                            <ZoomIcon width='24px' />
                        </div>

                        <div className='w-[24px] self-center'>
                            <GenericSettingIcon />
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
            // Turret Icon
            case "v_enter_remote_turret_1":
            case "v_enter_remote_turret_2":
            case "v_enter_remote_turret_3":

                return (
                    <div className='w-[26px] self-center'>
                        <TurretIcon />
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

                return (
                    <div className='w-[25px] self-center'>
                        <QuantumIcon />
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
            case "v_view_look_behind":
            case "v_dock_toggle_view":

                return (
                    <div className='w-[25px] self-center'>
                        <CameraIcon />
                    </div>
                )

            // Camera Icon  

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
                return (
                    <div className='w-[25px] self-center'>
                        <OneIcon />
                    </div>)


            // Two Icon
            case "v_mining_use_consumable2":
                return (
                    <div className='w-[25px] self-center'>
                        <TwoIcon />
                    </div>)
            // Three Icon
            case "v_mining_use_consumable3":
                return (
                    <div className='w-[25px] self-center'>
                        <ThreeIcon />
                    </div>)
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
                    <div className='flex flex-row gap-[5px] '>
                        <SalvageBeamIcon height="26px" className='self-center' />


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
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <SalvageBeamIcon height="26px" className='self-center' />

                        <IncreaseIcon width="26px" className='self-center' />

                    </div>
                )
            // Laser Icon + Decrease Icon
            case "v_decrease_mining_throttle":
                return (
                    <div className='flex flex-row gap-[5px] '>
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
            // Angle Icon + Decrease Icon
            case "v_dec_scan_focus_level":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <AngleIcon height="26px" className='self-center' />

                        <DecreaseIcon width="26px" className='self-center' />

                    </div>
                )
            // Angle Icon + Increase Icon
            case "v_inc_scan_focus_level":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <AngleIcon height="26px" className='self-center' />

                        <IncreaseIcon width="26px" className='self-center' />

                    </div>
                )

            default:
                return (
                    <div className='w-[25px] self-center'>
                        <GenericSettingIcon />
                    </div>
                )
                break;
        }
    }
    const getCategoryIcon = (node) => {
        if (Object.hasOwn(node, 'children')) {
            return;
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
        if (node.data.category === 'Vehicles / Salvage / Nudging') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mx-[3px]'>
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
                    <div className='w-[26px] self-center mx-[3px]'>
                        <TractorBeamIcon />
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
        if (node.data.category === 'Vehicles / Salvage / Disintegration Beam') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mx-[3px]'>
                        <DisintegrateIcon />
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
                            <div className='flex flex-row gap-[5px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconFriendly />
                                </div>
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

                            <div className='flex flex-row gap-[5px]'>
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

                            <div className='flex flex-row gap-[5px]'>
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
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>

                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='flex flex-row gap-[5px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconView />
                                </div>
                                {getGameActionIcon(node)}
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
                    <div className='w-[20px] self-center '>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[5px]'>
                        {getGameActionIcon(node)}
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
        if (node.data.actionmapName === "spaceship_targeting_advanced") {
            return (<div className=' flex flex-row mr-[5px]'>
                {getActionTypeIcon.getIcon('vehicles')}

                <div className='w-[20px] self-center '>
                    <ArrowRightIcon />
                </div>
                <div className='w-[26px] self-center mx-[3px]'>
                    <TargetingIcon />
                </div>
                {getGameActionIcon(node)}

            </div>
            )
        }
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