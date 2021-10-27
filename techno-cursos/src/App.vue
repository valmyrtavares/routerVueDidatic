<template>
  <div id="app">
    <div class="main_content">
      <theHeader/>  
      <router-view/>
    </div>

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
.main_content{
  width:80%;
  margin:10px auto;
}
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
img{
  max-width:100%;
}
.conteudo{
  display:grid;
  grid-template-columns: 1fr minmax(200px,400px);
  grid-gap:30px;
}

</style>
