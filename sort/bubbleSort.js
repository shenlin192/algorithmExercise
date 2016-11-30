var array=[3,1,45,6,2,8,7,15,9,0]

var bubbleSort = function (arr) {
  for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length-1;j++){
	if(arr[j]>arr[j+1]){
		[arr[j],arr[j+1]]=[arr[j+1],arr[j]]         
		}	
	}
  }
	return arr
}

console.log(bubbleSort(array));
