import type {LoginFormValues} from "../types";
import { useNavigate } from "react-router";
import { loginUser } from "../constants";
import { Login , PageSurface , Header , Footer } from "../components";

function LoginPage(){
    const navigate = useNavigate();

    function handleSubmit(data:LoginFormValues){
        if(data.username === loginUser.username && data.password === loginUser.password){
            console.log('You Log In Successfully');
            navigate('/ui-kit');
        }
        else{
            console.log('Invalid UserName or Password');         
        }
    }

    return(
        <PageSurface>
            <Header />
                <main className="w-full px-4 min-h-screen flex items-center justify-center">
                    <Login
                        onSubmit={handleSubmit}
                    />
                    </main>
                <Footer />
        </PageSurface>

    )
}
export {LoginPage}