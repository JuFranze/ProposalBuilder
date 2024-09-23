<svelte:head>
    <title>Proposal Builder</title>
</svelte:head>

<script>
    import "../app.css";

    import {onMount} from 'svelte';
    import {initializeMsal, handleRedirectPromise} from '$lib/auth';
    import {user, setUser, clearUser} from '$lib/store/userStore';

    onMount(async () => {
        try {
            // Handle any potential redirect first
            await handleRedirectPromise();

            // Check for existing accounts and automatically login if any
            const msalInstance = await initializeMsal();
            const currentAccounts = msalInstance.getAllAccounts();
            if (currentAccounts.length > 0) {
                setUser(currentAccounts[0]);
            } else {
                // No accounts found, proceed as usual (optional button)
                clearUser();
            }
        } catch (error) {
            console.error('Error handling redirect or login:', error);
            clearUser();
        }
    });

    async function signIn() {
        const msalInstance = await initializeMsal();
        msalInstance.loginRedirect({
            scopes: ["user.read"]
        });
    }

    async function signOut() {
        const msalInstance = await initializeMsal();
        await msalInstance.logoutRedirect();
        clearUser();
    }

    const tempUser = {
        name: "Stephen Rhodes",
        email: "sterhodes@microsoft.com",
        pfp: "https://i.pinimg.com/474x/81/8a/1b/818a1b89a57c2ee0fb7619b95e11aebd.jpg"
    }
</script>

<div class="w-screen h-screen flex flex-col custom-gradient-bg">
    <div class="px-7 h-[75px] flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
            <img src="logo.png" alt="Logo" class="w-8 h-8">
            <p class="text-2xl font-[475]">Proposal Builder</p>
        </a>
        {#if $user}
            <div class="flex items-center gap-3">
                <div class="flex flex-col text-2xl items-end">
                    <p class="text-lg font-[500]">{$user.name}</p>
                    <p class="text-[16px] font-[400] -mt-2.5">{$user.username}</p>
                </div>
                <img src={tempUser.pfp} alt="Profile picture" class="w-10 h-10 rounded-full">
            </div>
        {:else}
            <button on:click={signIn} class="ml-auto border-2 border-green-500 rounded-full py-1 px-8 text-green-600 text-lg whitespace-nowrap">Sign in</button>
        {/if}
    </div>
    <div class="flex h-full">
        <div class="h-full pl-7 flex flex-col pt-[1%] gap-10">
            <a href="/new"
               class="ml-auto border-2 border-green-500 rounded-full py-1 px-8 text-green-600 text-lg whitespace-nowrap">+
                Create new</a>
            <div class="flex flex-col gap-6 text-xl font-[500] pl-1.5">
                <a href="/drafts" class="flex gap-4 items-center">
                    <img src="/icon/paperclip.svg" alt="Drafts" class="w-6 h-6 mt-0.5">
                    <p>Drafts</p>
                </a>
                <a href="/proposals" class="flex gap-4 items-center">
                    <img src="/icon/book.svg" alt="Proposals" class="w-6 h-6 mt-0.5">
                    <p>Proposals</p>
                </a>
                <a href="/personas" class="flex gap-4 items-center">
                    <img src="/icon/person.svg" alt="Personas" class="w-6 h-6 mt-0.5">
                    <p>Personas</p>
                </a>
                <a href="/settings" class="flex gap-4 items-center">
                    <img src="/icon/cog.svg" alt="Settings" class="w-6 h-6 mt-0.5">
                    <p>Settings</p>
                </a>
            </div>
        </div>
        <slot/>
    </div>
</div>

<style>
    .custom-gradient-bg {
        background-image: radial-gradient(circle at 80% 32%, #44ebc314 0%, #7ad8dd14 15%, #4473eb05 40%), radial-gradient(31.2% 31.19% at 49.79% 29.97%, #4473eb14 0%, #4473eb00 100%), radial-gradient(circle at 40% 95%, #8230ff0f 0%, #8230ff00 50%), linear-gradient(#ecf0f799 0%, #ecf0f799 100%);
    }
</style>
