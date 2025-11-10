(function () {
  var el = document.getElementById("verify");
  if (!el) return;

  var age = Number(prompt("Enter your age:", ""));
  var senior = age >= 65;

  var msg = senior
    ? "Free Friday Coffee Night for Seniors!"
    : "Enjoy Music and Make Memories!";
  el.textContent = msg;

  if (senior) {
    el.style.background = "gold";
    el.style.padding = "4px 8px";
    el.style.borderRadius = "6px";
    el.style.fontWeight = "700";
    el.style.color = "#222";
    el.title = "Senior night special";
  }
})();