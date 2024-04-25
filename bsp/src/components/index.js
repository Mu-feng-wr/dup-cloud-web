import Vue from 'vue'
import partCard from './partCard/index.vue'
import searchArea from './searchArea/index.vue'

const com = [partCard, searchArea]
com.forEach((item) => {
  Vue.component(item.name, item)
})
