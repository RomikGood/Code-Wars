function toCamelCase(str){
  let newArray = str.replace(/-|_/g, ' ').split(' ');
    console.log(str)
    let result = [newArray[0]];
    
    for(let i = 1; i < newArray.length; i++){
       result.push(newArray[i].substring(0,1).toUpperCase());
       result.push(newArray[i].substring(1).toLowerCase());
    
  }

  return result.join('');
}

