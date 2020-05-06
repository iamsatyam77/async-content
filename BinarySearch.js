var arr = [1,2,3,4,5,6];
var value = 4;
var firstIndex = 0;
var lastIndex = arr.length - 1;
var middleIndex = Math.floor((lastIndex + lastIndex)/2);
  

function search(array, searchValue) {
 return new Promise ((resolve, reject) => {
  while (array[middleIndex] != searchValue && firstIndex < lastIndex) {
  	if(array[middleIndex] < value) {
    	firstIndex = middleIndex + 1;
    }
    else if (array[middleIndex] >  value) {
    	lastIndex = middleIndex - 1; 
      
    }
	 middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }
  if(array[middleIndex] != searchValue) {
   reject(-1);
  } else {
   resolve(middleIndex);
  }
 });
}


search(arr,value).then(result => {console.log(`Result is: ${result}`)}).catch(error => { console.log(`Result is: ${error}`)});
