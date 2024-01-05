import React,{ useState } from "react";
import auth from '@react-native-firebase/auth';

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
            auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                console.log("Usuario logeado")
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                setError('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                setError('That email address is invalid!');
                }

                console.error(error);
            });
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