import {LogLevel, PublicClientApplication} from '@azure/msal-browser';

const msalConfig = {
    auth: {
        clientId: '388dac63-a039-40c6-ba99-ec9e9743e54f',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'http://localhost:5173',
        navigateToLoginRequestUrl: true
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    },
    system: {
        allowNativeBroker: false,
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
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

export async function handleRedirectPromise() {
    const msalInstance = await initializeMsal();
    return msalInstance.handleRedirectPromise();
}
