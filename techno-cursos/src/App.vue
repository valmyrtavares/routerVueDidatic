<template>
  <div id="app">
    <theHeader/>
    <div id="nav">
      <router-link to="/">Home</router-link>
     
     
    </div>
    <router-view/>
  </div>
</template>

<script> 
import TheHeader from '@/components/TheHeader.vue'
export default{
  components:{
    TheHeader
  }

}
</script>

<style>

</style>
