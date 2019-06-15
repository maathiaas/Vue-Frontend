import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListaPaciente from '@/components/paciente/ListaPaciente'
import EditarPaciente from '@/components/paciente/EditarPaciente'
import EliminarPaciente from '@/components/paciente/EliminarPaciente'
import NuevoPaciente from '@/components/paciente/NuevoPaciente'
import ListaAgendarExamen from '@/components/agendar/ListaAgendarExamen'
import AgendarExamen from '@/components/agendar/AgendarExamen'
import VerTiposExamen from '@/components/tipoExamen/VerTiposExamen'
import ListaExamen from '@/components/examen/ListaExamen'
import DetalleExamenes from '@/components/examen/DetalleExamenes'

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
    },
    {
      path: '/agendar',
      name: 'ListaAgendarExamen',
      component: ListaAgendarExamen
    },
    {
      path: '/agendar/AgendarExamen',
      name: 'AgendarExamen',
      component: AgendarExamen
    },
    {
      path: '/tipoExamen',
      name: 'VerTiposExamen',
      component: VerTiposExamen
    },
    {
      path: '/examen',
      name: 'ListaExamen',
      component: ListaExamen
    },
    {
      path: '/examen/DetalleExamenes',
      name: 'DetalleExamenes',
      component: DetalleExamenes
    }

  ],
  mode: 'history'
})
