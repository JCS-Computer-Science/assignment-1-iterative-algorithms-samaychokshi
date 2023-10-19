function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      // Store the current element to be compared
      let currentElement = array[i];
      let j = i - 1;
  
      // Compare the current element with elements to its left
      // and shift them to the right if they are greater
      while (j >= 0 && array[j] > currentElement) {
        array[j + 1] = array[j];
        j--;
      }
  
      // Place the current element in its correct position
      array[j + 1] = currentElement;
    }
  
    return array;
  }
  
  module.exports = insertionSort;