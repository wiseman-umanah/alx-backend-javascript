export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const value of array) {
    array2.push(appendString + value);
  }
  return array2;
}

// export default function appendToEachArrayValue(array, appendString) {
//   for (const [i, value] of array.entries()) {
//     array[i] = appendString + value;
//   }

//   return array;
// }
/* This works as the above and is more efficient that the later instead
of creating a whole new array, we transform it */
