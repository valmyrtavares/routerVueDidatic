<template>
<div>
    <div v-if="loading"> 
        <PageLoading/>
    </div>
    <p v-if="api">{{api}}</p>
</div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
export default {
    name: 'curso',
    props:['curso'],
    mixins: [fetchData],

    created(){
        this.fetchData(`/curso/${this.curso}`)
    }
    
        
    
}
</script>
