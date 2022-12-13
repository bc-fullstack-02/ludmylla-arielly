import { useState, useEffect } from "react";
import api from "../../services/api";
import { getAuthHeader } from '../../services/auth'
import { UserCircle } from "phosphor-react";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";

interface Profile {
    _id: string;
    name: string;
    followers: string;
}

function Profiles() {

    const authHeader = getAuthHeader()
    const profileId = localStorage.getItem('profile')
    const user = localStorage.getItem('user')

    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        const getProfiles = async () => {
            try {
              const response =  await api.get('/profiles', authHeader)
              setProfiles(response.data);

            }catch(err) {
                console.error(err)
            }
        };
   
        getProfiles();
    }, [])

    async function handleFollow(profileId: string) {
        try {
            await api.post(`/profiles/${profileId}/follow`, null, authHeader)
            console.log('seguindo')
            alert('Seguindo')

        }catch(err) {
            console.error(err)
        }
    }

    async function handleUnfollow(profileId: string) {
        try {
            await api.post(`/profiles/${profileId}/unfollow`, null, authHeader)
            console.log('parou de seguir')
            alert('Parou de seguir')
        }catch(err) {
            console.error(err)
        }
    }


    return (
     
        <div className="basis-5/6 overflow-y-auto scroll-smooth">
        <Heading className="border-b border-slate-400 mt-4">
            <Text size="lg" className="font-extrabold ml-5">Amigos</Text>
            <div className="flex flex-row items-center ml-5 my-4">
                <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                <Text className="font-extrabold ml-2 capitalize">{user}</Text>
                
            </div>
        </Heading>
        <ul>
           {profiles.map(profile => (
            <li className="border-b border-slate-400 mt-4 pl-5">
                <div className="flex flex-row items-center ">
                    <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                    <Text className="font-extrabold ml-2">{profile.name }</Text>
                </div>
                <footer className='mt-6 flex justify-start gap-4 mb-4'>
                    <button className='flex-none w-48 rounded-md font-semibold bg-cyan-500 hover:bg-cyan-700 focus:ring-2 ring-white' onClick={() => handleFollow(profile._id)}
                    disabled={profile.followers.includes(profileId)}>Seguir</button>
                    <Button type='submit' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600' onClick={() => handleUnfollow(profile._id)}
                     disabled={!profile.followers.includes(profileId)}>Parar de seguir</Button>
                </footer>
            </li>
           ))}
           </ul>
        </div>
    )

}

export default Profiles;