import { AlbumInformation } from "./AlbumInformation"

export interface UserInformation {
    id: string
    name: string,
    username : string,
    albumes : AlbumInformation []
}