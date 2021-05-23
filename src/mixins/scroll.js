export default {
	data(){
		return {
			scrollTop : 0,
		}
	},
	created(){
		window.addEventListener('scroll' , this.scrollEvent);
	},
	mounted(){
	},
	beforeDestory(){
		window.addEventListener('scroll' , this.scrollEvent);
	},
	methods : {
		scrollEvent(){
			this.scrollTop = window.scrollY;
		}
	}
}