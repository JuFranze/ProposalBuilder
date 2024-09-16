<script>
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
</script>

<div class="w-full h-full custom-gradient-bg">
    <div class="h-[100%] mx-[13%] py-[11%] flex flex-col gap-5">
        <h1 class="-mt-5 font-semibold text-[36px]">Welcome</h1>
        <div class="flex items-center justify-center w-full h-full">
            <div class="flex w-full h-full gap-14">
                <div class="bg-white w-full h-full border-2 border-gray-400 rounded-2xl flex flex-col">
                    <div class="flex-grow">
                        <p>Upload</p>
                    </div>
                    <a href="/new" class="w-full h-fit border-t-2 border-t-gray-400">
                        <p class="py-5 px-7">Start new proposal</p>
                    </a>
                </div>
                <div class="flex flex-col w-full h-full gap-14">
                    <div class="bg-white w-full h-full border-2 border-gray-400 rounded-2xl">

                    </div>
                    <div class="flex w-full h-full gap-14">
                        <div class="bg-white w-full h-full border-2 border-gray-400 rounded-2xl">

                        </div>
                        <div class="bg-white w-full h-full border-2 border-gray-400 rounded-2xl">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>