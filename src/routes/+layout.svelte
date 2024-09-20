<svelte:head>
    <title>Proposal Builder</title>
</svelte:head>

<script>
    import "../app.css";
</script>

<div class="w-screen h-screen flex flex-col custom-gradient-bg">
    <div class="px-7 h-[75px] flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
            <img src="logo.png" class="w-8 h-8">
            <p class="text-2xl font-[475]">Proposal Builder</p>
        </a>
    </div>
    <div class="flex h-full">
        <div class="h-full pl-7 flex flex-col pt-[1%] gap-10">
            <a href="/new" class="ml-auto border-2 border-green-500 rounded-full py-1 px-6 text-green-600 text-lg whitespace-nowrap">+ Create new</a>
            <div class="flex flex-col gap-4 text-xl font-semibold">
                <a href="/drafts" class="flex gap-4 items-center">
                    <img src="/icon/paperclip.svg" class="w-6 h-6 mt-0.5">
                    <p>Drafts</p>
                </a>
                <a href="/proposals" class="flex gap-4 items-center">
                    <img src="/icon/book.svg" class="w-6 h-6 mt-0.5">
                    <p>Proposals</p>
                </a>
                <a href="/personas" class="flex gap-4 items-center">
                    <img src="/icon/person.svg" class="w-6 h-6 mt-0.5">
                    <p>Personas</p>
                </a>
                <a href="/settings" class="flex gap-4 items-center">
                    <img src="/icon/cog.svg" class="w-6 h-6 mt-0.5">
                    <p>Settings</p>
                </a>
            </div>
        </div>
        <slot />
    </div>
</div>

<style>
    .custom-gradient-bg {
        background-image: radial-gradient(circle at 80% 32%, #44ebc314 0%, #7ad8dd14 15%, #4473eb05 40%),
        radial-gradient(31.2% 31.19% at 49.79% 29.97%, #4473eb14 0%, #4473eb00 100%),
        radial-gradient(circle at 40% 95%, #8230ff0f 0%, #8230ff00 50%),
        linear-gradient(#ecf0f799 0%, #ecf0f799 100%);
    }
</style>
