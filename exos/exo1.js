const searchWord = (sentence, word) => {
  sentence = sentence.toLowerCase().split("");
  word = word.toLowerCase();

  const separator = [" ", ",", ";", ".", "!", "?"];
  let isWord = false;
  let currentWord = "";
  let firstCharacterPosition = null;

  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];

    if (separator.includes(currentChar)) {
      isWord = false;
      if (currentWord === word) {
        return firstCharacterPosition;
      } else {
        currentWord = "";
        continue;
      }
    } else {
      if (isWord === false) {
        isWord = true;
        currentWord += currentChar;
        firstCharacterPosition = i;
      } else {
        currentWord += currentChar;
      }
    }
  }
  return null;
  //   console.log(res);
};

export default searchWord;
