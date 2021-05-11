<template>
    <div>
        <article class="detail-wrapper">
            <h2>{{ portfolio.project_name }}</h2>
            <a class="btn-go-list" @click="backToList" href="#">목록</a>
        </article>
    </div>
</template>

<script>
import windowSize from '@/mixins/resize.js'
export default {
    name : "detail",
    mixins : [windowSize],
    props: ['portfolio'],
    methods : {
        backToList(){
            this.$EventBus.$emit("backToList");
        }
    }
}
</script>

<style scoped>
    .detail-wrapper {position: relative;width:100%;max-width:1200px;display:block;margin:0 auto;padding:30px;min-height:800px;border-radius:10px;background-color:#fff;font-size:1.6rem;box-sizing:border-box;}
    .detail-wrapper h2 {font-size:2rem;}
    .detail-wrapper .btn-go-list {font-size:1.6rem;}
</style>