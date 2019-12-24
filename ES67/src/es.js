

let obj = {
	id: 18,
	say: function(){
		console.log(this.id)
		return 1
	}
}

export {
	obj
}

export default{
	name:'z',
	age:11
}

export function add(a,b){
	return a+b
}