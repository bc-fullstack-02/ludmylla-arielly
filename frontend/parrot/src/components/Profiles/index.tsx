import { useState, useEffect } from "react";
import { UserCircle } from "phosphor-react";

import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";

import api from "../../services/api";
import { getAuthHeader } from '../../services/auth'

interface Profile {
    _id: string;
    name: string;
    image: boolean;
    imageProfile: string;
    followers: string;
    followButtonDisabled: boolean;
}

function Profiles() {

    const authHeader = getAuthHeader()
    const user = localStorage.getItem('user')
    const profileId = localStorage.getItem('profile') as string;

    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        const getProfiles = async () => {
            try {
              const response =  await api.get('/profiles', authHeader)
              const profiles = response.data.map((profile: Profile) => {
                return {
                    ...profile,
                    followButtonDisabled: profile.followers.includes(profileId)
                };
              });
              setProfiles(profiles)
              console.log(response.data)

            }catch(err) {
                console.error(err)
            }
        };
   
        getProfiles();
    }, []);

    async function handleFollow(profileId: string) {
        try {
            await api.post(`/profiles/${profileId}/follow`, null, authHeader)
            changeButtonStatus(profileId, true);
            console.log('seguindo')
        }catch(err) {
            console.error(err)
        }
    }

    async function handleUnfollow(profileId: string) {
        try {
            await api.post(`/profiles/${profileId}/unfollow`, null, authHeader)
            changeButtonStatus(profileId, false);
            console.log('parou de seguir')
        }catch(err) {
            console.error(err)
        }
    }

    function changeButtonStatus(profileId: string, buttonDisabled: boolean ) {
        setProfiles((profiles) => {
            const newProfiles = profiles.map((profile) => {

                if (profile._id === profileId) {
                    profile.followButtonDisabled = buttonDisabled;
                }
                return profile;
            });
            return [ ...newProfiles];
        })
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
                {profile && profile.image ? (
                    <img style={{width: '56px', height:'56px',  borderRadius: '50px' }} src={profile?.imageProfile} alt="Foto" />
                ) : (
                    <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                )}

                    <Text className="font-extrabold ml-2">{profile.name }</Text>
                </div>
                <footer className='mt-6 flex justify-start gap-4 mb-4'>
                    <button className='flex-none w-48 rounded-md font-semibold bg-cyan-500 hover:bg-cyan-700 focus:ring-2 ring-white' onClick={() => handleFollow(profile._id)}
                    disabled={profile.followButtonDisabled}>Seguir</button>
                    <Button type='submit' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600' onClick={() => handleUnfollow(profile._id)}
                     disabled={!profile.followButtonDisabled}>Parar de seguir</Button>
                </footer>
            </li>
           ))}
           </ul>
        </div>
    )

}

export default Profiles;