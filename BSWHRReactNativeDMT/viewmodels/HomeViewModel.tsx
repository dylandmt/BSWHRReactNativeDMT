import { useState } from "react";
import { UserInformation } from "../models/UserInformation";
import { AlbumInformation } from "../models/AlbumInformation";

const HomeViewModel = () => {

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
      
  const [usersDataState, setUsersDataState] = useState(usersData)

  function handleRemove(albumSelected:AlbumInformation) {
    const userDataFiltered = usersDataState.find((user) => user.id===albumSelected.userId) as UserInformation
    const albumesFiltered = userDataFiltered.albumes.filter((album) => album.id !== albumSelected.id) as AlbumInformation[]
    const userDataUpdated = usersDataState.map(userData =>  userData.id === userDataFiltered.id?{...userData,"albumes":albumesFiltered}:userData)
    setUsersDataState(userDataUpdated)
  }

  return ({ 
    usersDataState,
    handleRemove
  });
}

export default HomeViewModel;