import { useEffect, useState } from "react";
import { UserInformation } from "../models/UserInformation";
import { AlbumInformation } from "../models/AlbumInformation";
import { UserData } from "../models/UserData";
import { HomeUseCase } from "../src/domain/usecases/home/HomeUseCase";
import { Resource } from "../src/domain/utils/Resource";
import { AlbumData } from "../models/AlbumData";

const HomeViewModel = ({HomeUseCase}:{HomeUseCase: HomeUseCase}) => {

    const usersData : UserInformation[] = [
      {
        id: "1",
        name: "Scott Mendoza",
        username: "scott",
        albumes : [{
          id: "1",
          userId: "1",
          title: "Pegasus"
        },
        {
          id: "2",
          userId: "1",
          title: "Hercules"
        }]
      },
      {
        id: "2",
        name: "Juan Mendoza",
        username: "juan",
        albumes : [{
          id: "1",
          userId: "2",
          title: "Pegasus"
        },
        {
          id: "2",
          userId: "2",
          title: "Hercules"
        }]
      },
      {
        id: "3",
        name: "Pedro Mendoza",
        username: "scott_1",
        albumes : [{
          id: "1",
          userId: "3",
          title: "Kotlin"
        },
        {
          id: "2",
          userId: "3",
          title: "Csharp"
        }]
      }
    ]

    const initialAlbumToRemove = [
      {albumId: "", userId: ""}
    ];
      
  const [userListData, setUserListData] = useState<UserData[]>()
  const [usersDataState, setUsersDataState] = useState(usersData)
  const [albumesListData, setAlbumesListData] = useState<AlbumData[]>()
  const [albumesDeleted, setAlbumesDeleted] = useState<AlbumData[]>()
  const [albumToDelete, setAlbumToDelete] = useState({"id": 0, "title": "", "userId": 0})
  const [albumIDSelected, setAlbumIDSelected] = useState("")
  function handleRemove(albumSelected:AlbumInformation) {
    const userDataFiltered = usersDataState.find((user) => user.id===albumSelected.userId) as UserInformation
    const albumesFiltered = userDataFiltered.albumes.filter((album) => album.id !== albumSelected.id) as AlbumInformation[]
    const userDataUpdated = usersDataState.map(userData =>  userData.id === userDataFiltered.id?{...userData,"albumes":albumesFiltered}:userData)
    setUsersDataState(userDataUpdated)
  }

  const handleAlbumRemoved = async (albumData:AlbumData) =>{
    setAlbumToDelete(prev => albumData)
  }
  const handleAlbumIDSelected = async (albumID:string) => {
    setAlbumIDSelected(albumID)
  }
      

  const getUsersList = async () =>{
      await HomeUseCase.getAllUsers().then(users => setUserListData(users))
  }

  const getAlbumesListByUser = async (userId:string) =>{
      const albumesUser = await HomeUseCase.getAlbumesListByUser(userId).then(albumes => albumes as AlbumData[])
      setAlbumesListData(albumesUser)
  }
  
  return ({ 
    usersDataState,
    userListData,
    albumesListData,
    albumToDelete,
    albumIDSelected,
    handleRemove,
    getUsersList,
    handleAlbumRemoved,
    getAlbumesListByUser,
    handleAlbumIDSelected
  });
}

export default HomeViewModel;