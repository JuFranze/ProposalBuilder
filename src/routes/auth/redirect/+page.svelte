<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { initializeMsal } from '$lib/auth';

    onMount(async () => {
        const msalInstance = await initializeMsal();
        try {
            await msalInstance.handleRedirectPromise();
            goto('/');
        } catch (error) {
            console.error('Error handling redirect:', error);
            // Handle error appropriately
        }
    });
</script>
