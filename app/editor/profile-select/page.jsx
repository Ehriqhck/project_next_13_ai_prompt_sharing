import React from 'react'
import NavEditor from 'components/NavEditor.jsx'
const page = () => {
    return (
        <section>
            {/* <NavEditor/>
            <div>page</div> */}
            <div className='flex flex-col min-w-[250px] control-profile-card-bg   p-[8px] gap-[8px] position: relative;
'>
                <div className='flex w-full'>
                    <p className='ml-[8px] ml-[0px] control-profile-card-title'>Profile Name </p>
                </div>

                <div className='flex flex-row justify-between mb-[4px]'>
                    <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                        <p className='flex control-profile-card-device-number'>6</p>
                        <p className='flex control-profile-card-device self-end '>DEVICES</p>
                    </div>

                    <div className='flex flex-col  justify-between '>
                        <p className='control-profile-card-body'>LAST MODIFIED</p>
                        <p className='control-profile-card-body'>July 3rd, 12:10AM</p>
                    </div>

                </div>
            </div>




        </section>
    )
}

export default page