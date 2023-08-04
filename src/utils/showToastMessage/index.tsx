import { MessageType, showMessage } from "react-native-flash-message";

export const showToastMessage = (message: string, type: MessageType = 'info') => {
    showMessage({ message: message, type: type })
}