function bubbleSort(array) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < array.length - 1; i++) {
        // Compare adjacent elements and swap if they are in the wrong order
        if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return array;
  }
  
  module.exports = bubbleSort;