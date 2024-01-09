import { ImageInformation } from "../../../../models/ImageInformation";

export interface GalleryDataSource {
    getAllImagesByAlbumID(albumId:string):Promise<ImageInformation[]>
}

export const getAllImagesByAlbumID = async (albumId:string): Promise<ImageInformation[]> => {
    try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        const json = await responce.json().then(json => json as ImageInformation[] )
        return Promise.resolve(json);
    } catch (error: any) {
        return Promise.resolve([])
    }
}
