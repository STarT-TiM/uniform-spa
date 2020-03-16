<template>
  <div class="main-layout">
    <div class="page-wrapper" canvas="container">
      <Header />

      <child/>

      <Footer />
    </div>
  </div>
</template>

<script>


import Header from '~/components/home/Header'
import Footer from '~/components/home/Footer'

export default {
  name: 'default',

  components: {
    Header,
    Footer,
  },
}
</script>
