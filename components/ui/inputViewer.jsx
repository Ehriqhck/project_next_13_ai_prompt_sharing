"use client";

import React from 'react'
import Hat from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/Hat.jsx';
import Up from '@components/inputs/Up';
import Left from '@components/inputs/Left';
import Right from '@components/inputs/Right';
import { useContext, useState, useEffect } from 'react';
import { Context, SelectContext, SelectedEditorActionContext, ActionUpdateContext } from '@components/Provider.jsx'
import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.jsx';
import Press from '@components/inputs/Press';
import Down from '@components/inputs/Down';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import PillSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/PillSwitch.jsx'
import RedButton from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/RedButton.jsx'
import ChipSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/ChipSwitch.jsx'
import { Utils } from '@app/editor/utils.js'

import PanelSwitchButtonMobile from '@app/editor/PanelSwitchButtonMobile';
const InputViewer = ({ selectedButton }) => {
    const { data: session } = useSession();
    const userId = { id: session?.user.id };
    console.log("USER ID: " + userId.id);
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext);
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext)
    const { actionUpdate, setActionUpdate } = useContext(ActionUpdateContext)
    const { profileContext, setprofileContext } = useContext(Context);


    const [top, setTop] = useState();
    const [bottom, setbottom] = useState();
    const [left, setLeft] = useState();
    const [right, setRight] = useState();

    const [press, setPress] = useState();

    console.log("Selected BUTTON: " + selectedButton);
    const sessionProfiles = JSON.parse(sessionStorage.getItem('selectedProfile'))

    useEffect(() => {
        console.log("/EDITOR :" + profileContext);
        console.log(profileContext);

        // setTop(profileContext?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["top"]);
        // setbottom(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["bottom"]);
        // setLeft(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["left"]);
        // setRight(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["right"]);
        // setPress(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["press"]);
        getDeviceProfiles()
    }, [selectedViewerInput, selectedEditorInput, profileContext])

    // const ButtonName = profileContext.deviceProfiles.saved["VKB_GLADIATOR_EVO"].profileName;

    // const fetchDeviceProfiles = async () => {
    //     console.log("FETCHED DEVICEPROFILES BEFORE: ");

    //     const response = await fetch("/api/deviceProfiles", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             userId: session?.user.id,
    //         })
    //     });

    //     const data = await response.json();

    //     setTop(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["top"]);
    //     setbottom(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["bottom"]);
    //     setLeft(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["left"]);
    //     setRight(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["right"]);
    //     setPress(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["press"]);
    //     console.log(data);
    //     // setprofileContext(data);
    //     // console.log("PARSED & STRINGED RESPONSE: " + JSON.parse(JSON.stringify(data[0].deviceProfiles.deviceProfiles)));
    //     // console.log("RAW RESPONSE: " + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons[selectedButton]?.["top"]));
    //     // console.log("FETCHED DEVICEPROFILES: " + data);


    // };

    const getDeviceProfiles = () => {

        console.log("FETCHED DEVICEPROFILES BEFORE: ");
        console.log(sessionProfiles);

        setTop(sessionProfiles?.deviceList["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["top"]);
        setbottom(sessionProfiles?.deviceList["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["bottom"]);
        setRight(sessionProfiles?.deviceList["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["right"]);
        setPress(sessionProfiles?.deviceList["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["press"]);
        setLeft(sessionProfiles?.deviceList["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["left"]);

        // setbottom(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["bottom"]);
        // setLeft(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["left"]);
        // setRight(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["right"]);
        // setPress(data?.deviceProfiles?.TEST_PROFILE_1?.savedDevices["VKB_GLADIATOR_EVO"]?.buttons[selectedViewerInput]?.["press"]);
        // console.log(profileContext);
        // setprofileContext(data);
        // console.log("PARSED & STRINGED RESPONSE: " + JSON.parse(JSON.stringify(data[0].deviceProfiles.deviceProfiles)));
        // console.log("RAW RESPONSE: " + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons[selectedButton]?.["top"]));
        // console.log("FETCHED DEVICEPROFILES: " + data);


    };



    const getInputTop = (input) => {
        //check if slot is undefined 
        // console.log("getInputTop !!!!!!!!!!!" + JSON.stringify(input));
        // console.log(" !!!!!!!!!!!" + input);

        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Up layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            // console.log("TOP SLOT: UNDEFINED");
            return (<></>)

        }
    }

    const getInputLeft = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Left layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            // console.log("LEFT SLOT: UNDEFINED");
            return (<></>)

        }
    }

    const getInputRight = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Right layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            // console.log("RIGHT SLOT: UNDEFINED");
            return (<></>)

        }

    }

    const getInputPress = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Press layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("PRESS SLOT: UNDEFINED");

            return (<></>)
        }
    }

    const getInputBottom = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("BOTTOM SLOT: " + input.layers['base']);
            return (<Down layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("PRESS SLOT: UNDEFINED");

            return (<></>)
        }
    }
    return (
        <div className='panel-viewer'>
            <PanelSwitchButtonMobile whatPanel='viewer' />

            <div className="test2">

                {getInputTop(top)
                }
                {/* <Up inputName_id={inputName} action_id={action} /> */}
                {/* <Press inputName_id={inputName} action_id={action} /> */}
                <div className='input-down-press'>
                    {getInputPress(press)}
                    {getInputBottom(bottom)}

                </div>
                <div className=' left-center-right'>
                    {/* <Left inputName_id={inputName} action_id={action} /> */}
                    {getInputLeft(left)}

                    <div className='w-[70px]'>{Utils.getInputIcon(selectedViewerInput)} </div>
                    {/* <CircleSwitch className="" /> */}
                    {/* <Hat></Hat> */}
                    {getInputRight(right)}

                    {/* <Right inputName_id={inputName} action_id={action} /> */}

                </div>



            </div>

        </div>)
}

export default InputViewer