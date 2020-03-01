// state
export const state = {
  configKonva  : {
    width : 800,
    height: 800
  },
  typeSelecting: null,
  textItems    : [],
  imageItems   : [],
  productImage : null
};

// getters
export const getters = {
  textItems    : state => state.textItems,
  imageItems   : state => state.imageItems,
  productImage : state => state.productImage,
  configKonva  : state => state.configKonva,
  typeSelecting: state => state.typeSelecting,
};

// mutations
export const mutations = {
  ADD_PRODUCT_IMAGE(state, image) {
    state.productImage = {
      image  : image,
      offsetX: state.configKonva.width / 2,
      offsetY: state.configKonva.height / 2,
      x      : state.configKonva.width / 2,
      y      : state.configKonva.height / 2,
      name   : 'product'
    };
  },

  EDIT_TYPE_SELECTING(state, type) {
    state.typeSelecting = type
  },

  ADD_TEXT_ITEM(state, text) {
    let id = state.textItems.length;
    state.textItems.push({
      text         : text,
      x            : state.configKonva.width / 2,
      y            : state.configKonva.height / 2,
      fontSize     : 20,
      draggable    : true,
      letterSpacing: 1,
      rotation     : 0,
      scaleX       : 1,
      scaleY       : 1,
      name         : 'text-' + id,
    })
  },

  ADD_IMAGE_ITEM(state, image) {
    let id = state.imageItems.length;
    console.log('image-' + id);
    state.imageItems.push({
      image  : image,
      x      : state.configKonva.width / 2,
      y      : state.configKonva.height / 2,
      draggable    : true,
      name   : 'image-' + id
    })
  }
}

// actions
export const actions = {
  addProductImage({commit}) {
    const image  = new window.Image();
    image.src    = 'http://localhost:8000/images/product_1.jpg';
    image.onload = () => {
      commit('ADD_PRODUCT_IMAGE', image);
    };
  },

  addTextItem({commit}, text) {
    commit('ADD_TEXT_ITEM', text)
  },

  addImageItem({commit}, imageSrc) {
    const image  = new window.Image();
    image.src    = imageSrc;
    image.onload = () => {
      commit('ADD_IMAGE_ITEM', image);
    };
  },

  editTypeSelecting({commit}, type) {
    commit('EDIT_TYPE_SELECTING', type)
  }

}
