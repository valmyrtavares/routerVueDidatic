<template>
  <div>
    <h1>Eu sou o contato</h1>
    <div v-if="loading"> 
      <PageLoading/>
    </div>
    <transition>
      <div v-if="api">
        {{api}}
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