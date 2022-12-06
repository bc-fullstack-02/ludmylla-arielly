import AuthForm from "../../components/AuthForm";


function SignUp() {
    return (
        <AuthForm 
            formTitle="Faça o cadastro e comece a usar!" 
            submitFormButtonText="Cadastrar" 
            linkDescription="Já possui conta? Entre agora!" 
            routeName="/" />
    )
}
export default SignUp;