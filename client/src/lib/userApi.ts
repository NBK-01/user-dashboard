import { IUser, ICreateUser, IEditUser } from "./userType";

export const getAllUsers = async (): Promise<IUser[]> => {
    const res = await fetch("http://localhost:3000/users/me", {
        headers: {
            //Authorization jwt token here
        },
    })
    const users = await res.json()
    console.log(users)
    return users
    
}

export const createUser = async (user: ICreateUser): Promise<ICreateUser> => {
    const res = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(user),
    })

    const newUser = res.json()
    console.log(newUser)
    return newUser

}

export const signIn = async (user: ICreateUser): Promise<ICreateUser> => {
    const res = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            // 'Access-Control-Allow-Origin': "*",
            // 'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE, OPTIONS",
            // 'Access-Control-Allow-Headers': "Content-Type, Authorization",
        },
        body: JSON.stringify(user),
    })

    const token = res.json()
    console.log(token)
    return token

}


export const editUser = async (user: IEditUser): Promise<IEditUser> => {
    const res = await fetch(`http://localhost:3001/users/api/put/${user.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
    })

    const editUser = res.json()
    return editUser

}


export const deleteUser = async (id: string): Promise<void> => {
    const res = await fetch(`http://localhost:3001/users/api/delete/${id}`, {
        method: "DELETE",
    })
}