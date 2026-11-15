import {Button , Card , Heading3 , Input , Text , Label , Link} from '../atoms';
import type { LoginProps , LoginFormValues } from "../../types";
import {useForm} from 'react-hook-form'

export function Login({onSubmit} : LoginProps){
    const {
        register,
        handleSubmit,
        formState : {errors},
    } = useForm<LoginFormValues>()
    const {reset} = useForm()
    
        return(
            <Card className='flex flex-col items-stretch justify-start p-6 w-full sm:w-64 md:w-80 lg:w-120'>
                <div className='w-full flex flex-col items-center gap-6 mb-6'>
                    <Heading3 className='flex w-full items-center justify-center text-center'>
                        Log In
                    </Heading3>
                    <Text size='sm' className='flex items-center justify-center text-center w-full'>
                        Lorem ipsum dolor sit amet adipisicing elit.
                    </Text>
                </div>
                <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                    
                    <Input label={<Label>Username*</Label>} className='w-full' id='username' size='md' type='text' placeholder='Username' {...register('username' , {required : 'Username is required' ,})}/>
                    {errors.username && ( <Text size ='sm' className = 'text-red-600'>{errors.username.message}</Text>)}
                    <Input label={<div className='flex items-center justify-between mb-4'><Label>Password*</Label><Link href='#' size='sm' underline>Forgot your password?</Link></div>} className='w-full' id='password' size='md' type='password' placeholder='Password' {...register('password' , {required : 'Password is required' , minLength :{value : 8 , message :'password must be atleast 8 characters',},})}/>
                    {errors.password && ( <Text size ='sm' className = 'text-red-600'>{errors.password.message}</Text>)}

                    <Button className='w-full' size='lg' type='submit'>Log In</Button>
                </form>
            </Card>
        );
}
