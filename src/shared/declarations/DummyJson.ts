export type DummySession={
    accessToken:string,
    email:string,
    firstName:string,
    gender:string,
    id:string,
    image:string,
    lastName:string,
    refreshToken:string,
    username:string
}

export type DummyUser={
    username:string,
    password:string
}

export enum DummyEndpoints{
    LOGIN='https://dummyjson.com/auth/login'
}