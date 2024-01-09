import { GalleryRepository } from "../../../data/datasource/repository/GalleryRepository";
import { ImageInformation } from "../../../../models/ImageInformation";
export interface GalleryUseCase{
    getAllImagesByAlbumID(albumId:string):Promise<ImageInformation[]>,
    getAllImages():Promise<ImageInformation[]>
}

export const GalleryUseCase = ({GalleryRepository}:{GalleryRepository: GalleryRepository}) =>{
    return {
        async getAllImagesByAlbumID(albumId:string){
            return await GalleryRepository.getAllImagesByAlbumID(albumId);
        },
        async getAllImages(){
            return await GalleryRepository.getAllImages()
        }
    };
};