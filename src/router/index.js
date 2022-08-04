import Vue from 'vue'
import Router from 'vue-router'
import main from './../components/main.vue'
import call from './../components/call.vue'
import contact from './../components/contact.vue'
import calculator from './../components/calculator.vue'
import zoomContact from './../components/zoomContact.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { 
        path: '/', 
        component: main 
      },
      {
        path: '/call',
        component: call
      },
      {
        path: '/contact',
        component: contact
      },
      {
        path: '/calculator',
        component: calculator
      },
      {
        path: '/contact/:id',
        component: zoomContact
      }
    ]
})