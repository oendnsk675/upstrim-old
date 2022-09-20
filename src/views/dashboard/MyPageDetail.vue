<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar/>
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state"/>
        
        <!-- content -->
        <section class="container h-screen pb-7 flex flex-wrap gap-5 pl-22em pt-24">
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
                <div class="w-40 flex items-center justify-center h-56 mb-4 rounded-2xl bg-secondary bg-opacity-5 border">
                    <img src="../../../public/img/character/asset3.png">
                </div>
                <div class="flex flex-col mb-2">
                  <span class="font-nunito text-3xl text-secondary font-extrabold">
                  Stars
                </span>
                <span class="font-nunito text-secondary font-light text-opacity-50">
                  Rp {{amount}} / unit
                </span>
                </div>
                <!-- Banyak Bintang -->
                <div class="flex mt-5">
                  <button @click="decrement" :class="{'opacity-30 cursor-not-allowed': star == 1}">
                    <font-awesome-icon icon="fa-solid fa-circle-minus" class="text-3xl text-secondary hover:opacity-70 py-1 transition-all duration-300"/>
                  </button>
                  <span  class="w-10 mx-2 pt-1 bg-primary bg-opacity-30 text-white font-semibold border-secondary rounded-lg items-center flex justify-center bg-white">{{star}}</span>
                  <button @click="increment">
                    <font-awesome-icon icon="fa-solid fa-circle-plus" class="text-3xl text-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 " />
                  </button>
                </div>
                <!-- Banyak Pesanan -->
                <div class="mt-5 flex items-center gap-5">
                  <button @click="pickStar(5)" class="w-20 py-1 border-2 border-white text-white font-nunito text-sm rounded-full hover:bg-secondary hover:bg-opacity-30">5</button>
                  <button @click="pickStar(10)" class="w-20 py-1 border-2 border-white text-white font-nunito text-sm rounded-full hover:bg-secondary hover:bg-opacity-30">10</button>
                  <button @click="pickStar(25)" class="w-20 py-1 border-2 border-white text-white font-nunito text-sm rounded-full hover:bg-secondary hover:bg-opacity-30">25</button>
                  <button @click="pickStar(100)" class="w-20 py-1 border-2 border-white text-white font-nunito text-sm rounded-full hover:bg-secondary hover:bg-opacity-30">100</button>
                </div>
                <!-- Button -->
                <button @click="chosePayment" class="px-4 flex mt-7 mb-4 justify-center gap-3 rounded-3xl items-center bg-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
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
            size: 200,
            amount: 10000,
            star: 1
        }
    },
    computed: {
    },
    components: {
        NavBar,
        SideBar
    },
    methods: {
      increment: function () {
        this.star++
        this.amount = this.star * 10000 
      },
      decrement: function () {
        if (this.star > 1) {
          this.star--
          this.amount = this.star * 10000 
        }
      },
      pickStar: function (jumlah) {
        this.star = jumlah
        this.amount = this.star * 10000 
      },
      chosePayment: function () {
          var data = JSON.stringify({
            "amount": this.amount,
            "type": "T",
            "to_user": 2
          });

          var config = {
            method: 'post',
            url: 'http://localhost:8000/api/v1/invoice',
            headers: { 
              'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzNTI0ODU0LCJleHAiOjE2NjM2MTEyNTR9.LWgmtlH1H69bYEq4BB_dBhlLoWw-DLQ56qP5b69DCr4', 
              'Content-Type': 'application/json'
            },
            data : data
          };

          this.axios.post('/invoice', data, config)
          .then(function (response) {
            console.log(response.data.data);
            window.location.href = response.data.data
            // console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }
}
</script>

<style>

</style>