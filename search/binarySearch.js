var array=[1,3,4,5,6,7,8,9];

function binarySearch(arr,val){
	if(arr[0]==val)return 0;
	if(arr[arr.length-1]==val) return arr.length-1;
	
	let begin=0, end= arr.length-1;
	
	while(begin<=end){
		var index=Math.floor((end+begin)/2);
		console.log(index)
		if(arr[index]==val) {
		return index;
		}else if(arr[index]>val){
			end=index-1;
		}else{
			begin=index+1;
		}	
		console.log('********')
		console.log(begin,end)
	}
	return -1;
	
}

console.log(binarySearch(array,6))
