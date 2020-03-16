<template>
  <div class="main wrapper">
    <div id="content" class="page-content up-content">
      <Banner />
      <Product />
      <Category />
      <Template />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '~/components/home/Banner'
import Product from '~/components/home/Product'
import Category from '~/components/home/Category'
import Template from '~/components/home/Template'

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  components: {
    Banner,
    Product,
    Category,
    Template,
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}
</style>
