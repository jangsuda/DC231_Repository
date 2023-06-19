window.alert(
  "Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga! Bazinga!"
);

let observerOption = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.75,
};

let observerCallback = (obsTargets) => {
  obsTargets.forEach((eachObsTarget) => {
    if (eachObsTarget.isIntersecting) {
      console.log(
        "observerCallback",
        eachObsTarget.target
      );
      eachObsTarget.target.classList.add(
        "triggered"
      );
    } else {
      eachObsTarget.target.classList.remove(
        "triggered"
      );
    }
  });
};

let obs = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);

elems.forEach((eachElem) => {
  obs.observe(eachElem);
});
