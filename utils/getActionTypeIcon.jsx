import GroundVehicleIcon from '@public/assets/icons/actions/gameCategory/GroundVehicleIcon.jsx'
import SpaceshipIcon from '@public/assets/icons/actions/gameCategory/SpaceshipIcon'
export const getActionTypeIcon = {
    getIcon(type) {
        switch (type) {
            case "vehicles":
                return (
                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex flex-col gap-[1px]'>
                            <div className='w-[19px]'> <SpaceshipIcon /></div>
                            {/* <div className='spacer'/> */}
                            <div className='w-[20px] h-[17px] '> <GroundVehicleIcon /></div>
                        </div>
                        <div className='spacer' />
                    </div>)
            case "ground":
                return (
                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex flex-col gap-[1px]'>
                            <div className='w-[20px] h-[17px] '> <GroundVehicleIcon /></div>
                        </div>
                        <div className='spacer' />
                    </div>)
            case "spaceship":
                return (
                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex flex-col gap-[1px]'>
                            <div className='w-[20px]'> <SpaceshipIcon /></div>
                        </div>
                        <div className='spacer' />
                    </div>)
            default:
                return (<div className='flex flex-row gap-[5px]'>
                    <div className='flex flex-col gap-[1px]'>
                        <div className='w-[20px]'> <SpaceshipIcon /></div>
                    </div>
                    <div className='spacer' />
                </div>)
        }
    }


}

export default getActionTypeIcon