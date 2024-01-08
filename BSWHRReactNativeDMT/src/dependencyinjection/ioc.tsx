import { asFunction, asValue, createContainer } from "awilix";
import LoginViewModel from "../../viewmodels/LoginViewModel";
import * as AuthDataSource from "../data/datasource/remote/AuthDataSource"
import { AuthRepository } from "../data/datasource/repository/AuthRepository";
import { LoginUseCase } from "../domain/usecases/auth/LoginUseCase";
import HomeViewModel from "../../viewmodels/HomeViewModel";
import { HomeUseCase } from "../domain/usecases/home/HomeUseCase";
import { HomeRepository } from "../data/datasource/repository/HomeRepository";
import * as HomeDataSource  from "../data/datasource/remote/HomeDataSource";
const container = createContainer();
container.register({
    LoginViewModel: asFunction(LoginViewModel),
    HomeViewModel: asFunction(HomeViewModel),
    AuthDataSource: asValue(AuthDataSource),
    AuthRepository: asFunction(AuthRepository),
    LoginUseCase: asFunction(LoginUseCase),
    HomeUseCase: asFunction(HomeUseCase),
    HomeRepository: asFunction(HomeRepository),
    HomeDataSource: asValue(HomeDataSource)

});

export default container;