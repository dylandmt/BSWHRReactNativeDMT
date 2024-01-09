import { AlbumData } from "../../../../models/AlbumData";
import { UserData } from "../../../../models/UserData";
import { HomeRepository } from "../../../data/datasource/repository/HomeRepository";

export interface HomeUseCase{
    getAllUsers():Promise<UserData[]>,
    getAlbumesListByUser(userId:string):Promise<AlbumData[]>
}

export const HomeUseCase = ({HomeRepository}:{HomeRepository: HomeRepository}) =>{
    return {
        async getAllUsers (){
            return await HomeRepository.getAllUsers();
        },
        async getAlbumesListByUser(userId:string){
            return await HomeRepository.getAlbumesListByUser(userId);
        }
    };
};