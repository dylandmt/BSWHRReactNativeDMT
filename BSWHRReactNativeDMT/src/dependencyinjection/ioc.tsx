import { asFunction, asValue, createContainer } from "awilix";
import LoginViewModel from "../../viewmodels/LoginViewModel";
import * as AuthDataSource from "../data/datasource/remote/AuthDataSource"
import { AuthRepository } from "../data/datasource/repository/AuthRepository";
import { LoginUseCase } from "../domain/usecases/auth/LoginUseCase";
import HomeViewModel from "../../viewmodels/HomeViewModel";
import { HomeUseCase } from "../domain/usecases/home/HomeUseCase";
import { HomeRepository } from "../data/datasource/repository/HomeRepository";
import * as HomeDataSource  from "../data/datasource/remote/HomeDataSource";
import * as GalleryDataSource from "../data/datasource/remote/GalleryDataSource"
import GalleryViewModel from "../../views/gallery/GalleryViewModel";
import { GalleryUseCase } from "../domain/usecases/gallery/GalleryUseCase";
import { GalleryRepository } from "../data/datasource/repository/GalleryRepository";
const container = createContainer();
container.register({
    LoginViewModel: asFunction(LoginViewModel),
    LoginUseCase: asFunction(LoginUseCase),
    AuthDataSource: asValue(AuthDataSource),
    AuthRepository: asFunction(AuthRepository),

    HomeViewModel: asFunction(HomeViewModel),
    HomeUseCase: asFunction(HomeUseCase),
    HomeRepository: asFunction(HomeRepository),
    HomeDataSource: asValue(HomeDataSource),

    GalleryViewModel: asFunction(GalleryViewModel),
    GalleryUseCase: asFunction(GalleryUseCase),
    GalleryRepository: asFunction(GalleryRepository),
    GalleryDataSource: asValue(GalleryDataSource)

});

export default container;