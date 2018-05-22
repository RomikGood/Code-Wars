function cubeOdd(arr){
  for (i of arr){
    if (typeof i !== "number"){
      return undefined;
    }
  }
  return arr.map((n) => n*n*n).filter(n => n%2).reduce((a,b) => a+b,0)
}