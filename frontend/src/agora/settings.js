import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4282c0f739d744b7b847dea9c5d2cf4d";
const token = "007eJxTYBCaEiHKEXlpxcqp/9sKFmmvZ3lobnySfa5b3Wo7fvk9Oe8UGEyMLIySDdLMjS1TzE1MksyTLEzMU1ITLZNNU4yS00xSrr66mtwQyMiQKP2GlZEBAkF8FobcxMw8BgYA+XMfPw==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";