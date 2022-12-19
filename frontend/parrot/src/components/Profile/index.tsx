import { useNavigate } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";

import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";

import api from "../../services/api";
import Dropzone from "../Dropzone";

interface Profile {
    _id: string;
    name: string;
    image: boolean;
    imageProfile: string;
}

function Profile() {
    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');
    const user = localStorage.getItem('user')
    const profileId = localStorage.getItem('profile') as string;

    const [selectedFile, setSelectedFile] = useState<File>();

    const [profiles, setProfiles] = useState<Profile>()


    function handleLogout() {
        localStorage.clear();
        navigate('/');
    }

    async function uploadImageProfile() {

        const data = new FormData();

        if(selectedFile) {
            data.append("file", selectedFile)
        }

        try {

            const response = await api.put('/profiles', data, { 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response.data)
            
        }catch(err) {
            console.error(err)
             alert('Erro ao fazer upload da imagen.')
        }
    }

    useEffect(() => {
        async function getProfile() {
            const response = await api.get(`/profiles/${profileId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 

            setProfiles(response.data);
            console.log(response.data)
        }
        getProfile();
    }, []);



    return (
        <div className="basis-5/6">
            <Heading className="border-b border-slate-400 mt-4">
                <div className="flex flex-row items-center ml-5 my-4">
                {profiles && profiles.image ? (
                    <img style={{width: '4%', borderRadius: '50px' }} src={profiles?.imageProfile} alt="Foto" />
                ) : (
                    <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                )}
            
                    <Text className="font-extrabold ml-2 capitalize">{user}</Text>
                </div>
            </Heading>
            
            <Dropzone onFileUploaded={setSelectedFile}/>
            <div className="mt-4 ml-4 max-w-sm w-full flex flex-col items-stretch"> 
                <button className="mb-4 py-3 px-4 h-10 bg-yellow-300 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-yellow-400 focus:ring-2 ring-white" onClick={uploadImageProfile}>Enviar</button>
                <Button onClick={handleLogout}>Sair</Button>
            </div>
        </div>
    )
}

export default Profile;