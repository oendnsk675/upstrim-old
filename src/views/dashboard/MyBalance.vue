<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar/>
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state"/>
        
        <!-- content -->
        <section class="h-screen pb-7 pl-22em pt-24">
            <h2 class="text-4xl font-bold text-secondary text-left mb-7">My Balance</h2>
            
            <div class="flex flex-wrap gap-5 ">
              <!-- profile -->
              <div class="w-38% h-60 rounded-xl flex flex-col border px-5 py-6 bg-gradient-to-br from-stone-800 to-primary bg-opacity-10">
                  <div class="flex flex-col items-start">
                      <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp 4.000.000</span>
                      <span class="font-bold font-nunito text-lg text-secondary">Balance</span>
                  </div>
                  <div class="flex justify-end h-full items-end">
                      <button role="button" class="flex items-center flex-col gap-3 hover:opacity-60 transition-opacity duration-300">
                          <font-awesome-icon icon="fa-solid fa-circle-down" class="text-3xl text-secondary"/>
                          <span class="font-bold font-nunito text-sm text-secondary">Withdraw</span>
                      </button>
                  </div>
              </div>
              <!-- profile -->

              <!-- link -->
              <div class="w-58% h-full ">
                  <div class="flex flex-col">
                      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full sm:px-6 lg:px-8">
                          <div class="overflow-hidden border rounded-lg h-full">
                            <table class="min-w-full text-center">
                              <thead class="border-b">
                                <tr>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    #
                                  </th>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    Price
                                  </th>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-secondary border-b">
                                  <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                  <td class="text-gray-900 font-semibold font-nunito px-6 py-2 whitespace-nowrap">
                                    Rp 14.000
                                  </td>
                                  <td class="text-gray-900 font-semibold font-nunito px-6 py-2 whitespace-nowrap">
                                    Pending
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default {
    name: "my balance",
    data(){
        return {
            state: "mybalance"
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