<template>
  <div class="home">
  <h1>Eu sou a home</h1>
  <div v-if="loading"> 
  <PageLoading/>
  </div>
  <div v-if="api">
  {{api}}
  </div>


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
