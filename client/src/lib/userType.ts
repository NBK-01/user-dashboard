export interface ICreateUser {
    email: string, 
    password: string,
}


export interface IUser {
    id: number,
    firstName: string, 
    hashPass: string,
    lastName: string, 
    email: string, 
    role: string, 
}

export interface IEditUser {
    id: number,
    firstName: string, 
    lastName: string, 
    email: string, 
    role: string, 
}