import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListaPaciente from '@/components/paciente/ListaPaciente'
import EditarPaciente from '@/components/paciente/EditarPaciente'
import EliminarPaciente from '@/components/paciente/EliminarPaciente'
import NuevoPaciente from '@/components/paciente/NuevoPaciente'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
    },
    {
      path: '/paciente/ingresar',
      name: 'NuevoPaciente',
      component: NuevoPaciente
    }

  ],
  mode: 'history'
})
