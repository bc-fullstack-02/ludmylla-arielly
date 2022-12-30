import * as SecureStore from 'expo-secure-store';

async function authHeader() {

    const token = await SecureStore.getItemAsync('token');

    const authHeader = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return authHeader;
}
export { authHeader };