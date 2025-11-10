document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("dateupdate");
  if (!el) return;
  var d = new Date(document.lastModified);
  el.innerHTML = "This page was last modified on: " + d.toLocaleString();
});