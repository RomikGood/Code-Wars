function isNice(arr){
  if (arr.length === 0){
  return false}
  
  for (let i of arr)  {
    if (!arr.includes(i - 1) && !arr.includes(i + 1)){
      return false
      }    
      }return true
  }