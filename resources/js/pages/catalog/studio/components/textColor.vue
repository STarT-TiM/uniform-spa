<template>
  <div class="InkPickerDialog text-ink-dialog">
    <a class="dlgCloseButton" href="#" v-on:click="closeEditColor"></a>
    <div class="select-group">
      <div class="ink-legend"><span></span>= colors in your design</div>
      <div class="selectorContainer">
        <div>
          <div class="inks">
            <v-color-picker v-model="color" hide-inputs></v-color-picker>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['colorType', 'textChoosed', 'layerDraw'],
    components: {
    },
    data(){
      return {
        types: ['hex'],
        type: 'hex',
        hex: '#FF00FF'
      }
    },
    computed: {
      color: {
        get () {
          return this.hex
        },
        set (v) {
          this.hex = v
          if(this.colorType === 'textColor') {
            this.$store.dispatch('studio/updateText', {
              group: this.textChoosed.attrs.group,
              name: this.textChoosed.attrs.name,
              fill: this.showColor,
            });
          } else if(this.colorType === 'strokeColor') {
            this.$store.dispatch('studio/updateText', {
              group: this.textChoosed.attrs.group,
              name: this.textChoosed.attrs.name,
              stroke: this.showColor,
            });
          } else if(this.colorType === 'shadowColor') {
            this.$store.dispatch('studio/updateText', {
              group: this.textChoosed.attrs.group,
              name: this.textChoosed.attrs.name,
              shadowColor: this.showColor,
            });
          }
        },
      },
      showColor () {
        // 000000FF
        if (typeof this.color === 'string') return this.color

        JSON.stringify(Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2))
          return color
        }, {}), null, 2)
        return '#fff';
      },
      ...mapGetters({
        typeSelecting: 'studio/typeSelecting',
        showColorTable: 'studio/showColorTable'
      })
    },
    methods: {
      closeEditColor: function () {
        this.$store.dispatch('studio/editColorTableType', '');
      }
    }
  };
</script>

<style>
</style>
