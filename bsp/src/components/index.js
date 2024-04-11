import Vue from 'vue'

const com = []
com.forEach((item) => {
  Vue.component(item.name, item)
})
