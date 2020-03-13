<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="model.name"
        label="Your name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Nhập tên']"
      />

      <q-input
        filled
        v-model="model.slug"
        label="slug"
      />

      <q-input
        filled
        v-model="model.description"
        label="description"
      />

      <q-input
        filled
        v-model="model.parent_id"
        label="parent_id"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" v-if="!isEdit" />
      </div>
    </q-form>

  </div>
</template>

<script>
  import ResourceApi from '../../../api/resourceApi'

  const api = new ResourceApi('category')

  const defaultForm = {
    id: undefined,
    name: '',
    description: '',
    slug: '',
    parent_id: undefined
  }

  export default {
    middleware: 'auth',
    props: {
      isEdit: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        model: Object.assign({}, defaultForm),
      }
    },
    created() {
      if (this.isEdit) {
        const id = this.$route.params && this.$route.params.id
        this.updateApi = api.edit
        this.fetchData(id)
      } else {
        this.model = Object.assign({}, defaultForm)
        this.updateApi = api.create
      }
    },
    methods: {
      fetchData(id) {
        api.show({ id }).then(response => {
          this.model = response.data.data
        }).catch(err => {
          console.log(err)
        })
      },
      onSubmit () {
        this.updateApi(this.model).then(response => {
          // this.$router.push('admin/category')
          console.log(response)
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'success'
          })
        }).catch(err => {
          if (err.response && err.response.data) {
            this.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
        })
      },

      onReset () {
        this.model = Object.assign({}, defaultForm)
      }
    }
  }
</script>
