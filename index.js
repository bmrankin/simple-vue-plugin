import { addition } from './utils'
import SimpleButton from './components/SimpleButton.vue'

export default {
  install: function (Vue) {
    Vue.addition = addition
    Vue.component('SimpleButton', SimpleButton)
  }
}
