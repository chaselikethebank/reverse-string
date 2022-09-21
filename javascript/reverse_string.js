function reverseString(str) {
  let bw = ""
  for ( endPosition = str.length -1; endPosition > -1; --endPosition){ //go to end of string, the reduce
    bw = bw + str[endPosition]
  }
  return bw
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// hold the new string in an empty string
// make a loop for each element of the string back to front, add it to the new string
  //find the last element of the string
      //string's length - 1 will provide the index number
        // if the index place is larger than -1 , decriment 
  //add each peice to the new string 
  // return the new string


