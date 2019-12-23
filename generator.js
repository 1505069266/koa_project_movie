function* makeIterator(arr){
	for(let i = 0; i < arr.length; i++){
		yield arr[i]
	}
}


const gen = makeIterator(["吃饭","睡觉","打豆豆"])

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())