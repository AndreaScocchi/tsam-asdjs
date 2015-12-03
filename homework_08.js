function merge(array1,array2){

	var mergedArray=[];
	var i=0;
	var j=0;
	while(i<array1.length && j<array2.length){
		if(array1[i]<array2[j]){
			mergedArray.push(array1[i]);
			i++;
		}
		else{
			mergedArray.push(array2[j]);
			j++;
		}

	}
	
	return mergedArray.concat(array1.slice(i)).concat(array2.slice(j));
}

function mergeSort(array){
	if(array.length==1)
		return array;
	var meta=Math.floor(array.length/2);
	return merge(mergeSort(array.slice(0,meta)), mergeSort(array.slice(meta)));
}