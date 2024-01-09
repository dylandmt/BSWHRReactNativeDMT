import { UserData } from "../../../../models/UserData";
import { AlbumData } from "../../../../models/AlbumData";

export interface HomeDataSource {
    getAllUsers(): Promise<UserData[]>,
    getAlbumesListByUser(userId:string):Promise<AlbumData[]>
}

export const getAllUsers = async (): Promise<UserData[]> =>{ 
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await responce.json().then(json => json as UserData[])
        return Promise.resolve(json);
    } catch (error: any) {
        return Promise.resolve([]);
    }
}

export const getAlbumesListByUser = async (userId:string):Promise<AlbumData[]> =>{
    try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        const json = await responce.json().then(json => json as AlbumData[])
        return Promise.resolve(json);
    } catch (error: any) {
        return Promise.resolve([]);
    }
}