function consecutiveSubstrings(string) {
  // Initialize an array to store all substrings
  const result = [];
  
  // Edge case: empty string
  if (string.length === 0) {
    return result;
  }
  
  // Outer loop for starting position
  // Time complexity: O(n) where n is the length of the string
  for (let i = 0; i < string.length; i++) {
    // Inner loop for ending position
    // Time complexity: O(n) for each iteration of the outer loop
    for (let j = i + 1; j <= string.length; j++) {
      // Extract substring from position i to j (exclusive)
      // substring() is O(1) in JavaScript as it creates a new string reference
      result.push(string.substring(i, j));
    }
  }
  
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
  
  // Additional test cases
  console.log("");
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
  
  console.log("");
  console.log("Expecting: ['p', 'ph', 'pho', 'phon', 'phone', 'h', 'ho', 'hon', 'hone', 'o', 'on', 'one', 'n', 'ne', 'e']");
  console.log("=>", consecutiveSubstrings('phone'));
}

module.exports = consecutiveSubstrings;