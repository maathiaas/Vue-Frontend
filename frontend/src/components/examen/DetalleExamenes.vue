<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                
                <div class="">
                    <h2>Detalles de examen</h2>

                    <b-button size="sm" variant="primary" :to="{ name:'Index'}"> 
                        Home
                    </b-button>
                    <b-button size="sm" variant="primary" :to="{ name:'ListaExamen'}"> 
                        Volver
                    </b-button>
                </div>
                
                <br>

                <div class="col-md-12">
                    <b-table striped hover :items="DetalleExamen" :fields="fields">
                    </b-table>
                </div>
                
            </div>


        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            fields : [
                { key: 'id', label: 'Identificador '},
                { key: 'descripcion', label: 'Descripción'},
                { key: 'paciente', label: 'Paciente'},
                { key: 'tipo_examen', label: 'Tipo Examen'},
                { key: 'espacialista', label: 'Espacialista'},
                { key: 'pacienteName', label: 'Nombre Paciente'},
                { key: 'paciente_ape', label: 'Apellido'},
                { key: 'duracionExam', label: 'Duración examen'},
                { key: 'precioExam', label: 'Valor examen'},
            ],
            DetalleExamen : []
        }
    },
    methods: {
        getDetalleExamen () {
            const path = 'http://backendapi.pythonanywhere.com/api/examen/'
            axios.get(path).then((Response) => {
                this.DetalleExamen = Response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getDetalleExamen()
    }

}
</script>
