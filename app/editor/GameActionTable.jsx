
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
// import { NodeService } from './service/NodeService';
import { GameActions } from './GameActions';
import { Tree } from 'primereact/tree';

export default function FilterDemo() {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
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
    const bodyTemplate = (rowData) => {
        return (
            <div className="flex flex-wrap gap-2">
                asd  {rowData}
                {/* <Button type="button" icon="pi pi-search" rounded></Button>
                <Button type="button" icon="pi pi-pencil" severity="success" rounded></Button> */}
            </div>
        );
    };
    return (

        <div className="card flex flex-wrap justify-content-center gap-5">
            <Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
            <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
        </div>

        // <div className="card">
        //     <div className="flex justify-content-center mb-4">
        //         <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
        //     </div>
        //     <TreeTable
        //      bodyTemplate={bodyTemplate}
        //      selectionMode="single"  selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={metaKey} 
        //     value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
        //         <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
        //         <Column field="category" header="ID"  ></Column>

        //     </TreeTable>
        // </div>
    )
}
