"use client";

import React from 'react'
import LayerChip from 'components/generic/LayerChip.jsx'
import { get } from 'mongoose'
import { useState } from 'react'

const ModLayerSelector = (props) => {
const [selectedLayer, setSelectedLayer] = useState();
  const layersToRender = [0, 1, 2]

  const getAllChips = props => {
    return layersToRender.map(index => {
      return <LayerChip layer={index.toString()} isButton='true' />
    })
  }

  return (
    <section>
      <div className='flex flex-col gap-[8px]'>
        <p className='text-base'>// SELECT MODIFIER LAYER (OPTIONAL)</p>
        <div className='flex flex-row gap-[8px] ml-[4px]'>
          {/* <LayerChip layer="1" isButton='true' />
                <LayerChip layer="2" isButton='true' /> */}
          {getAllChips()}
        </div>
      </div>
    </section>
  )
}

export default ModLayerSelector
