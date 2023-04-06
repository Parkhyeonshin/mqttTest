import { atom } from "recoil";

export const mqttMessage = atom<any>({
    key: "mqttMessage",
    default: undefined,
});
export const mqttTopic = atom<any>({
    key: "mqttTopic",
    default: undefined,
});
