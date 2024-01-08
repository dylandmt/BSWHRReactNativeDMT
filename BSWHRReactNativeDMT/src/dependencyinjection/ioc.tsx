import { asFunction, asValue, createContainer } from "awilix";
import LoginViewModel from "../../viewmodels/LoginViewModel";
import * as AuthDataSource from "../data/datasource/remote/AuthDataSource"
import { AuthRepository } from "../data/datasource/repository/AuthRepository";
import { LoginUseCase } from "../domain/usecases/auth/LoginUseCase";
import HomeViewModel from "../../viewmodels/HomeViewModel";
const container = createContainer();
container.register({
    LoginViewModel: asFunction(LoginViewModel),
    HomeViewModel: asFunction(HomeViewModel),
    AuthDataSource: asValue(AuthDataSource),
    AuthRepository: asFunction(AuthRepository),
    LoginUseCase: asFunction(LoginUseCase)
});

export default container;