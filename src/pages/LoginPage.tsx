import { useState , type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Input , Button ,Card , Heading3, Text } from "../components";
import { loginUser } from "../constants";

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
        <main className="min-h-screen w-full flex flex-col items-center justify-center gap-4 py-18 bg-white">

            <Card className="flex flex-col items-stretch justify-start w-119.5 h-150 border-black p-12">

                <header className="w-full flex flex-col items-center gap-6 mb-6">
                    <Heading3 className="flex w-99.5 h-14.5 items-center justify-center text-center">Log In</Heading3>
                    <Text size="sm" className="flex w-99.5 h-6.75 items-center justify-center text-center text-black!">Lorem ipsum dolor sit amet adipisicing elit.</Text>
                </header>

                <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input className="w-full h-12!" id="username" size="sm" type="text" placeholder="Username" aria-label="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                    <Input className="w-full h-12!" id="password" size="sm" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <Button type="submit" size="sm" className="w-full h-12!">Log In</Button>
                </form> 

                <div className="w-full h-12 flex items-center mt-4">
                    <div className="w-full border-t border-black"/>
                </div>

                <div className="w-full flex flex-col items-center gap-4 mt-6">
                    <Text size="sm" className="w-40.75 text-center text-black!">
                        <a href="#" className="underline underline-offset-2">
                            Forgot your password?
                        </a>
                    </Text>

                    <Text size="sm" className="w-56 text-center text-black!">
                        Don't have an account?
                        <a href="#" className="underline underline-offset-2">
                            Sign up
                        </a>
                    </Text>
                </div>

            </Card>

            <Text size="sm">© 2022 Relume</Text>

        </main>
    )
}
export {LoginPage}
