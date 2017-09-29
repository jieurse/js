window.onload=function(){
	let table=document.querySelector('tbody');
	let tr=document.querySelectorAll('tr');
	let td=document.querySelectorAll('td');
	let th=document.querySelectorAll('th');
	let add=document.querySelector('.add');
	//添加信息
	let dataObj=new storage();
	// 1、先获取值,并显现到表格中
	load();
	function load(){
	let students=dataObj.getData();
	students.forEach((element,index)=>{
		createtr(element,index);
	})}
	function createtr(obj,i){
		let trs=document.createElement('tr');
		trs.id=i;
		//用遍历(属性值)
		// for(let j in obj){
		// 	trs.innerHTML+=`<td type="${j}">${obj[j]}</td>`
		// }
		// trs.innerHTML+=`<td><button class="del">删除</button></td>`
		trs.innerHTML=`
		<td type="name">${obj.name}</td>
		<td type="age">${obj.age}</td>
		<td type="sex">${obj.sex}</td>
		<td type="tell">${obj.tell}</td>
		<td type="address">${obj.address}</td>
		<td>
			<button class="del">删除</button>
		</td>
		`;
		table.appendChild(trs);
	}
	//添加信息
	add.onclick=function(){
		let t={name:"路路",age:18,sex:'nv',tell:2222,address:"山西太原"};
		//在表格中显现
		createtr(t,table.childElementcount);
		dataObj.pushData(t);
		table.innerText='';
		load();
	}
	//更新修改信息
	tr.forEach(element=>{
		table.ondblclick=function(e){
			let element=e.target;
			if(element.nodeName=="TD"&&element.className!="del"){
				let oldv=element.innerText;
				element.innerText='';
				let input=document.createElement('input');
				input.type='text';
				input.value=oldv;
				element.appendChild(input);
				input.onblur=function(){
					let newv=this.value.trim();
					element.removeChild(input);
					if(newv){
						element.innerText=newv;
						
					}else{
						element.innerText=oldv;	
					}
					let index=element.parentNode.id;
						let key=element.getAttribute('type');
						let value=newv;
						dataObj.upDate(index,key,value);
					// 调用updata(index,key,value)---对应的id(父元素)
					// ---key(type  att)---value(newv)			
				}
			}else if(element.nodeName=='BUTTON'){
				let trs=element.parentNode.parentNode;
				table.removeChild(trs);
				let index=trs.id;
				dataObj.deleteData(index);
				table.innerText='';
				load();
			}
		}
	})	
}