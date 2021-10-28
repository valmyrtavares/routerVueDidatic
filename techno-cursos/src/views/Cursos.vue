<template>
    <div>
        <h1>Página de cursos</h1>
        <div v-if="loading"> 
             <p><PageLoading/></p>
        </div>
        <transition>
        <div v-if="api">
            <h1>{{api.titulo}}</h1>
            <p>{{api.descricao}}</p>
            <ul>
                <li v-for="curso in api.cursos" :key="curso.id">
                    <router-link :to="{name: 'curso', params:{curso: curso.id}}">
                    <h2>{{curso.nome | aulas}} {{curso.horas}} horas </h2>
                    </router-link>
                    <p>{{curso.descricao}}</p>
                </li>
            </ul>
        </div>
        </transition>
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