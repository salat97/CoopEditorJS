import { CodeMessage, ChatMessage, ControllMessage } from '../Tools/messages';
import { commandsTypes } from '../Entities/commandsTypes';

export const sendCodeMessage = (code = '') => (dispatch, getState, { sendMessage }) => {
    const { editor: { languageType, user, roomId } } = getState();
    const codeToSend = languageType === 'JCH' ? JSON.stringify(code) : code;
    sendMessage(JSON.stringify(CodeMessage(codeToSend, languageType, roomId, user)));
};

export const sendChatMessage = (message = '') => (dispatch, getState, { sendMessage }) => {
    const { editor: { user, roomId } } = getState();
    sendMessage(JSON.stringify(ChatMessage(message, roomId, user)));
};

export const sendControllMessage = (message = '', commandType = commandsTypes.CreateRoom) => (dispatch, getState, { sendMessage }) => {
    const { editor: { user, roomId } } = getState();
    sendMessage(JSON.stringify(ControllMessage(message, commandType, roomId, user)));
};
