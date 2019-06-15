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
                        Ingresar Nuevo Tipo de Examen
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
                { key: 'tipo_examen', },
                { key: 'duracion', label: 'Duración'},
                { key: 'precio', label: 'Preacio del examen'},
                { key: 'descripcion', label: 'Descripción'},


            ],
            paciente : []
        }
    },
    methods: {
        getTipoExamen () {
            const path = 'http://127.0.0.1:8000/api/tipoexamen/'
            axios.get(path).then((Response) => {
                this.paciente = Response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getTipoExamen()
    }

}
</script>
