// Esercizio1
/*
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo.*/

a = [0, 10, 20, -1, 30];

function sumfindnegI(myarray) {
   tot = 0;
   for(i = 0; i < myarray.length; i++) {
       if(myarray[i] % 2 == 0){
            tot += myarray[i];
       }
       else break;
   }
   return tot;  
}
 
function sumfindnegR(myarray) {
   if(myarray.length > 0 && myarray[0] >= 0) {
        return myarray[0] + sumfindnegR(myarray.slice(1));
   }
   else {
       return 0;
   }
}

function ex_1_I(a)  { return sumfindnegI(a); }
console.log("Risultato (iteratvo): " + ex_1_I(a));

function ex_1_R(a)  { return sumfindnegR(a); }
console.log("Risultato (ricorsivo): " + ex_1_R(a));


//Esercizio2

/* Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari */

function sumoddI(n) {
   tot = 0;
   for(i = 1; i < n; i++) {
       if(i % 2 != 0) {
           tot += i;
       }
   }
   return tot;
}
 
function sumoddR(n) {
   if(n > 0) {
       if(n % 2!= 0) {
           return n+sumoddR(n - 1);
       }
       else {
           return sumoddR(n - 1);
       }
   }
       else {
           return 0;
       }
}

function ex_2_I()  { return sumoddI(10); }
console.log("Risultato (iterativo): " + ex_2_I(a));

function ex_2_R(a)  { return sumoddR(10); }
console.log("Risultato (ricorsivo): " + ex_2_R(a));


//Esercizio3

/* Dato un array di 10 elementi, calcolarne la media */

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sommaI(myarray){
   tot = 0;
   for(i = 0; i <= myarray.length; i++) {
       tot += i;
   }
   return tot;
}

function sommaR(myarray){
   if(myarray.length > 0) {
       return myarray[0] + sommaR(myarray.slice(1));
   }
   else return 0;
}

function ex_3_I(a)  { return sommaI(a) / a.length; }
console.log("Risultato (iterativo): " + ex_3_I(a));

function ex_3_R(a)  { return sommaR(a) / a.length; }
console.log("Risultato (ricorsivo): " + ex_3_R(a));


//Esercizio4
/*Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri compresi all’interno
dell’intervallo, estremi inclusi.\nNel caso che b fosse minore di a,calcolare la somma nell’intervallo [b,a];
Esempio: 
sumInterval(3, 5) => 12 
sumInterval(5, 3) => 12 */

c = 5;
d = 3;

function sumIntervalI(start, cont){
   tot = 0;
   for(; cont > 0; cont --){
       tot += start;
       tot += start;  }
   return tot;
}

function sumIntervalR(start, cont){
   if(cont == 0) {
       return start;
   }
   else {
       return start + sumIntervalR(start + 1, cont - 1);
   }
}

function ex_4_I(a, b)  { return sumIntervalI(Math.min(a, b), Math.abs(a - b)); }
console.log("Risultato (iterativo): " + ex_4_I(c, d));

function ex_4_R(a,b)  { return sumIntervalR(Math.min(a, b),Math.abs(a - b));}
console.log("Risultato (ricorsivo): " + ex_4_R(c, d));


//Esercizio5
/*Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo operatore somma. 
Esempio: mult(2, 3) => 6 */

e = 5;
f = 10;

function multI(a, b){
    m = 0;
    for(; b > 0 ;b --) {
        m += a;
    }
    return m;
}
function multR(a, b){
   if(b > 0) {
       return a + multR(a, b - 1);
   }
   else return 0;
}

function ex_5_I(c, d)  { return multI(c, d);}
console.log("Risultato (iterativo): " + ex_5_I(e, f));

function ex_5_R(c, d)  { return multR(c,d);}
console.log("Risultato (ricorsivo): " + ex_5_R(e, f));


//Esercizio6
/*Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite l’utilizzo
 dei soli operatori somma e sottrazione. Esempio: div(5, 3) => 1 resto 2 */

a = 15;
b = 3;

function divI(c, d) {
   tot = 0;
   for (; c >= d; c-= d) {
       tot += 1;
   }
   return tot + " Il resto vale: " + c;
}

function divR(c, d) {
   if(c >= d) {
       return parseInt(1 + divR(c - d, d));
   }
   else {
       console.log("Il resto vale: " + c); 
       return 0;
   }
}

function ex_6_I(val1, val2)  { return divI(val1, val2);}
console.log("Risultato (iterativo): " + ex_6_I(a, b));

function ex_6_R(c, d)  { return divR(c, d);}
console.log("Risultato (ricorsivo): ");
console.log(ex_6_R(a, b));


//Esercizio7
/*Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli operatori somma,
 sottrazione e della funzione mult. Esempio: pow(2, 3) => 8 */

function powI(a, b){
    potenza = 0;
    for(b; b > 1; b--) {
        potenza += multR(a, a);
    }
    return potenza;
}

function powR(a, b) {
   if(b==0) {
       return 1;
   }
   else {
       return (multR(a,powR(a,b-1)));
   }
}
e = 2;
f = 2;
function ex_7_I(c, d)  { return powI(c, d);}
console.log("Risultato (iterativo): " + ex_7_I(e, f));

function ex_7_R(c, d)  { return powR(c,d);}
console.log("Risultato (ricorsivo): " + ex_7_R(e, f));


//Esercizio8
/* Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire
 tutti gli oggetti in un array bidimensionale n x n. */

function matriceI(n){
   a = [];
   tot = 0;
   for(x = 0; x < n; x++) {
       a[x] = [];
       for (y = 0; y < n; y++) {
           a[x][y] = tot;
           tot++;
       }
   }
   return a;
}

function matriceR(x, n, tot){
    if(n > 1){
        if(n % x!= 0) return tot + "," + matriceR(x, n - 1, tot + 1);
        else return "\n" + tot + "," + matriceR(x, n - 1, tot + 1);
    }
    else {
        return tot;
    }
}

n = 10;
function ex_8_I(x)  { return matriceI(x);}
console.log("Risultato (iterativo): " + ex_8_I(n));

function ex_8_R(x1)  { return matriceR(x1, x1 * x1, 1);}
console.log("Risultato (ricorsivo): " + ex_8_R(n));


//Esercizio9
/*Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi.*/

function invertiI(myarray){
   b = [];
   for(i = 0; i < myarray.length; i++) b[i] = myarray[(myarray.length - 1) - i];
   return b;
}

function invertiR(myarray){
    if(myarray.length > 1)
        return myarray[myarray.length - 1] + "," + invertiR(myarray.slice(0, myarray.length - 1));
    else return  myarray[0];
}


a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 110];

function ex_9_I(myarray)  { return invertiI(myarray);}
console.log("Risultato (iterativo): " + ex_9_I(a));

function ex_9_R(myarray)  { return invertiR(myarray);}
console.log("Risultato (ricorsivo): " + ex_9_R(a));


//Esercizio10
/*Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi contenenti a.
Esempio: replicate(3, 4) => A= {3, 3, 3, 3} */

function replicateI(a, b){
   mya = [];
   for (i = 0; i < b; i++)
       mya[i] = a;
   return mya;
}
 
function replicateR(a, b){
   if(b > 1) return a + "," + replicateR(a, b-1);
   else return a;
}
f = 3;
g = 4;

function ex_10_I(a, b)  { return replicateI(a, b);}
console.log("Risultato (iterativo): " + ex_10_I(f, g));

function ex_10_R(a, b)  { return replicateR(a, b);}
console.log("Risultato (ricorsivo): " + ex_10_R(f, g));


//Esercizio11
/*Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi dispari
 precedano nello stesso ordine tutti gli elementi pari. Esempio Input: A = {2, 5, 1, 8} Output: A = {5, 1, 2, 8} */

function ex_11_I(myarray){
    p = [];
    d = [];
    for(i = 0; i < myarray.length; i++)
        if(myarray[i] % 2 == 0) p[p.length] = myarray[i];
        else d[d.length] = myarray[i];
    return d.concat(p);
}


