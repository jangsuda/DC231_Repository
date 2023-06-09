// new IntersectionObserver(조건에 부합할 때 실행시킬 함수, 옵션);
// new IntersectionObserver(function (){
//     조건에 부합할 때 실행시킬 구문들.
// });

// 만약 개발자도구 console 반응이 없다면 rootmargin과 threshold 고려. 작동화면 값이 안 맞기 때문
let obsOption = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.75,
};

// function obsCallback() {}
let obsCallback = (obsTargets) => {
  obsTargets.forEach((eachObsTarget) => {
    if (eachObsTarget.isIntersecting) {
      console.log(
        "obsCallback",
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
  obsCallback,
  obsOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
// // 하드코딩
// obs.observe(elems[0]);
// obs.observe(elems[1]);
// obs.observe(elems[2]);
// obs.observe(elems[3]);
// ...
// // 조금 똑똑한 코딩
// for (let idx = 0; idx < elems.length; idx++) {
//   obs.observe(elems[idx]);
// }
// 있어보이는 코딩
elems.forEach((eachElem) => {
  obs.observe(eachElem);
});

// obs.observe(HTML요소-하나);
