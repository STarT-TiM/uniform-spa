<template>
  <div class="q-pa-md q-mt-lg">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 800px;">
        <p class="text-subtitle1">
          {{ $t('login') }}
        </p>
        <q-card>
          <form @submit.prevent="login" @keydown="form.onKeydown($event)">
            <div class="q-pa-lg">
              <div class="col-12 q-pb-md">
                <div class="q-pa-xs">
                  <q-input v-model="form.email" type="text" bottom-slots
                           :label="$t('email')" :error="form.errors.has('email')">
                    <template v-slot:error>
                      <has-error :form="form" field="email"/>
                    </template>
                  </q-input>
                </div>
                <div class="q-pa-xs">
                  <q-input v-model="form.password" type="password" bottom-slots
                           :label="$t('password')" :error="form.errors.has('password')">
                    <template v-slot:error>
                      <has-error :form="form" field="password"/>
                    </template>
                  </q-input>
                </div>
              </div>

              <div class="col-12">
                <q-btn type="submit" color="primary" :label="$t('update')" :loading="form.busy"/>
              </div>
            </div>
          </form>
        </q-card>
      </div>
    </div>
  </div>

</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/LoginWithGithub'

export default {
  middleware: 'guest',

  components: {
    LoginWithGithub
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'admin.home' })
    }
  }
}
</script>
