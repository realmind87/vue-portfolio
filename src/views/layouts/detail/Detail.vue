<template>
    <div class="d-wrapper">
		<div class="d-container">
			<article class="item" :style="style">            
				<transition 
					name="content-fade"
					@after-enter="afterEnter"
					@leave-cancelled="leaveCancelled"
				>
					<div class="detail-content" ref="content" v-show="isContent">
						<a class="btn-go-list" @click="backToList" href="#"><i class="fas fa-times-circle"></i></a>
						<div class="site-img-area">
							<i class="far fa-image noData"></i>
						</div>
						<article class="info">
							<h2>{{ project.project_name }}</h2>
							
							<div class="col-area">
								<span class="data-txt">{{ project.date }}</span>
							</div>
							<div class="col-area">
								<p class="work">{{project.work}}</p>
							</div>
							<div class="col-area">
								<a v-if="btnlink" class='btn-link' :title="linktitle" target="_blank" :href="project.url">링크</a>
								<span v-else class='none-link'>링크 없음</span>
							</div>
						</article>
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
		scrollTop : {
			type : Number
		}
    },
    data(){
        return {
            style : {
                width:260+'px',
                height:320+'px',
                left:this.offsetX+'px ',
                top:this.offsetY+'px',
            },
			scTop : this.scrollTop,
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
			this.style = {
                width:260+'px',
                height:320+'px',
                left:this.offsetX+'px ',
                top:this.offsetY+'px',
				transition:`all 0.5s ease`,
            }
			this.isContent = false;
            this.$EventBus.$emit("backToList",this.scTop);
        },
        showDetail(){
            this.style = {
                width:100+'%',
				height:100+'%',
            }
            this.isContent = true;
        },
		afterEnter(){
			const content_height = this.$refs.content.clientHeight;
			const window_height = window.innerHeight;
			if( window_height < content_height ){
				this.style = {
					width:100+'%',
					height:content_height+'px',
				}
			} else {
				this.style = {
					width:100+'%',
					height:100+'%',
				}
			}
		},
		leaveCancelled(){
			console.log('leave');
		}
    }
}
</script>
<style scoped>
    .d-wrapper {position:fixed;width:100%;height:100%;left:0px;right:0px;top:0px;z-index:1000;}
	.view.scroll .d-wrapper {overflow-y:auto;}
	.view.scroll .d-wrapper .item {transition:none;}
	.d-wrapper .d-container {display:block;margin:0 auto;position:relative;width:100%;height:100%;max-width:1160px;}
    .d-wrapper .item {position:absolute;top:0;left:0;transform-origin: 50% 50%;background-color:#fff;box-shadow: 0 0 10px rgba(0,0,0,0.2);box-sizing:border-box; transition: all 0.5s ease; }
	.d-wrapper .d-container h2 {font-size:2rem;}
    .d-wrapper .d-container .btn-go-list {display:block;position:absolute;right:15px;top:15px;overflow:hidden;border-radius:100%;}
    .d-wrapper .d-container .btn-go-list .fa-times-circle {border-radius:100%;color:#1473e6;font-size:4rem;background-color:#fff;}
	.d-wrapper .d-container .site-img-area {display:flex;justify-content:center;align-items:center;width:100%;height:300px;background-color:#efefef;}
    .d-wrapper .d-container .site-img-area .noData {font-size:10rem;color:#888;}
	.d-wrapper .d-container .detail-content .info {padding:30px 20px;}
	.d-wrapper .d-container .detail-content .work {font-size:1.6rem;}
    .d-container .col-area {padding:10px 0px;}
    .d-container .col-area .tit {margin-bottom:5px;font-weight:normal;font-size:3rem;}
    .d-container .col-area .btn-link {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#1473e6;color:#fff;font-size:1.6rem;}
    .d-container .col-area .none-link {display:block;width:70px;height:40px;text-align:center;line-height:43px;background-color:#efefef;color:#333;font-size:1.6rem;}
    .d-container .col-area .data-txt {display:inline-block;font-size:1.8rem;color:#757575;}
    .content-fade-enter-active {transition: all 0.5s ease;transition-delay: 0.5s;}
    .content-fade-enter,
    .content-fade-leave-to {opacity: 0;}
	@media screen and (min-width: 550px) {
		.d-wrapper .d-container .btn-go-list {right:15px;top:15px;}
		.d-wrapper .d-container .detail-content .info {padding:35px 25px;}
        .d-wrapper .d-container .site-img-area {height: 500px;}
    }
</style>