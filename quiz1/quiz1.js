// sort排序后pop，shift掉最后（最大）和最前（最小）值，
// 利用了eval的执行字符串的功能，配合join直接求和
// 危险处：就是undefined，它的存在会对sort和eval双重影响，使用递归清理掉
function sumArray(arr){
	if(!(arr instanceof Array) || !arr.length){
		return 0
	}
	
	var tempArr = arr.slice();
	tempArr.sort((n,m) => n-m)

	tempArr.shift();
	// deleatShift(tempArr);
	deleatPop(tempArr);

	function deleatPop(arr){
		if(!arr.pop()){
			deleatPop(arr);
		}
	}
	// function deleatShift(arr){
	// 	if(!arr.shift()){
	// 		deleatShift(arr);
	// 	}
	// }
	return eval(tempArr.join("+"))
}

// console.log(sumArray([]))
// console.log(sumArray([6,2,1,8,undefined,undefined,10]))
module.exports = sumArray