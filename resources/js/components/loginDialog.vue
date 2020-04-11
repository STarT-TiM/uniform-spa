<template>
  <v-dialog v-model="setDialog" scrollable max-width="600">
    <v-card color="primary">
      <v-divider></v-divider>
      <v-card-title>
        {{ $t('login') }}
      </v-card-title>
      <v-card-text>
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
            </div>
          </div>
        </form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1"  type="submit" :loading="form.busy">{{$t('Login')}}</v-btn>
        <v-btn color="red darken-1" type="button" @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>
<script>
  import Form from 'vform'

  export default {
    props: ['loginDialogStatus', 'setLoginDialogStatus'],
    middleware: 'guest',

    metaInfo () {
      return { title: this.$t('login') }
    },
    computed: {
      setDialog: {
        get() {
          return this.loginDialogStatus
        },
        set(status) {
          this.setLoginDialogStatus(status)
        }
      }
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
        this.dialog = false
        // Submit the form.
        const { data } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', {
          token: data.token,
          remember: this.remember
        })

        // Fetch the user.
        await this.$store.dispatch('auth/fetchUser')
        this.dialog = false
      }
    }
  };
</script>
