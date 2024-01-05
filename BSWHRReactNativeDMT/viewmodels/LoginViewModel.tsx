import React,{ useState } from "react";

const LoginViewModel = () => {

    const [error, setError] = useState("")
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const onChange = (prop:string, value:any) =>{
        setValues({...values, [prop]: value})
    }
    const tryToLogin = () => {
        if(isValidForm()){
            console.log("Email: ", values.email)
            console.log("Password: ", values.password)
        }else{

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