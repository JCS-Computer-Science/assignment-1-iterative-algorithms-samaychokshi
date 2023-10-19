function binarySearch(array, searchTerm) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      // Calculate the middle index
      const middle = Math.floor((left + right) / 2);
  
      // If the middle element is equal to the search term, return its index
      if (array[middle] === searchTerm) {
        return middle;
      }
  
      // If the middle element is greater than the search term, search the left half
      if (array[middle] > searchTerm) {
        right = middle - 1;
      }
      // If the middle element is less than the search term, search the right half
      else {
        left = middle + 1;
      }
    }
  
    // If the search term is not found, return null
    return null;
  }
  
  module.exports = binarySearch;