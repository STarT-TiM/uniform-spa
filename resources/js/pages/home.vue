<template>
  <div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        :max="5"
      >
      </q-pagination>
    </div>
    <card :title="$t('home')">
      This is home page
    </card>
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-6">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            style="width: 100%"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>
        </div>

        <div class="col-6">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-top text-center">
              Caption
            </div>
          </q-img>
        </div>

        <div class="col-6">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom-right text-subtitle2">
              Caption
            </div>
          </q-img>
        </div>

        <div class="col-6">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Caption
            </div>
          </q-img>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  metaInfo () {
    return { title: this.$t('home') }
  },
  data () {
    return {
      current: 3
    }
  }
}
</script>
