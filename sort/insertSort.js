var array=[0,2,3,1,45,6,2,8]

function insertSort(arr){
	for(let i=0;i<arr.length;i++){
		let element=arr[i];
			
		for(var j=i;j>0;j--){
			
			if(element<arr[j-1]){
			arr[j]=arr[j-1];	
			}else{
				arr[j]=element;
				break;
			}
		}
		
	
	}
	return arr;
}





console.log(insertSort(array));
