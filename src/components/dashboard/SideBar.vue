<template>
    <!-- sidebar -->
    <aside class="fixed top-0 left-0 w-1/5 h-screen overflow-y-auto px-7 border-r-2 border-secondary mt-20 pt-10">
        <ul class="relative">
            <li class="">
                <router-link :to="{name: 'Dashboard'}" 
                class="py-2 px-4 flex items-center gap-3 rounded-full text-secondary" 
                :class="{
                    'bg-secondary bg-opacity-30': state == 'dashboard',
                    'hover:bg-secondary hover:bg-opacity-20': state != 'dashboard',
                    }">
                    <font-awesome-icon icon="fa-solid fa-chart-line text-lg"/>
                    <span class="font-nunito font-semibold">Dashboard</span>
                </router-link>
            </li>
            <li class="">
                <router-link :to="{name: 'MyPage'}" 
                class="py-2 px-4 mt-4 transition-all duration-500 flex items-center gap-3 hover:bg-secondary hover:bg-opacity-20 rounded-full text-secondary" 
                :class="{
                    'bg-secondary bg-opacity-30': state == 'mypage',
                    'hover:bg-secondary hover:bg-opacity-20': state != 'mypage',
                    }">
                    <font-awesome-icon icon="fa-solid fa-pager text-lg"/>
                    <span class="font-nunito font-semibold">My Page</span>
                </router-link>
            </li>
            <li class="">
                <router-link :to="{name: 'MyBalance'}" 
                class="py-2 px-4 mt-4 transition-all duration-500 flex items-center gap-3 rounded-full text-secondary"
                :class="{
                    'bg-secondary bg-opacity-30': state == 'mybalance',
                    'hover:bg-secondary hover:bg-opacity-20': state != 'mybalance',
                    }">
                    <font-awesome-icon icon="fa-solid fa-credit-card text-lg"/>
                    <span class="font-nunito font-semibold">My Balance</span>
                </router-link>
            </li>
            <!-- <li class="py-2 px-4 items-center bg-opacity-20 mt-4 rounded-full text-secondary flex gap-3">
                <font-awesome-icon icon="fa-solid fa-pager text-lg"/>
                <span class="font-nunito font-semibold">My Page</span>
            </li>
            <li class="py-2 px-4 items-center bg-opacity-20 mt-4 rounded-full text-secondary flex gap-3">
                <font-awesome-icon icon="fa-solid fa-credit-card text-lg"/>
                <span class="font-nunito font-semibold">My Balance</span>
            </li> -->
            
            <hr class="border-b border-secondary my-5">

            <li class="">
                <router-link :to="{name: ''}" class="py-2 px-4 mt-4 transition-all duration-500 flex items-center gap-3 hover:bg-secondary hover:bg-opacity-20 rounded-full text-secondary">
                    <font-awesome-icon icon="fa-solid fa-right-from-bracket transform rotate-180"/>
                    <span class="font-nunito font-semibold">Sign Out</span>
                </router-link>
            </li>
        </ul>
    </aside>
    <!-- sidebar -->
</template>

<script>
export default {
    name: 'sidebar',
    props: {
        state:String,
    }
}
</script>

<style>

</style>