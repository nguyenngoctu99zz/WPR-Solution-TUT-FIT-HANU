/**
 * JS for dynamic form validation exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up necessary functionality when page loads
   */
  function init() {
    // Add event listener to form submit button
    id("registrationForm").addEventListener("submit", validateForm);
    id("name").addEventListener("input", validateName);
    id("email").addEventListener("input", validateEmail);
    id("password").addEventListener("input", validatePassword);
    id("confirmPassword").addEventListener("input", validateConfirmPassword);

    // Add event listeners to input fields for real-time validation
    
  }

  /**
   * Validates the entire form on submit
   * @param {Event} event - the event that triggered this function
   */
  function validateForm(event) {
    // Prevent form from submitting if there are validation errors

    let isValid = validateName() & validateEmail() & validatePassword() & validateConfirmPassword();
    // After successful validation, display a 3-second countdown and then show a success message.
    if (isValid) {
      startCountdown();
    }

  }

  /**
   * Starts a 3-second countdown and displays a success message
   */
  function startCountdown() {
    let countdown = 3;
    let countdownDiv = id("countdown");
    countdownDiv.style.display = "block";
    countdownDiv.textContent = `Form submitted successfully! Redirecting in ${countdown} seconds...`;

    let interval = setInterval(() => {
      countdown--;
      countdownDiv.textContent = `Form submitted successfully! Redirecting in ${countdown} seconds...`;
      if (countdown === 0) {
        clearInterval(interval);
        countdownDiv.textContent = "Form submitted successfully!";
      }
    }, 1000);
  }

  /**
   * Validates the name field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateName() {
    let name = id("name").value;
    let errorDiv = id("nameError");
    if (name.length >= 3) {
      errorDiv.textContent = "";
      return true;
    } else {
      errorDiv.textContent = "Name must be at least 3 characters long.";
      return false;
    }
  }

  /**
   * Validates the email field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateEmail() {
    let email = id("email").value;
    let errorDiv = id("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      errorDiv.textContent = "";
      return true;
    } else {
      errorDiv.textContent = "Please enter a valid email address.";
      return false;
    }
  }

  /**
   * Validates the password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validatePassword() {
    let password = id("password").value;
    let errorDiv = id("passwordError");
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordPattern.test(password)) {
      errorDiv.textContent = "";
      return true;
    } else {
      errorDiv.textContent = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";
      return false;
    }
  }

  /**
   * Validates the confirm password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateConfirmPassword() {
    let password = id("password").value;
    let confirmPassword = id("confirmPassword").value;
    let errorDiv = id("confirmPasswordError");
    if (password === confirmPassword) {
      errorDiv.textContent = "";
      return true;
    } else {
      errorDiv.textContent = "Passwords do not match.";
      return false;
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} - DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
