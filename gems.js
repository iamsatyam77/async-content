var array = ["aabbbbbbdddc", "abd", "abe"];

function gemsCount(arrays) {
  let firstString = arrays[0]
    .toLowerCase()
    .split("")
    .filter(function(item, i, ar) {
      return ar.indexOf(item) === i;
    })
    .join("");

  console.log(firstString);
  let totalGems = 0;
  for (var i = 0; i < firstString.length; i++) {
    let k = 0;
    for (var j = 1; j < arrays.length; j++) {
      if (arrays[j].includes(firstString.charAt(i))) {
        console.log(arrays[j]);
        k++;
      }
      if (arrays.length - 1 == k) {
        totalGems++;
      }
    }
    if (firstString.length - 1 == i) {
      return totalGems;
    }
  }
}

console.log(gemsCount(array));
