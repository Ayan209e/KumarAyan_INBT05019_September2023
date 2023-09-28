'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;

    if(name && email) {
        document.getElementById('success-message').classList.remove('hidden');
        // You can now use 'name' and 'email' for further processing
    } else {
        alert('Please fill in both name and email fields.');
    }
});

