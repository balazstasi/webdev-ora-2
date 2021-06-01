// 1. feladat (megoldás 2)
// breaks the web (hash doesn't change)
// const navLinks = document.querySelectorAll(".js-scroll-trigger");

// for (let link of navLinks) {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();

//     const href = link.href;
//     const id = href.split("#")[1];

//     const targetElement = document.querySelector(`#${id}`);
//     targetElement.scrollIntoView({ behavior: "smooth" });
//   });
// }

// 2. feladat

const nav = document.querySelector("nav");

function toggleNavbarScrolled() {
  if (window.scrollY >= 200) {
    nav.classList.add("navbar-scrolled");
  } else {
    nav.classList.remove("navbar-scrolled");
  }
}

// Kezzel irt throttle
// function throttle(fn, timeout) {
//   let ticking = false;

//   return (...args) => {
//     if (!ticking) {
//       fn(...args);
//       ticking = true;

//       setTimeout(() => {
//         ticking = false;
//       }, timeout);
//     }
//   };
// }

document.addEventListener("scroll", _.throttle(toggleNavbarScrolled, 100));

// Kézzel implementált throttle

// 3. feladat

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const animationType = target.getAttribute("data-scroll-animation");
      target.classList.add("animate__animated", `animate__${animationType}`);
    }
  });
});

const dataScrollElements = document.querySelectorAll("[data-scroll]");
for (let element of dataScrollElements) {
  observer.observe(element);
}

// 4. feladat -- scroll event + scrollY + scrollHeight + window.innerHeight

const body = document.querySelector("body");
const progressBar = document.querySelector("#progress-bar");

document.addEventListener(
  "scroll",
  _.throttle(() => {
    const viewportHeight = window.innerHeight;
    const scrollHeight = body.scrollHeight;
    const currY = window.scrollY;

    const maxY = scrollHeight - viewportHeight;

    const scrolledPercent = (currY / maxY) * 100;

    progressBar.style.width = `${scrolledPercent}%`;
  }, 30)
);

// 5. feladat -- bootstrap scrollspy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function getNavLinkById(id) {
  for (let link of navLinks) {
    if (link.textContent.toLowerCase() === id) return link;
  }

  return null;
}

let options = {
  rootMargin: "100px",
  threshold: 1.0,
};

const highlighter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      if (id) {
        const link = getNavLinkById(id);
        link.classList.add("active");
      }
    } else {
      if (id) {
        const link = getNavLinkById(id);
        link.classList.remove("active");
      }
    }
  });
}, options);

for (let section of sections) {
  console.log(section);
  highlighter.observe(section);
}

// 6. feladat -- timeout/interval + intersectionObserver

// 6. feladat - jQueryvel

// const counter = $("[data-number-max]");
// new Waypoint({
//   element: counter,
//   handler: () => {
//     counter.animateNumber({
//       number: counter.attr("data-number-max"),
//     });
//   },
//   offset: "75%",
// });
