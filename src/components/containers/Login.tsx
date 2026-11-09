import {Button , Card , Heading3 , Input , Text , Label , Link} from '../kit';
import type { LoginProps } from "../../types";
import {useTheme} from '../../context';

export function Login({
    username ,password , onUsernameChange , onPasswordChange , onSubmit,

} : LoginProps){
    const {theme} = useTheme();

    const forgotPasswordLinkStyle =
    theme === 'dark'
        ? 'text-neutral-light hover:text-white'
        : 'text-black hover:text-black'
        return(
            <Card className='flex flex-col items-stretch justify-start p-12 w-119.5 h-131.25'>
                <div className='w-full flex flex-col items-center gap-6 mb-6'>
                    <Heading3 className='flex w-99.5 h-14.5 items-center justify-center text-center'>
                        Log In
                    </Heading3>
                    <Text size='sm' className='flex items-center justify-center text-center w-99.5 h-6.75'>
                        Lorem ipsum dolor sit amet adipisicing elit.
                    </Text>
                </div>
                <form className='w-full flex flex-col gap-4' onSubmit={onSubmit}>
                    <Label>Username*</Label>
                    <Input className='w-full' id='username' size='md' type='text' placeholder='Username' value={username} onChange={onUsernameChange}></Input>
                    <div className='w-full'>
                        <div className='flex items-center justify-between mb-4'>
                            <Label>Password*</Label>
                            <Text size='sm' className='w-40.75 text-center'>
                                <Link href='#' className={`underline underline-offset-4 ${forgotPasswordLinkStyle}`}>Forgot your password?</Link>
                            </Text>
                        </div>
                        <Input className='w-full' id='password' size='md' type='password' placeholder='Password' value={password} onChange={onPasswordChange}></Input>
                    </div>
                    <Button className='w-full' size='lg' type='submit'>Log In</Button>
                </form>
            </Card>
        );
}
