import AsyncStorage from "@react-native-async-storage/async-storage"
import { showToastMessage } from "../showToastMessage";

export const storeLocalData = async (key: string, value: object) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        showToastMessage('Gagal menyimpan data ke storage', 'danger')
    }
}

export const getLocalData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        showToastMessage('Gagagal mengambil data dari storage', 'danger')
    }
}