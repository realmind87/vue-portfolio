<template>
    <div>
        <article class="detail-wrapper">
            <a class="btn-go-list" @click="backToList" href="#">목록</a>
            <div class="detail-content">
                
                <div class="site-img-area">

                </div>

                <div class="col-area">
                    <strong class="tit">DATE</strong>
                    <span class="data-txt">{{ portfolio.date }}</span>
                </div>

                <div class="col-area">
                    <strong class="tit">LINK</strong>
                    <a v-if="btnlink" class='btn-link' :title="linktitle" target="_blank" :href="portfolio.url">링크</a>
                    <span v-else class='none-link'>링크 없음</span>
                </div>
                
            </div>
        </article>
    </div>
</template>

<script>
import windowSize from '@/mixins/resize.js'
export default {
    name : "detail",
    mixins : [windowSize],
    props: ['portfolio'],
    data(){
        return {
            timer : null,
        }
    },
    computed:{
        linktitle(){
            return `${this.portfolio.project_name} 으로 가기`
        },
        btnlink(){
            if (this.portfolio.url=="") return false
            else return true
        }
    },
    mounted(){
        console.log(this.portfolio);
    },
    methods : {
        backToList(){
            this.$EventBus.$emit("backToList");
        }
    }
}
</script>

<style scoped>
    .detail-wrapper {position: relative;width:100%;max-width:1160px;display:block;margin:0 auto;padding:30px;border-radius:10px;background-color:#fff;font-size:1.6rem;box-sizing:border-box;}
    .detail-wrapper h2 {font-size:2rem;}
    .detail-wrapper .btn-go-list {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#1473e6;color:#fff;font-size:1.6rem;}
    .detail-wrapper .site-img-area {width:100%;height:500px;background-color:#757575;}
    .btn-go-list {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#1473e6;color:#fff;}
    .detail-content {margin-top:30px;}
    .col-area {padding:10px 0px;}
    .col-area .tit {margin-bottom:5px;font-weight:normal;font-size:3rem;}
    .col-area .btn-link {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#1473e6;color:#fff;font-size:1.6rem;}
    .col-area .none-link {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#efefef;color:#333;font-size:1.6rem;}
    .col-area .data-txt {display:inline-block;margin-left:5px;font-size:1.8rem;color:#757575;}
</style>