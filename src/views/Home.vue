<template>
  <div>
    <NavBar/>
    <main class="w-full overflow-x-hidden">
          <!-- hero -->
          <section class="px-20 bg-primary py-8 pb-0 flex justify-between w-full">
                  <!-- left side -->
                  <div class="mt-28">
                      <h1 class="font-nunito text-6xl font-black text-secondary block">Share To Opens</h1>
                      <h1 class="font-nunito text-6xl font-black text-secondary">Your Donation</h1>
                      
                      <div class="p-2 mt-20 rounded-full px-6 pb-4 relative bg-secondary flex items-center bg-opacity-40">
                          <label for="name" class="text-xl text-secondary font-bold">traktirapp.com/</label>
                          <input type="text" name="name" id="name" class="focus:outline-none text-xl border-b-2 border-b-secondary w-40 text-secondary font-bold p-3 pb-1 pl-0 items-center bg-transparent border-secondary">
                          <button type="button" role="button" class="px-4 mt-2 hover:opacity-75 transition-opacity duration-300 py-1 rounded-xl ml-7 border border-secondary flex items-center gap-3">
                              <span class="text-secondary font-nunito font-semibold">create</span>
                          </button>
                      </div>
                  </div>
                  <!-- left side -->
  
                  <!-- right side -->
                  <div>
                      <img src="../../public/img/character/Asset1.png" class="w-29em ml-40">
                      <!-- <img src="@/assets/img/character/Asset 1.png" class="w-[29em] ml-40" alt=""> -->
                  </div>
                  <!-- right side -->
  
                  <div></div>
          </section>
          <!-- hero -->
          <!-- wave -->
          <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100F11" fill-opacity="1" d="M0,160L120,144C240,128,480,96,720,85.3C960,75,1200,85,1320,90.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
          <!-- wave -->
          
          <!-- card info about traktirapp -->
          <div class=""></div>
          <!-- card info about traktirapp -->
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
