<template>
    <div>
        <h2>Sistema Hospitalario</h2>
             <b-nav >
               <b-nav-item active :to="{ name:'ListaPaciente'}">Lista de paciente</b-nav-item>
               <b-nav-item :to="{ name:'ListaAgendarExamen'}">Agendar examen</b-nav-item>
               <b-nav-item>exámenes por paciente</b-nav-item>
               <b-nav-item>exámenes por paciente</b-nav-item>
               <b-nav-item :to="{ name:'VerTiposExamen'}">Nómina de exámenes</b-nav-item>
              </b-nav>



    </div>
</template>


