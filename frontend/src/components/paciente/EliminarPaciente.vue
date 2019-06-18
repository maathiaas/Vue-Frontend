<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Esta apunto de eliminar a este paciente</h3>
                <p>Nombre : {{this.element.nombres}}</p>
                <p>Apellido Paterno : {{this.element.apellido_pat}}</p>
                <p>Apellido materno: {{this.element.apellido_mat}}</p>
                <p>Fecha de nacimiento : {{this.element.fecha_nac}}</p>
                <p>Ocupación : {{this.element.ocupacion}}</p>
                <p>Estado civil: {{this.element.estado_civil}}</p>
                <p>Dirección: {{this.element.direccion}}</p>
                <p>Telefono: {{this.element.telefono}}</p>
                <p>Previsión: {{this.element.prevision}}</p>

            </div>

        </div>

        <div class="row">
            <div class="col">
                <b-button v-on:click="EliminarPaciente" variant="danger">
                    Eliminar
                </b-button>
                <b-button type="submit" class="btn-large-space" :to="{ name:'ListaPaciente'}">
                    Cancelar
                </b-button>

            </div>

        </div>

    </div>
    
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data () {
        return{
            PacienteRut: this.$route.params.PacienteRut,
            element: {
                nombres: '',
                apellido_pat: '',
                apellido_mat: '',
                fecha_nac: '',
                ocupacion: '',
                estado_civil: '',
                direccion: '',
                telefono: '',
                prevision: '',


            }
        }
    },
    methods: {
        getPaciente(){
            const path = `http://backendapi.pythonanywhere.com/api/paciente/${this.PacienteRut}/`
            //trae los datos de la api y los coloca 
            axios.get(path).then((Response) => {
                this.element.nombres = Response.data.nombres
                this.element.apellido_pat = Response.data.apellido_pat
                this.element.apellido_mat = Response.data.apellido_mat
                this.element.fecha_nac = Response.data.fecha_nac
                this.element.ocupacion = Response.data.ocupacion
                this.element.estado_civil = Response.data.estado_civil
                this.element.direccion = Response.data.direccion
                this.element.telefono = Response.data.telefono
                this.element.prevision = Response.data.prevision

            })
            .catch((error) => {
                console.log(error)
            })
        },
        EliminarPaciente () {
            const path = `http://backendapi.pythonanywhere.com/api/paciente/${this.PacienteRut}/`

            axios.delete(path).then((Response) => {
                
                location.href = '/paciente'
            })
            .catch((error) =>{
                swal("No es posible eliminar el Paciente", "", "error")
            }) 
        }
    },
    created () {
        this.getPaciente()
    }
}
</script>
