<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                
                <div class="">
                    <h2>Listado de Examenes agendados</h2>

                    <b-button size="sm" variant="primary" :to="{ name:'Index'}"> 
                        Home
                    </b-button>

                    <b-button size="sm" variant="primary" :to="{ name:'AgendarExamen'}" > 
                        Agendar nuevo examen
                    </b-button>

                </div>
                
                <br>

                <div class="col-md-12">
                    <b-table striped hover :items="AgendarExamen" :fields="fields">

                        <template slot="action" slot-scope=""> 
                            
                            <b-button size="sm" variant="primary"> 
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
                { key: 'hora', label: 'Hora'},
                { key: 'dia', label: 'Dia'},
                { key: 'usuario', label: 'Rut del Paciente'},
                { key: 'action', label: 'Opciones'}
            ],
            AgendarExamen : []
        }
    },
    methods: {
        getAgendarExamen () {
            const path = 'http://127.0.0.1:8000/api/agendarexamen/'
            axios.get(path).then((Response) => {
                this.AgendarExamen = Response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getAgendarExamen()
    }

}
</script>
