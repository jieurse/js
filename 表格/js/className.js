//一个类名
		/*function getClass(classname){
			if (document.getElementsByClassName) {
				return  document.getElementsByClassName(classname);
			}else{
				var newarr = [];
				var all = document.getElementsByTagName("*");
				for(var i = 0;i < all.length;i++){
					if(all[i].className == classname){
						newarr.push(all[i]);
					}
				}
				return newarr;
			}
		}*/
//多个类名
		function getClass(classname,ranger){
			ranger = ranger ? ranger :document;
			if (ranger.getElementsByClassName) {
				return  ranger.getElementsByClassName(classname);
			}else{
				var newarr = [];
				var all = ranger.getElementsByTagName("*");
				for(var i = 0;i < all.length;i++){
					if(checkClass(all[i].className,classname)){//all[i].className  all[i]的类名
						newarr.push(all[i]);
					}
				}
				return newarr;
			}
		}
		function checkClass(className,classname){//className 遍历的className    classname 需要寻找的名字如box
			var arr = className.split(' ')
			for (var i = 0; i < arr.length; i++) {
				if(arr[i] == classname){
					return true;
				}
			}
			return false;
		}
//$符
	function $(select,ranger){
		if (typeof select == 'string') {
		ranger = ranger ? ranger :document;
		var first = select.charAt(0);
		if(first == '.'){
			//class
			return getClass(select.substring(1))
		}else if(first == '#'){
			//id
			return ranger.getElementById(select.substring(1))
		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
			//标签
			return ranger.getElementsByTagName(select);
		}
	}else if (typeof select=='function') {
		window.addEventListener('load',select)
	}
	}	