import { useState } from "react";
import { GalleryUseCase } from "../../src/domain/usecases/gallery/GalleryUseCase";
import { ImageInformation } from "../../models/ImageInformation";
const GalleryViewModel = ({ GalleryUseCase }:{ GalleryUseCase: GalleryUseCase}) => {

    const [imagesListData, setImagesListData] = useState<ImageInformation[]>()

    const [albumTitle, setAlbumTitle] = useState("")
    const [albumId, setAlbumId] = useState("")
    const [getAllImagesCalled, setSetAllImagesCalled] = useState(false)

    const setAlbumInformation = (id:string,title:string) =>{
        setAlbumId(id)
        setAlbumTitle(title)
    }
    const getAllImagesByAlbumID = async (albumId:string) =>{
        await GalleryUseCase.getAllImagesByAlbumID(albumId).then(data => {setImagesListData(data)})
    }

    const getAllImages =  async () =>{
        await GalleryUseCase.getAllImages().then(data => setImagesListData(data))
    }

    const handleGetAllImagesCalled = (flag:boolean) =>{
        if(flag){
          getAllImages()
        }
        else{
          getAllImagesByAlbumID(albumId)
        }
        setSetAllImagesCalled(flag)
    }
    return{
        imagesListData,
        albumTitle,
        albumId,
        getAllImagesCalled,
        setSetAllImagesCalled,
        setAlbumInformation,
        getAllImagesByAlbumID,
        getAllImages,
        handleGetAllImagesCalled
    };
}

export default GalleryViewModel;