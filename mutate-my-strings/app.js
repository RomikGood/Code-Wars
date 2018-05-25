function mutateMyStrings(stringOne, stringTwo){

  let resultString = stringOne  + "\n";
  let stringOneArr = stringOne.split(''); 
  let stringTwoArr = [...stringTwo]; 
  for (i in stringOneArr) {
    if (stringOneArr[i] !== stringTwoArr[i]) {
      stringOneArr[i] = stringTwoArr[i]
      resultString += (stringOneArr.join('') + "\n")
      
    }
  }
  return resultString;
}
