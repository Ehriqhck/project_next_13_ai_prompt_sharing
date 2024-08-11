import PillSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/PillSwitch.jsx'
import RedButton from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/RedButton.jsx'
import ChipSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/ChipSwitch.jsx'
// import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.jsx'
import Hat from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/Hat.jsx'
import Image from 'next/image'
import InputLeftIcon from '@public/assets/icons/actions/InputLeftIcon.jsx'
import InputRightIcon from '@public/assets/icons/actions/InputRightIcon.jsx'
import InputUpIcon from '@public/assets/icons/actions/InputUpIcon.jsx'
import InputDownIcon from '@public/assets/icons/actions/InputDownIcon.jsx'
import InputPressIcon from '@public/assets/icons/actions/InputPressIcon.jsx'
import Pinkybutton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/pinkybutton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK.jsx'
import PrimaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/primaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK.jsx'
import SecondaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/SecondaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK.jsx'
import SideIndexButton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/SideIndexButton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK.jsx'
import RotationalAxisIcon from '@public/assets/icons/actions/gameCategory/RotationalAxisIcon.jsx'
import XAxisIcon from '@public/assets/icons/actions/gameCategory/XAxisIcon.jsx'
import YAxisIcon from '@public/assets/icons/actions/gameCategory/YAxisIcon.jsx'
import ZAxisIcon from '@public/assets/icons/actions/gameCategory/ZAxisIcon.jsx'
import RotateYIcon from '@public/assets/icons/actions/gameCategory/RotateYIcon.jsx'
import RotateXIcon from '@public/assets/icons/actions/gameCategory/RotateXIcon.jsx'
import AxisIcon from 'public/assets/icons/generic/axis.svg'
import BindMissingIcon from '@public/assets/icons/actions/gameCategory/BindMissingIcon.jsx'

import BindIcon from 'public/assets/icons/generic/bind.svg'
import LayerIcon from 'public/assets/icons/generic/layer.svg'

import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.svg'
import QuestionMark from '@components/generic/Icons/QuestionIcon.svg'
// export const fetchMappings = async ({ id }) => {
//   console.log('USE EFFECT START')
//   const response = await fetch(`/api/deviceProfiles`)
//   console.log('FETCHED RESPONSE ok?:' + response.ok + response)

//   const data = await response.json()
//   console.log('FETCHED DATA' + data)

//   //   const parsed = await data.map(function (d) { return d.toObject() })

//   setGameVersionOptions(JSON.parse(JSON.stringify(data)))
// }

// export function capitalize (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }

export const Utils = {
  getInputIcon (ButtonName, width, height) {
    switch (ButtonName) {
      case 'Circle_Stick':
        return (
          <div className='corner-inputTableIcons'>
            <CircleSwitch className='testCircle ' width={width} height='100%' />
          </div>
        )

        break

      case 'Hat_Stick':
        return (
          <div className='corner-inputTableIcons'>
            <Hat className='testCircle' width={width} height='100%' />
          </div>
        )

        break

      case 'Pill_Stick':
        return (
          <div className='corner-inputTableIcons'>
            <PillSwitch className='testCircle ' width={width} height='100%' />
          </div>
        )

        break

      case 'Red_Button':
        return (
          <div className='corner-inputTableIcons'>
            <RedButton className='testCircle ' width={width} height='100%' />
          </div>
        )
        break

      case 'Chip_Stick':
        return (
          <div className='corner-inputTableIcons'>
            <ChipSwitch className='testCircle ' width={width} height='100%' />
          </div>
        )

      case 'Pinky_Button':
        return (
          <div className='corner-inputTableIcons'>
            <Pinkybutton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK
              width={width}
              height='100%'
              className='testCircle '
            />
          </div>
        )
        break
      case 'Primary_Trigger':
        return (
          <div className='corner-inputTableIcons'>
            <PrimaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK
              width={width}
              height='100%'
              className='testCircle '
            />
          </div>
        )
        break
      case 'Secondary_Trigger':
        return (
          <div className='corner-inputTableIcons'>
            <SecondaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK
              width={width}
              height='100%'
              className='testCircle '
            />
          </div>
        )
        break
      case 'Side_Index_Button':
        return (
          <div className='corner-inputTableIcons'>
            <SideIndexButton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK
              width={width}
              height='100%'
              className='testCircle '
            />
          </div>
        )
        break
        break

      default:
        return (
          // <div className=' panel'>
          //   <div className='w-[50px] glow opacity-[85%] flex flex-col '> <QuestionMark className="gradient-overlay" /> </div>
          //   <p class='text-default text-layer1 default w-[100%] '> SELECT AN INPUT TO VIEW </p>
          // </div>
          null
        )
        break
    }
  },
  getInputSlotIcons (slotName, width, height) {
    switch (slotName) {
      case 'top':
        return (
          <InputUpIcon className='testCircle' width={width} height='100%' />
        )
        break

      case 'bottom':
        return (
          <InputDownIcon className='testCircle' width={width} height='100%' />
        )
        break

      case 'press':
        return (
          <InputPressIcon className='testCircle ' width={width} height='100%' />
        )
        break

      case 'left':
        return (
          <InputLeftIcon className='testCircle ' width={width} height='100%' />
        )
      case 'right':
        return (
          <InputRightIcon className='testCircle ' width={width} height='100%' />
        )
        break

      default:
        return <></>
        break
    }
  },
  getInputAxisIcons (slotName, width, height) {
    switch (slotName) {
      case 'TWIST X':
        return (
          <RotateXIcon className='testCircle' width={width} height={height} />
        )
        break

      case 'TRANSLATE X':
        return (
          <XAxisIcon className='testCircle' width={width} height={height} />
        )
        break

      case 'TWIST Y':
        return (
          <RotateYIcon className='testCircle ' width={width} height={height} />
        )
        break

      case 'Translate Y':
        return (
          <YAxisIcon className='testCircle ' width={width} height={height} />
        )
      case 'TRANSLATE Z':
        return (
          <ZAxisIcon className='testCircle ' width={width} height={height} />
        )
        break

      default:
        return <></>
        break
    }
  },
  getInputIconTitle (ButtonName) {
    switch (ButtonName) {
      case 'Circle_Stick':
        return <CircleSwitch />
        break

      case 'Hat_Stick':
        return <Hat className='testCircle p-[10px]' />
        break

      case 'Pill_Stick':
        return <PillSwitch className='testCircle p-[10px]' />
        break

      case 'Red_Button':
        return <RedButton className='testCircle p-[10px]' />
        break
      case 'Chip_Stick':
        return <ChipSwitch className='testCircle p-[10px]' />
        break

      case 'Pinky_Button':
        return (
          <Pinkybutton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK className='testCircle p-[10px]' />
        )
        break
      default:
        return (
          <p class='text-modifier text-layer1 default '> SELECT AN INPUT </p>
        )
        break
    }
  },

  getSelectedDeviceIcon (DeviceName, width, height) {
    console.log('DEVICE PREVIEW ICON NAME ================')
    console.log(DeviceName)
    switch (DeviceName) {
      case 'VKB_GLADIATOR_NXT_EVO_LEFT':
        return (
          <div className='my-[6px]'>
            <img
              src='/assets/VKB/VKB_GLADIATOR_NEXT_EVO_LEFT_icon@2x.webp'
              width={width}
              height='100%'
            />
          </div>
        )
        break
      case 'VKB_GLADIATOR_NXT_EVO_RIGHT':
        return (
          <div className='my-[6px]'>
            <img
              src='/assets/VKB/VKB_GLADIATOR_NEXT_EVO_RIGHT_icon.webp'
              width={width}
              height='100%'
            />
          </div>
        )

        break
      case 'hatSwitch':
        return <Hat className='testCircle p-[10px]' />
        break

      case 'pillSwitch':
        return <PillSwitch className='testCircle p-[10px]' />
        break

      case 'redButton':
        return <RedButton className='testCircle p-[10px]' />
        break
      case 'chipSwitch':
        return <ChipSwitch className='testCircle p-[10px]' />
        break

      default:
        return (
          <div>
            <img
              src='/assets/VKB/Device_VKB_GLADIATOR_NXTd_EVO_LEFT_BACK_1@2x.webp'
              width={30}
            />
          </div>
        )
        break
    }
  },

  getIconLegend (node) {
    const layers = Object.keys(node.layers).length

    if (layers >= 0) {
      return (
        <div className='flex flex-row gap-[12px] h-fit'>
          <div className='flex flex-row gap-[3px] '>
            <p className='mb-[-3px] text-legend-heading flex self-center leading-[10px]  align-middle  text-center justify-self-center '>
              {' '}
              AXIS
            </p>
            <div className='flex flex-row h-fit gap-[3px] content-center align-center justify-center'>
              <AxisIcon className='self-center w-[17px] h-[17px] align-center' />
              <p className=' h-full mb-[-1px] text-legend  align-middle  text-center self-center justify-self-center'>
                9
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-[5px]'>
            <p className='text-legend-heading flex self-center mb-[-3px] '>
              {' '}
              BINDS
            </p>
            <div className='flex flex-row gap-[3px] content-center'>
              <BindIcon className='self-center w-[17px] h-[17px]' />
              <p className='text-legend self-center'>
                {Object.keys(node.layers).length}
              </p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='flex flex-row gap-[14px]'>
          {/* <div className='flex flex-col gap-[2px]'>
          <p className='text-legend-heading'> LAYERS</p>
          <div className='flex flex-row gap-[3px] content-center'>
            <LayerIcon className='self-center w-[17px] h-[17px]' />
            <p className='text-legend self-center'>
            {Object.keys(node.layers).length}
  
            </p>
          </div>
        </div> */}

          <div className='flex flex-col gap-[2px]'>
            <p className='text-legend-heading mb-[-3px] self-center'> AXIS</p>
            <div className='flex flex-row gap-[3px] content-center'>
              <AxisIcon className='self-center w-[17px] h-[17px]' />
              <p className='text-legend self-center'>9</p>
            </div>
          </div>
          <div className='flex flex-col gap-[2px]'>
            <p className='text-legend-heading mb-[-3px] self-center '> BINDS</p>
            <div className='flex flex-row gap-[3px] content-center'>
              <BindMissingIcon className='self-center ' width='17px' />
              <p className='text-legend self-center'>0</p>
            </div>
          </div>
        </div>
      )
    }
  }
}
