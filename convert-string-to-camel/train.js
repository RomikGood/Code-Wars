function reachDestination(distance, speed) {
  let returnValue;
     let str = (distance / speed).toString();
     let decimalPoint = str.indexOf('.');
     if (decimalPoint == -1) {
         returnValue = str;
     }
     else {
         var integerValue = str.slice(0, decimalPoint);
         var decimalValue = str.slice(decimalPoint);
         if (decimalValue > 0 && decimalValue < 0.25) {
             decimalValue = 0;
         }
         else if (decimalValue >= 0.25 && decimalValue < 0.75) {
             decimalValue = 0.5;
         }
         else decimalValue = 1;
         returnValue = Number(integerValue) + decimalValue;
         
     }
     if (returnValue == 1) {
     return 'The train will be there in ' + returnValue +' hour.'
     } else {
     return 'The train will be there in ' + returnValue +' hours.'
     
 }
 }