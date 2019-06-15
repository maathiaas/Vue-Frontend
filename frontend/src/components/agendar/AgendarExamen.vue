<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Agendar Examen</h2> 
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form @submit="onSubmit">

                            <div class="form-group row">
                                <label for="descripcion" class="col-sm-2 col-form-label">Descripción:</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Descripción" name="descripcion" class="form-control" v-model.trim="form.descripcion">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="hora" class="col-sm-2 col-form-label">Hora:</label>
                                <div class="col-sm-6">
                                    <input type="time"  name="hora" class="form-control" v-model.trim="form.hora">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="dia" class="col-sm-2 col-form-label">Dia: </label>
                                <div class="col-sm-6">
                                    <input type="date"  name="dia" class="form-control" v-model.trim="form.dia">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="usuario" class="col-sm-2 col-form-label">Rut del Paciente: </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="usuario" class="form-control" v-model.trim="form.usuario">
                                </div>
                            </div>

                            

                            <div class="rows">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">
                                        Ingresar
                                    </b-button>

                                    <b-button type="submit" class="btn-large-space" :to="{ name:'ListaAgendarExamen'}">
                                        Cancelar
                                    </b-button>


                                </div>


                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert'
export default {
    data(){
        return {
            form: {
                descripcion: '',
                hora: '',
                dia: '',
                usuario: '',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()
            const path = 'http://127.0.0.1:8000/api/agendarexamen/'
            // ingresa los campos
            axios.post(path, this.form).then((Response) => {
                this.form.descripcion = Response.data.descripcion
                this.form.hora = Response.data.hora
                this.form.dia = Response.data.dia
                this.form.usuario = Response.data.usuario


                swal("Se a agendado el examen correctamente!", "","success")

            })
            .catch((error) => {
                swal("No se a podido agendar el examen", "","error")
            })
        },
    },
    created() {
        
    }
    
}
</script>
