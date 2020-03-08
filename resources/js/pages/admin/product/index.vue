<template>
  <div class="row">

    <div class="col-md-9" v-if="data">
      {{data['status-code']}}
      message: {{data.message}}
    </div>
  </div>
</template>

<script>
  import ResourceApi from '../../../api/resourceApi'

  const api = new ResourceApi('products')
  export default {
    middleware: 'auth',

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
