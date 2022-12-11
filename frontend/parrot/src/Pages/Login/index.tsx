import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import AuthForm, { Auth} from "../../components/AuthForm";
import api  from '../../services/api'

interface UserToken {
    profile: string;
    user: string;
}

function Login() {

    const navigate = useNavigate();

   async function handleLogin(auth: Auth) {
    try {
      const { data } = await api.post("/security/login", auth);

        const decodedToken = jwt_decode(data.accessToken) as UserToken;
        
        localStorage.setItem('profile', decodedToken.profile);
        localStorage.setItem('user', decodedToken.user);
        localStorage.setItem('accessToken', data.accessToken);
        console.log(data.accessToken)

        return navigate('/home');
    }catch(err) {
        console.log(err)
        alert('Erro ao fazer login!')
    }
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