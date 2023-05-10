<template>
  <h1 class="text-center text-5xl pt-9 mb-12 2xl:text-8xl md:text-7xl md:mt-4" id="text1">CONTATTAMI</h1>
  <div class="pl-4 bg-white w-[330px] m-auto pb-4 2xl:w-[900px] 2xl:p-10 md:w-[650px] md:pt-6 md:pl-6" id="text">
    <form ref="form" @submit.prevent="sendEmail" class="">
      <label class="flex text-xl mb-2 pt-2 2xl:text-5xl 2xl:pb-3 md:text-5xl md:pb-5">Name:</label>
      <div v-if="nome != '' ">
        <input
        v-model="nome"
        type="text"
        name="user_name"
        class="w-72 mb-4 h-8 p-2 border-[1px] border-black rounded-lg 2xl:w-[500px] md:w-[450px]"
        placeholder="Inserisci il tuo nome"
        />
      </div>
      <div v-else>
        <input
        v-model="nome"
        type="text"
        name="user_name"
        class="w-72 mb-4 h-8 p-2 border-[1px] border-red-500 rounded-lg 2xl:w-[500px] md:w-[450px]"
        placeholder="Inserisci il tuo nome"
        />
      </div>
      <label class="flex text-xl mb-2 2xl:text-5xl 2xl:pb-3 md:text-5xl md:pb-5">Email:</label>
      <div v-if="email != ''">
        <input
        v-model="email"
        type="email"
        name="user_email"
        class="w-72 mb-4 h-8 p-2 border-[1px] border-black rounded-lg 2xl:w-[500px] md:w-[450px]"
        placeholder="Inserisci la tua email"
        />
      </div>
      <div v-else>
        <input
        v-model="email"
        type="email"
        name="user_email"
        class="w-72 mb-4 h-8 p-2 border-[1px] border-red-500 rounded-lg 2xl:w-[500px] md:w-[450px]"
        placeholder="Inserisci la tua email"
        />
      </div>
      <label class="flex text-xl mb-2 2xl:text-5xl 2xl:pb-3 md:text-5xl md:pb-5">Messaggio:</label>
      <div v-if="testo != ''">
        <textarea
        v-model="testo"
        name="message"
        class="mb-7 w-72 flex p-2 border-[1px] border-black rounded-lg 2xl:w-[500px] md:w-[450px]"
        placeholder="Scrivi qui il messaggio">
        </textarea>
      </div>
      <div v-else>
        <textarea
        v-model="testo"
        name="message"
        class="mb-7 w-72 flex p-2 border-[1px] border-red-500 rounded-lg 2xl:w-[500px] md:w-[450px]"
        placeholder="Scrivi qui il messaggio">
        </textarea>
      </div>
      <div v-if="this.nome != '' && this.email != '' && this.testo != '' ">
        <input type="submit" value="Invia"
        class="block w-16 text-lg rounded-full bg-sky-500 hover:bg-sky-700 mb-[7px] 2xl:mb-0 "/>
      </div>
      <div v-else>
        <p class="text-xs font-light text-red-700 italic pt-[9px] pb-[10px] 2xl:pt-0 2xl:pb-0 2xl:text-xl md:text-lg">*Compila tutti i campi per inviare un email!</p>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return{
        nome : "",
        email: "",
        testo: "",
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "gmail",
          "template_5ps38v4",
          this.$refs.form,
          "E9ilGKyNQz6AbI6TY"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            console.log(this.nome, this.email, this.testo);
            this.nome = "",
            this.email = "",
            this.testo = ""
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
::placeholder{
  color: red
}

#text1 {
  animation: opacity 2s;
  animation-timing-function: linear;
}
#text {
  animation: opacity 3s;
  animation-timing-function: ease;
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
