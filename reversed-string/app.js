function solution(str){
  let result=[];
  str = str.split('');
  for (i in str){
    result.unshift(str[i]);
  }
  return result.join('');
}