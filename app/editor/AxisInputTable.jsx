import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';
import { ViewerPanelTitleContext, InputViewerInputType, SelectContext, TreeTableDialogueVisibilityContext, SelectedActionContext, TreeTableDialogueSelectionContext, SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext, Context, SelectedInputTableInputContext } from '@components/Provider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Utils } from '@app/editor/utils.js'
import ActionList from '@components/ActionList.jsx'
import IconLegend from '@components/generic/IconLegend';
import { IconField } from 'primereact/iconfield';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputIcon } from 'primereact/inputicon';
import SearchIcon from '@components/generic/Icons/SearchIcon';
import { InputText } from 'primereact/inputtext';
import { SessionDeviceAxisInputs } from './SessionDeviceAxisInputs';
import { Tree } from 'primereact/tree';
import BindIcon from 'public/assets/icons/generic/bind.svg'

const AxisInputTable = () => {
    const [visible, setVisible] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [selectedKey, setSelectedKey] = useState('');
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
    const { treeTableDialogueVisibility, setTreeTableDialogueVisibility } = useContext(TreeTableDialogueVisibilityContext)
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
    const { viewerPanelTitle, setViewerPanelTitle } = useContext(ViewerPanelTitleContext)

    const { profileContext, setprofileContext } = useContext(Context);
    const [selectedInput, setSelectedInput] = useState("CONTEXT INPUT: DEFAULT");
    const { treeTableDialogueSelection, setTreeTableDialogueSelection } = useContext(TreeTableDialogueSelectionContext)
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const { inputViewerInputType, setInputViewerInputType } = useContext(InputViewerInputType)

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true)
    const [axis, setAxis] = useState([{
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }, {
        id: '1020',
        code: 'f230fh0asdg3',
        name: 'Bamboo Watdch',
        description: 'Prodddasuct Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }]);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    useEffect(() => {


        try {
            setIsLoading(true);


            SessionDeviceAxisInputs.getTreeTableNodes().then((data) => {
                sessionStorage.setItem('cache_AxisInputTableData', JSON.stringify(data))
                setNodes(data)
            });


        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);

        }
    }, [isLoading, selectedEditorDevice, profileContext, SelectedEditorDeviceViewOrientationContext, selectedInputTableInput]);


    const renderHeader = () => {
        return (
            <div data-pc-section="searchBar" className="flex justify-content-end ">
                <IconField unstyled iconPosition="left">
                    <InputIcon unstyled className="searchIcon" >
                        <SearchIcon width="16px" height="16px" />
                    </InputIcon >
                    <InputText unstyled value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };
    const header = renderHeader;
    const imageBodyTemplate = (node) => {

        return (
            <button type="AxisDataTable-Button"
                onClick={() => {
                    // const transposeSelection = {
                    //     "key": Object.keys(node)[0],
                    //     "label": node.name,
                    //     "data": { layers: node.layers }
                    // }
                    // console.log(node);
                    // setTreeTableDialogueSelection(transposeSelection)
                    // setTreeTableDialogueSelection(node)

                    // setTreeTableDialogueVisibility(true)
                    console.log(node, "PROBLEM????????");
                }}>
                <Button type="inputTable" className=" flex flex-col   " >

                    <div className='flex flex-col content-start  self-start gap-[8px] w-full pr-[12px] '>
                        <div className='flex flex-row gap-[8px] h-fit'>
                            <div className='corner-inputTableIcons'>
                                {Utils.getInputAxisIcons(node.axisType, "30px", "30px", null, sessionStorage.getItem('selectedEditorDevice')
                                )}
                                {node.axistype}
                            </div>

                            <div className='flex flex-row justify-between  flex-wrap  align-middle w-full  '>
                                <p className='text-inputTable flex self-start'> {node.name} </p>
                                <div className=' flex flex-col text-inputTable '>
                                    {/* {Utils.getIconLegend(node)} */}

                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col ml-[2px]'>

                            <ActionList layers={node.layers} input_direction="inputTable" />

                        </div>
                        {/* <div className="spacer-dialogue" />

            <span className='self-center justify-center '>{label}</span> */}
                        {/* <div className="spacer-dialogue" /> */}
                        {/* {expanded} */}
                    </div>

                </Button>
            </button>
        )
    };
    const getIconLegend = (node) => {
        if (Object.hasOwn(node, "children")) {
            const getChildrenBinded = (children) => {

                let index = 0;
                const bindNum = children.forEach(child => {
                    try {
                        if (child.data.layers[0] !== undefined) {
                            index += 1;

                        }
                    } catch (error) {
                        console.log(error);


                    }

                }
                );
                return (index);

            }
            return (
                <div className='flex flex-row gap-[12px] h-fit'>

                    <div className='flex flex-row gap-[5px]'>
                        <p className='text-legend-heading flex self-center mb-[-3px] '>  BINDS: </p>
                        <div className='flex flex-row gap-[3px] content-center'>
                            <BindIcon className='self-center w-[17px] h-[17px]' />
                            <p className='text-legend self-center'>
                                {getChildrenBinded(node.children)} / {Object.keys(node.children).length}
                            </p>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='flex flex-row gap-[12px] h-fit'>
                    {/* <div className='flex flex-row gap-[3px] '>
                    <p className='mb-[-3px] text-legend-heading flex self-center leading-[10px]  align-middle  text-center justify-self-center '> AXIS</p>
                    <div className='flex flex-row h-fit gap-[3px] content-center align-center justify-center'>
                        <AxisIcon className='self-center w-[17px] h-[17px] align-center' />
                        <p className=' h-full mb-[-1px] text-legend  align-middle  text-center self-center justify-self-center'>9</p>
                    </div>
                </div> */}
                    <div className='flex flex-row gap-[5px]'>
                        <p className='text-inputTable flex self-center mb-[-3px] '> BINDS</p>
                        <div className='flex flex-row gap-[3px] content-center'>
                            <BindIcon className='self-center w-[17px] h-[17px]' />
                            <p className='text-legend self-center'>

                                {node.data.layers.length}
                            </p>
                        </div>
                    </div>
                </div>
            )

        }
    }


    const togglerTemplate = (node, options) => {

        const updateInputViewer = () => {
            sessionStorage.setItem('selectedEditorDeviceButton', node.label);

            setSelectedViewerInput('Pedals');
            setViewerPanelTitle(node.label);
        }
        const getSlotIcon = (node) => {

            if (!Object.hasOwn(node.data, 'slotName')) {
                return <p className='text-GameAction-Category-Heading'> {node.label} asd</p>;
            } else {
                return (
                    <button >
                        <div className='flex corner-inputTableIcons'>
                            {/* {Utils.getInputAxisIcons(node.data.slotName, "25px", "25px")} */}
                            {Utils.getInputAxisIcons(node.axisType, "30px", "30px", null, sessionStorage.getItem('selectedEditorDevice'))}

                        </div>

                    </button>
                )
            }
        }
        // if node is contains Main_Device_Axis
        // if (node.label === 'Main_Device_Axis') {
        //     sessionStorage.setItem("selectedInputViewerInputType", 'mainDeviceAxis')
        //     setInputViewerInputType('mainDeviceAxis')
        //     console.log('setInputViewerInputType: Main_Device_Axis');
        // }
        const setInputViewerLayout = (toggleNode) => {

            console.log("setInputViewerLayout", toggleNode);
            switch (toggleNode.label) {
                case 'Main_Device_Axis':
                    sessionStorage.setItem("selectedInputViewerInputType", 'Main_Device_Axis')
                    setInputViewerInputType('mainDeviceAxis')
                    console.log('setInputViewerInputType: mainDeviceAxis');

                    setSelectedViewerInput('Main_Device_Axis');
                    setViewerPanelTitle('Main Device Axis');
                    break;

                default:
                    // sessionStorage.setItem("selectedInputViewerInputType", 'axis')
                    // setSelectedViewerInput(toggleNode.label);

                    // setInputViewerInputType('axis')


                    break;
            }

        }

        // if node is a button
        if (!Object.hasOwn(node.data, 'slotName')) {

            return (
                <button onClick={() => {
                    console.log("TOGGLER NODE:", node);

                    setInputViewerLayout(node)
                }}>
                    <Button type="inputTable" className=" flex flex-row w-full  justify-between " tabIndex={-1} onClick={options.onClick} onClickCapture={setInputViewerLayout(node)}>
                        <div className='flex py-[2px] flex-row content-start w-full justify-between pr-[16px] self-start gap-[8px] '>
                            <div className='flex flex-row   h-fit'>
                                <div className='flex corner-inputTableIcons'>
                                    {/* {Utils.getInputAxisIcons(node.data.slotName, "25px", "25px")} */}
                                    {Utils.getInputAxisIcons(node.axisType, "30px", "30px", null, sessionStorage.getItem('selectedEditorDevice'))}

                                </div>
                                <p className='text-legend-heading pl-[8px]'> {node.label} </p>
                            </div>
                            {getIconLegend(node)}


                        </div>
                    </Button>
                </button>
            );
        } else {
            return (

                <></>

            );
        };
    }



    const nodeTemplate = (node, options) => {
        const getSlotIcon = (node) => {

            if (!Object.hasOwn(node.data, 'slotName')) {
                return <p className='text-GameAction-Category-Heading'> {node.label}</p>;
            } else {
                return (
                    <div className='flex corner-inputTableIcons'>
                        {Utils.getInputAxisIcons(node.data.axisType, "25px", "25px")}
                        {/* {node.data.axisType} */}
                    </div>
                )
            }
        }
        // check if node is category with child array of game actions
        if (Object.hasOwn(node.data, 'layers')) {
            // console.log(node);

            return (
                <button onClick={() => {
                    setTreeTableDialogueVisibility(true)
                    setTreeTableDialogueSelection(node)
                    console.log(treeTableDialogueVisibility);

                }}>
                    <Button type="inputTable" className=" flex flex-col   " tabIndex={-1} onClick={options.onClick}>



                        <div className='flex flex-col content-start w-full pr-[16px]  self-start gap-[8px] '>
                            {/* <div className='flex flex-row  h-fit '>
                                {Utils.getInputAxisIcons(node.data.axisType, "30px", "30px", true)} 
                            </div> */}
                            <div className='flex flex-row justify-between w-full'>
                                {/* {getCategoryHeader(node)} */}
                                <div className='flex gap-[8px]'>
                                    {getSlotIcon(node)}
                                    <p className='text-legend-heading'> {node.label} </p>
                                </div>

                                {getIconLegend(node)}


                            </div>
                            <div className='flex flex-col ml-[2px]'>

                                <ActionList layers={node.data.layers} input_direction="inputTable" selectable={false} />

                            </div>
                            {/* <div className="spacer-dialogue" />

            <span className='self-center justify-center '>{label}</span> */}
                            {/* <div className="spacer-dialogue" /> */}
                            {/* {expanded} */}
                        </div>
                    </Button>
                </button>

            )

        } else {
            return <span className={options.className}>
                <div className='flex flex-row'>


                </div>
            </span>;
        }
    }
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
            nodeTemplate={nodeTemplate}
            value={JSON.parse(sessionStorage.getItem('cache_AxisInputTableData'))}
            filter={true} filterBy={'name'} filterValue={searchValue} filterMode='lenient'
            filterPlaceholder='"Pedal Press/Release"'
            className=""
        />
    )
}

export default AxisInputTable