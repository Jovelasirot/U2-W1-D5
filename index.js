const changeColor = document.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let getStartedBtn = document.getElementById("getStarted");
  let scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    header.style.backgroundColor = "#FFFFFF";
    getStartedBtn.style.backgroundColor = "#1A8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    getStartedBtn.style.backgroundColor = "#1a8917";
  }
});
