import { UserCircle, Chat, Heart } from "phosphor-react";
import Heading from "../Heading";
import Text from "../Text";

function Feed() {
    return (
        <div>
            <Heading className="border-b border-slate-400 mt-4">
                <Text size="lg" className="font-extrabold ml-5">Página Inicial</Text>
                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                    <Text className="font-extrabold ml-2">Fulano da Silva</Text>
                </div>
            </Heading>
            <section>
                <div className="border-b border-slate-400">
                    <div className="flex flex-row items-center ml-5 my-4">
                        <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                        <Text className="font-extrabold ml-2">Fulano dos Santos</Text>
                    </div>
                    <Text asChild className="ml-16">
                        <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here'  
                        </p>
                    </Text>
                    <div className="flex items-center ml-16 my-4 space-x-2">
                        <div className="hover:bg-sky-400">
                            <Chat size={24} className="text-slate-50" />
                        </div>
                        <Text size="sm">9.999</Text>
                        
                        <div className="hover:bg-red-400 rounded-full p-1">
                            <Heart size={24} className="text-slate-50" />
                        </div>
                        <Text size="sm">9.999</Text>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feed;