<template>
  <div>
    <h1>Eu sou o contato</h1>
    <div v-if="loading"> 
      <PageLoading/>
    </div>
    <transition>
      <div v-if="api">
       <h1>{{api.titulo}}</h1>
       <p>{{api.descricao}}</p>
       <ul>
         <li>
           <b>Email:</b>
           <p>{{api.contato.email}}</p>
         </li>
         <li>
           <b>Telefone:</b>
           <p>{{api.contato.telefone}}</p>
         </li>
         <li>
           <b>Endereço :</b>
           <p>{{api.contato.endereco}}</p>
         </li>
       </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';
export default{
    name:"Contato",
  mixins:[fetchData],
  created(){
    this.fetchData('/contato')
  }
}

</script>

<style scoped>

</style>