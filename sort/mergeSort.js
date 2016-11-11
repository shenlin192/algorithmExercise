var array=[5,1,10,8,3];

//mergeSort(array);

let mergeSort=(arr)=>{
	if(arr.length<2) return arr;
	let middle=parseInt(arr.length/2);
	let left= arr.slice(0,middle);
	let right= arr.slice(middle);
	return merge(mergeSort(left),mergeSort(right));
}

let merge=(left,right)=>{
	let result=[];
	while(left.length&&right.length){
		left[0]<right[0]?
		result.push(left.shift(0)):
		result.push(right.shift(0));	
	
	}

	while(left.length){
		result.push(left.shift(0));
	}
	while(right.length){
		result.push(right.shift(0));

	}
	return result;
}

console.log(mergeSort(array));
