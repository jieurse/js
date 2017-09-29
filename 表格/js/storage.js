class storage{
	constructor(){
	  this.data=[
		{name:"路路",age:18,sex:'nv',tell:2222,address:"山西太原"},
		{name:"冯杰",age:18,sex:'nv',tell:2222,address:"山西太原"},
		{name:"任然",age:18,sex:'nv',tell:2222,address:"山西太原"},
		{name:"亚楠",age:18,sex:'nv',tell:2222,address:"山西太原"},
		{name:"宋浩",age:18,sex:'nv',tell:2222,address:"山西太原"},
		{name:"苏凡",age:18,sex:'nv',tell:2222,address:"山西太原"}
	  ];
	}
	_init(){
		localStorage.setItem('students',JSON.stringify(this.data));
	}
	getData(){
		let data=localStorage.getItem('students');
		if(!data){
			this._init();
		}
		// return this.data=JSON.parse(localStorage.getItem('students'));
		// return this.data=JSON.parse(data);
		// 转化之后为数组
		// console.log(JSON.parse(data))
		//所有的都为字符串
		// console.log(data)
		return JSON.parse(data);
	}
	upDate(index,key,value){
		this.data[index][key]=value;
		this.save();
	}
	save(){
		localStorage.setItem('students',JSON.stringify(this.data));
	}
	deleteData(index){
		this.data.splice(index,1);
		this.save();
	}
	pushData(obj){
		this.data.push(obj);
		this.save();
	}
}
let s=new storage();
