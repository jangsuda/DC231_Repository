// window.alert(
//   "Bazinga! \nFor display purposes only."
// );

let cardd = document.querySelectorAll(".card");
cardd.forEach((card) => {
  card.onclick = function () {
    card.classList.toggle("card--clicked");
  };
});
