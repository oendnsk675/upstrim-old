<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar :name="getUserData.name" :username="getUserData.username" />
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state"/>
        
        <!-- content -->
        <section class="h-screen pb-7 pl-22em pt-24">

            <h2 class="text-4xl font-bold text-secondary text-left mb-7">My Profile</h2>

            <div class="flex flex-wrap gap-7">
                <!-- profile -->
                <div class="w-60% h-full flex flex-col items-center rounded-lg border px-5 py-6 bg-secondary bg-opacity-10">
                    <div class="w-32 h-32 bg-secondary mb-4 rounded-lg border overflow-hidden flex justify-center items-center">
                        <img src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                    </div>
                    <div class="mb-4 flex flex-col items-center">
                        <span class="font-bold text-xl text-secondary font-nunito ">Name</span>
                        <span class="font-normal block font-nunito opacity-60 text-secondary">{{getUserData.name}}</span>
                    </div>
                    <div class="mb-4 flex flex-col items-center">
                        <span class="font-bold text-xl text-secondary font-nunito ">Username</span>
                        <span class="font-normal block font-nunito opacity-60 text-secondary">@{{getUserData.username}}</span>
                    </div>
                    <div class="mb-4 flex flex-col items-center">
                        <span class="font-bold text-xl text-secondary font-nunito ">About Me</span>
                        <span class="font-normal text-center block font-nunito opacity-60 text-secondary">{{getUserData.about == null ? '...' : getUserData.about}}</span>
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
                <div class="w-35% h-full flex flex-col items-center px-5 py-6 rounded-lg border bg-secondary bg-opacity-10">
                    <div class="w-56 flex items-center justify-center h-56 mb-4 rounded-2xl bg-white border">
                        <qrcode-vue :value="value" :size="size" level="H" class="rounded-xl"/>
                    </div>
                    <button class="px-4 flex mb-4 justify-center gap-3 rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30  py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                        <font-awesome-icon icon="fa-solid fa-angles-down"/>
                        <span>Download QR Code</span>
                    </button>
                    
                    <span class="font-bold mb-4 text-xl text-secondary font-nunito ">Or</span>
                    
                    <!-- sahre link -->
                    <span class="text-lg mb-4 text-secondary font-nunito border-b border-dotted">https://upstrim.id/{{getUserData.username}}</span>
                    <button class="px-4 flex mb-4 justify-center gap-3 rounded-3xl items-center bg-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                        <font-awesome-icon icon="fa-solid fa-share-from-square"/>
                        <span>Share Your Link</span>
                    </button>
                    <!-- sahre link -->
                    
                </div>
                <!-- link -->
            </div>
            
        </section>
        <!-- content -->
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'
import QrcodeVue from 'qrcode.vue'
import { mapGetters, mapMutations } from 'vuex'

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
        QrcodeVue,
        SideBar
    },
    computed: {
        ...mapGetters(['getUserToken', 'getUserData'])
    },
    methods: {
        ...mapMutations(['setLoggedStatus', 'setToken', 'setDataUser']),
        
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
    created(){
        this.getData()
    }
}
</script>

<style scoped>
.w-35\% {
    width: 35%; 
}
.w-60\% {
    width: 60%; 
}

</style>