var arr=[1,4,1,5,13,4]

function mergerSort(arr){
if (arr.length<2) return arr;
let middle=parseInt(arr.length/2);
let left=arr.slice(0,middle);
let right=arr.slice(middle);
return merge(mergerSort(left),mergerSort(right));

}
let merge=(left,right)=>{
let result=[];
	while(left.length&&right.length){
	(left[0]<right[0])?
	result.push(left.shift()):result.push(right.shift());
	}

			while(left.length){result.push(left.shift())};
			while(right.length){result.push(right.shift())};

return result;
		}



	console.log(mergerSort(arr));
