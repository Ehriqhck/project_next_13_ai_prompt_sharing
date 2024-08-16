"use client";

import React from 'react'
import LayerTag from '@components/generic/LayerTag.jsx';
import clsx from 'clsx';
const Action = ({ action_id, layer, input_direction, selectable }) => {

    const getClassNames = (input_direction) => {
        switch (input_direction) {
            case 'inputTable':
                return (inputTableClassNames);
                break;

            default:
                return (actionTextClassNames)
                break;
        }
    }

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
        if (selectable) {
            return (
                <div className={actionDirectionClassNames} >
                    <div className='layer-tag'>
                        <LayerTag layerNumber={layer} input_direction={input_direction} />
                    </div>
                    <p className={getClassNames(input_direction)}> {action_id} </p>
                </div>
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