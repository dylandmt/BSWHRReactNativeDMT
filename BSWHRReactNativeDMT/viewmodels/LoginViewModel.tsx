import React,{ useState } from "react";

const LoginViewModel = () => {
    const [credentials, setCredentials] = React.useState({
        email: "",
        password: ""
    })

    const handleCredentialChange = (property:string, value:any) =>{
        setCredentials({...credentials, [property]: value})
    }

    return{
        ...credentials,
        handleCredentialChange
    };
}

export default LoginViewModel;