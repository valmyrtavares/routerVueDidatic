<template>
    <header>

        <nav>
            <div class="logo">
                <router-link to='/'>Techno </router-link>                  
            </div>
            <ul>
                <li><router-link to='/contato'>Contato</router-link></li>
                <li><router-link to='/cursos'>Cursos</router-link></li>
            </ul>
        </nav>

    </header>
</template>

<script> 

export default {
    name:"TheHeader"
}
</script>

<style scoped>

header{
    background:#234;
}  
a{
    color:white;
    margin:16px;
}
ul li{
    display: inline;
}
nav{
    min-height: 100px;
    max-width:800px;
    display:flex;
    margin:0 auto;
    align-items: center;
    justify-content:space-between;
    
}

.logo a{
    color:white ;
}
</style>