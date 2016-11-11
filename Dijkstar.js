
var weightMat=[
	[0 , 10, -1, 30,100],
	[-1,0 , 50, -1, -1 ],
	[-1,-1, 0,  -1,  10],
	[-1,-1, 20,  0,60 ],
	[-1,-1,-1,  -1,   0]
	];

var start=0;

var shortPath2=Dijkstra(weightMat,start)

console.log(shortPath2);

function Dijkstra(weightMat,start){
	let vertexNum=weightMat.length;
	
	//markdown whether the shortest path from the source vertex to the current vertex is calculated
	let visited=[];
	
	//the shortest distance and path from the source vertex to the current vertex
	let dist=[],path=[];

	//initialization
	for(let i=0;i<vertexNum;i++)
	{
		//initialize visited
		visited[i]=false;
		
		//initialize distance
		if(weightMat[start][i]>=0){
			dist[i]=weightMat[start][i];
		}else{
			dist[i]=1000;
		}
		
		//initialize path
		path[i]=start+"--->"+i;
	}
	dist[start]=0;	
	visited[start]=true;
	
	//do the real job
	for(let i=0;i<vertexNum-1;i++){
		var min = 1000;
		var u;
		
		//find the nearest unvisited vertex and its distance to the source
		for(let j=0;j<vertexNum;j++){
		
			if(visited[j] == false&&dist[j]<min){
				min = dist[j];		
				u = j;
			}
			
		}
		
		//markdown the selected vertex and update the dist[] and path[]
		visited[u]=true;
		dist[u]=min;
		
		for(let j=0;j<vertexNum;j++){
			if(visited[j]==false&&weightMat[u][j]>0&&min+weightMat[u][j]<dist[j])
			{
				dist[j]=min+weightMat[u][j];
				path[j]=path[u]+"--->"+j;
				
			}
		}
	
	}
	
	return dist;
}
			
			
			
