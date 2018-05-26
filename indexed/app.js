function capitalize(s,arr){
  arrS= s.split('');
  for (i of arr) {
    if (i < arrS.length) {
      arrS[i]=arrS[i].toUpperCase();
    }
  }
  return arrS.join('');
}