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
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl underline md:text-xl" @click="goCv">Cv</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goPortfolio">Portfolio</li>
        <li class="text-black text-2xl cursor-pointer 2xl:text-3xl md:text-xl" @click="goContattami">Contattami</li>
      </ul>
    </nav>
  </div>

  <div class="p-7 pb-0">
    <h1 class="text-4xl text-center mb-6 font-bold 2xl:text-6xl" id="titolo">Curriculum Vitae</h1>
      <img src="../assets/image/cv/io_cv.png" width="260" class="m-auto border-2 border-black" id="miaFoto">
      <p class="text-left mt-10 2xl:text-xl" id="text1">
      Parliamo un attimo della mia istruzione e di cosa mi è stato insegnato negli anni. Ho frequentato un istituto professionale conseguendo, dopo tre anni, la certificazione di <b>Operatore Grafico</b>. 
      In questo corso ho maturato competenze in svariati ambiti della grafica, dalla realizzazione di disegni vettoriali, immagini fotografiche, modelli 2D e 3D, CAD a supporto della progettazione di oggetti nell'industria o nell'edilizia, 
      animazioni al computer e infine programmazione web. Quest'ultima mi ha incuriosito tantissimo, <b>tutto un mondo da scoprire e in cui non si finisce mai di imparare</b>.
      </p>
      <p class="mt-3 2xl:text-xl" id="text1">
      Nel mio periodo scolastico ho avuto la "fortuna" di fare diverse settimane di stage in alcune aziende di grafica pubblicitaria che mi hanno dato l’opportunità di entrare poi in quell'ambiente 
      di lavoro subito dopo finita la scuola. Ho scritto fortuna tra le virgolette perchè, sebbene in quel momento era quello che più mi interessava, la grafica editoriale non era con il senno di poi 
      l'indirizzo che più mi apparteneva, che sentivo mio per cui dopo un’estate di lavoro all'interno di un'agenzia di comunicazione, mi son trovato ad abbandonare tutto. Ho cambiato lavoro, 
      ritrovandomi in un ambito che non centrava assolutamente nulla con quello che avevo studiato. Tutt'ora lavoro per questa azienda anche se <b>la passione per il mondo grafico e per il mondo 
      digitale non se nè mai andata</b>.</p>
      <hr class="mt-10 mb-10">
      <div class="mb-10 text-center text-2xl font-bold 2xl:text-4xl" id="text2">
        <h3>Capacità e</h3><h3>Competenze</h3>
      </div>
      <div class="">  
        <div class="pl-3" id="text3">
            <p class="text-lg font-bold mb-3 2xl:text-2xl">Competenze digitali:</p>
              <ul class="list-disc 2xl:text-lg">
                <li>Html e Css.</li>
                <li>Javascript.</li>
                <li>VueJs.</li>
                <li>Axios, chartJs e pinia.</li>
                <li>Buona padronanza del computer, sistema operativo iOs e Windows.</li>
                <li>Buona padronanza della suite Adobe (Illustrator, InDesign, Photoshop).</li>
                <li>Buona padronanza di diversi programmi di editing video (Sony Vegas, Movie Maker e Premier Pro).</li>
                <li>Conoscenza base di After Effect e Cinema 4D.</li>   
              </ul>
              <p class="text-lg font-bold mb-3 mt-4 2xl:text-2xl">Capacità organizzative e manageriali:</p>
                <ul class="list-disc 2xl:text-lg">
                  <li>Buone competenze organizzative acquisite durante la mia esperienza lavorativa a contatto con i clienti (di persona, via telefono o via email).</li>
                  <li>Favorevole all'attività di gruppo.</li>
                  <li>Buone competenze per la creazione di file grafici in tempi ristretti e buone capacità di comprensione nei confronti delle richieste dei clienti.</li>
                  <li>Durante la mia esperienza lavorativa alla CDA ho acquisito ottime competenze in: organizzazione di materiale, prodotti, pulizie e programmazione di una giornata lavorativa in autonomia.</li>    
                </ul>                   
            <p class="text-lg font-bold mb-3 mt-4 2xl:text-2xl">Area competenze trasversali:</p>           
            <ul class="list-disc 2xl:text-lg">
              <li>Saper riconoscere, osservare e documentare alcune caratteristiche specifiche delle situazioni lavorative incontrate.</li>
              <li>Capacità di programmare le attività da svolgere secondo le consegne ricevute.</li>
              <li>Capacità di portare a termine le richieste.</li>
              <li>Capacità relazionali.</li>
              <li>Capacità di ascolto.</li>
            </ul> 
            <p class="text-lg font-bold mb-3 mt-4 2xl:text-2xl">Area delle competenze organizzativo-professionali:</p>
            <ul class="list-disc 2xl:text-lg">
              <li>Organizzazione dello spazio di lavoro e pianificazione, generale buona gestione del tempo.</li>
              <li>Assunzione e gestione delle responsabilità e rispetto dei livelli gerarchici.</li>
              <li>Ricerca delle informazioni.</li>
              <li>Orientamento ai risultati.</li>
              <li>Riconoscere ed applicare regole e valori sul lavoro.</li>
            </ul>
        </div>
      </div> 
      <a href="#top"><img src="../assets/image/portfolio/frecciaup.png" alt="frecciasu" class="w-7 mt-4 float-right mr-5 2xl:w-10 2xl:hidden" id="arrowUp"></a>      
    </div>

</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router';

export default {
    name: "Cv",
    setup() {
      const router = useRouter()
      let showMenu = ref(false);
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

      return { showMenu, toggleNav, goBio, goCv, goPortfolio, goContattami };
  }
}
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
    #titolo{
      animation: opacity 3s;
      animation-timing-function: ease;
    }
    #miaFoto{
      animation: opacity 2s;
      animation-timing-function: ease;
    }
    #text1{
      animation: opacity 3s;
      animation-timing-function: ease;
    }
    #text2{
      animation: opacity 4s;
      animation-timing-function: ease;
    }
    #text3{
      animation: opacity 7s;
      animation-timing-function: ease;
    }
    @keyframes opacity {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    #arrowUp{
    animation: opacity 10s;
    animation-timing-function: ease;
  }
</style>