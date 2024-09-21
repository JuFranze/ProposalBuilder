import { initializeMsal } from '$lib/auth';

export async function handle({ event, resolve }) {
    const session = event.cookies.get('session');

    if (!session) {
        try {
            const msalInstance = await initializeMsal();
            const accounts = msalInstance.getAllAccounts();
            if (accounts.length > 0) {
                // Set a session cookie
                event.cookies.set('session', accounts[0].username, { path: '/' });
            }
        } catch (error) {
            console.error('Error initializing MSAL in server hook:', error);
        }
    }

    const response = await resolve(event);
    return response;
}
