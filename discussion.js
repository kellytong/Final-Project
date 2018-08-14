
function myFunction() {
  var dots = document.getElementById("more");
  var moreText = document.getElementById("less");
  var btnText = document.getElementById("myMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Comment Here";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Remove Comment Box";
    moreText.style.display = "inline";
  }
}
