<template>
  <div id="app">
    <theHeader/>
  
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
body{
  margin:0px;
  font-family:Arial, Helvetica, sans-serif;
  color:#234;
}
ul{
  list-style:none;
  padding:0px;
  margin:0px;
}
a{
  font-weight: bold;
  text-decoration: none;
  color:#234
}
a.router-link-active{
  color:#4b8;
}

.v-enter{
  opacity:0;
  transform:translate3d(-20px,0,0)
}

.v-enter-active{
  transition:all .3s
}

</style>
