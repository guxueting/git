var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
new Vue({
	el:"#app",
	data:{
		langer:["master","dev"],
		check:"master",
		langerArr:[]
		
	},
	created:function(){
		this.feachData();
	},
	filters:{
		truncate:function(v){
			var newLine=v.indexOf("\n")
			return newLine> 0 ? v.slice(0,newLine) : v
		},
		dateFormat:function(v){
			return v.replace(/T|Z/g," ");
		}
	},
	watch:{//监测input的变化
		check:"feachData"
	},
	methods:{
		feachData:function(){
			var _this=this;
			var xhr=new XMLHttpRequest();//创建异步请求对象
			xhr.open("GET",apiURL+_this.check);//确定其请求方式
			xhr.onreadystatechange=function(){//设置响应http请求函数
				if(xhr.readyState==4&&xhr.status==200){//获取异步条用返回的对象
					_this.langerArr=JSON.parse(xhr.responseText);
				}
			}
			xhr.send();//发送数据
			/*console.log(_this.langerArr)*/
		}
	}
})
