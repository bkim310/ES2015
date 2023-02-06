//What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);
//{1, 2, 3, 4}

//What does the following code return?

[...new Set("referee")].join("");
//{r, e, f} => [r, e, f] => "ref"

//What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//need help with this one

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
  return new Set(arr).size !== arr.length; //if the set size is not the same as length as the arr length, then it has duplicates
};

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const isVowel = (char) => {
  return "aeiou".includes(char);
}; //return the vowels in a character that is input

//need help
