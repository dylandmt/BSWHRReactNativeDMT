import { AuthRepository } from "../../../data/datasource/repository/AuthRepository";
import { Resource } from "../../utils/Resource";

export interface LoginUseCase{
    execute(email: string,password: string):Promise<Resource>
}

export const LoginUseCase = ({AuthRepository}:{AuthRepository: AuthRepository}) =>{
    return {
        async execute (email:string,password:string){
            return await AuthRepository.login(email,password);
        }
    };
};