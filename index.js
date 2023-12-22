const changeColor = document.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let getStartedBtn = document.getElementById("getStarted");
  let scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    header.style.backgroundColor = "#FFFFFF";
    getStartedBtn.style.backgroundColor = "#1A8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    getStartedBtn.style.backgroundColor = "#191919";
  }
});

// const animateGElements = () => {
//   const gElements = document.querySelectorAll('g[stroke-linecap="butt"]');
//   const animationOrder = Array.from(
//     { length: gElements.length },
//     (_, index) => index
//   );
//   shuffleArray(animationOrder);

//   let currentIndex = 0;

//   const toggleVisibility = (element) => {
//     element.style.opacity =
//       element.style.display === "inherit" ? "none" : "inherit";
//   };

//   const animationInterval = setInterval(
//     (animateNext = () => {
//       if (currentIndex < gElements.length) {
//         toggleVisibility(gElements[animationOrder[currentIndex]]);
//         currentIndex++;
//       } else {
//         clearInterval(animationInterval);
//       }
//     }),
//     8000
//   );
// };

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// animateGElements();
// animateNext();
