function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      // Find the index of the minimum element in the remaining unsorted array
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the first element of the unsorted array
      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
  
    return array;
  }
  
  module.exports = selectionSort;