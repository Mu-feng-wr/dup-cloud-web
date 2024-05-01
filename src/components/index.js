import Vue from 'vue'
import SvgIcon from './SvgIcon/index.vue'
const com = [
  SvgIcon
]
com.forEach(item => {
  Vue.component(item.name, item)
})
