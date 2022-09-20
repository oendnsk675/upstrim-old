<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar :name="getUserData.name" :username="getUserData.name"/>
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state"/>

        
        <!-- content -->
        <section class="pl-22em pt-28">
            <h2 class="text-4xl font-bold text-secondary text-left mb-7">Dashboard</h2>

            <div class="flex flex-wrap gap-5 ">
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer w-45% flex flex-col items-start justify-end overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp 4.000.000</span>
                    <span class="font-bold font-nunito text-lg text-secondary">Balance</span>
                </div>
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer flex flex-col items-start justify-end w-45% overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">100</span>
                    <span class="font-bold font-nunito text-lg text-secondary">Time Donations</span>
                </div>
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer flex flex-col items-start justify-end w-45% overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">1000</span>
                    <span class="font-bold font-nunito text-lg text-secondary">View Page</span>
                </div>
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:opacity-60 cursor-pointer flex flex-col items-start justify-end w-45% overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp 10.000.000</span>
                    <span class="font-bold font-nunito text-lg text-secondary">Amount Disbursed</span>
                </div>
            </div>
            
        </section>
        <!-- content -->
    </main>
  </div>
</template>

<script>
    
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'
import {  mapGetters, mapMutations } from 'vuex'

export default {
    name: "dashboard",
    data(){
        return {
            state: "dashboard"
        }
    },

    computed: {
        ...mapGetters(['getUserToken', 'getUserData'])
    },

    methods: {
        ...mapMutations(['setLoggedStatus', 'setToken', 'setDataUser']),
        // ...mapActions(['setDataUser']),

        getData: async function () {
            // console.log(localStorage.getItem("token"));
            await this.axios.get('profile', {
                headers: {
                    'x-api-key': this.getUserToken
                }
            })
            .then((response) => {
                // this.$swal('Hello Vue world!!!');
                this.setDataUser(response.data.data)
            }).catch(error => {
                if (error.response.status == 401) {
                    // unauthorized
                    this.$swal({
                        icon: 'error',
                        title: 'Please login first!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    }).then(() => window.location.href = '/signin')
                } else {
                    // something wrong
                    this.$swal({
                        icon: 'error',
                        title: 'Upps...',
                        text: 'Something went wrong, reload you\'r page!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    })
                }
                // console.error('error:', error.response);
            })
        }
    },
    
    components: {
        NavBar,
        SideBar
    },

    created(){
        this.getData()
    }
}
</script>

<style scoped>

.w-45\% {
    width: 22%;
}

</style>