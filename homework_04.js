function Stack(){
    this.myarray = [];
}
var a = new Stack();

Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
Stack.prototype.popall = function (callback) {
    while (!this.isEmpty()){
        callback(this.pop());
    }
}
function callback(x){
    console.log(x);
}
function dec2bin(n){
   output = [];
   for(i = n; i > 0; i = (i - rest)/2){
       rest = i%2
       output.unshift(rest);
   }
   return output;
}