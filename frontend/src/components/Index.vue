<template>
    <div>
        <h2>Sistema Hospitalario</h2>
        <br>
                <b-nav tabs justified>
                  <b-nav-item active :to="{ name:'ListaPaciente'}">Listado de pacientes</b-nav-item>
                  <b-nav-item active :to="{ name:'ListaAgendarExamen'}">Agendar examen</b-nav-item>
                  <b-nav-item active :to="{ name:'ListaExamen'}" >Lista de exámenes </b-nav-item>
                  <b-nav-item active :to="{ name:'VerTiposExamen'}">Nómina de exámenes</b-nav-item>
                </b-nav>        
    </div>
</template>


