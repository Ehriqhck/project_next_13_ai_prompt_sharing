"use client"
import React from 'react'
import NavEditor from 'components/NavEditor.jsx'
import { Button } from 'primereact/button';
import { useContext, useState, useEffect } from 'react'
import { Context } from '@components/Provider.jsx'
import DataTableProfileCards from 'app/editor/profile-select/DataTableProfileCards.jsx'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const page = () => {
    const { data: session, status } = useSession();
    const [providers, setProviders] = useState(null);

    const [isLoading, setIsLoading] = useState(false)
    const { profileContext, setprofileContext } = useContext(Context);
    const [profiles, setProfiles] = useState()
    const [accountProfiles, setAccountProfiles] = useState([
        {
            name: 'Amy Elsner',
            image: 'amyelsner.png',
            template: (item) => itemRenderer(item, 0)
        },
        {
            name: 'Anna Fali',
            image: 'annafali.png',
            template: (item) => itemRenderer(item, 1)
        },
        {
            name: 'Asiya Javayant',
            image: 'asiyajavayant.png',
            template: (item) => itemRenderer(item, 2)
        }
    ]);
    // console.log(profileContext);
    useEffect(() => {

        const fetchDeviceProfiles = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/deviceProfiles', {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: session?.user.id
                    })
                })
                const data = await response.json()
                setAccountProfiles(Object.keys(data?.deviceProfiles).map((device) => {
                    return ({
                        "profileName":  data?.deviceProfiles[device]?.profileName,
                        "dateMofified": data?.deviceProfiles[device]?.dateModified,
                        "dateCreated": data?.deviceProfiles[device]?.dateCreated,
                        "savedDevices":  data?.deviceProfiles[device]?.savedDevices,
                        "deviceAmount": data?.deviceProfiles[device]?.deviceAmount,
                    })
                })
                )
                setProfiles(data?.deviceProfiles)


            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
            // setProfileName(data?.deviceProfiles?.TEST_PROFILE_1?.saved['VKB_GLADIATOR_EVO'].profileName)

            // setProfiles(Object.keys(data?.deviceProfiles).map(key => (
            //     {
            //         name: key,
            //         devices: Object.keys(data[key]?.saved)?.length,
            //         dateLastModified: data[key].dateModified,
            //         dateCreated: data[key].dateCreated,
            //     }
            // )))
        }


        fetchDeviceProfiles()

    }, [isLoading]);


    return (
        <section>

            <DataTableProfileCards context={accountProfiles} />
        </section>
    )
}

export default page