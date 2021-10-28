<template>
  <div class="home">
  <h1>Eu sou a home</h1>
  <div v-if="loading"> 
  <PageLoading/>
  </div>

  <transition>
  <div v-if="api" class="conteudo">
    <div>
    <h1>Sobre a {{api.titulo}}</h1>
    <p>{{api.descricao}}</p>
      <h2>Avaliações</h2>
      <ul>
        <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
          <p>{{avaliacao.nome}}</p>
          <p>{{avaliacao.descricao}}</p>
          <router-link class="btn-cursos" tag="button" to='/cursos'>Cursos</router-link>
        </li>
      </ul>
    </div>
    <img src="@/assets/aprender.png" alt="aprender">
  </div>
  </transition>


  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';


export default {
  name: 'Home',
  mixins:[fetchData],
  
  created(){
    this.fetchData('/home')
  }

}
</script>

<style scoped>
.btn-cursos{
  border:none;
  background:#4b8;
  border:4px;
  color:white;
  cursor:pointer;
  padding:15px 40px;
  box-shadow:0px 4px 2px rgba(0,0,0,.1 );
   margin-bottom: 10px;
   margin-top:40px;
   font-family: Arial, Helvetica, sans-serif  ;
}
</style>
