function CircolarQueue(n){
	this.myarray=[];
	this.out=0;
	this.inp=0;
	this.massimo=n;
	this.dimensione=0;
}

CircolarQueue.prototype.enqueue =function(x){
	if(!this.isFull()){
		this.myarray[this.inp]=x;
		this.inp++;
		this.imp%=this.massimo;
		this.dimensione++;
	}
}

CircolarQueue.prototype.dequeue =function(){
	if(!this.isEmpty()){
		var temp= this.myarray[this.out];
		this.myarray[this.out]=undefined;
		this.out=(this.out+1)%this.massimo;
		this.dimensione--;
		return temp;		
	}
}

CircolarQueue.prototype.front =function(){
	return this.myarray[this.out];
}

CircolarQueue.prototype.isEmpty =function(){
	return this.dimensione==0;
}

CircolarQueue.prototype.size =function(){
	return this.dimensione;
}

CircolarQueue.prototype.isFull =function(){
	return this.dimensione==this.massimo;
}