import React from 'react'
import DownIcon from 'public/assets/icons/actions/input_down.svg';
import ActionList from '@components/ActionList';
import PressIcon from 'public/assets/icons/actions/input_press.svg';
import LayerTag from 'components/generic/LayerTag.jsx';

const DownPress = ({ action_id, inputName_id }) => {

  return (

    <div className='input-down-press'>
      <div className="input-down  w-[222px]">
        <div className="ui-corners mt-2.5">
          <div className='square_contain'>
            <div className='w-40px h-40px '>
            <PressIcon />
            </div>
          </div>
        </div>
        <div className="input-label input-name mb-1">
          <div className="text-wrapper"> HAT PRESS </div>
        </div>
        <ActionList action_id={action_id} />
      </div>
      <div className="input-press ">
        <div className="ui-corners mt-2.5">
          <div className='square_contain'>
            <div className='w-40px h-40px '>
            <DownIcon />
            </div>
          </div>
        </div>
        <div className="input-label input-name mb-1">
          <div className="text-wrapper">HAT DOWN</div>
        </div>
        <ActionList action_id={action_id}/>

      </div>

    </div>


  )
}

export default DownPress