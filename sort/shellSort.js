function shell(arr){
	var len=arr.length;
	let gap=Math.floor(len/2);
	while(gap>0){
		console.log('gap:',gap);
		for(let i=0;i<gap;i++){ 
		console.log('i:',i)
			//insert sort 将会进行gap次插入排序
			for(let j=i+gap;j<len;j=j+gap){
				let key=arr[j],k=j-gap;
				while(k>=0&&arr[k]>key){
					arr[k+gap]=arr[k];
					k=k-gap;
				}
				arr[k+gap]=key;			
			}
		console.log('arr:',arr)
		}	
		gap=Math.floor(gap/2);
	}
	return arr;
}


console.log(shell([10,3,4,9,1,5,8]))
