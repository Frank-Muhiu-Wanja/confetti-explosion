let total = 75;
let w = window.innerWidth;
let h = window.innerHeight;

function random(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function maxRandom(max) {
  return Math.random() * max;
}

function generate() {
  for (let i = 0; i < total; i++) {
    let elem = $("<div class='confetti'></div>");
    $("body").append(elem);

    gsap.set(elem, {
      x: maxRandom(w),
      y: random(h * -2, 0),
      opacity: 1,
      scale: maxRandom(0.5) + 0.5,
      backgroundColor: "hsl(" + random(0, 360) + ",50%,50%)",
    });

    animate(elem);
  }
}

function animate(elem) {
  gsap.to(elem, {
    duration: maxRandom(5) + 4,
    y: h + 40,
    ease: "none",
    repeat: -1,
    delay: -1,
  });

  gsap.to(elem, {
    duration: maxRandom(5) + 1,
    x: "+=70",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(elem, {
    duration: maxRandom(5) + 1,
    scaleX: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

generate();

window.onresize = function () {
  $(".confetti").remove(); // clear old confetti
  w = window.innerWidth;
  h = window.innerHeight;
  generate();
};
