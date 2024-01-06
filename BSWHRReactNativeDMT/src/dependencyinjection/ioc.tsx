import { asFunction, asValue, createContainer } from "awilix";
import LoginViewModel from "../../viewmodels/LoginViewModel";
import * as AuthDataSource from "../data/datasource/remote/AuthDataSource"
import { AuthRepository } from "../data/datasource/repository/AuthRepository";
import { LoginUseCase } from "../domain/usecases/auth/LoginUseCase";
const container = createContainer();
container.register({
    LoginViewModel: asFunction(LoginViewModel),
    AuthDataSource: asValue(AuthDataSource),
    AuthRepository: asFunction(AuthRepository),
    LoginUseCase: asFunction(LoginUseCase)
});

export default container;