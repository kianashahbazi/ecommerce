export interface LoginFormValues{
    username:string
    password:string
}
export interface LoginProps{
    onSubmit:(data : LoginFormValues) => void
}