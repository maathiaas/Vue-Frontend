<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Listado de pacientes</h2>
                <div class="col-md-12">
                    <b-table striped hover :items="paciente" :fields="fields">

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
                { key: 'action', label: 'Acción'}

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
