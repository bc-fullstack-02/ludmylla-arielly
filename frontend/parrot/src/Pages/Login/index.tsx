import AuthForm from "../../components/AuthForm";
import api  from '../../services/api'

function Login() {

   async function handleLogin(user: string, password: string) {
      const data = await api.post("/security/login", {
            user,
            password
        });
        console.log(data)
    }

    return (
        <AuthForm 
            formTitle="Faça o login e comece a usar!" 
            submitFormButtonText="Entrar" 
            submitFormButtonAction={handleLogin}
            linkDescription="Não possui conta? Crie uma agora!" 
            routeName="/signup" />
    )
}
export default Login;