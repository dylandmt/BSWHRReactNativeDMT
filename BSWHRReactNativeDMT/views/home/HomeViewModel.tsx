import { useState } from "react";
import { UserData } from "../../models/UserData";
import { HomeUseCase } from "../../src/domain/usecases/home/HomeUseCase";
import { AlbumData } from "../../models/AlbumData";

const HomeViewModel = ({HomeUseCase}:{HomeUseCase: HomeUseCase}) => {

  const [userListData, setUserListData] = useState<UserData[]>()
  const [albumesListData, setAlbumesListData] = useState<AlbumData[]>()

  const getUsersList = async () =>{
      await HomeUseCase.getAllUsers().then(users => setUserListData(users))
  }

  const getAlbumesListByUser = async (userId:string) =>{
      const albumesUser = await HomeUseCase.getAlbumesListByUser(userId).then(albumes => albumes as AlbumData[])
      setAlbumesListData(albumesUser)
  }
  
  return ({ 
    userListData,
    albumesListData,
    getUsersList,
    getAlbumesListByUser
  });
}

export default HomeViewModel;