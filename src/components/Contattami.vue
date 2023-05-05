<template>
  <div class="bg-white" id="top">
    <nav class="container border-b-[1px] border-b-black mx-auto md:flex md:justify-between md:items-center xl:border-0">
      <div class="flex items-center justify-between ">
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
        <li class="text-black text-2xl cursor-pointer" @click="goBio">Home</li>
        <li class="text-black text-2xl cursor-pointer" @click="goCv">Cv</li>
        <li class="text-black text-2xl cursor-pointer" @click="goPortfolio">Portfolio</li>
        <li class="text-black text-2xl cursor-pointer underline" @click="goContattami">Contattami</li>
      </ul>
    </nav>
  </div>

  <email />

</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import email from "./Email.vue"


export default {
  name: "Contattami",
  components: {email,},
  setup() {
    const router = useRouter();
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);


    const goBio = () => {
      router.push("/");
    };
    const goCv = () => {
      router.push("/cv");
    };
    const goPortfolio = () => {
      router.push("/portfolio");
    };
    const goContattami = () => {
      router.push("/contattami");
    };

    return { showMenu, toggleNav, goBio, goCv, goPortfolio, goContattami, };
  },
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
    @keyframes opacity {
        from {opacity: 0;}
        to {opacity: 1;}
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

