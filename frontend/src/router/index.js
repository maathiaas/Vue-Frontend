import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListaPaciente from '@/components/paciente/ListaPaciente'
import EditarPaciente from '@/components/paciente/EditarPaciente'
import EliminarPaciente from '@/components/paciente/EliminarPaciente'

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
    },
    {
      path: '/paciente/:PacienteRut/editar',
      name: 'EditarPaciente',
      component: EditarPaciente
    },
    {
      path: '/paciente/:PacienteRut/eliminar',
      name: 'EliminarPaciente',
      component: EliminarPaciente
    }

  ],
  mode: 'history'
})
