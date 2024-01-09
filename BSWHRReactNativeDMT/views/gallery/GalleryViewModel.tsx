import { useState } from "react";
import { GalleryUseCase } from "../../src/domain/usecases/gallery/GalleryUseCase";
import { ImageInformation } from "../../models/ImageInformation";
const GalleryViewModel = ({ GalleryUseCase }:{ GalleryUseCase: GalleryUseCase}) => {

    const [imagesListData, setImagesListData] = useState<ImageInformation[]>()

    const getAllImagesByAlbumID = async (albumId:string) =>{
        await GalleryUseCase.getAllImagesByAlbumID(albumId).then(data => {setImagesListData(data)})
    }

    const getAllImages =  async () =>{
        await GalleryUseCase.getAllImages().then(data => setImagesListData(data))
    }
    return{
        imagesListData,
        getAllImagesByAlbumID,
        getAllImages
    };
}

export default GalleryViewModel;