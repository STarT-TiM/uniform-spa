<template>
  <div class="panes">
    <div class="Pane SaveDesignPane show">
      <a href="#" class="close-icon"></a>
      <ul class="buttons">
        <li class="selected"><a href="#" class="save" @click="tab = 'save'">Save Design</a></li>
        <li class=""><a href="#" class="load" @click="loadAllDesign">Load Design</a></li>
      </ul>

      <div class="savePane active" v-show="tab ==='save'">
        <p>Enter a name for your design and then click the save button.</p>
        <input type="text" v-model="nameOfDesign" class="designNameInput" maxlength="50"
               placeholder="Type your design name here"/>
        <p @click="descriptionStatus = !descriptionStatus">
          <span class="notesToggle">Add special printing instructions</span>
        </p>
        <textarea v-if="descriptionStatus" v-model="description" class="description-input" rows="4"
                  placeholder="Enter your notes here"></textarea>
        <button
          class="saveButton btn btn-med"
          @click="saveDesign"
        >
          Save Design
        </button>
      </div>

      <div class="loadPane active" v-show="tab ==='load'">
        <div class="scroller">
          <div class="DesignItem" v-for="(userDesign, key) in userDesigns" :key="key" @click="() => loadDesign(userDesign)">
            <img class="thumbnail"
                 src="https://www.uberprints.com/content/users/images/3000000/3092000/3092447/9779920-m.jpg?m=composite&h=86&dm=20200410124041">
            <div class="name">{{userDesign.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'

  export default {
    props: ['updateTransformer', 'resetObjectSelecting'],
    data() {
      return {
        userDesigns: [],
        tab: 'save',
        nameOfDesign: '',
        descriptionStatus: false,
        description: ''
      }
    },
    computed: {
      ...mapGetters({
        imageItems: 'studio/imageItems',
        textItems: 'studio/textItems',
        productImage: 'studio/productImage',
      })
    },
    methods: {
      saveDesign: function () {
        console.log(this.textItems)
        axios.post('/api/design',
          {
            images: this.imageItems,
            texts: this.textItems,
            product: 1,
            name: this.nameOfDesign,
            description: this.description
          }
        ).then(function (response) {
          console.log(response);
        })
          .catch(function () {
            console.log('FAILURE!!');
          });
      },
      loadAllDesign() {
        this.tab = 'load'
        let that =this
        axios.get('/api/user/design').then(function (response) {
          console.log(response.data.data)
          that.userDesigns = response.data.data
        })
      },
      loadDesign(productDesign) {
        let designData = JSON.parse(productDesign.data)
        this.$store.dispatch('studio/loadDesign', designData)
      }
    },
  };
</script>
<style>
  .description-input {
    border: 1px solid #cacaca;
  }
</style>
