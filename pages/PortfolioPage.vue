<template>
    <Portfolio />
    <Footer class="2xl:pt-32" />
</template>

<script>
import Portfolio from '../src/components/Portfolio.vue'
import Footer from '../src/components/Footer.vue'

export default {
    name: 'PortfolioPage',
    components: {Portfolio,Footer}
}
</script>