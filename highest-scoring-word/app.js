function high(string) {
  
  let highestScore = 0;
  let highestScoreWord = '';
  let wordList = string.split(' ');

  for (let i in wordList){
    let wordScore = wordList[i]
      .split('')
      .map((char) => {return char.charCodeAt() - 96})
      .reduce((a, b) => a + b, 0);
      
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestScoreWord = wordList[i];
    }
  }
  return highestScoreWord;
}

