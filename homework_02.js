//Esercizio 1:
function sommaPositivi(x){
    var tot = 0;
    x.every(x => {
        if (x > 0){
            tot += x;
        }
        return x > 0;
        }
    )
    return tot;
}
function ex_1_F(a)  { return sommaPositivi(a); }

//Esercizio 2:
function sommaDispari(x){
    var tmparray = [];
    x.every(x => {
        if (x > 0){
            tmparray.push(x);
        }
        return x > 0;
        }
    )
    return tmparray.reduce((acc, x) => acc + x, 0)
}
function ex_2_F(a)  { return sommaDispari(a); }

//Esercizio 3:
function mediaA(myarray){
    if (myarray.length == 0){
        return 0;
    } else {
       return myarray.reduce((acc,myarray) => acc+myarray,0) / myarray.length;
    }
}
function ex_3_F(a)  { return mediaA(a); }

//Esercizio 4:
function sommaIntervallo(a, b){
    var tarray = []
    if (a < b){
        for (var i = a; i <= b; i++){
            tarray[tarray.length] = i;
        }
        return tarray.reduce((acc,tarray) => acc+tarray,0);
    }else{
          for (var i = b; i <= a; i++){
            tarray[tarray.length]= i;
        }
        return tarray.reduce((acc,tarray) => acc + tarray,0);
    }
}
function ex_4_F(x, y)  { return sommaIntervallo(x, y); }

//Esercizio 5:
function multF(x,y){
    var temparray=[];
    for(var i = 0; i< y; i++){
        temparray.push(x);
    }
    return temparray.reduce((acc,temparray) => acc + temparray,0) 
}
function ex_5_F(x, y) { return multF(x,y); }

//Esercizio 7:
function ex_7_F(x, y){
    return powF(x, y);
}
function powF(x, y){
   var tarray = [];
   for (var i = 0; i < y; i++){
       tarray.push(x);
   }
   return tarray.reduce((acc,x) =>mult(acc,x),1 )
}
function ex_7_F(x, y) { return powF(x, y); }

//Esercizio 11:
function placeF(a){
    var tarray = a.filter(checkeven);
    var tarrayodd = a.filter(checkodd);
    return tarrayodd.concat(tarray);
}

function checkeven(x){
    if (x%2 == 0)
        return true;
    else 
        return false;    
}

function checkodd(x){
    if (x%2 !== 0)
        return true;
    else 
        return false;    
}

function ex_11_F(a) { return placeF(a); }
