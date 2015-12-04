function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}





// Esercizio 1 

var A = initialArray();
var n = 0;

function containsR(myArray) {
    if (myArray.length == 0) {
        return 0;
    } else {
        if (myArray[0] == 5070) {
        n++;
    } 
        return containsR(myArray.slice(1)), n;
    }
}



// Esercizio 2

function filterMapReduce(myArray) {
    var arrayPositivo = myArray.filter(function(x) {
        return (x >= 0 && x % 2 == 0);
    });
    var arrayPotenze = arrayPositivo.map(function(x) {
        return x * x;
    })
    var somma = arrayPotenze.reduce(function(acc,x) {
        return acc + x;
    });
    return Math.sqrt(somma);
}



// Esercizio 3

function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(x) {
    this.myarray.push(x);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
    return callback(_0xd10d[0]);
}

function ex_3(operazione) {
    var v = new Stack();
    var s = new Stack();
    operazione.split(" ").forEach(function(el) {
        if (el == "+" || el == "-" || el == "*" || el == "/" || el == "(") {
            s.push(el);
        }  else if (el == ")") {
            var el1 = v.pop();
            var el2 = v.pop();
            var operator = s.pop();
            s.pop(); 
            switch (operator) {
                case "+":
                    v.push(el2 + el1);
                break;
                case "-":
                    v.push(el2 - el1);
                break;
                case "*":
                    v.push(el2 * el1);
                break;
                case "/":
                    v.push(el2 / el1);
                break;
            }
        } else {
            v.push(parseFloat(el));
        }
    });
    return v.pop();
}


// Esercizio 4

function esTree(array) {
    function Node(i, left, right) {
        this.item = i;
        this.l = left;
        this.r = right;
    }

    function Tree() {
        this.root = null;
    }
    Tree.prototype.addNode = function(currentNode, newNode) {
        if (newNode.item < currentNode.item) {
            if (currentNode.l == null)
                currentNode.l = newNode;
            else
                this.addNode(currentNode.l, newNode);
        } else {
            if (currentNode.r == null)
                currentNode.r = newNode;
            else
                this.addNode(currentNode.r, newNode);
        }
    }
    Tree.prototype.add = function(item) {
        if (this.root == null) {
            this.root = new Node(item, null, null);
        } else {
            this.addNode(this.root, new Node(item, null, null));
        }
    }
    Tree.prototype.searchMax = function(node) {
        if(node.r == null)
            return node.item;
        else
            return this.searchMax(node.r);
    }

    var tree = new Tree();
    array.forEach(function(x){ tree.add(x) });
    return tree.searchMax(tree.root);
}