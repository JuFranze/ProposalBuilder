import { writable } from 'svelte/store';

function createFileStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addFiles: (newFiles) => update(files => [...files, ...newFiles]),
        clearFiles: () => set([]),
        removeFile: (fileName) => update(files => files.filter(file => file.name !== fileName))
    };
}

export const uploadedFiles = createFileStore();