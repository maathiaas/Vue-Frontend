<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                
                <div class="">
                    <h2>Listado de pacientes</h2>

                    <b-button size="sm" variant="primary" :to="{ name:'Index'}"> 
                        Home
                    </b-button>

                    <b-button size="sm" variant="primary" :to="{ name:'NuevoPaciente'}"> 
                        Ingresar Paciente
                    </b-button>

                </div>
                
                <br>

                <div class="col-md-12">
                    <b-table striped hover :items="paciente" :fields="fields">

                        <template slot="action" slot-scope="data">

                            <b-button size="sm" variant="primary" :to="{ name:'EditarPaciente', params: {PacienteRut: data.item.rut_paciente} }"> 
                                Editar
                            </b-button>

                            <b-button size="sm" variant="danger" :to="{ name:'EliminarPaciente', params: {PacienteRut: data.item.rut_paciente} }"> 
                                Eliminar
                            </b-button>

                        </template>

                    </b-table>


                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            fields : [
                { key: 'rut_paciente', label: 'Rut Paciente'},
                { key: 'nombres', label: 'Nombres'},
                { key: 'apellido_pat', label: 'Apellido paterno'},
                { key: 'apellido_mat', label: 'Apellido materno'},
                { key: 'fecha_nac', label: 'Fecha de nacimiento'},
                { key: 'ocupacion', label: 'Ocupacion'},
                { key: 'estado_civil', label: 'Estado civil'},
                { key: 'direccion', label: 'Direccion'},
                { key: 'telefono', label: 'Telefono'},
                { key: 'prevision', label: 'Previsión'},
                { key: 'action', label: 'Opciones'}

            ],
            paciente : []
        }
    },
    methods: {
        getPaciente () {
            const path = 'http://127.0.0.1:8000/api/paciente/'
            axios.get(path).then((Response) => {
                this.paciente = Response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getPaciente()
    }

}
</script>
