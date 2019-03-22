var link = document.querySelector(".search__open-button");
var popup = document.querySelector(".search__form");

var form = document.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("search__form--on");
});

form.addEventListener("submit", function(evt) {
if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
  evt.preventDefault();
  popup.classList.remove("search__form--error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("search__form--error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
      }
  }
});
