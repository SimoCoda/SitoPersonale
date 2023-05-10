<template>
  <div class="bg-white" id="top">
    <nav class="container border-b-[1px] border-b-black mx-auto md:flex md:justify-between md:items-center 2xl:border-0 md:border-b-0">
      <div class="flex items-center justify-between ">
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
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goBio">Home</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goCv">Cv</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goPortfolio">Portfolio</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl underline md:text-xl" @click="goContattami">Contattami</li>
      </ul>
    </nav>
  </div>

  <email />

  <div class="fixed bottom-0 right-0 left-0 w-full">
    <div class="bg-white h-24 2xl:h-28 2xl:bottom-0 2xl:left-0 2xl:right-0 md:h-36">
        <div class="mt-16 ">
            <div class="container flex absolute mt-3 pl-24 2xl:w-full 2xl:pt-6">
                <a href="https://www.linkedin.com/in/simone-codarin/" target="_blank"><img class="relative flex mr-5 2xl:mr-10 2xl:w-10 2xl:-mt-5 md:w-10" src="../assets/image/social/linkedin_logo.png" width="30" id="loghi"></a>
                <a href="https://www.facebook.com/simone.codarin.3/" target="_blank"><img class="relative flex mr-5 2xl:mr-10 2xl:w-10 2xl:-mt-5 md:w-10" src="../assets/image/social/facebook_logo.png" width="30" id="loghi"></a>
                <a href="https://www.instagram.com/simone_codarin/" target="_blank"><img class="relative flex mr-5 2xl:mr-10 2xl:w-10 2xl:-mt-5 md:w-10" src="../assets/image/social/instagram_logo.png" width="30" id="loghi"></a>
                <a href="https://github.com/SimoCoda" target="_blank"><img class="relative flex 2xl:w-10 2xl:-mt-5 md:w-10 " src="../assets/image/social/github_logo.png" width="30" id="loghi"></a>
            </div>
            <p class="relative text-center text-xs top-16 2xl:top-16 2xl:m-auto 2xl:text-lg md:top-24 md:text-lg">© 2023 Developed by Simone Codarin. All rights reserved.</p>
        </div>
    </div>
</div>

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

