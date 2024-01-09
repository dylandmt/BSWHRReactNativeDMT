import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { UserData } from "../../models/UserData";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";

interface Props {
    usersData:UserData[],
    navigationManager : StackNavigationProp<RootStackParamList>
}
const UsersList = ({usersData,navigationManager} : Props) =>{
    const listRef = useRef<FlatList>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if(currentIndex>0){
            listRef.current?.scrollToIndex({
                index:currentIndex,
                animated: true
              })
        }
    }, [currentIndex])
    
    return(
        <FlatList
        ref={listRef}
        initialScrollIndex={currentIndex}
        style={{ marginBottom: 100}}
            data={usersData}
            renderItem={({ item, index}) => (
            <UserItem userData={item} elementIndex={index} onElementSelected={setCurrentIndex}
                navigationManager={navigationManager}/> )}
            keyExtractor={(item, index) => index.toString()}/>
    );
}

export default UsersList;