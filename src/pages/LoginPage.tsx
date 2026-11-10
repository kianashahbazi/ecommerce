import { useState , type FormEvent } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../constants";
import { Login , Header , Footer , PageLayout , PageSurface , PageContainer } from "../components";

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
        <PageSurface>
            <PageLayout variant="centered">
                <Header />
                <PageContainer variant="narrow">
                    <main className="w-full flex items-center justify-center">
                        <Login
                            username={username}
                            password={password}
                            onUsernameChange={(event) => setUsername(event.target.value)}
                            onPasswordChange={(event) => setPassword(event.target.value)}
                            onSubmit={handleSubmit}
                        />
                    </main>
                </PageContainer>
                <Footer />
            </PageLayout>

        </PageSurface>

    )
}
export {LoginPage}