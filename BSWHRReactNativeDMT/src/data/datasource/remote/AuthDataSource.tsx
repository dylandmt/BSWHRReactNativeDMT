import auth from '@react-native-firebase/auth';
import { GeneralError, Resource, Succes } from '../../../domain/utils/Resource';

export interface AuthDataSource {
    login(email: string, password: string): Promise<Resource>
}

export const login = async (email: string, password: string): Promise<Resource> => {
    try {
        const data = await auth().signInWithEmailAndPassword(email,password);
        return Promise.resolve(Succes(data));
    } catch (error: any) {
        return Promise.resolve(GeneralError(error.message))
    }
}
