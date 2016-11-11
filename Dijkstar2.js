 var weightMat=[
   [0 , 10, -1, 30,100],
	 [-1,0 , 50, -1, -1 ],
	 [-1,-1, 0,  -1,  10],
	 [-1,-1, 20,   0, 60 ],
   [-1,-1,-1,  -1,   0]
 	  ];

var start=0
var shortPath=dijkstar(weightMat,start);

console.log(shortPath);

function dijkstar(weightMat,start){
	
	let vertexNum=weightMat.length;
	let visited=[];
	let path=[];
	let dist=[];
	
	//initialization
	for(let i=0;i<vertexNum;i++){
		visited[i]=false;
		path[i]=start+"-->"+i;
		
		if(weightMat[start][i]>=0){
			dist[i]=weightMat[start][i];
		}else{
			dist[i]=1000;
		}
	}
	
	visited[start]=true;
	
	//explore the graphe
	
	for(let i=0;i<vertexNum-1;i++){
		let min=1000;
		var u;
		
		//find the nearest vertex
		for(let j=0;j<vertexNum;j++){
			if(visited[j]==false && dist[j]<min)
			{
				min=dist[j];
				u=j;
			}
		}
		
		visited[u]=true;
		dist[u]=min;
		
		//update distance
		for(let j=0;j<vertexNum;j++){
			if(visited[j]==false&& min+weightMat[u][j]<dist[j] && weightMat[u][j]>0){
				dist[j]=min+weightMat[u][j];
			}
		}
		
	}
	
	return dist;	
}
