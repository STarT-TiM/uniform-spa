<template>
  <div class="menu">
    <ul class="MenuBar">
      <li><a href="#" class="editProduct">Product</a></li>
      <li><a href="#" class="addImage"
             @click="() => {
            resetObjectChoosed()
            showEditImage()
           }">Add Images test</a></li>
      <li>
        <a
          href="#" class="addText"
          @click="() => {
          resetObjectChoosed()
          showEditText()
        }"
        >Add Text</a>
      </li>
      <li>
        <a
          href="#"
          class="saveDesign"
          @click="() => {
          resetObjectChoosed()
          showSaveAndLoad()
        }"
        > Save/Load </a>
      </li>
      <li class="buy">
        <a href="#" class="buyLink">
          Quote/Buy
        </a>
      </li>
    </ul>
    <LoginDialog
      v-bind:loginDialogStatus="loginDialogStatus"
      v-bind:setLoginDialogStatus="setLoginDialogStatus"
    />
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import LoginDialog from '../../../../components/loginDialog'


  export default {
    props: ['updateTransformer', 'resetObjectSelecting'],
    components: {
      LoginDialog
    },
    data() {
      return {
        loginDialogStatus: false
      }
    },
    computed: {
      ...mapGetters({
        typeSelecting: 'studio/typeSelecting',
        authenticated: 'auth/check'
      })
    },
    methods: {
      resetObjectChoosed: function () {
        this.resetObjectSelecting();
        this.updateTransformer('none');
      },

      showEditImage: function () {
        this.$store.dispatch('studio/editTypeSelecting', 'image');
      },

      showEditText: function () {
        this.$store.dispatch('studio/editTypeSelecting', 'text');
      },

      showSaveAndLoad: function () {
        console.log(123123)
        if (this.authenticated) {
          this.$store.dispatch('studio/editTypeSelecting', 'saveAndLoad');
        } else {
          this.loginDialogStatus = true
        }
      },

      setLoginDialogStatus(status){
        this.loginDialogStatus = status
      },


    }
  };
</script>


<style>
  .MenuBar > li {
    list-style-type: none;
  }
</style>
