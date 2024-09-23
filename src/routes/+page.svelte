<script>
    import {user} from "$lib/store/userStore.js";

    const msalConfig = {
        auth: {
            clientId: "b0524871-78ca-4941-8525-095e8de7b08f",
            authority: "https://login.microsoftonline.com/2d32d8ff-6c92-470f-b556-00e1565a66cd/",
            redirectUri: "http://localhost:5173/" // Replace with a blank page URL
        }
    };

    import { PublicClientApplication } from "@azure/msal-browser";

    let msalInstance;
    let userProfile = null; // Initialize userProfile to store user data

    async function initializeMsal() {
        msalInstance = new PublicClientApplication(msalConfig);
        await msalInstance.initialize(); // Initialize MSAL before using other APIs
    }

    async function login() {
        console.log("he");
        if (!msalInstance) {
            await initializeMsal(); // Initialize if not already done
        }

        try {
            const loginResponse = await msalInstance.loginPopup({
                scopes: ["user.read"] // Replace with your desired scopes
            });

            if (loginResponse.accessToken) {
                // Retrieve user profile information
                const headers = new Headers({
                    Authorization: `Bearer ${loginResponse.accessToken}`
                });
                const response = await fetch('https://graph.microsoft.com/v1.0/me', { headers });
                alert(JSON.stringify(response))
                userProfile = await response.json();
            }

            return loginResponse; // Access user information from loginResponse
        } catch (error) {
            console.error(error);
            return null; // Handle login errors
        }
    }

    initializeMsal(); // Call initialization on component load

    import { goto } from '$app/navigation';
    import { uploadedFiles } from '$lib/store/fileStore.js';

    export let multiple = true;
    export let accept = ".pdf,.csv,.txt,.xlsx,.doc,.docx,.ppt,.pptx,.eml";

    let fileInput;
    let dragOver = false;

    function handleClick() {
        fileInput.click();
    }

    function handleFileChange(event) {
        const files = event.target.files;
        if (files && files.length > 0) {
            handleFiles(files);
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
        dragOver = true;
    }

    function handleDragLeave() {
        dragOver = false;
    }

    function handleDrop(event) {
        event.preventDefault();
        dragOver = false;
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            handleFiles(files);
        }
    }

    function handleFiles(files) {
        // Convert FileList to Array and add to store
        const fileArray = Array.from(files);
        uploadedFiles.addFiles(fileArray);

        // Navigate to /new/
        goto('/new/');
    }
</script>

<div class="w-full h-[100%] custom-gradient-bg">
    <div class="h-full mx-[13%] flex flex-col pt-[1%] pb-[15%] gap-[5%]">
        <h1 class="font-semibold text-[36px]">Welcome{$user ? ', ' + $user.name + '!' : '!'}</h1>
        <div class="flex items-center justify-center w-full h-[90%]">
            <div class="flex w-full h-full gap-6">
                <div class=" bg-[#E6F0E5] w-full h-full pane-shadow rounded-2xl flex flex-col">
                    <div class="flex-grow flex items-center">
                        <div
                                class="custom-dashed-border py-[15%] mx-[15%] w-full flex flex-col items-center cursor-pointer transition-colors duration-300 ease-in-out"
                                class:bg-blue-100={dragOver}
                                on:click={handleClick}
                                on:dragover={handleDragOver}
                                on:dragleave={handleDragLeave}
                                on:drop={handleDrop}
                        >
                            <p class="text-3xl mb-2">Upload files here</p>
                            <p>.eml .docx .ppt .pdf</p>
                            <input
                                    type="file"
                                    class="hidden"
                                    bind:this={fileInput}
                                    on:change={handleFileChange}
                                    {multiple}
                                    {accept}
                            />
                        </div>
                    </div>
                    <a href="/new" class="w-full h-fit border-t-2 border-t-gray-400 bg-white rounded-b-2xl">
                        <div class="py-5 px-6">
                            <p class="font-bold">Start new proposal</p>
                            <p class="">Upload all of the background request materials to begin.</p>
                        </div>
                    </a>
                </div>
                <div class="flex flex-col w-full h-full gap-5">
                    <div class=" bg-[#E6F0E5] w-full h-full rounded-2xl flex flex-col pane-shadow">
                        <div class="flex-grow flex items-center px-[5%] py-[3%] gap-5">
                            {#each [1, 2, 3, 4] as item}
                                <div class="bg-white w-full h-full border-[1px] border-gray-400"></div>
                            {/each}
                        </div>
                        <a href="/new" class="w-full h-fit border-t-2 border-t-gray-400 bg-white rounded-b-2xl">
                            <div class="flex px-6 items-center justify-between py-5">
                                <p class="font-bold">Continue from in-progress proposals</p>
                                <p>See all</p>
                            </div>
                        </a>
                    </div>
                    <div class="flex w-full h-full gap-6">
                        <div class=" bg-[#E6F0E5] w-full h-full pane-shadow rounded-2xl flex flex-col">
                            <div class="flex-grow flex items-center">

                            </div>
                            <a href="/new" class="w-full h-fit border-t-2 border-t-gray-400 bg-white rounded-b-2xl">
                                <p class="py-5 px-6 font-bold">View proposal repository</p>
                            </a>
                        </div>
                        <div class=" bg-[#E6F0E5] w-full h-full pane-shadow rounded-2xl flex flex-col">
                            <div class="flex-grow flex items-center">

                            </div>
                            <a href="/personas" class="w-full h-fit border-t-2 border-t-gray-400 bg-white rounded-b-2xl">
                                <p class="py-5 px-6 font-bold">View/modify personas</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .custom-dashed-border {
        border-style: dashed;
        border-width: 2px;
        border-color: #9CA3AF;  /* This is equivalent to Tailwind's gray-400 */
        border-dash: 30px;  /* Length of each dash */
        border-gap: 10px;  /* Gap between dashes */
    }

    p {
        color: #707070;
    }
</style>
