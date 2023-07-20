import { IUser, ICreateUser, IEditUser } from "./userType";

export const getAllUsers = async (): Promise<IUser[]> => {
    const res = await fetch("http://localhost:3001/users/api/getall")
    const users = await res.json()
    return users
}

export const createUser = async (user: ICreateUser): Promise<ICreateUser> => {
    const res = await fetch("http://localhost:3001/users/api/post", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
    })

    const newUser = res.json()
    return newUser

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