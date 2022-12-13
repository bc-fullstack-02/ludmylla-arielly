import { useNavigate } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";

function Profile() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user')

    function handleLogout() {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="basis-5/6">
            <Heading className="border-b border-slate-400 mt-4">
                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                    <Text className="font-extrabold ml-2 capitalize">{user}</Text>
                </div>
            </Heading>
            <div className="mt-4 ml-4 max-w-sm w-full flex flex-col items-stretch"> 
                <Button onClick={handleLogout}>Sair</Button>
            </div>
        </div>
    )
}

export default Profile;