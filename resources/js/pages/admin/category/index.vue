<template>
  <div class="q-pa-md row items-start q-gutter-md" >
    <q-card flat bordered class="my-card bg-grey-1" v-if="data">
      <q-card-section v-for="(category, index) in data.data" :key="index">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">{{category.name}}</div>
            <div class="text-subtitle2">{{category.description}}</div>
          </div>
          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>
                      <router-link :to="{ path: String(category.id + '/edit')}" append>
                        Edit
                      </router-link>
                    </q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Delete</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
        <q-separator color="orange" />

        <div class="children">
          <q-card-section v-for="(child, index) in category.children" :key="index">
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">{{child.name}}</div>
                <div class="text-subtitle2">{{child.description}}</div>
              </div>
              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section>
                          <router-link :to="{ path: String(child.id + '/edit')}" append>
                            Edit
                          </router-link>
                        </q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Delete</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
            <q-separator />
          </q-card-section>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  import ResourceApi from '../../../api/resourceApi'

  const api = new ResourceApi('category')
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

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 400px
</style>
