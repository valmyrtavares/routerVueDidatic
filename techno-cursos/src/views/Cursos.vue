<template>
    <div>
        <h1>Página de cursos</h1>
        <div v-if="loading"> 
             <p><PageLoading/></p>
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
    name:'Cursos',
    mixins:[fetchData],

    created(){
        this.fetchData('/cursos')
    }


}
</script> 