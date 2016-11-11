var hello=[251,51,6,5,113];

function quickSort(arr){
if (arr.length<2) return arr;
let pivot=arr.length-1;
let val = arr[pivot],less=[],more=[];
arr.splice(pivot,1);
arr.forEach(function(e){
	e<val?less.push(e):more.push(e);
})

				return (quickSort(less).concat([val],quickSort(more)));

}

console.log(quickSort(hello));
