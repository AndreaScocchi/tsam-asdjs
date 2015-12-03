function Stack(){
    this.array = [];
}

Stack.prototype.push = function(el){
    this.array[this.array.length] = el;
}
Stack.prototype.pop = function(){
    var t = this.array[this.array.length-1];
    this.array = this.array.slice(0,this.array.length-1);
    return t;
}
Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
}
Stack.prototype.isEmpty = function(){
    return this.array.length == 0;   
}

function rpn(str){
    var array = str.split(" ");
    var stack = new Stack();
    while(array.length>0){
        switch(array[0]){
            case '+':
                array.shift();
                var b = stack.pop();
                var a = stack.pop();
                stack.push(a+b);
                break;
            case '-':
                array.shift();
                var b = stack.pop();
                var a = stack.pop();
                stack.push(a-b);
                break;
            case '*':
                array.shift();
                var b = stack.pop();
                var a = stack.pop();
                stack.push(a*b);
                break;
            case '/':
                array.shift();
                var b = stack.pop();
                var a = stack.pop();
                stack.push(a/b);
                break;
            default:
                stack.push(parseInt(array.shift()));
                break;
        }
    }
    return stack.pop();
}