const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

// write a function that takes a word and string of text as parameter, and returns
// an integer representing how many t imes the word appears in the text

// RUles: Assume word and text will always be provided.
//        Word breaks are spaces
//        Some words include punctiation
// Implicit: Case insensitive

// Input: String word, String text
// Output: Integer

// Steps:
// initialize a counter to 0
// itterate over the text and compare current word lowercased to string word
//   count++ if word is a match
// return count

function searchWord(word, string) {
  let count = 0;
  string
    .split(' ')
    .forEach(strWord => {
      if (word.toLowerCase() === strWord.toLowerCase()) count++;
    });

  return count;
}

console.log(searchWord('sed', text));     // 4
console.log(searchWord('est', text));     // 0
console.log(searchWord('est,', text));    // 2

