import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VueKonva  from 'vue-konva'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false
Vue.use(VueKonva)

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
