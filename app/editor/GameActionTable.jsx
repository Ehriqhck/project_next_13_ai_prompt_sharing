
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
// import { NodeService } from './service/NodeService';
import { GameActions } from './GameActions';
import { Tree } from 'primereact/tree';
import { classNames } from 'primereact/utils';

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
    const getIcon = (node) => {
        switch (key) {
            case value:

                break;

            default:
                break;
        }
    }

    const togglerTemplate = (node, options) => {
        if (!node) {
            return;
        }
        let label = <p className='self-center justify-center text-list-default '>{node.label.toUpperCase()}</p>;


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
                    <span className='' aria-hidden="true"> {toggleIcon(expanded)}</span>

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
    // const get
    const nodeTemplate = (node, options) => {

        let label = <b>{node.label}</b>;

        if (Object.hasOwn(node, 'children')) {
            label = <></>
        }

        return <span className={options.className}>{label}</span>;
    }

    return (

        <div className="card flex flex-wrap justify-content-center gap-5">
            <Tree
                togglerTemplate={togglerTemplate}
                selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)}
                nodeTemplate={nodeTemplate} value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
            {/* <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" /> */}
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
