<template>
    <Cv />
    <Footer class="2xl:pt-32" />
</template>

<script>
import Cv from '../src/components/Cv.vue'
import Footer from '../src/components/Footer.vue'

export default {
    name: 'CvPage',
    components: {Cv,Footer}
}
</script>