import {Button , Card , Heading3 , Input , Text , Label , Link} from '../kit';
import type { LoginProps } from "../../types";

export function Login({
    username ,password , onUsernameChange , onPasswordChange , onSubmit,

} : LoginProps){
    
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
                            <Link href='#' size='sm' underline>Forgot your password?</Link>
                        </div>
                        <Input className='w-full' id='password' size='md' type='password' placeholder='Password' value={password} onChange={onPasswordChange}></Input>
                    </div>
                    <Button className='w-full' size='lg' type='submit'>Log In</Button>
                </form>
            </Card>
        );
}
