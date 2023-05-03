<template>
  <h1 class="text-center text-5xl pt-3 mb-3 xl:text-8xl" id="text1">CONTATTAMI</h1>
  <div class="pl-4 bg-white w-[330px] m-auto pb-4 xl:w-[900px] xl:p-10" id="text">
    <form ref="form" @submit.prevent="sendEmail" class="">
      <label class="flex text-xl mb-2 pt-2 xl:text-5xl xl:pb-3">Name:</label>
      <input
        v-model="nome"
        type="text"
        name="user_name"
        class="w-72 mb-4 h-8 p-2 border-[1px] border-black rounded-lg xl:w-[500px]"
        placeholder="Inserisci il tuo nome"
      />
      <label class="flex text-xl mb-2 xl:text-5xl xl:pb-3">Email:</label>
      <input
        v-model="email"
        type="email"
        name="user_email"
        class="w-72 mb-4 h-8 p-2 border-[1px] border-black rounded-lg xl:w-[500px]"
        placeholder="Inserisci la tua email"
      />
      <label class="flex text-xl mb-2 xl:text-5xl xl:pb-3">Messaggio:</label>
      <textarea
        v-model="testo"
        name="message"
        class="mb-7 w-72 flex p-2 border-[1px] border-black rounded-lg xl:w-[500px]"
        placeholder="Scrivi qui il messaggio"
      ></textarea>
      <div v-if="this.nome != '' && this.email != '' && this.testo != '' ">
        <input type="submit" value="Invia"
        class="block w-16 text-lg rounded-full bg-sky-500 hover:bg-sky-700 mb-[7px] xl:mb-0 "/>
      </div>
      <div v-else>
        <p class="text-xs font-light text-red-700 italic pt-[9px] pb-[10px] xl:pt-0 xl:pb-0 xl:text-xl">*Compila tutti i campi per inviare un email!</p>
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
