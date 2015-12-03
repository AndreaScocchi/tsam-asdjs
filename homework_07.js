function PriorityQueue(){
	this.myarray=[];
}

PriorityQueue.prototype.enqueue = function (e) {
	if(this.myarray.length==0){
			this.myarray.push(e);
	}
	else {
		for(var i=0;i<this.myarray.length;i++){
			if(e.priority<this.myarray[i].priority)
			{
					this.myarray.splice(i,0,e);
					return true;
			}
		}
			this.myarray.push(e);
	}
}

PriorityQueue.prototype.dequeue = function () {
	return this.myarray.pop();
}

PriorityQueue.prototype.front = function () {
	return this.myarray[this.myarray.length-1];
}
PriorityQueue.prototype.isEmpty = function () {
	return this.myarray.size==0;
}
PriorityQueue.prototype.size = function () {
	return this.myarray.length;
}

function QueueItem(i,p){
	this.item=i;
	this.priority=p;
}

//------------------

function PriorityQueueC(Callback){
	this.myarray=[];
	this.ok=Callback
}

PriorityQueueC.prototype.enqueue = function (e) {
	if(this.myarray.length==0){
			this.myarray.push(e);
	}
	else {
		for(var i=0;i<this.myarray.length;i++){
			if(this.ok==-1)
			{
					this.myarray.splice(i,0,e);
					return true;
			}
		}
			this.myarray.push(e);
	}
}

PriorityQueueC.prototype.dequeue = function () {
	return this.myarray.pop();
}

PriorityQueueC.prototype.front = function () {
	return this.myarray[this.myarray.length-1];
}
PriorityQueueC.prototype.isEmpty = function () {
	return this.myarray.size==0;
}
PriorityQueueC.prototype.size = function () {
	return this.myarray.length;
}