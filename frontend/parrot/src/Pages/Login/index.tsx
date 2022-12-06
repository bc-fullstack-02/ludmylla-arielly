import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import Button from "../../components/Button";

import { User, Lock } from "phosphor-react"

import logo from '../../assets/logo.svg'


function Login() {
    return (
        <div className="text-cyan-50 flex flex-col items-center mt-16">
           <header className="flex flex-col items-center">
                <img src={logo} alt="Logo" />
                <Heading size='lg' className="mt-2">Sysmap Penguin</Heading>
                <Text className="mt-1 opacity-50">Faça o login e comece a usar!</Text>
           </header>

           <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
                <label htmlFor="user" className="flex flex-col gap-2">
                  
                    <Text>Login</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <User />
                        </TextInput.Icon>
                        <TextInput.Input id="user" type="text" placeholder="Digite seu login" />
                    </TextInput.Root>

                </label>

                <label htmlFor="user" className="flex flex-col gap-2">
                    <Text>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input id="user" type="password"  placeholder="*******" />
                    </TextInput.Root>
                </label>
                <Button type="submit" className="flex flex-col gap-2 py-3 px-4 h-10 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">Entrar</Button>
           </form>
           
 
            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text asChild size="sm"><a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a></Text>
            </footer>
        </div>
    )
}
export default Login;