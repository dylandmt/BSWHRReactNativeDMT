import { useState } from "react";
import { GalleryUseCase } from "../../src/domain/usecases/gallery/GalleryUseCase";
import { ImageInformation } from "../../models/ImageInformation";
import { AlbumData } from "../../models/AlbumData";
const GalleryViewModel = ({ GalleryUseCase }:{ GalleryUseCase: GalleryUseCase}) => {

    const [imagesListData, setImagesListData] = useState<ImageInformation[]>()
    const [albumSelected, setAlbumSelected] = useState({"id": 0, "title": "", "userId": 0})

    const getAllImagesByAlbumID = async (albumId:string) =>{
        await GalleryUseCase.getAllImagesByAlbumID(albumId).then(data => {setImagesListData(data)})
    }

    const getAllImages =  async () =>{
        await GalleryUseCase.getAllImages().then(data => setImagesListData(data))
    }
    const handleAlbumSelected = async (albumData:AlbumData) =>{
        setAlbumSelected(albumData)
    }
    return{
        imagesListData,
        albumSelected,
        getAllImagesByAlbumID,
        handleAlbumSelected,
        getAllImages
    };
}

export default GalleryViewModel;