<template>
  <div>
    <q-toolbar class="GNL__toolbar">
      <q-btn
        flat
        dense
        round
        @click="toggle"
        aria-label="Menu"
        icon="menu"
        class="q-mr-sm"
      />

      <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
        <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">
        <span class="q-ml-sm">News</span>
      </q-toolbar-title>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn v-if="$q.screen.gt.sm" round dense flat color="text-grey-7" icon="apps">
          <q-tooltip>Google Apps</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="notifications">
          <q-badge color="red" text-color="white" floating>
            2
          </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <div class="self-stretch row no-wrap" v-if="user">
          <q-btn-dropdown flat no-caps stretch :label="user.name">
            <q-list>
              <q-item clickable v-close-popup :to="{ name: 'settings.profile' }">
                <q-item-section>
                  <q-item-label>
                    {{ $t('settings') }}
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click.prevent="logout">
                <q-item-section>
                  <q-item-label>
                    {{ $t('logout') }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </q-toolbar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      appName: window.config.appName,
      isOpen: true
    }),

    computed: mapGetters({
      user: 'auth/user'
    }),

    methods: {
      async logout() {
        // Log out the user.
        await this.$store.dispatch('auth/logout')

        // Redirect to login.
        this.$router.push({ name: 'login' })
      },
      toggle() {
        this.isOpen = !this.isOpen
        this.$emit('toggleMenu', this.isOpen)
      }
    }
  }
</script>
