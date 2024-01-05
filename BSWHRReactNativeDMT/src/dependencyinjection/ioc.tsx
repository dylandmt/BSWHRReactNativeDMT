import { asFunction, createContainer } from "awilix";
import LoginViewModel from "../../viewmodels/LoginViewModel";

const container = createContainer();
container.register({
    LoginViewModel: asFunction(LoginViewModel)
});

export default container;