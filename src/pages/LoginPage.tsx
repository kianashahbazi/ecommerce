import { useState , type FormEvent } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../constants";
import { Login , Header , Footer } from "../components";
import { useTheme } from "../context";

function LoginPage(){

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState ('');
    const navigate = useNavigate();
    const {theme} = useTheme();
    const pageTheme =
    theme === 'dark' 
        ? 'bg-neutral-darkest text-white'
        : 'bg-white text-black';

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
        <div className={`relative min-h-screen w-full flex flex-col items-center justify-center gap-4 py-18 ${pageTheme}`}>
            <Header />
            <main className="w-full flex items-center justify-center">
                <Login 
                    username={username}
                    password={password}
                    onUsernameChange={(event) => setUsername(event.target.value)}
                    onPasswordChange={(event) => setPassword(event.target.value)}
                    onSubmit={handleSubmit}
                />
            </main>
            <Footer />
        </div>
        
    );
}
export {LoginPage}
