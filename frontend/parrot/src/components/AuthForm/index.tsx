import { FormEvent } from 'react';
import { Link } from 'react-router-dom'
import { User, Lock } from "phosphor-react"

import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import Button from "../../components/Button";

import logo from '../../assets/logo.svg'

import '../AuthForm/index.css'

interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction: (auth: Auth) => void;
    linkDescription: string;
    routeName:  string;
    showOptional?: boolean;
}

interface AuthFormElements extends HTMLFormControlsCollection {
    name:HTMLInputElement;
    user: HTMLInputElement;
    password: HTMLInputElement;
}

interface AuthFormElement extends HTMLFormElement {
    readonly elements: AuthFormElements;
}

export interface Auth {
    name?: string;
    user: string;
    password: string;
}

function AuthForm({ formTitle, submitFormButtonText, submitFormButtonAction, linkDescription, routeName, showOptional }: AuthFormProps) {
    
    function handleSubmit(event: FormEvent<AuthFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;

        const auth = {
            name: form.elements.name?.value,
            user: form.elements.user.value, 
            password: form.elements.password.value
        }

        submitFormButtonAction(auth)
    }

    return (
        <div className="text-cyan-50 flex flex-col items-center mt-16">
           <header className="flex flex-col items-center">
                <img className='logo mb-6' src={logo} alt="Logo" />
                <Heading size='lg'>Sysmap Penguin</Heading>
                <Text className="opacity-50">{formTitle}</Text>
           </header>

           <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-4">
                {showOptional && ( 
                
                <label htmlFor="name" className="flex flex-col gap-2">
                  <Text>Nome</Text>
                  <TextInput.Root>
                      <TextInput.Icon>
                          <User />
                      </TextInput.Icon>
                      <TextInput.Input id="name" type="text" placeholder="Digite seu nome" />
                  </TextInput.Root>
              </label>)}
               
                <label htmlFor="user" className="flex flex-col gap-2">
                    <Text>Login</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <User />
                        </TextInput.Icon>
                        <TextInput.Input id="user" type="text" placeholder="Digite seu login" />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-2">
                    <Text>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input id="password" type="password"  placeholder="*******" />
                    </TextInput.Root>
                </label>
                <Button type="submit" className="flex flex-col text-center items-center gap-2 py-3 px-4 h-10 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">{submitFormButtonText}</Button>
           </form>
           
            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text asChild size="sm">
                    <Link to={routeName}
                        className="text-gray-400 underline hover:text-gray-200">{linkDescription}
                     </Link>   
                </Text>
            </footer>
        </div>
    )
}
export default AuthForm;