const searchWord = (sentence, word) => {
  sentence = sentence.toLowerCase().split("");
  word = word.toLowerCase();

  const separator = [" ", ",", ";", ".", "!", "?"];
  let isWord = false; // permettra de savoir si nous sommes dans un mot ou pas
  let currentWord = "";
  let firstCharacterPosition = null;

  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];

    // si charactère est un séparateur de mot (espace, virgule, point, etc)
    // alors, c'est la fin d'un mot
    if (separator.includes(currentChar)) {
      isWord = false;

      // si c'est la fin d'un mot,
      // soit on aura déjà accumuler le mot qu'on cherche
      // soit, on va continuer
      if (currentWord === word) {
        return firstCharacterPosition;
      } else {
        currentWord = "";
        continue;
      }
    } else {
      // si le charactère n'est pas un séparateur,
      // alors, nous sommes dans un mot
      // donc, on va accumuler le charactère actuel pour constituer le mot
      if (isWord === false) {
        // cas où on passe à un autre mot, donc avant on était pas dans un mot
        isWord = true;
        currentWord += currentChar;
        firstCharacterPosition = i;
      } else {
        currentWord += currentChar;
      }
    }
  }
  return null;
};

export default searchWord;
