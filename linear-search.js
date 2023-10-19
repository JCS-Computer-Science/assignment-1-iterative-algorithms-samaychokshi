function linearSearch(array, searchTerm) {
    // Check each element from start to finish
    for (let i = 0; i < array.length; i++) {
      // If the current element matches the search term
      if (array[i] === searchTerm) {
        // Return the index of the found element
        return i;
      }
    }
  
    // If the search term is not found, return null
    return null;
  }
  
  module.exports = linearSearch;