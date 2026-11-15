import type { ChangeEvent , FormEvent } from "react";
export interface LoginProps{
    username:string
    password : string

    onUsernameChange : (event : ChangeEvent<HTMLInputElement>) => void
    onPasswordChange : (event : ChangeEvent <HTMLInputElement>) => void
    onSubmit : (event : FormEvent<HTMLFormElement>) => void
}