<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                
                <div class="">
                    <h2>Listado de Examenes agendados</h2>

                    <b-button size="sm" variant="primary" :to="{ name:'Index'}"> 
                        Home
                    </b-button>

                </div>
                
                <br>

                <div class="col-md-12">
                    <b-table striped hover :items="Examen" :fields="fields">

                        <template slot="action" slot-scope="data"> 
                            
                            <b-button size="sm" variant="primary" :to="{ name:'DetalleExamenes', params: {idexamen: data.item.id} }" > 
                                Detalles
                            </b-button>

                        </template>

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
                { key: 'descripcion', label: 'Descripción'},
                { key: 'paciente', label: 'Paciente'},
                { key: 'tipo_examen', label: 'Tipo de Examen'},
                { key: 'espacialista', label: 'Especialista'},
                { key: 'action' }
            ],
            Examen : []
        }
    },
    methods: {
        getExamen () {
            const path = 'http://127.0.0.1:8000/api/examen/'
            axios.get(path).then((Response) => {
                this.Examen = Response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getExamen()
    }

}
</script>
