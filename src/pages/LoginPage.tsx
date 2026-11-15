import { useNavigate } from "react-router";
import { loginUser } from "../constants";
import { Login , PageSurface , Header , Footer } from "../components";
import type {LoginFormValues} from '../types';

function LoginPage(){
    const navigate = useNavigate();

    function handleSubmit(values:LoginFormValues){
        if(values.username === loginUser.username && values.password === loginUser.password){
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