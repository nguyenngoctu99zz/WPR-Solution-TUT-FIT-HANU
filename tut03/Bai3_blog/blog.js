/**
 * JS for blog post section exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addEntry);
  }

  /**
   * adds a blog entry to the blog post page
   */
  function addEntry() {
    const dateValue = id("date").value; // Lấy giá trị từ input date
    const entryValue = id("entry").value; // Lấy giá trị từ textarea entry

    // Tạo phần tử article mới
    const article = gen("article");
    article.classList.add("post"); // Thêm class .post

    // Tạo và thêm h3 cho ngày
    const heading = gen("h3");
    heading.textContent = "Date: " + dateValue; // Nội dung h3
    article.appendChild(heading);

    // Tạo và thêm paragraph cho nội dung
    const paragraph = gen("p");
    paragraph.textContent = "Entry: " + entryValue; // Nội dung paragraph
    article.appendChild(paragraph);

    // Thêm article vào #posts
    id("posts").appendChild(article);

    // Xóa nội dung trong input và textarea
    id("date").value = "";
    id("entry").value = "";

    // Kiểm tra số lượng bài viết
    const posts = document.querySelectorAll("#posts .post");
    if (posts.length > 3) {
      qs("button").disabled = true; // Vô hiệu hóa nút nếu có hơn 3 bài viết
    }

    // Thêm sự kiện double click để xóa bài viết
    article.addEventListener("dblclick", function() {
      article.remove(); // Xóa bài viết khi double click
    });
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }
  
  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
  
  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} a DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();