import { ImageInformation } from "../../../../models/ImageInformation";
import { GalleryDataSource } from "../remote/GalleryDataSource";

export interface GalleryRepository{
    getAllImagesByAlbumID(albumId:string):Promise<ImageInformation[]>,
    getAllImages():Promise<ImageInformation[]>
}

export const GalleryRepository = ({ GalleryDataSource }: {GalleryDataSource: GalleryDataSource}) => {
    return {
         async getAllImagesByAlbumID(albumId: string){
            return await GalleryDataSource.getAllImagesByAlbumID(albumId)
        },
        async getAllImages(){
            return await GalleryDataSource.getAllImages()
        }
    };
}