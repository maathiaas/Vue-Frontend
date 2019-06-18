<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Ingresar Paciente</h2> 
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form @submit="onSubmit">

                            <div class="form-group row">
                                <label for="rut_paciente" class="col-sm-2 col-form-label">Rut</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Rut" name="rut_paciente" class="form-control" v-model.trim="form.rut_paciente">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="nombres" class="col-sm-2 col-form-label">Nombres</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Nombres" name="nombres" class="form-control" v-model.trim="form.nombres">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="apellido_pat" class="col-sm-2 col-form-label">Apellido Paterno</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Apellido Paterno" name="apellido_pat" class="form-control" v-model.trim="form.apellido_pat">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="apellido_mat" class="col-sm-2 col-form-label">Apellido Materno</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Apellido Materno" name="apellido_mat" class="form-control" v-model.trim="form.apellido_mat">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="fecha_nac" class="col-sm-2 col-form-label"> Fecha de nacimiento</label>
                                <div class="col-sm-6">
                                    <input type="date" name="fecha_nac" class="form-control" v-model.trim="form.fecha_nac">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="ocupacion" class="col-sm-2 col-form-label">Ocupación</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Ocupación" name="ocupacion" class="form-control" v-model.trim="form.ocupacion">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="estado_civil" class="col-sm-2 col-form-label">Estado Civil</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Estado Civil " name="estado_civil" class="form-control" v-model.trim="form.estado_civil">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="direccion" class="col-sm-2 col-form-label">Dirección</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Dirección" name="direccion" class="form-control" v-model.trim="form.direccion">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="telefono" class="col-sm-2 col-form-label">Telefono</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Telefono" name="telefono" class="form-control" v-model.trim="form.telefono">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="prevision" class="col-sm-2 col-form-label">Previsón</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Previsión" name="prevision" class="form-control" v-model.trim="form.prevision">
                                </div>
                            </div>

                            <div class="rows">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">
                                        Ingresar
                                    </b-button>

                                    <b-button type="submit" class="btn-large-space" :to="{ name:'ListaPaciente'}">
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
                rut_paciente: '',
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
        onSubmit(evt){
            evt.preventDefault()
            const path = 'http://backendapi.pythonanywhere.com/api/paciente/'
            // ingresa los campos
            axios.post(path, this.form).then((Response) => {
                this.form.rut_paciente = Response.data.rut_paciente
                this.form.nombres = Response.data.nombres
                this.form.apellido_pat = Response.data.apellido_pat
                this.form.apellido_mat = Response.data.apellido_mat
                this.form.fecha_nac = Response.data.fecha_nac
                this.form.ocupacion = Response.data.ocupacion
                this.form.estado_civil = Response.data.estado_civil
                this.form.direccion = Response.data.direccion
                this.form.telefono = Response.data.telefono
                this.form.prevision = Response.data.prevision

                swal("El paciente fue ingresado exitosamente!", "","success")

            })
            .catch((error) => {
                swal("El paciente no puedo ser ingresado!", "","error")
            })
        },
    },
    created() {
        
    }
    
}
</script>
