"use client";
import { Button } from 'primereact/button';
import React from 'react'
import LayerTag from '@components/generic/LayerTag.jsx';
import clsx from 'clsx';
import { Utils } from '@app/editor/utils';
const Action = ({ action_id, node, layer, input_direction, selectable }) => {

    const getClassNames = (input_direction) => {
        switch (input_direction) {
            case 'inputTable':
                return (inputTableClassNames);
                break;

            default:
                if (selectable) {
                    return (actionButtonClassNames)
                } else {

                }
                return (
                    actionTextClassNames
                )
                break;
        }
    }
    const actionButtonClassNames = clsx({


        'text-layer1 ': layer == "0",
        'text-layer2 ': layer == "1",
        'text-layer3 ': layer == "2",

        'default text-modifier': input_direction == "top" || "press" || "bottom",
        'inputTable-layerText': input_direction == 'inputTable',
        'left text-modifier': input_direction == "left",
        'right text-modifier': input_direction == "right",


    });
    const actionTextClassNames = clsx({


        'text-layer1 ': layer == "0",
        'text-layer2 ': layer == "1",
        'text-layer3 ': layer == "2",

        'default text-modifier': input_direction == "top" || "press" || "bottom",
        'inputTable-layerText': input_direction == 'inputTable',
        'left text-modifier': input_direction == "left",
        'right text-modifier': input_direction == "right",


    });
    const inputTableClassNames = clsx({


        'text-layer1 ': layer == "0",
        'text-layer2 ': layer == "1",
        'text-layer3 ': layer == "2",

        'inputTable-layerText': true,



    });
    const actionDirectionClassNames = clsx({
        'flex-col flex ': input_direction == "inputTable",

        'text-modifier flex gap-[5px]  w-full self-start': input_direction == "top" || "press" || "bottom",
        'flex-row gap-[5px]  w-full': input_direction !== "left" || "right",
        'flex-col flex justify-end': input_direction == "left",
        'flex-col flex justify-start': input_direction == "right",

    });


    const render = () => {
        console.log("WOWOWOWOWO");

        console.log(node);

        if (selectable) {
            return (
                <label
                    onClick={() => {
                        // setSelectedLayer(props.layer);
                        // console.log(props.layer);
                    }}
                    type={'bindSelection'+ layer}
                    for={"choice-" + layer}
                    // className={'gameAction-' + layer + '-button'}
                >

                    <input type="radio" value={layer} name="modselect" id={"choice-" + layer} />
                    <div className='flex flex-col'>

                        <div className={actionButtonClassNames} >
                            <div className='flex flex-row gap-[8px]'>
                                <LayerTag layerNumber={layer} input_direction={input_direction} selectable={true} />
                                {/* <p className={getClassNames(input_direction) + " whitespace-nowrap"}> {action_id} </p> */}
                            </div>
                        </div>
                        {/* {Utils.getCategoryIcon(node)} */}

              
                            <div unstyled className='flex flex-row pl-[8px] '>

                                {Utils.getCategoryIcon(node)}

                                <div className='flex flex-col  justify-start w-full'>
                                    <p className='gameAction-text-regular flex whitespace-nowrap'>{node.label}</p>
                                    <p className=' gameAction-text-subheading flex' >{node.data.category}</p>
                                </div>
                            </div>
                    </div>



                </label>

            )


        } else {
            return (
                // <>{getLayer(action_id.layer)} </>
                <div className={actionDirectionClassNames} >
                    <div className='layer-tag'>
                        <LayerTag layerNumber={layer} input_direction={input_direction} />
                    </div>
                    <p className={getClassNames(input_direction)}> {action_id} </p>
                </div>

            )
        }
    }
    return (
        // <>{getLayer(action_id.layer)} </>
        { render }

    )


}

export default Action