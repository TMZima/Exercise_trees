// ### **getElementById**

// Implement your own getElementById function. Here are some hints:

// - Use helper method recursion, it will be much easier!
// - In your outer function, store a variable that will either be the element found or null if the element can not be found.
// - In your inner function, iterate over an elements children and if you find the correct.
// - Invoke your inner function and pass in document.body.children so you start from the root of the DOM.

function getElementById(id) {
  // Store the element found in a variable
  let foundElement = null;

  // Helper function to search for the element
  function searchElement(element) {
    if (element.id === id) {
      foundElement = element;
      return;
    }

    // Recursively search for the element in the children of the current element
    for (let i = 0; i < element.children.length; i++) {
      searchElement(element.children[i]);
    }
  }

  // Start the search from the root of the DOM (document.body) and return the found element
  searchElement(document.body);
  return foundElement;
}

// ### **getElementsByTagName**

// Implement your own getElementsByTagName function. This function should accept a string and return an array of DOM elements that have that tag name.

function getElementsByTagName(tagName) {
  // Initialize an empty array to store the elements found
  let elements = [];

  // Helper function to search for the element
  function searchElement(element) {
    // If the current element's tag name matches the tag name, add it to the elements array
    if (element.tagName === tagName.toUpperCase()) {
      elements.push(element);
    }

    // Recursively search for the element in the children of the current element
    for (let i = 0; i < element.children.length; i++) {
      searchElement(element.children[i]);
    }
  }

  // Start the search from the root of the DOM (document.body) and return the elements found
  searchElement(document.body);
  return elements;
}

// ### **getElementsByClassName**

// Implement your own getElementsByClassName function. This function should accept a string and return an array of DOM elements that have that class name.

function getElementsByClassName(className) {
  // Initialize an empty array to store the elements found
  let elements = [];

  // Helper function to search for the element
  function searchElement(element) {
    if (element.classList.contains(className)) {
      elements.push(element);
    }

    // Recursively search for the element in the children of the current element
    for (let i = 0; i < element.children.length; i++) {
      searchElement(element.children[i]);
    }
  }

  // Start the search from the root of the DOM (document.body) and return the elements found
  searchElement(document.body);
  return elements;
}
