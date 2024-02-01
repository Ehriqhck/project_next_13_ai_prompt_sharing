
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
// import { NodeService } from './service/NodeService';
import { GameActions } from './GameActions';
import { Tree } from 'primereact/tree';
import { classNames } from 'primereact/utils';
import SeatIcon from '@public/assets/icons/actions/gameCategory/SeatIcon'
import ArrowRightIcon from '@public/assets/icons/actions/gameCategory/ArrowRightIcon'
import GenericSettingIcon from '@public/assets/icons/actions/gameCategory/GenericSettingIcon'
import QuantumIcon from '@public/assets/icons/actions/gameCategory/QuantumIcon'
import SalvageIcon from '@public/assets/icons/actions/gameCategory/SalvageIcon'
import ScanningIcon from '@public/assets/icons/actions/gameCategory/ScanningIcon'
import MiningIcon from '@public/assets/icons/actions/gameCategory/MiningIcon'
import CameraIcon from '@public/assets/icons/actions/gameCategory/CameraIcon'
import WarningIcon from '@public/assets/icons/actions/gameCategory/WarningIcon'
import SpaceshipIcon from '@public/assets/icons/actions/gameCategory/SpaceshipIcon'
import KeyIcon from '@public/assets/icons/actions/gameCategory/KeyIcon'
import GroundVehicleIcon from '@public/assets/icons/actions/gameCategory/GroundVehicleIcon'
import PlusIcon from '@public/assets/icons/actions/gameCategory/PlusIcon'
import MoveIcon from '@public/assets/icons/actions/gameCategory/MoveIcon'
import LandingIcon from '@public/assets/icons/actions/gameCategory/LandingIcon'
import SpeedometerIcon from '@public/assets/icons/actions/gameCategory/SpeedometerIcon'
import WifiIcon from '@public/assets/icons/actions/gameCategory/WifiIcon'
import TurretIcon from '@public/assets/icons/actions/gameCategory/TurretIcon'
import TargetingIcon from '@public/assets/icons/actions/gameCategory/TargetingIcon'
import TargetingIconHostile from '@public/assets/icons/actions/gameCategory/TargetingIconHostile'
import TargetingIconFriendly from '@public/assets/icons/actions/gameCategory/TargetingIconFriendly'
import TargetingIconAttacker from '@public/assets/icons/actions/gameCategory/TargetingIconAttacker'
import ResetIcon from '@public/assets/icons/actions/gameCategory/ResetIcon'
import CycleIcon from '@public/assets/icons/actions/gameCategory/CycleIcon'
import TargetingIconView from '@public/assets/icons/actions/gameCategory/TargetingIconView'

export default function FilterDemo() {
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
        switch (node.key) {


            // Seat Icon
            case "":
                return (<div className='w-[25px]'> <SeatIcon /></div>)
            // Spaceship Icon + Ground Vehicle
            case "spaceship_general":
            case "spaceship_view":
            case "seat_general":
            case "spaceship_targeting_advanced":
                return (
                    <div className='flex flex-row gap-[5px]'>
                        <div className='w-[25px]'> <SpaceshipIcon /></div>
                        {/* <div className='w-[20px]'> <PlusIcon /></div> */}

                        <div className='w-[25px]'> <GroundVehicleIcon /></div>
                    </div>
                )
            // Spaceship Icon
            case "spaceship_general":
            case "spaceship_movement":
            case "spaceship_quantum":
            case "spaceship_targeting_advanced":
            case "spaceship_targeting":
            case "spaceship_target_hailing":
            case "spaceship_radar":
            case "spaceship_mining":
            case "spaceship_target_hailing":
            case "spaceship_salvage":
            case "spaceship_docking":
            case "spaceship_salvage":

                return (
                    <div className='w-[25px]'>
                        <SpaceshipIcon />
                    </div>
                )

            // Move Icon
            case "spaceship_movement-maneuvering":
                return (
                    <div className=' flex flex-row mr-[5px]'>
                        <div className='flex flex-row gap-[5px]'>
                            <div className='w-[25px]'> <SpaceshipIcon /></div>
                            <div className='w-[20px] self-center mx-[0px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='w-[25px]'> <MoveIcon /></div>
                        </div>
                        {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    </div>
                )

            // Speedometer Icon
            case "spaceship_movement-limiters":
                return (
                    <div className=' flex flex-row mr-[5px]'>
                        <div className='flex flex-row gap-[5px]'>
                            <div className='w-[25px]'> <SpaceshipIcon /></div>
                            <div className='w-[20px] self-center mx-[0px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='w-[25px]'> <SpeedometerIcon /></div>
                        </div>
                        {/* <div className='w-[20px] self-center mx-[3px]'>
            <ArrowRightIcon />
        </div> */}
                    </div>
                )
            default:
                break;
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
                return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z" fill="currentColor" /><path d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z" fill="currentColor" /></svg>)
            } else {
                return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.567 8.02947L20.9105 1.76929L22.3153 3.19282L15.9916 9.43352L19.5614 9.44772L19.5534 11.4477L12.5535 11.4199L12.5813 4.41992L14.5813 4.42788L14.567 8.02947Z" fill="currentColor" /><path d="M7.97879 14.5429L4.40886 14.5457L4.40729 12.5457L11.4073 12.5402L11.4128 19.5402L9.41277 19.5417L9.40995 15.9402L3.09623 22.2306L1.68463 20.8138L7.97879 14.5429Z" fill="currentColor" /></svg>)
            }

        }

        return (
            <button type="button" className="justify-center  p-tree-toggler flex flex-col  gap-[0px] pl-[2px]  " tabIndex={-1} onClick={options.onClick}>
                <div className='flex flex-row content-start justify-center self-start gap-[5px] '>
                    {/* <span className='' aria-hidden="true"> {toggleIcon(expanded)}</span> */}
                    {/* <p className=' pt-[16px]'>/d</p> */}
                    <span className='' aria-hidden="true"> {getHeaderIcon(node)}</span>

                    <span className='self-center justify-center '>{label}</span>
                    {expanded}
                </div>
                <div className='self-start pl-[32px] flex flex-row'>
                    <svg fill="#00f7ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px"><path d="M 3 2 L 3 9.5 C 3 10.324219 3.675781 11 4.5 11 L 12.203125 11 L 10.015625 13.28125 L 10.734375 13.96875 L 14.066406 10.5 L 10.734375 7.03125 L 10.015625 7.71875 L 12.203125 10 L 4.5 10 C 4.21875 10 4 9.78125 4 9.5 L 4 2 Z" /></svg>
                    {/* {Object.keys(node.children).length} */}
                </div>
            </button>
        );
    };

    const getGameActionIcon = (node) => {
        switch (node.key) {

            // Targeting Reset Icon
            case "v_target_cycle_friendly_reset":
            case "v_target_cycle_attacker_reset":
            case "v_target_cycle_hostile_reset":

                return (
                    <div className='w-[26px] self-center'>
                        <ResetIcon />
                    </div>
                )

            // Targeting Forward Icon
            // case "v_target_cycle_hostile_fwd":
            // case "v_target_cycle_friendly_fwd":
            // case "v_target_cycle_attacker_fwd":

            //     return (
            //         <div className='w-[26px] self-center'>
            //             <TargetingIconHostile />
            //         </div>
            //     )
            // Targeting Back Icon
            // case "v_target_cycle_hostile_back":
            // case "v_target_cycle_attacker_back":
            // case "v_target_cycle_friendly_back":


            //     return (
            //         <div className='w-[26px] self-center'>
            //             <TargetingIconHostile />
            //         </div>
            //     )
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
        if (node.data.actionmapName === "spaceship_targeting_advanced") {
            switch (node.key) {
                // TargetingFriendly Icon
                case "v_target_cycle_friendly_back":
                case "v_target_cycle_friendly_fwd":
                case "v_target_cycle_friendly_reset":
                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            <div className='flex flex-row gap-[5px]'>
                                <div className='w-[25px]'> <SpaceshipIcon /></div>
                                <div className='w-[25px]'> <GroundVehicleIcon /></div>
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
                            <div className='flex flex-row gap-[5px]'>
                                <div className='w-[25px]'> <SpaceshipIcon /></div>
                                <div className='flex flex-row gap-[5px]'>
                                    <div className='w-[25px]'> <GroundVehicleIcon /></div>
                                </div>
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
                            <div className='flex flex-row gap-[5px]'>
                                <div className='w-[25px]'> <SpaceshipIcon /></div>
                                <div className='flex flex-row gap-[5px]'>
                                    <div className='w-[25px]'> <GroundVehicleIcon /></div>
                                </div>
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
                            <div className='flex flex-row gap-[5px]'>
                                <div className='w-[25px]'> <SpaceshipIcon /></div>
                                <div className='flex flex-row gap-[5px]'>
                                    <div className='w-[25px]'> <GroundVehicleIcon /></div>
                                </div>
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
                    <div className='flex flex-row gap-[5px]'>
                        <div className='w-[25px]'> <SpaceshipIcon /></div>
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[3px]'>
                        <TargetingIcon />
                    </div>
                    {getGameActionIcon(node)}
                </div>
            )
        }
        if (node.data.actionmapName === "spaceship_targeting_advanced") {
            return (<div className=' flex flex-row mr-[5px]'>
                <div className='flex flex-row gap-[5px]'>
                    <div className='w-[25px]'> <SpaceshipIcon /></div>
                    <div className='w-[25px]'> <GroundVehicleIcon /></div>

                </div>
                <div className='w-[20px] self-center mx-[3px]'>
                    <ArrowRightIcon />
                </div>
                <div className='w-[26px] self-center mx-[3px]'>
                    <TargetingIcon />
                </div>
                {getGameActionIcon(node)}

            </div>
            )
        }
        if (node.data.actionmapName === "spaceship_view") {
            return (<div className=' flex flex-row mr-[5px]'>
                <div className='flex flex-row gap-[5px]'>
                    <div className='w-[25px]'> <SpaceshipIcon /></div>

                    <div className='w-[25px]'> <GroundVehicleIcon /></div>
                </div>
                <div className='w-[20px] self-center mx-[3px]'>
                    <ArrowRightIcon />
                </div>
                <div className='w-[25px] self-center mx-[3px]'>
                    <CameraIcon />
                </div>            </div>
            )
        }
        if (node.data.category === "Flight / Movement / Maneuvering") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    <div className='flex flex-row gap-[5px]'>
                        <div className='w-[25px]'> <SpaceshipIcon /></div>

                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[25px] self-center mx-[0px]'>
                        <MoveIcon />
                    </div>
                </div>
            )
        }
        if (node.data.category === "Flight / Movement / Limiters") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    <div className='flex flex-row gap-[5px]'>
                        <div className='w-[25px]'> <SpaceshipIcon /></div>

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
                                <div className='w-[25px] self-center'> <SpaceshipIcon /></div>
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
                        <div className='w-[25px] self-center'>  <SeatIcon /> </div>
                        <div className='w-[20px] self-center mr-[3px]'>  <ArrowRightIcon /> </div>

                        {/* <div className='w-[24px] self-center ml-[2px]'>   <GenericSettingIcon /> </div> */}

                        {getGameActionIcon(node)}
                    </div>
                )

            // Spaceship Icon
            case "spaceshipd_general":
            case "spaceship_dgeneral":
                return (
                    <div className=' flex flex-row mr-[5px]'>
                        <div className='w-[25px] self-center'>  <SpaceshipIcon /> </div>
                        <div className='w-[20px] self-center mr-[3px]'>  <ArrowRightIcon /> </div>
                        {getGameActionIcon(node)}
                    </div>
                )

            // Spaceship Icon + Ground Vehicle Icon
            case "Vehicles / Cockpit":
            case "Vehicles / View":
                return (

                    <div className=' flex flex-row mr-[5px]'>
                        <div className='flex flex-row gap-[5px]'>
                            <div className='w-[25px]'> <SpaceshipIcon /></div>
                            {/* <div className='w-[20px]'> <PlusIcon /></div> */}

                            <div className='w-[25px]'> <GroundVehicleIcon /></div>
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
        <div className="card flex flex-wrap justify-content-center gap-5">
            <Tree
                togglerTemplate={togglerTemplate}
                selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)}
                nodeTemplate={nodeTemplate} value={nodes} filter filterBy='label' filterMode="strict" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
        </div>


    )
}
