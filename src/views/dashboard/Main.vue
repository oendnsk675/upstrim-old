<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar/>
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state"/>
        
        <!-- content -->
        <section class="container flex flex-wrap gap-5 pl-19em pt-28">
            <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer w-60 flex flex-col items-start justify-end overflow-hidden h-40 bg-opacity-10 border rounded-lg">
                <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp 4.000.000</span>
                <span class="font-bold font-nunito text-lg text-secondary">Balance</span>
            </div>
            <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer flex flex-col items-start justify-end w-60 overflow-hidden h-40 bg-opacity-10 border rounded-lg">
                <span class="font-bold font-nunito text-2xl block text-secondary mt-3">100</span>
                <span class="font-bold font-nunito text-lg text-secondary">Time Donations</span>
            </div>
            <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer flex flex-col items-start justify-end w-60 overflow-hidden h-40 bg-opacity-10 border rounded-lg">
                <span class="font-bold font-nunito text-2xl block text-secondary mt-3">1000</span>
                <span class="font-bold font-nunito text-lg text-secondary">View Page</span>
            </div>
            <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer flex flex-col items-start justify-end w-60 overflow-hidden h-40 bg-opacity-10 border rounded-lg">
                <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp 10.000.000</span>
                <span class="font-bold font-nunito text-lg text-secondary">Amount Disbursed</span>
            </div>
        </section>
        <!-- content -->
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'

export default {
    name: "dashboard",
    data(){
        return {
            state: "dashboard"
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