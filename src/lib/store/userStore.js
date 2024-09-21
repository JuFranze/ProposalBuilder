import { writable } from 'svelte/store';

export const user = writable(null);

// You can add more user-related store functions here if needed
export function clearUser() {
    user.set(null);
}

export function setUser(userData) {
    user.set(userData);
}
