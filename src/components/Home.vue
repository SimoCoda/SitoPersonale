<template>
  <div class="bg-white" id="top">
    <nav class="container border-b-[1px] border-b-black mx-auto md:flex md:justify-between md:items-center xl:border-0">
      <div class="flex items-center justify-between">
        <router-link to="/"
          class="text-xl font-bold text-black md:text-2xl">
          <img src="../assets/image/logo.png" alt="logo" width="35" class="top-2 mb-3 relative xl:w-16" id="logo" @click="goBio">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-black hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current" id="hamburger">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-1 space-y-3 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-14 md:mt-2">
        <li class="text-black text-2xl cursor-pointer underline" @click="goBio">Home</li>
        <li class="text-black text-2xl cursor-pointer" @click="goCv">Cv</li>
        <li class="text-black text-2xl cursor-pointer" @click="goPortfolio">Portfolio</li>
        <li class="text-black text-2xl cursor-pointer" @click="goContattami">Contattami</li>
      </ul>
    </nav>
  </div>

  <div class="mt-4 w-full relative xl:mb-20">
    <div v-if="!skills" class="xl:flex">
      <div class="relative xl:top-32 xl:left-24">
        <img src="../assets/image/home/io.png" alt="io" width="320" class="m-auto mb-2 border-2 border-black xl:border-4 xl:border-black xl:w-[650px]" id="image">
      </div>
      <div class="relative bg-white rounded-lg w-[300px] top-8 m-auto p-3 pb-0 xl:w-[800px] xl:left-[100px] xl:top-36" id="text">
        <h1 class="mb-3 text-3xl xl:mb-2 xl:text-4xl xl:pb-4"><i>Simone Codarin</i></h1>
        <hr class="mb-3">
        <p class="text-sm xl:text-3xl xl:mt-12 xl:pb-4 ">Sono un giovane <span class="font-semibold italic"> Frontend Developer</span> che vorrebbe far diventare la sua passione un lavoro,
          residente a Spilimbergo in provincia di Pordenone.
        </p>
          <h3 class="text-right pb-3 mt-3 font-bold xl:text-xl" @click="showSkills">Skills<img src="../assets/image/home/arrowRight.png" alt="back" class="w-2 mt-1 ml-2 float-right xl:w-4"></h3>
      </div>
    </div>
      <div v-else class="relative bg-white rounded-lg w-[300px] m-auto xl:w-[1200px] xl:top-14 xl:left-7 xl:p-4">
        <div class="flex">
        <div class="m-auto mt-4 xl:flex">
          <div class="flex mb-4 xl:flex-col">
            <img src="../assets/image/loghi_nome/javascript.png" width="70" alt="javascript" class="mr-10 xl:m-10 xl:w-40" id="skill1">
            <img src="../assets/image/loghi_nome/vueJs.png" width="70" alt="vuejs" class="xl:m-10 xl:w-40" id="skill2">
          </div>
          <div class="flex mb-4 xl:flex-col">
            <img src="../assets/image/loghi_nome/tailwind.png" width="70" alt="tailwind" class="mr-10 xl:m-10 xl:w-40" id="skill3">
            <img src="../assets/image/loghi_nome/chartJs.png" width="70" alt="chartjs" class="xl:m-10 xl:w-40" id="skill4">
          </div>
          <div class="flex mb-4 xl:flex-col">
            <img src="../assets/image/loghi_nome/pinia.png" width="70" alt="pinia" class="mr-10 xl:m-10 xl:w-40" id="skill5">
            <img src="../assets/image/loghi_nome/boostrap.png" width="70" alt="boostrap" class="xl:m-10 xl:w-40" id="skill6">
          </div>
          <div class="flex mb-4 xl:flex-col">
            <img src="../assets/image/loghi_nome/photoshop.png" width="70" alt="photoshop" class="mr-10 xl:m-10 xl:w-40" id="skill7">
            <img src="../assets/image/loghi_nome/illustrator.png" width="70" alt="illustrator" class="xl:m-10 xl:w-40" id="skill8">
          </div>
          <div class="flex xl:flex-col">
            <img src="../assets/image/loghi_nome/inDesign.png" width="70" alt="indesign" class="mr-10 xl:m-10 xl:w-40" id="skill9">
            <img src="../assets/image/loghi_nome/visualStudio.png" width="70" alt="indesign" class="xl:m-10 xl:w-40" id="skill10">
          </div>
        </div>
        </div>
        <h3 class="text-left pb-3 mt-3" @click="showSkills"><img src="../assets/image/home/arrowLeft.png" alt="back" class="w-3 ml-5 xl:w-5"></h3>
      </div>
  </div>

</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router';

export default {
  name: "Home",
  components: {  },
    setup() {
      const router = useRouter()
      let showMenu = ref(false);
      let skills = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      
      const goBio = () => {
        router.push('/')
      }
      const goCv = () => {
        router.push('/cv')
      }
      const goPortfolio = () => {
        router.push('/portfolio')
      }
      const goContattami = () => {
        router.push('/contattami')
      }
      const showSkills = () => {
        skills.value = !skills.value
        console.log(skills.value)
      }

      return { showMenu,skills, toggleNav, goBio, goCv, goPortfolio, goContattami, showSkills };
  }
};
</script>

<style scoped>
    #logo {
        animation: opacity 2s;
        animation-timing-function: linear;
    }
    #hamburger{
      animation: opacity 3s;
      animation-timing-function: ease;
    }
    #image{
      animation: opacity 2s;
      animation-timing-function: ease;
    }
    #text{
      animation: opacity 1s;
      animation-timing-function: linear;
    }
    @keyframes opacity {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    #skill1{
      animation: opacity 1s;
      animation-timing-function: ease;
    }
    #skill2{
      animation: opacity 1.5s;
      animation-timing-function: ease;
    }#skill3{
      animation: opacity 2s;
      animation-timing-function: ease;
    }#skill4{
      animation: opacity 2.5s;
      animation-timing-function: ease;
    }#skill5{
      animation: opacity 3s;
      animation-timing-function: ease;
    }#skill6{
      animation: opacity 3.5s;
      animation-timing-function: ease;
    }#skill7{
      animation: opacity 4s;
      animation-timing-function: ease;
    }#skill8{
      animation: opacity 4.5s;
      animation-timing-function: ease;
    }#skill9{
      animation: opacity 5s;
      animation-timing-function: ease;
    }#skill10{
      animation: opacity 5.5s;
      animation-timing-function: ease;
    }
</style>
