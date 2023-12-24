import PillSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/PillSwitch.jsx'
import RedButton from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/RedButton.jsx'
import ChipSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/ChipSwitch.jsx'
// import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.jsx'
import Hat from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/Hat.jsx'
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
  getInputIcon (ButtonName) {
    switch (ButtonName) {
      case 'circleSwitch':
        return <CircleSwitch />
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
          <div className=' panel'>
           <div className='w-[50px] glow opacity-[85%] flex flex-col '> <QuestionMark className="gradient-overlay"/> </div> 
            <p class='text-default text-layer1 default w-[100%] '> SELECT AN INPUT TO VIEW </p>
          </div>
        )
        break
    }
  },

  getInputIconTitle (ButtonName) {
    switch (ButtonName) {
      case 'circleSwitch':
        return <CircleSwitch />
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
            <p class='text-modifier text-layer1 default '> SELECT AN INPUT </p>
        )
        break
    }
  }
}
