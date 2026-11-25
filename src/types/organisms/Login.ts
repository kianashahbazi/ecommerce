export interface LoginFormValues{
    username :string
    password : string
}

export interface LoginProps{
    onSubmit : (values : LoginFormValues) => void
}
