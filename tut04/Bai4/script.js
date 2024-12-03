/**
 * JS for working with JSON exercise
 */

"use strict";
(function() {

  // Initialize event listeners when the page loads
  document.addEventListener("DOMContentLoaded", init);

  /**
   * Sets up event listeners for the page elements
   * - Adds a click event listener to the "loadDataButton"
   *   that triggers the loadData function
   */
  function init() {
    id("loadDataButton").addEventListener("click", loadData); 
  }

  /**
   * Handles loading and displaying JSON data
   * - Defines a JSON object with sample data
   *    { name: "Alice", age: 30, country: "USA" },
        { name: "Bob", age: 25, country: "UK" },
        { name: "Charlie", age: 35, country: "Canada" }
   * - Shows a countdown timer before displaying the data
   * - Calls the displayData function to present the data after the countdown
   */
  function loadData() {
    // Define the JSON object with sample data
    const jsonData = [
      { name: "Alice", age: 30, country: "USA" },
      { name: "Bob", age: 25, country: "UK" },
      { name: "Charlie", age: 35, country: "Canada" }
    ];

    // Prepare to show countdown and data
    let countdown = 3;
    const dataContainer = id("dataContainer");
    dataContainer.textContent = `Loading data in ${countdown} seconds...`;

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        dataContainer.textContent = `Loading data in ${countdown} seconds...`;
      } else {
        clearInterval(countdownInterval);
        displayData(jsonData);
      }
    }, 1000);

  }

  /**
   * Displays the JSON data in the data container
   * - Clears any existing content in the container
   * - Iterates over each item in the JSON data and creates
   *   a new div element for each item with formatted text
   * - Appends each div to the container
   * @param {object} data - The JSON data to be displayed
   */
  function displayData(data) {
    const dataContainer = id("dataContainer");
    dataContainer.innerHTML = ""; // Clear any existing content

    data.forEach(item => {
      const itemDiv = gen("div");
      itemDiv.className = "data-item";
      itemDiv.textContent = `Name: ${item.name}, Age: ${item.age}, Country: ${item.country}`;
      dataContainer.appendChild(itemDiv);
    });

  }

  /**
   * Retrieves the DOM element with the specified ID
   * @param {string} id - The ID of the element to retrieve
   * @returns {object} - The DOM element with the specified ID
   */
  function id(id) {
    return document.getElementById(id);
  }
  
  /**
   * Creates a new DOM element with the specified tag name
   * @param {string} tagName - The name of the tag for the new element
   * @returns {object} - The newly created DOM element
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();
