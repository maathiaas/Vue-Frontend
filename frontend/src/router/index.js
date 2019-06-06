import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListaPaciente from '@/components/paciente/ListaPaciente'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/paciente',
      name: 'ListaPaciente',
      component: ListaPaciente
    }

  ],
  mode: 'history'
})
