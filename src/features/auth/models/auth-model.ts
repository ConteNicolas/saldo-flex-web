
export interface ISignUpRequest {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string
}


export interface ISignInRequest {
    username: string,
    password: string
}

export interface ISignInResponse {
    token: string
}