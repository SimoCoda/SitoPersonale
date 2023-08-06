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
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goBio">Home</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goCv">Cv</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl underline md:text-xl" @click="goPortfolio">Portfolio</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goContattami">Contattami</li>
      </ul>
    </nav>
  </div>
  <div class="p-2 w-full">
    <p class="text-[11px] text-center text-red-600 relative 2xl:text-xl 2xl:underline italic" id="informazione">Cliccando sull'immagine potrai avere informazioni sul progetto.</p>
  </div>
  <h1 class="text-center m-auto text-8xl 2xl:text-9xl">P<span class="text-6xl 2xl:text-7xl">ROGETTI</span></h1>
  <div class="overflow-hidden">
    <div class="flex w-full mb-14 mt-10 2xl:mb-0">
    <div class="m-auto relative" id="left1">
      <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo1">
        <img src="../assets/image/portfolio/covid.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo1">
        <div>  
          <a href="https://trackingcovid.netlify.app/" target="_blank"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">Covid-19 Tracking</h2></a>
          <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/Covid19-Tracking" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
        </div>
      </div>
      <div v-else class="h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo1">
        <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:leading-6 md:text-[18px] md:leading-6">Una Web App che raffigura i dati del Covid 19 negli USA. Per creare questa App ho utilizzato due diverse API, una per raccogliere tutti i dati globali mentre l’altro per prendere tutti i dati di un singolo Stato.</p>
      <div class="flex"><p class="text-[9px] italic mt-2 m-auto 2xl:text-[15px] 2xl:text-center md:text-[15px]">Per info più specifiche:<a href="https://github.com/SimoCoda/Covid19-Tracking/blob/main/README.pdf" target="_blank"><img src="../assets/image/portfolio/info.png" alt="info" width="25" class="m-auto"></a></p></div>
      </div>
    </div>
    <div class="m-auto relative" id="right1">
      <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo2">
        <img src="../assets/image/portfolio/ecommerce.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo2">
        <div>
          <a href="https://e-commerce-synthetic-meat.netlify.app/" target="_blank"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">E-commerce carni</h2></a>
          <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/E-commerce" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
        </div>
      </div>
      <div v-else class="h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo2">
        <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:leading-6 md:text-[14px] md:leading-5">In questo progetto ho voluto creare un qualcosa che al mondo d’oggi si usa praticamente ovunque: un E-commerce. Grazie ad un API sono riuscito a recuperare i vari prodotti che poi son stati stampati nella Home con 
        i relativi prezzi. Successivamente ho voluto aggiungere due page, una di info e una relativa al carrello nella quale si sarebbero trovati tutti i prodotti aggiunti con le relative quantità. Inoltre nella somma totale dei prezzi viene applicato 
        uno sconto del 10% nel caso ci sia un acquisto superiore ai tre prodotti.</p>
      <div class="flex"><p class="text-[9px] italic -mt-2 m-auto 2xl:text-[15px] 2xl:text-center 2xl:-mt-[13px] md:text-[14px]">Per info più specifiche:<a href="https://github.com/SimoCoda/E-commerce/blob/main/README.pdf" target="_blank"><img src="../assets/image/portfolio/info.png" alt="info" width="25" class="m-auto"></a></p></div>
      </div>
    </div>
    </div>
    <div class="flex w-full mb-14 2xl:mb-0 2xl:mt-10">
    <div class="m-auto relative" id="left2">
      <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo3">
        <img src="../assets/image/portfolio/tria.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo3">
        <div>
          <a href="https://gameoftiktak.netlify.app/"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">Tiktok Toe</h2></a>
          <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/TikTok-Toe" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
        </div>
      </div>
      <div v-else class="h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo3">
        <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:leading-6 md:text-[14px] md:leading-5">Il classico gioco della TRIA, penso tutti lo conosciate. Ci sono due giocatori che, nel mio caso, ho dato la possibilità di scegliere i nomi ad inizio gioco anche se poi c’è la possibilità di
        modificarli anche durante la sfida. L’obiettivo del gioco è quello di occupare con lo stesso simbolo 3 quadrati in qualsiasi senso (verticale, orizzontale oppure obliquo) per portarsi a casa un punto. Inoltre ho voluto implementare il gioco 
        con una classifica sapendo che anche in questi semplici giochi sono molto competitivo.</p>
        <div class="flex"><p class="text-[9px] italic mt-2 m-auto 2xl:text-[15px] 2xl:text-center 2xl:mt-0 md:text-[14px]">Per info più specifiche:<a href="https://github.com/SimoCoda/TikTok-Toe/blob/main/README.pdf" target="_blank"><img src="../assets/image/portfolio/info.png" alt="info" width="25" class="m-auto"></a></p></div>
      </div>
    </div>
    <div class="m-auto relative" id="right2">
      <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo4">
        <img src="../assets/image/portfolio/quality.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo4">
        <div>
          <a href="https://quality-of-life-in-cities.vercel.app/"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">La qualità della vita</h2></a>
          <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/Quality_of_life_in_cities" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
        </div>
      </div>
      <div v-else class="h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo4">
        <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:leading-6 md:text-[15px] md:leading-6">Questa è stata una delle mie prime Web App costruite con Javascript. La logica di questa applicazione è molto semplice: nella Home troveremo una casella di ricerca in cui ci sarà la possibilità di scrivere un nome 
        di una città. Una volta premuto INVIO viene stampato a schermo una serie di dati riguardo la vita nella città selezionata.</p>
        <div class="flex"><p class="text-[9px] italic mt-2 m-auto 2xl:text-[15px] 2xl:text-center md:text-[15px]">Per info più specifiche:<a href="https://github.com/SimoCoda/Quality_of_life_in_cities/blob/main/README.pdf" target="_blank"><img src="../assets/image/portfolio/info.png" alt="info" width="25" class="m-auto"></a></p></div>
      </div>
    </div>
    </div>
    <div class="flex w-full 2xl:mt-10">
    <div class="m-auto relative" id="left3">
      <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo5">
        <img src="../assets/image/portfolio/counter.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo5">
        <div>
          <a href="https://simocoda.github.io/Counter/"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">Il contatore</h2></a>
          <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/Counter" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
        </div>
      </div>
      <div v-else class="h-72 w-44 m-auto rounded-2xl border-2 bg-white border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo5">
        <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:mb-4 2xl:leading-6 md:text-[15px] md:leading-6">Il primissimo progetto costruito non appena cominciato a masticare un po’ di javascript è stato proprio questo: il COUNTER. Una counter molto semplice in realtà con al di fuori del
        numero tre diversi bottoni: il più, il meno e il tasto di reset per azzerare il tutto.</p>
        <div class="flex"><p class="text-[9px] italic mt-2 m-auto 2xl:text-[15px] 2xl:text-center md:text-[15px]">Per info più specifiche:<a href="https://github.com/SimoCoda/Counter/blob/main/README.pdf" target="_blank"><img src="../assets/image/portfolio/info.png" alt="info" width="25" class="m-auto"></a></p></div>
      </div>
    </div>
    <div class="m-auto relative" id="right3">
      <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo6">
        <img src="../assets/image/portfolio/miosito.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo6">
        <div>
          <a href="https://simocoda.github.io/github"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">Il mio primo sito</h2></a>
          <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/SimoCoda.github.io" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
        </div>
      </div>
      <div v-else class="h-72 w-44 m-auto rounded-2xl border-2 bg-white border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo6">
        <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:mb-3 2xl:leading-6 md:text-[15px] md:leading-6">Il mio primo sito web. Mi piace tenerlo per ricordarmi sempre da cosa sono partito, dalle prime volte che ho comicniato a scrivere codice e dal primo progetto che mi ha fatto immergere in questo fantastico mondo.
        Il sito non è nulla di che, troviamo solamente html e css con una piccola parte di javascript per quando rigurda la parte del "contattami", ma a me piace tenerlo come ricordo.
        </p>
      </div>
    </div>
    </div>
    <div class="flex w-full mb-14 mt-10 2xl:mb-0">
      <div class="m-auto relative" id="left4">
        <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo7">
          <img src="../assets/image/portfolio/montagna.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo7">
          <div>  
            <a href="https://copia-sito-montagna.netlify.app/" target="_blank"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">La montagna</h2></a>
            <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/Clone_sito_montagna" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
          </div>
        </div>
        <div v-else class="h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo7">
          <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:leading-6 md:text-[18px] md:leading-6">Dopo aver studiato alcune funzionalita di <a class="font-bold cursor-pointer" href="https://greensock.com/gsap/" target="_blank">GSAP</a>, per la creazione di alcune animazioni, ho deciso di ricreare un sito per cercare
            di allenarmi. Questo è il risultato. All'intenro di questo sito possiamo trovare del codice <span class="font-bold">HTML, CSS, JAVASCRIPT.</span><br><br>Il sito non è ancora responsive quindi la visualizzazione è consigliata solamente dal pc.
          </p>
        <div class="flex"></div>
        </div>
      </div>
      <div class="m-auto relative hidden" id="right4">
        <div class="progetto relative h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] md:w-[300px] md:h-96" v-if="!watchInfo2">
          <img src="../assets/image/portfolio/ecommerce.jpg" alt="progetto1" class="border-b-2 border-b-black rounded-t-xl 2xl:border-r-2 2xl:border-b-0 2xl:border-r-black 2xl:rounded-l-[15px] 2xl:rounded-r-none" @click="goInfo2">
          <div>
            <a href="https://e-commerce-synthetic-meat.netlify.app/" target="_blank"><h2 class="text-center mt-6 mb-6 text-base 2xl:text-4xl 2xl:ml-5 2xl:mb-[72px] md:text-2xl">E-commerce carni</h2></a>
            <div class="flex m-auto"><p class="text-sm ml-3 mt-1 italic 2xl:text-2xl 2xl:ml-5 2xl:pt-10 md:text-xl">Per il codice:</p><a href="https://github.com/SimoCoda/E-commerce" target="_blank"><img src="../assets/image/social/github_logo.png" alt="logo github" width="25" class="ml-3 2xl:pt-12 md:pt-1"></a></div>
          </div>
        </div>
        <div v-else class="h-72 w-44 m-auto rounded-2xl bg-white border-2 border-black 2xl:h-60 2xl:w-[750px] 2xl:flex 2xl:border-[3px] 2xl:flex-col md:w-[300px] md:h-96" @click="goInfo2">
          <p class="text-[9px] p-2 italic 2xl:text-[15px] 2xl:leading-6 md:text-[14px] md:leading-5">In questo progetto ho voluto creare un qualcosa che al mondo d’oggi si usa praticamente ovunque: un E-commerce. Grazie ad un API sono riuscito a recuperare i vari prodotti che poi son stati stampati nella Home con 
          i relativi prezzi. Successivamente ho voluto aggiungere due page, una di info e una relativa al carrello nella quale si sarebbero trovati tutti i prodotti aggiunti con le relative quantità. Inoltre nella somma totale dei prezzi viene applicato 
          uno sconto del 10% nel caso ci sia un acquisto superiore ai tre prodotti.</p>
        <div class="flex"><p class="text-[9px] italic -mt-2 m-auto 2xl:text-[15px] 2xl:text-center 2xl:-mt-[13px] md:text-[14px]">Per info più specifiche:<a href="https://github.com/SimoCoda/E-commerce/blob/main/README.pdf" target="_blank"><img src="../assets/image/portfolio/info.png" alt="info" width="25" class="m-auto"></a></p></div>
        </div>
      </div>
      </div>
    <a href="#top"><img src="../assets/image/portfolio/frecciaup.png" alt="frecciasu" class="w-7 mt-4 float-right mr-5 2xl:hidden" id="arrowUp"></a>
  </div>
</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router';

export default {
    name: "Portfolio",
    setup() {
      const router = useRouter()
      let showMenu = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      const watchInfo1 = ref(false)
      const watchInfo2 = ref(false)
      const watchInfo3 = ref(false)
      const watchInfo4 = ref(false)
      const watchInfo5 = ref(false)
      const watchInfo6 = ref(false)
      const watchInfo7 = ref(false)

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
      const goInfo1 = () => {
        watchInfo1.value = !watchInfo1.value
      }
      const goInfo2 = () => {
        watchInfo2.value = !watchInfo2.value
      }
      const goInfo3 = () => {
        watchInfo3.value = !watchInfo3.value
      }
      const goInfo4 = () => {
        watchInfo4.value = !watchInfo4.value
      }
      const goInfo5 = () => {
        watchInfo5.value = !watchInfo5.value
      }
      const goInfo6 = () => {
        watchInfo6.value = !watchInfo6.value
      }
      const goInfo7 = () => {
        watchInfo7.value = !watchInfo7.value
      }

      return { showMenu, watchInfo1,watchInfo2,watchInfo3,watchInfo4,watchInfo5,watchInfo6,watchInfo7, toggleNav, goBio, goCv, goPortfolio, goContattami,goInfo1,goInfo2,goInfo3,goInfo4,goInfo5,goInfo6,goInfo7, };
  }
}
</script>

<style scoped>
  #informazione{
    animation: transition 5s infinite;
    animation-timing-function: linear;
  }
  @keyframes transition {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
  }

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

  .progetto:hover {
    border-color: red;
  }
  .focus:hover > :not(:hover){
    opacity: .4;
  }

  #left1{
    animation: leftin 3s;
    animation-timing-function: ease-in-out;
  }
  @keyframes leftin {
    0% {
      left: -200px;
      opacity: 0;
    }
    100% {
      left: 0;
      opacity: 1;
    }
  }
  #right1{
    animation: rightin 3s;
    animation-timing-function: ease-in-out;
  }
  @keyframes rightin {
    0% {
      right: -200px;
      opacity: 0;
    }
    100% {
      right: 0;
      opacity: 1;
    }
  }
  #left2{
    animation: leftin 4s;
    animation-timing-function: ease-in-out;
  }

  #right2{
    animation: rightin 4s;
    animation-timing-function: ease-in-out;
  }

  #left3{
    animation: leftin 5s;
    animation-timing-function: ease-in-out;
  }

  #right3{
    animation: rightin 5s;
    animation-timing-function: ease-in-out;
  }

  #left4{
    animation: leftin 6s;
    animation-timing-function: ease-in-out;
  }

  #arrowUp{
    animation: opacity 10s;
    animation-timing-function: ease;
  }

</style>