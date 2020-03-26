<template>
  <div class="products" v-if="data">
    <template v-for="(product, index) in data.data">
      <item :data="product" />
    </template>
  </div>
</template>

<script>
  import ResourceApi from '../../api/resourceApi'
  import Item from '~/components/product/Item'

  const api = new ResourceApi('product')
  export default {
    components: {
      Item,
    },
    data () {
      return {
        data: null
      }
    },
    mounted () {
      api.index().then(response => (this.data = response['data']))
    }
  }
</script>
