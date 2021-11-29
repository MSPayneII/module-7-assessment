// 1) Sum Zero

// runtime: O(n^2)
// space complexity: O(n^2)

const addToZero = (numArr) => {
  let boolValue = false;

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      if (j !== i && numArr[j] + numArr[i] === 0) {
        boolValue = true;
        return boolValue;
      }
    }
  }
  return boolValue;
};

// 2) Unique Characters

// runtime: O(n)
// space complexity: O(n)

const hasUniqueChars = (str) => {
  let newStr = "";
  let boolValue = true;

  for (let i = 0; i < str.length; i++) {
    if (newStr.includes(str[i]) === false) {
      newStr += str[i];
    } else {
      boolValue = false;
      return boolValue;
    }
  }
  return boolValue;
};

// 3) Pangram Sentence

// runtime: O(n)
// space complexity: O(n)

const isPangram = (str) => {
  let lowerCaseStr = str.toLowerCase();

  let boolValue = true;

  let alphabet = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (alphabet.hasOwnProperty(lowerCaseStr[i])) {
      alphabet[lowerCaseStr[i]]++;
    }
  }

  for (letter in alphabet) {
    if (alphabet[letter] === 0) {
      boolValue = false;
      return boolValue;
    }
  }
  return boolValue;
};

// 4) Longest Word

// runtime: O(n)
// space complexity: O(n)

const findLongestWord = (word) => {
  let longestWord = word[0];

  for (let i = 1; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord.length;
};
