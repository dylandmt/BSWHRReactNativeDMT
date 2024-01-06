import React,{ useState } from "react";
import { LoginUseCase } from "../src/domain/usecases/auth/LoginUseCase";
import { Resource } from "../src/domain/utils/Resource";

const LoginViewModel = ({ LoginUseCase }:{ LoginUseCase: LoginUseCase}) => {

    const [error, setError] = useState("")
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const onChange = (prop:string, value:any) =>{
        setValues({...values, [prop]: value})
    }
    const tryToLogin = async () => {
        if(isValidForm()){
            const data = await LoginUseCase.execute(values.email,values.password)
            console.log("DATA", data)
        }
    }

    const isValidForm = () :  boolean => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(values.email === "" || values.password===""){
            setError("Empty fields necessary")
            return false
        }
        if(values.password.length < 6){
            setError("The password needs least 6 characters")
            return false
        }

        if(reg.test(values.email) === false){
            setError("Invalid email")
            return false
        }
        
        return true;
    }

    return{
        ...values,
        onChange,
        tryToLogin,
        error,
        setError
    };
}

export default LoginViewModel;