<template>
   <header class="bg-primary">
        <nav class="flex justify-between px-20 py-4">
            <!-- logo -->
            <router-link :to="{name: 'Home'}" class="flex gap-2 items-center hover:opacity-75 transition-opacity duration-300">
                <img src="../../public/img/logo.png" alt="logo upstrim">
                <h3 class="text-2xl font-nunito font-black text-secondary">UpStrim</h3>
            </router-link>
            <!-- logo -->

            <!-- right side -->
            <router-link :to="{name: 'SignIn'}" class="px-7 hover:opacity-75 transition-opacity duration-300 py-1.5 rounded-xl border border-secondary flex items-center gap-3">
                <i class="fa-solid fa-right-to-bracket text-secondary"></i>
                <span class="text-secondary font-nunito font-semibold">Sign In</span>
            </router-link>
            <!-- right side -->
        </nav>
    </header>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style>

</style>