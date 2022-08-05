<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar/>
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state"/>
        
        <!-- content -->
        <section class="container h-screen pb-7 flex flex-wrap gap-5 pl-19em pt-24">
            <!-- profile -->
            <div class="w-45% h-full flex flex-col items-center rounded-lg border px-5 py-6 bg-secondary bg-opacity-10">
                <div class="w-32 h-32 bg-secondary mb-4 rounded-lg border overflow-hidden flex justify-center items-center">
                    <img src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                </div>
                <div class="mb-4 flex flex-col items-center">
                    <span class="font-bold text-xl text-secondary font-nunito ">Name</span>
                    <span class="font-normal block font-nunito opacity-60 text-secondary">Osi gans</span>
                </div>
                <div class="mb-4 flex flex-col items-center">
                    <span class="font-bold text-xl text-secondary font-nunito ">Username</span>
                    <span class="font-normal block font-nunito opacity-60 text-secondary">@osi-gans</span>
                </div>
                <div class="mb-4 flex flex-col items-center">
                    <span class="font-bold text-xl text-secondary font-nunito ">About Me</span>
                    <span class="font-normal text-center block font-nunito opacity-60 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur? Quam facere, temporibus ut laboriosam doloribus odio eveniet voluptate qui!</span>
                </div>
                <div class="mt-5">
                    <button class="px-20 flex justify-center gap-3 rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30  py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                        <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
                        <span>Edit Page</span>
                    </button>
                </div>
            </div>
            <!-- profile -->

            <!-- link -->
            <div class="w-45% h-full flex flex-col items-center px-5 py-6 rounded-lg border bg-secondary bg-opacity-10">
                <div class="w-56 flex items-center justify-center h-56 mb-4 rounded-2xl bg-secondary bg-opacity-5 border">
                    <img src="../../../public/img/character/asset3.png">
                </div>
                <div class="flex flex-col mb-2">
                  <span class="font-nunito text-3xl text-secondary font-extrabold">
                  Stars
                </span>
                <span class="font-nunito text-secondary font-light text-opacity-50">
                  Rp 10.000 / unit
                </span>
                </div>
                <!-- Banyak Bintang -->
                <div class="flex mt-5">
                  <button>
                    <font-awesome-icon icon="fa-solid fa-circle-minus" class="text-3xl text-secondary hover:opacity-70 py-1 transition-all duration-300"/>
                  </button>
                  <span  class="w-10 mx-2 pt-1 flex justify-center bg-white">1</span>
                  <button>
                    <font-awesome-icon icon="fa-solid fa-circle-plus" class="text-3xl text-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 " />
                  </button>
                </div>
                <!-- Banyak Pesanan -->
                <div class="mt-5 flex gap-5">
                  <button class="px-5 border-2 border-white text-white font-nunito text-xs rounded-full hover:bg-primary">5 Bintang</button>
                  <button class="px-5 border-2 border-white text-white font-nunito text-xs rounded-full hover:bg-primary">10 Bintang</button>
                  <button class="px-5 border-2 border-white text-white font-nunito text-xs rounded-full hover:bg-primary">25 Bintang</button>
                  <button class="px-5 border-2 border-white text-white font-nunito text-xs rounded-full hover:bg-primary">100 Bintang</button>
                </div>
                <!-- Button -->
                <button class="px-4 flex mt-7 mb-4 justify-center gap-3 rounded-3xl items-center bg-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                  <span>Choose Payment Method</span>
                </button>
                <!-- sahre link -->
                
            </div>
            <!-- link -->
        </section>
        <!-- content -->
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'

export default {
    name: "my page",
    data(){
        return {
            state: "mypage",
            value: 'https://example.com',
            size: 200
        }
    },
    components: {
        NavBar,
        SideBar
    }
}
</script>

<style>

</style>