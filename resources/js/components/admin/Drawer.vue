<template>
  <q-scroll-area class="fit">
    <q-list padding class="text-grey-8">
      <q-item class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" clickable :to="{ name: link.route }">
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.text }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator inset class="q-my-sm" />

      <q-item class="GNL__drawer-item" v-ripple v-for="link in links2" :key="link.text" clickable>
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.text }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator inset class="q-my-sm" />

      <q-item class="GNL__drawer-item" v-ripple v-for="link in links3" :key="link.text" clickable>
        <q-item-section>
          <q-item-label>{{ link.text }} <q-icon v-if="link.icon" :name="link.icon" /></q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </q-scroll-area>
</template>

<script>

  export default {
    data () {
      return {
        links1: [
          { icon: 'web', text: 'Home', route: 'admin.home' },
          { icon: 'person', text: 'Profile', route: 'settings.profile' }
        ],
        links2: [
          { icon: 'flag', text: 'Canada' },
          { icon: 'place', text: 'Local' },
          { icon: 'domain', text: 'Business' },
        ],
        links3: [
          { icon: '', text: 'Language & region' },
          { icon: '', text: 'Settings' },
          { icon: 'open_in_new', text: 'Get the iOS app' }
        ]
      }
    }
  }
</script>
