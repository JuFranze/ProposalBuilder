import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
    auth: {
        clientId: '388dac63-a039-40c6-ba99-ec9e9743e54f',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'http://localhost:5173/auth/redirect'
    }
};

let msalInstance = null;

export async function initializeMsal() {
    if (!msalInstance) {
        msalInstance = new PublicClientApplication(msalConfig);
        await msalInstance.initialize();
    }
    return msalInstance;
}
