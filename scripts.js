var models = [
  {
    name: "BMW 418i",
    image: "img/bmw.jpg",
    link: "https://wwww.sahibinden.com.tr",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "https://wwww.sahibinden.com.tr",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "https://wwww.sahibinden.com.tr",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "https://wwww.sahibinden.com.tr",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "https://wwww.sahibinden.com.tr",
  },
];
var settings = {
  duration: "2000",
  random: true,
};
var index = 0;
var slaytCount = models.length;
var interval;
init(settings);
document.querySelector(".left").addEventListener("click", function () {
  index--;
  showSlide(index);
});
document.querySelector(".right").addEventListener("click", function () {
  index++;
  showSlide(index);
});

document.querySelectorAll(".arroww").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arroww").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(stg) {
  var prev;

  interval = setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
