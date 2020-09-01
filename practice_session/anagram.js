// write the function isAnagram
// Lower case it, Split the string, sort the array,

function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join() ===
  str2.toLowerCase().split('').sort().join();
}

console.log(isAnagram("foefet", "toffee")); //, true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK")); //, true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT")); //, true, 'The word Twoo is an anagram of WooT')
console.log(isAnagram("dumble", "bumble")); //, false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round")); //, false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale")); //, false, 'Same letters, but different count')