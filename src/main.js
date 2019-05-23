import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//vee-validate 추가
import VeeValidate,{ Validator} from 'vee-validate'
Vue.use(VeeValidate);

Validator.extend('truth', {
  getMessage: field => 'The ' + field + ' value is not truthy',
  validate: value => !! value
});

let instance = new Validator({ trueField: 'truthy'});
instance.extend('falsy', (value) => ! value);

instance.attach({
  name: 'falseField',
  rules: 'falsy'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
