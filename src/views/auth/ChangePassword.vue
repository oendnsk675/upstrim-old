<template>
    <div>
        <div class="bg-primary overflow-x-hidden h-screen">
        <header class="fixed w-full">
        <nav class="top-0 left-0 flex justify-between px-20 py-4 shadow-lg">
            <!-- logo -->
            <router-link :to="{name: 'Home'}" class="flex gap-2 items-center hover:opacity-75 transition-opacity duration-300">
                <img src="../../../public/img/logo.png" alt="logo upstrim">
                <h3 class="text-2xl font-nunito font-black text-secondary">UpStrim</h3>
            </router-link>
            <!-- logo -->

            <!-- right side -->
            <div class="flex gap-10">
                <!-- notif -->
                <font-awesome-icon role="button" icon="fa-solid fa-bell" class="text-2xl hover:opacity-60 transition-opacity duration-300 text-secondary mt-1"/>
                <!-- notif -->

                <button class="flex gap-3">
                    <div class="-mt-1">
                        <span class="font-semibold text-sm font-nunito text-secondary">Osi gans</span>
                        <span class="font-thin font-nunito text-secondary block text-xs">@Osi-gans</span>
                    </div>
                    <div class="bg-secondary rounded-lg w-9 h-9 p-1  flex justify-center items-center">
                        <img class="w-full h-full object-cover -mt-1" src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                    </div>
                </button>
            </div>
            <!-- right side -->
        </nav>
        </header>
        <main class="w-full relative overflow-x-hidden flex justify-center pt-10 top-24">
            <!-- Gambar -->
            <!-- cloud left -->
        <div class="opacity-50">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-10 left-28 w-8" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-20 left-96 w-16" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-40 left-36 w-12" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-40 left-80 w-12" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-60 left-80 w-16" alt="">
        </div>
        <!-- cloud left -->

        <!-- cloud right -->
        <div class="opacity-50">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-20 right-28 w-8" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-20 right-96 w-16" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-40 right-72 w-12" alt="">
            <!-- <img src="../../../public/img/character/Asset2.png" class="absolute top-40 right-80 w-12" alt=""> -->
            <img src="../../../public/img/character/Asset2.png" class="absolute top-60 right-80 w-16" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-0 right-[30rem] w-16" alt="">
        </div>
        <!-- cloud right -->
            <!-- ISI -->
            <div class="rounded-md border border-secondary px-5 pt-6 pb-6 w-29%">
            <div class="flex flex-col gap-3 items-center">
                <img src="../../../public/img/logo.png" alt="logo upstrim" class="w-8">
                <h3 class="font-bold font-nunito text-3xl text-center text-secondary">New Password</h3>
            </div>
            <form action="" class="mt-1">
                <input type="password" id="password" name="password" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito mt-6 font-semibold text-secondary rounded outline-secondary w-full" placeholder="New Password">
                <input type="password" id="password" name="password" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito mt-6 font-semibold text-secondary rounded outline-secondary w-full" placeholder="Confirm New Password">
                <router-link :to="{name: 'Dashboard'}" type="submit" class="w-full rounded py-1.5 hover:opacity-75 transition-opacity duration-300 bg-secondary text-lg font-nunito mt-8 font-semibold">Change</router-link>
            </form>
            </div>
        </main>
    </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>