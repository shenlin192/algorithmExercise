var array=[4,8,9,1,3,0]

function insertSort(a){
	for(let i=1;i<a.length;i++){
		let key = a[i];
		let j=i-1;
		while(a[j]>key&&j>=0){
			a[j+1]=a[j];
			j--;
		}
		a[j+1]=key;
	}
	return a;
}

console.log(insertSort(array));
