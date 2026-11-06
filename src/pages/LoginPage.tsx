import { useState , type FormEvent } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../constants";
import { Login } from "../components";

function LoginPage(){

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState ('');
    const navigate = useNavigate();

    function handleSubmit(event:FormEvent <HTMLFormElement>){
        event.preventDefault();
        if(username === loginUser.username && password === loginUser.password){
            console.log('You Log In Successfully');
            navigate('/ui-kit');
        }
        else{
            console.log('Invalid UserName or Password');         
        }
    }

    return(
        <Login 
        username={username}
        password={password}
        onUsernameChange={(event) => setUsername(event.target.value)}
        onPasswordChange={(event) => setPassword(event.target.value)}
        onSubmit={handleSubmit}
        />
    )
}
export {LoginPage}
