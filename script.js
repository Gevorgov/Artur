document.addEventListener("DOMContentLoaded", function() {
  const page1Button = document.getElementById("page1Button");
  const page2Button = document.getElementById("page2Button");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  page1Button.addEventListener("click", function() {
    page1.classList.add("active");
    page2.classList.remove("active");
  });

  page2Button.addEventListener("click", function() {
    page1.classList.remove("active");
    page2.classList.add("active");
  });
});
