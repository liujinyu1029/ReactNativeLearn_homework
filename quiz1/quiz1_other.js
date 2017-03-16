// 如果不考了数组中undefined出现的话，这样写逻辑走的应该更少

/* 核心思想：默认拿出数组中前两个数字，当做min,max,然后遍历数组一一对比，
/*         大于max，或小于min的数组，替换它们的位置，
/*
/* 优势：一次循环就能得出最大最小值，得到除它们俩之外的数组求和
*/
function sumArray(arr){
	if(!(arr instanceof Array) || !arr.length){
		return 0
	}

	var min = arr[0],
		max ,
		sum = 0;
	if(arr[1]<min){
		min = arr[1];
		max = arr[0]
	}else{
		max = arr[1]
	}
	for (var i = arr.length - 1; i >= 2; i--) {
		if(arr[i]<min){
			sum += min;
			min = arr[i];
		}else if(arr[i]>max){
			sum += max;
			max = arr[i]
		}else{
			sum += arr[i]
		}

	}
	return sum;
}

// console.log(sumArray([6,2,1,8,10]))
module.exports = sumArray