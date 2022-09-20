<template>
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
                        <span class="font-semibold text-sm font-nunito text-secondary">{{name}}</span>
                        <span class="font-thin font-nunito text-secondary block text-xs">@{{username}}</span>
                    </div>
                    <div class="bg-secondary rounded-lg w-9 h-9 p-1  flex justify-center items-center">
                        <img class="w-full h-full object-cover -mt-1" src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                    </div>
                </button>
            </div>
            <!-- right side -->
        </nav>
    </header>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    name: 'navbar',
    props: ['name', 'username'],
    methods: {
        
    }
}
</script>

<style>

</style>