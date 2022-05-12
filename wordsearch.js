const transpose = require("../async/matrix_transpose");
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

// console.log(wordSearch([], "SEINFELD"));
module.exports = wordSearch;
