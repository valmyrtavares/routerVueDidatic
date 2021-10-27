<template>
    <div>
        <h1>Página de cursos</h1>
          <div v-if="loading"> 
    <p>Carregando...</p>
  </div>
  <div v-if="api">
  {{api}}
  </div>
    </div>

</template>


<script> 
import fetchData from '@/mixins/fetchData.js';

export default{
    name:'Cursos',
    mixins:[fetchData],

    created(){
        this.fetchData('/cursos')
    }


}
</script> 