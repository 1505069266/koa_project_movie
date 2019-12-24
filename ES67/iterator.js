function makeIterator(arr){
	let nextIndex = 0;
	
	//返回一个迭代器对象
	return {
		//next()方法返回的结果对象
		next: ()=>{
			if(nextIndex < arr.length){
				return {value: arr[nextIndex++], done:false}
			}else{
				return {value: undefined, done:true}
			}
		}
	}
}

const it = makeIterator(['吃饭','睡觉','打豆豆'])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())