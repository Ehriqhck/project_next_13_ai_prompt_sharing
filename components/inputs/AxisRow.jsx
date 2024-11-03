import React from 'react'
import Press from 'public/assets/icons/actions/input_up.svg';
import ActionList from '@components/ActionList';
import RotationalAxisIcon from '@public/assets/icons/actions/gameCategory/RotationalAxisIcon.jsx'
import XAxisIcon from '@public/assets/icons/actions/gameCategory/XAxisIcon.jsx'
import YAxisIcon from '@public/assets/icons/actions/gameCategory/YAxisIcon.jsx'
import ZAxisIcon from '@public/assets/icons/actions/gameCategory/ZAxisIcon.jsx'
import RotateYIcon from '@public/assets/icons/actions/gameCategory/RotateYIcon.jsx'
import RotateXIcon from '@public/assets/icons/actions/gameCategory/RotateXIcon.jsx'
const AxisRow = ({ layers, name, axis }) => {

  console.log("NAME:" + name);
  const iconWidth = '30px';
  const iconHeight = '30px;'


  return (

    <div className="flex flex-col flex-start self-start">
      <div className='flex flex-row gap-[8px]'>

        <div className='flex flex-col'>
          <div className="corner-inputTableIcons w-fit h-fit">
            <XAxisIcon
              className={'testCircle corner-inputTableIcons'}
              width={iconHeight}
              height={iconWidth}
            />
          </div>
        </div>

        <div className="input-label input-name flex flex-col ">
          <div className="text-wrapper self-start">{layers['X'].name}</div>
          <div className="action-list ">
        <ActionList layers={layers['X'].layers} input_direction={null} />

      </div>
        </div>
      </div>
   


    </div>
  )
}

export default AxisRow