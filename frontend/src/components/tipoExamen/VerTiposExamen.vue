<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                
                <div class="">
                    <h2>Examenes disponibles</h2>

                    <b-button size="sm" variant="primary" :to="{ name:'Index'}"> 
                        Home
                    </b-button>

                    <b-button size="sm" variant="primary" :to="{ name:'NuevoPaciente'}"> 
                        Ingresar Nuevo Tipo de Examen
                    </b-button>

                </div>
                
                <br>

                <div class="col-md-12">
                    <b-table striped hover :items="tipoExamen" :fields="fields">

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
                { key: 'espacialista', label: 'Especialista'},
            ],
            tipoExamen : []
        }
    },
    methods: {
        getTipoExamen () {
            const path = 'http://backendapi.pythonanywhere.com/api/tipoexamen/'
            axios.get(path).then((Response) => {
                this.tipoExamen = Response.data
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
