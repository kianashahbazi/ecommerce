import {Button , Card , Heading3 , Input , Text , Label , Toggle} from '../kit';
import type { LoginProps } from "../../types";
import {useTheme} from '../../context';

export function Login({
    username ,password , onUsernameChange , onPasswordChange , onSubmit,

} : LoginProps){
    const { theme , setTheme } = useTheme()
    const pageTheme = 
    theme === 'dark' ? 'bg-neutral-darkest text-white' : 'bg-white text-black'

    const forgotPasswordLinkStyle =
    theme === 'dark'
        ? 'text-neutral-light hover:text-white'
        : 'text-black hover:text-black'
    return(
        <main className={`relative min-h-screen w-full flex flex-col items-center justify-center gap-4 py-18 ${pageTheme}`}>
            <div className='absolute right-6 top-6 flex items-center gap-3'>
                <span className='text-sm'>Dark Mode</span>
                <Toggle 
                checked = {theme === 'dark'}
                onChange={(event) => {
                    setTheme(event.currentTarget.checked ? 'dark' : 'light')
                }}
                />
            </div>
            <Card className="flex flex-col items-stretch justify-start w-119.5 h-131.25 p-12">

                <header className="w-full flex flex-col items-center gap-6 mb-6">
                    <Heading3 className="flex w-99.5 h-14.5 items-center justify-center text-center">Log In</Heading3>
                    <Text size="sm" className="flex w-99.5 h-6.75 items-center justify-center text-center">Lorem ipsum dolor sit amet adipisicing elit.</Text>
                </header>

                <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
                    <Label>Username*</Label>
                    <Input className="w-full" id="username" size="md" type="text" placeholder="Username" aria-label="Username" value={username} onChange={onUsernameChange}/>
                    <div className="w-full">
                        <div className="flex items-center justify-between mb-4">
                            <Label>Password*</Label>
                            <Text size="sm" className="w-40.75 text-center">
                                <a href="#" className={`underline underline-offset-4 ${forgotPasswordLinkStyle}`}>
                                    Forgot your password?
                                </a>
                            </Text>
                        </div>
                        <Input className="w-full" id="password" size="md" type="password" placeholder="Password" aria-label="Password" value={password} onChange={onPasswordChange}/>

                    </div>
                    <Button type="submit" size="lg" className="w-full">Log In</Button>
                </form> 
            </Card>
            <footer>
                <Text size="sm">© 2022 Relume</Text>
            </footer>
        </main>
    )
}
