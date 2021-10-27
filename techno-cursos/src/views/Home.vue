<template>
  <div class="home">
  <h1>Eu sou a home</h1>
  {{api}}
  </div>
</template>

<script>



export default {
  name: 'Home',
  data(){
    return{
      api:""
    }
  },
  methods:{
    fetchData(){
      fetch("http://localhost:3000/home")
      .then(r=> r.json())
      .then(r => {
        this.api = r
      })
    }
  }

}
</script>
