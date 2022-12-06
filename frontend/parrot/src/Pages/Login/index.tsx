import AuthForm from "../../components/AuthForm";


function Login() {
    return (
        <AuthForm 
            formTitle="Faça o login e comece a usar!" 
            submitFormButtonText="Entrar" 
            linkDescription="Não possui conta? Crie uma agora!" />
    )
}
export default Login;