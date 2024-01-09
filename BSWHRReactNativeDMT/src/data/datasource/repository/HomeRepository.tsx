import { AlbumData } from "../../../../models/AlbumData";
import { UserData, UsersData } from "../../../../models/UserData";
import { Resource } from "../../../domain/utils/Resource";
import { HomeDataSource } from "../remote/HomeDataSource";

export interface HomeRepository{
    getAllUsers():Promise<UserData[]>,
    getAlbumesListByUser(userId:string):Promise<AlbumData[]>
}

export const HomeRepository = ({ HomeDataSource }: {HomeDataSource: HomeDataSource}) => {
    return {
        async getAllUsers(){
            return await HomeDataSource.getAllUsers()
        },
        async getAlbumesListByUser(userId:string){
            return await HomeDataSource.getAlbumesListByUser(userId);
        }
    };
}