function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
    // Only change code above this line
  }


 let res = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
 
 console.log(res);