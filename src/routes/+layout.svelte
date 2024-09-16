<script>
    import "../app.css";
</script>

<div class="absolute px-7 h-[75px] flex items-center justify-between">
    <a href="/" class="flex items-center gap-3">
        <img src="logo.png" class="w-8 h-8">
        <p class="text-2xl font-[475]">Proposal Builder</p>
    </a>
</div>
<div class="w-screen h-screen custom-gradient-bg">
    <slot />
</div>

<style>
    .custom-gradient-bg {
        background-image: radial-gradient(circle at 80% 32%, #44ebc314 0%, #7ad8dd14 15%, #4473eb05 40%),
        radial-gradient(31.2% 31.19% at 49.79% 29.97%, #4473eb14 0%, #4473eb00 100%),
        radial-gradient(circle at 40% 95%, #8230ff0f 0%, #8230ff00 50%),
        linear-gradient(#ecf0f799 0%, #ecf0f799 100%);
    }
</style>