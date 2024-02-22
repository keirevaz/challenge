function solution(S) {
  let result = "NO";
  let finishedLetters = [];

  //iterate through S
  for (let char of S) {
    //set to lower and upper case
    let lowercase = char.toLowerCase();
    let uppercase = char.toUpperCase();
    //skip if already finished
    if (!finishedLetters.includes(lowercase)) {
      //check if upper and lower case exists
      if (S.includes(lowercase) && S.includes(uppercase)) {
        // Update the result if it is empty or if the lowercase letter is  larger than the current result
        if (!result || lowercase > result) {
          result = lowercase;
        }
      }
      //add to finished letters
      finishedLetters.push(lowercase);
    }
  }
  //convert to upper case
  return result.toUpperCase();
}

//test from doc data
console.log(solution("aaBabcDaA"));
console.log(solution("Qooper"));
console.log(solution("WeTestCodErs"));
