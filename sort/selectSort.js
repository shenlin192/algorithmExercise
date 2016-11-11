var array=[3,193,1,4,2,5];

function selectSort(arr){
	for(let i=0;i<arr.length;i++){
			var min=i;
			for(let j=i;j<arr.length;j++){
			
				if(arr[min]>arr[j]){
								min=j;
				}			
			}	
	[arr[min],arr[i]]=[arr[i],arr[min]];
	}
return arr;
}

console.log(selectSort(array));
