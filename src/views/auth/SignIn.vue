<template>
  <div class="bg-primary pb-32">
    <NavBar/>
    <main class="w-full relative overflow-x-hidden flex justify-center pt-10">

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
        
        <div class="rounded-md border border-secondary px-5 pt-6 pb-6 w-29%">
            <div class="flex flex-col gap-3 items-center">
                <img src="../../../public/img/logo.png" alt="logo upstrim" class="w-8">
                <h3 class="font-bold font-nunito text-3xl text-center text-secondary">Sign In</h3>
            </div>

            <form action="" class="mt-10">
                <input type="email" name="email" id="email" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito font-semibold text-secondary rounded outline-secondary w-full" placeholder="Email">
                <input type="password" id="password" name="password" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito mt-6 font-semibold text-secondary rounded outline-secondary w-full" placeholder="Password">
                
                <div class="mt-5 flex justify-end">
                    <a href="" class="font-semibold font-nunito text-secondary border-b border-dotted border-b-secondary">Forget Password?</a>
                </div>
                
                <router-link :to="{name: 'Dashboard'}" type="submit" class="w-full rounded py-1.5 hover:opacity-75 transition-opacity duration-300 bg-secondary text-lg font-nunito mt-8 font-semibold">Sign Ins</router-link>
            </form>

            <div class="text-secondary mt-5 flex items-center gap-2 font-semibold font-nunito">
                <span>Don't have an account yet?</span>
                <router-link :to="{name: 'SignUp'}" class="text-red-500">Sign Up</router-link></div>
        </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'

export default {
  name: 'sign in',
  components: {
    NavBar
  }
}
</script>

<style>

</style>