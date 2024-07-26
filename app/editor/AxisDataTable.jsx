import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';
import { SelectContext, SelectedActionContext, SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext, Context, SelectedInputTableInputContext } from '@components/Provider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const AxisDataTable = () => {
    const [selectedInput, setSelectedInput] = useState("CONTEXT INPUT: DEFAULT");
    const [selectedAction, setSelectedAction] = useState("CONTEXT ACTION: DEFAULT")
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)

    const { selectedEditorDevice, setselectedEditorDevice } = useContext(SelectedEditorDeviceContext)
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
    const [isLoading, setIsLoading] = useState(false)
    const { profileContext, setprofileContext } = useContext(Context);
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);

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

    useEffect(() => {

            try {
                setIsLoading(true);

                setAxis(JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]
                .buttons["axis"])
            } catch (error) {
                console.log(error);
            }
            finally {
                console.log(JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]);
                setIsLoading(false);
            }

        



    }, []);

    const imageBodyTemplate = (axis) => {

        return (

            <Button onClick={(e) => {
                try {


                } catch (error) {
                    console.log(error);
                } finally {

                    setLoading(false)

                }
            }}
                type='profile-card-button'
                className='flex flex-col min-w-[250px]  w-[345px]  control-profile-card-bg  px-[16px] pb-[8px] pt-[14px] gap-[8px] '>
                <div className='flex w-full'>
                    <p className=' control-profile-card-title'>asd {axis.name}</p>
                </div>

                <div className='flex flex-row justify-between mb-[4px]  w-[100%]'>
                    <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                        <p className='flex control-profile-card-device-number justify-self-end  self-end'>
                            asd

                        </p>

                        <p className='flex control-profile-card-device self-end '>DEVICES</p>
                    </div>

                    <div className='flex flex-col  justify-between gap-[2px] '>
                        <p className='control-profile-card-body mb-[2px]'>LAST MODIFIED</p>
                        <p className='control-profile-card-body'>July 3rd, 12:10AM asd</p>
                    </div>
                </div>
            </Button>

        )
    };

    return (
        <DataTable
            className='min-w-[345px] '
            filterDisplay="row" type='profile card' value={JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]} rows={3} paginator={false} selectionMode='single' >
            <Column field="name" filter filterPlaceholder='search' body={imageBodyTemplate}></Column>
        </DataTable>
    )
}

export default AxisDataTable