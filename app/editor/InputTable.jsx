"use client";
import Press from '@public/assets/icons/actions/input_press.svg';
import Down from '@public/assets/icons/actions/input_down.svg';
import Up from '@public/assets/icons/actions/input_up.svg';
import Left from '@public/assets/icons/actions/input_left.svg';
import Right from '@public/assets/icons/actions/input_right.svg';
import ActionList from '@components/ActionList';

import React, { useState, useEffect, useContext } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
// import { CustomerService } from './CustomerService';
import { DeviceInputs } from './DeviceInputs';
import { Context, SelectedEditorActionContext, SelectedLayerContext, SelectContext, SelectedEditorActionTableTargetContext } from '@components/Provider';
import SearchIcon from '@components/generic/Icons/SearchIcon.jsx';
import { get } from 'mongoose';
import GameAction from '@components/GameAction.jsx'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import LayerTag from '@components/generic/LayerTag';


export default function CustomersDemo({ onInputSelect }) {
    const { data: session } = useSession();
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext);
    const { selectedEditorInputActions, setSelectedEditorInputActions } = useContext(SelectedEditorActionTableTargetContext)

    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext);
    const { profileContext, setprofileContext } = useContext(Context);

    const [inputs, setInputs] = useState([]);
    const [selectedInputs, setSelectedInputs] = useState([]);
    const [inputActions, setInputActions] = useState(["DEFAULT"]);


    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };



    useEffect(() => {
        // console.log("selectedEditorInput  " + selectedEditorInputActions);
        // const fetchInputActions = async ({ buttonId, inputSlot }) => {
        //     console.log("selectedEditorInput  " + selectedEditorInput);
        //     const response = await fetch("/api/deviceProfiles", {
        //         method: "POST",
        //         body: JSON.stringify({
        //             userId: session?.user.id,
        //         })
        //     });

        //     const data = await response.json();
        //     // console.log("ASLKDJALKSDJLKASDJLKASJD  " + data);
        //     setInputActions(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedEditorInput]?.["top"].layers);
        // };
        // fetchInputActions({ buttonId: selectedEditorInput.button, inputSlot: selectedEditorInput.slot })

        // console.log(JSON.stringify(inputActions));

        DeviceInputs.getCustomersLarge(selectedEditorInputActions).then((data) => setInputs(getInputs(data)));

        // setInputs(test);
    }, [selectedEditorInput, selectedEditorInputActions]); // eslint-disable-line react-hooks/exhaustive-deps

    // console.log(inputs);
    const fetchInputActions = async ({ buttonId, inputSlot }) => {
        console.log("BUTTON ID " + buttonId);
        const response = await fetch("/api/deviceProfiles", {
            method: "POST",
            body: JSON.stringify({
                userId: session?.user.id,
            })
        });

        const data = await response.json();
        // console.log("ASLKDJALKSDJLKASDJLKASJD  " + data);
        setInputActions(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedEditorInput]?.["top"].layers);
    };

    const getInputs = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            // <div className="flex flex-wrap gap-2 justify-content-between align-items-center w-full pl-12px">
            //     {/* <h4 className="m-0"></h4> */}
            //     <span className="p-input-icon-left ">
            //         <i className="pi pi-search" />
            //         <SearchIcon/>
            //         <InputText unstyled= "true" className='color-[#cefcff]' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="START TYPING" />
            //     </span>

            // </div>

            <div className="flex flex-wrap gap-2 justify-content-between align-items-center w-full pl-12px mb-[8px]">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <SearchIcon className="w-[15px] h-auto glow-test"></SearchIcon>
                    <InputText unstyled="true" className='' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="START TYPING" />

                </span>

            </div>
        );
    };

    const getInputIcon = (slot) => {
        switch (slot) {
            case "top":
                return (
                    <Up />
                )
                break;
            case "press":
                return (
                    <Press />
                )
                break;
            case "bottom":
                return (
                    <Down />
                )
                break;
            case "left":
                return (
                    <Left />
                )
                break;
            case "right":
                return (
                    <Right />
                )
                break;
            default:
                break;
        }
    }

    const nameBodyTemplate = (rowData) => {
        useEffect(() => {
          
          const fetchInputActions = async ( buttonId ) => {
            console.log("selectedEditorInput  " + selectedEditorInput);
            const response = await fetch("/api/deviceProfiles", {
                method: "POST",
                body: JSON.stringify({
                    userId: session?.user.id,
                })
            });

            const data = await response.json();
            // console.log("ASLKDJALKSDJLKASDJLKASJD  " + data);
            setInputActions(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedEditorInputActions]?.["top"].layers);
        };
        fetchInputActions()
        }, [])
        
    

        console.log("ROW DATA + + " + rowData.button);
        return (
            <div className='flex flex=row gap-[12px] ml-[4px] '>
                <div className="ui-corners square_contain">
                    <div className='square_contain'>
                        {getInputIcon(rowData?.slot)}
                    </div>
                </div>
                <div className="flex flex-col   self-center  ">
                    <span className="text-list-default align-middle justify-center">{rowData.name.toUpperCase()}</span>
                    {/* <LayerTag layerNumber={rowData.layer} input_direction={'left'} /> */}
                    <ActionList
                    layers={profileContext?.deviceProfiles?.deviceProfiles?.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedEditorInputActions]?.[rowData.slot].layers}
                        // layers={selectedEditorInputActions} input_direction={rowData.slot}

                    />
                    {/* <ActionList
                        layers={async () => {
                            await fetchInputActions(rowData.button);
                        }} /> */}
                    {/* <span className="text-list-sub">{rowData.status}</span> */}
                    {/* <GameAction action_id={rowData.action} input_direction={rowData.slot} layer={rowData.layer} /> */}

                </div>

            </div>
        );
    };

   


   
    const header = renderHeader();

    return (
        <div className="flex w-full flex-col gap-[8px] pb-[8px]">
            <p className='text-base'>// SELECT MODIFIER LAYER (OPTIONAL)</p>

            <DataTable
                onRowSelect={() => {
                    // onRowSelectInput()
                }}
                value={inputs} paginator header={header} rows={3}
                rowClassName={"list-bg"}
                className="w-full"
                paginatorTemplate=""
                dataKey="id" selectionMode="single" selection={selectedInputs}
                onSelectionChange={(e) => {
                    setSelectedInputs(e.value)
                    // console.log("E  KEY: " + e.value.key);
                    setSelectedEditorInput(e.value)
                    // console.log(e.value);
                }}
                filters={filters} filterDisplay="" globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                {/* <Column selectionMode="single" headerStyle={{ width: '1rem' }}> </Column> */}
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ maxWidth: '100px' }} body={nameBodyTemplate} />

            </DataTable>






        </div>
    );
}
