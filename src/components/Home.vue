<template>
  <div class="bg-white" id="top">
    <nav class="container border-b-[1px] border-b-black mx-auto md:flex md:justify-between md:items-center 2xl:border-0 md:border-b-0">
      <div class="flex items-center justify-between">
        <router-link to="/"
          class="text-xl font-bold text-black md:text-2xl">
          <img src="../assets/image/logo.png" alt="logo" width="35" class="top-2 mb-3 relative 2xl:w-16" id="logo" @click="goBio">
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
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl underline md:text-xl" @click="goBio">Home</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goCv">Cv</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goPortfolio">Portfolio</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goContattami">Contattami</li>
      </ul>
    </nav>
  </div>

  <div class="mt-[20px] w-full relative md:mb-[153px] 2xl:mb-[117px] md:mt-16">
    <div v-if="!skills" class="2xl:flex">
      <div class="relative 2xl:top-10 2xl:left-24">
        <img src="../assets/image/home/io.png" alt="io" width="260" class="m-auto mb-2 border-2 border-black 2xl:border-4 2xl:border-black 2xl:w-[700px] md:w-[550px]" id="image">
      </div>
      <div class="relative bg-white rounded-lg w-[300px] top-8 m-auto p-3 pb-0 2xl:w-[850px] 2xl:left-[80px] 2xl:top-10 md:w-[650px] md:top-16" id="text">
        <h1 class="mb-3 text-3xl 2xl:mb-2 2xl:text-6xl 2xl:pb-4 md:text-5xl"><i>Simone Codarin</i></h1>
        <hr class="mb-3">
        <p class="text-base 2xl:text-3xl 2xl:mt-12 2xl:pb-4 md:text-3xl md:leading-10 md:pb-8">Sono un giovane <span class="font-semibold italic"> Frontend Developer</span> che vorrebbe far diventare la sua passione un lavoro,
          residente a Spilimbergo in provincia di Pordenone.
        </p>
        <button @click="showSkills">
          <h3 class="text-right pb-3 mt-3 font-bold 2xl:text-xl md:text-lg">Skills<img src="../assets/image/home/arrowRight.png" alt="back" class="w-2 mt-1 ml-2 float-right 2xl:w-4 md:w-[14px]"></h3>
        </button>
      </div>
    </div>
    <div v-else class="relative bg-white rounded-lg w-[300px] m-auto 2xl:w-[1200px] 2xl:left-7 2xl:p-4 md:w-[600px]">
      <div class="flex">
      <div class="m-auto mt-4 2xl:flex">
        <div class="flex mb-4 2xl:flex-col">
          <img src="../assets/image/loghi_nome/javascript.png" width="52" alt="javascript" class="mr-10 2xl:m-[26px] 2xl:w-15 md:w-28" id="skill1">
          <img src="../assets/image/loghi_nome/vueJs.png" width="52" alt="vuejs" class="2xl:m-[26px] 2xl:w-15 md:w-28" id="skill2">
        </div>
        <div class="flex mb-4 2xl:flex-col">
          <img src="../assets/image/loghi_nome/tailwind.png" width="52" alt="tailwind" class="mr-10 2xl:m-[26px] 2xl:w-15 md:w-28" id="skill3">
          <img src="../assets/image/loghi_nome/chartJs.png" width="52" alt="chartjs" class="2xl:m-[26px] 2xl:w-15 md:w-28" id="skill4">
        </div>
        <div class="flex mb-4 2xl:flex-col">
          <img src="../assets/image/loghi_nome/pinia.png" width="52" alt="pinia" class="mr-10 2xl:m-[26px] 2xl:w-15 md:w-28" id="skill5">
          <img src="../assets/image/loghi_nome/boostrap.png" width="52" alt="boostrap" class="2xl:m-[26px] 2xl:w-15 md:w-28" id="skill6">
        </div>
        <div class="flex mb-4 2xl:flex-col">
          <img src="../assets/image/loghi_nome/photoshop.png" width="52" alt="photoshop" class="mr-10 2xl:m-[26px] 2xl:w-15 md:w-28" id="skill7">
          <img src="../assets/image/loghi_nome/illustrator.png" width="52" alt="illustrator" class="2xl:m-[26px] 2xl:w-15 md:w-28" id="skill8">
        </div>
        <div class="flex 2xl:flex-col">
          <img src="../assets/image/loghi_nome/inDesign.png" width="52" alt="indesign" class="mr-10 2xl:m-[26px] 2xl:w-15 md:w-28" id="skill9">
          <img src="../assets/image/loghi_nome/visualStudio.png" width="52" alt="indesign" class="2xl:m-[26px] 2xl:w-15 md:w-28" id="skill10">
        </div>
      </div>
      </div>
      <button @click="showSkills">
        <h3 class="text-left pb-3 mt-3"><img src="../assets/image/home/arrowLeft.png" alt="back" class="w-3 ml-5 mr-2 2xl:w-5 md:w-5"></h3>
      </button>
    </div>
  </div>

  <Footer class="relative top-14 2xl:top-28" />

</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router';
import Footer from './Footer.vue'

export default{
  name: "Home",
  components: { Footer, },
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
    #loghi {
      animation: mymove 3s;
      animation-timing-function: ease-in-out;
  }
  #loghi:hover {
      transform: scale(1.25) translateZ(0);
  }
  .container:hover > :not(:hover){
      opacity: .4;
  }
  @keyframes mymove {
      from {left: -260px; opacity: 0;}
      to {left: 1px; opacity: 1;}
  }
</style>
