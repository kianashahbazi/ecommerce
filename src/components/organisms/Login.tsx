import {Button , Card , Heading3 , Text , Link} from '../atoms';
import type { LoginProps } from "../../types";
import {useForm} from '@tanstack/react-form';
import { InputCombine } from '../molecules';

export function Login({onSubmit} : LoginProps){
    const form = useForm({
        defaultValues: {
            username :'',
            password : '',
        },
        validators:{
            onChange :({value})=>{
                if(!value.username.trim() && !value.password.trim()){
                    return ' enter your username and password';
                }
                return undefined;
            },
        },
        onSubmit:async({value}) => {
            onSubmit(value);
        },
    });
    
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
                <form className='w-full flex flex-col gap-4' onSubmit={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    void form.handleSubmit();
                }}>
                    <form.Field name="username" validators = {{onBlur :({value}) => !value.trim() ? 'Username is required' : undefined,}}>
                        {(field) => (
                            <>
                            <InputCombine label='Username*' className='w-full' id='username' size='md' type='text' placeholder='Username' name={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)}/>
                                {!field.state.meta.isValid && (
                                    <Text size='sm' className='text-red-600'>
                                        {field.state.meta.errors.join(', ')}
                                    </Text>
                                )}

                            </>
                        )}
                    </form.Field>
                    <form.Field name="password" validators = {{onBlur :({value}) => !value.trim() ? 'Password is required' : undefined,}}>
                        {(field) => (
                            <>
                            <InputCombine label="Password*" link={<Link href='#' size='sm' underline>Forgot your password?</Link>} className='w-full' id='password' size='md' type='password' placeholder='Password' name={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} />
                                {!field.state.meta.isValid && (
                                    <Text size='sm' className='text-red-600'>
                                        {field.state.meta.errors.join(', ')}
                                    </Text>
                                )}
                            </>
                        )}
                    </form.Field>
                    <form.Subscribe
                        selector={(state) => state.errorMap.onChange}>
                        {(formError) => (
                            formError ? (
                                <Text size='sm' className='text-red-600'>{formError}</Text>
                            ) : null
                        )}
                    </form.Subscribe>
                    <form.Subscribe
                        selector ={(state) => [state.canSubmit , state.isPristine]}>
                        {([canSubmit,isPristine]) => (
                            <Button className='w-full' size='lg' type='submit' aria-disabled = {!canSubmit || isPristine}>Log In</Button>

                        )}
                    </form.Subscribe>
                </form>
            </Card>
        );
}
