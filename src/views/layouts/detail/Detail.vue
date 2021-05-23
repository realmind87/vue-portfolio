<template>
    <div class="d-wrapper" :class="{scroll:isScroll}">
		<div class="d-container">
			<article class="item" ref="item" :style="style">            
				<transition name="content-fade">
					<div class="detail-content" v-show="isContent">
						<a class="btn-go-list" @click="backToList" href="#">목록</a>
						<div class="site-img-area">
							<i class="far fa-image noData"></i>
						</div>
						<div class="col-area">
							<span class="data-txt">{{ project.date }}</span>
						</div>

						<div class="col-area">
							<a v-if="btnlink" class='btn-link' :title="linktitle" target="_blank" :href="project.url">링크</a>
							<span v-else class='none-link'>링크 없음</span>
						</div>
						
					</div>
				</transition>
			</article>
		</div>

    </div>
</template>
<script>
import windowSize from '@/mixins/resize.js'
export default {
    name : "detail",
    mixins : [windowSize],
    props:{
        project : {
            type:Object
        },
        offsetX : {
            type : Number
        },
        offsetY : {
            type : Number
        },
    },
    data(){
        return {
            style : {
                width:260+'px',
                height:320+'px',
                left:this.offsetX+'px ',
                top:this.offsetY+'px',
            },
            isContent:false,
			isScroll:false,
        }
    },
    computed:{
        linktitle(){
            return `${this.project.project_name} 으로 가기`
        },
        btnlink(){
            if (this.project.url=="") return false
            else return true
        },
    },
    mounted(){
        this.showDetail();
    },
    methods : {
        backToList(){
            this.$EventBus.$emit("backToList");
        },
        showDetail(){
            this.style = {
                width:100+'%',
                height:1000+'px',
            }
            this.isContent = true;
			this.isScroll = true;
        }
    }
}
</script>
<style scoped>
    .d-wrapper {position:fixed;width:100%;height:100%;left:0px;right:0px;top:100px;overflow-y:hidden;z-index:1000;}
	.scroll .d-wrapper {position:relative;top:0px;}
	.scroll .d-wrapper .item {position:relative;}
	.d-wrapper .d-container {position: relative;width:100%;max-width:1160px;display:block;margin:0 auto;}
    .d-wrapper .item {position: absolute;top:0;left:0;padding:20px;transform-origin: 50% 50%; background-color:#fff;box-shadow: 0 0 10px rgba(0,0,0,0.2);border-radius: 5px;box-sizing:border-box; transition: all 0.5s ease; }
    .d-wrapper .d-container h2 {font-size:2rem;}
    .d-wrapper .d-container .btn-go-list {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#1473e6;color:#fff;font-size:1.6rem;}
    .d-wrapper .d-container .site-img-area {display:flex;justify-content:center;align-items:center;width:100%;height:300px;margin-top:20px;background-color:#efefef;}
    .d-wrapper .d-container .site-img-area .noData {font-size:10rem;color:#888;}
	.d-container .btn-go-list {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#1473e6;color:#fff;}
    .d-container .col-area {padding:10px 0px;}
    .d-container .col-area .tit {margin-bottom:5px;font-weight:normal;font-size:3rem;}
    .d-container .col-area .btn-link {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#1473e6;color:#fff;font-size:1.6rem;}
    .d-container .col-area .none-link {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#efefef;color:#333;font-size:1.6rem;}
    .d-container .col-area .data-txt {display:inline-block;margin-left:5px;font-size:1.8rem;color:#757575;}
    .content-fade-enter-active,
    .content-fade-leave-active {transition: all 0.5s ease;transition-delay: 0.5s;}  
    .content-fade-enter,
    .content-fade-leave-to {opacity: 0;}
	@media screen and (min-width: 550px) {
		.d-wrapper .item {padding:40px;}
        .d-wrapper .d-container .site-img-area {height: 400px;}
    }
	@media screen and (min-width: 1200px) {
		.d-wrapper {top:140px;}
	}
</style>