const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const counter = document.querySelector(".counter");

const maxLength = 250;

textarea.addEventListener("input", () => {

  const currentLength = textarea.value.length;

  // update angka
  charCount.textContent = currentLength;

  // jika sudah 250
  if (currentLength === maxLength) {
    textarea.classList.add("limit");
    counter.classList.add("limit");
  } else {
    textarea.classList.remove("limit");
    counter.classList.remove("limit");
  }

});