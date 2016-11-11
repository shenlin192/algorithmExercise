var array=[3,5,1,7,9]

quickSort(array);


function quickSort(arr){

	if(arr.length<2) return arr;
	let pivot=arr.length-1;
	let val = arr[pivot]; less=[]; more=[];temp=arr.slice();
	temp.splice(pivot,1);

	temp.forEach(function(e){
		e<val?less.push(e):more.push(e);	
	})

	return quickSort(less).concat([val],quickSort(more));

}

console.log(quickSort(array));

