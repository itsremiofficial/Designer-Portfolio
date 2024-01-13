$(function () {
  $(".atag-6")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });
});

function macPointer() {
  const allElements = document.querySelectorAll("*");

  allElements.forEach((element) => {
    const computedStyle = getComputedStyle(element);
    if (computedStyle.cursor === "pointer") {
      element.style.cursor = `url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDU1IDU1JyBzdHlsZT0nZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsnIHhtbDpzcGFjZT0ncHJlc2VydmUnPjxnPjxwYXRoIGZpbGw9JyNGRkZGRkYnIGQ9J003LjMsMjQuN2MtMC42LTAuOC0xLjItMi4yLTIuNC00Yy0wLjYtMS0yLjQtMy0zLTMuOGMtMC40LTAuOC0wLjQtMS4yLTAuMi0yYzAuMi0xLjIsMS40LTIuMiwyLjgtMi4yIGMxLDAsMiwwLjgsMi44LDEuNGMwLjQsMC40LDEsMS4yLDEuNCwxLjZjMC40LDAuNCwwLjQsMC42LDAuOCwxYzAuNCwwLjYsMC42LDEsMC40LDAuMmMtMC4yLTEtMC40LTIuNi0wLjgtNC4yIGMtMC4yLTEuMi0wLjQtMS40LTAuNi0yLjJDOC4zLDkuNiw4LjEsOSw3LjksOEM3LjcsNy40LDcuNSw1LjgsNy4zLDVDNy4xLDQsNy4xLDIuMiw3LjksMS40QzguNSwwLjgsOS43LDAuNiwxMC41LDEgYzEsMC42LDEuNiwyLDEuOCwyLjZjMC40LDEsMC44LDIuNCwxLDRjMC40LDIsMSw1LDEsNS42YzAtMC44LTAuMi0yLjIsMC0zYzAuMi0wLjYsMC42LTEuNCwxLjQtMS42YzAuNi0wLjIsMS4yLTAuMiwxLjgtMC4yIGMwLjYsMC4yLDEuMiwwLjYsMS42LDFjMC44LDEuMiwwLjgsMy44LDAuOCwzLjZjMC4yLTAuOCwwLjItMi40LDAuNi0zLjJjMC4yLTAuNCwxLTAuOCwxLjQtMWMwLjYtMC4yLDEuNC0wLjIsMiwwIGMwLjQsMCwxLjIsMC42LDEuNCwxYzAuNCwwLjYsMC42LDIuNiwwLjgsMy40YzAsMC4yLDAuMi0wLjgsMC42LTEuNGMwLjgtMS4yLDMuNi0xLjYsMy44LDEuMmMwLDEuNCwwLDEuMiwwLDIuMmMwLDEsMCwxLjYsMCwyLjQgcy0wLjIsMi42LTAuNCwzLjRjLTAuMiwwLjYtMC44LDItMS40LDIuOGMwLDAtMi4yLDIuNC0yLjQsMy42Yy0wLjIsMS4yLTAuMiwxLjItMC4yLDJzMC4yLDEuOCwwLjIsMS44cy0xLjYsMC4yLTIuNCwwIGMtMC44LTAuMi0xLjgtMS42LTItMi4yYy0wLjQtMC42LTEtMC42LTEuNCwwYy0wLjQsMC44LTEuNCwyLjItMi4yLDIuMmMtMS40LDAuMi00LjIsMC02LjIsMGMwLDAsMC40LTItMC40LTIuOCBjLTAuNi0wLjYtMS42LTEuNi0yLjItMi4yTDcuMywyNC43eicvPjxwYXRoIGQ9J00xNi41LDMxLjljLTAuNywwLTEuNSwwLTIuMywwYy0wLjcsMC0xLjUsMC0yLjEsMGMtMC4yLDAtMC40LTAuMS0wLjYtMC4zYy0wLjEtMC4yLTAuMi0wLjQtMC4yLTAuNiBjMC4xLTAuNiwwLjItMS44LTAuMi0yLjFMOSwyNi43bC0yLjEtMS4zYy0wLjEsMC0wLjEtMC4xLTAuMi0wLjJjLTAuMy0wLjQtMC42LTEtMS0xLjZjLTAuNC0wLjctMC44LTEuNS0xLjUtMi40IGMtMC40LTAuNi0xLjMtMS43LTItMi41Yy0wLjQtMC41LTAuOC0wLjktMS0xLjJjLTAuNi0xLjEtMC42LTEuNy0wLjMtMi42QzEuMiwxMy4zLDIuOCwxMiw0LjUsMTJjMS4yLDAsMi4zLDAuOCwzLjEsMS40IGMwLDAsMC4yLDAuMSwwLjIsMC4yYzAuMiwwLjIsMC41LDAuNSwwLjcsMC44YzAuMSwwLjEsMC4xLDAuMSwwLjIsMC4yYy0wLjEtMC42LTAuMi0xLjEtMC40LTEuN2MtMC4xLTAuNy0wLjItMS4xLTAuNC0xLjQgYy0wLjEtMC4yLTAuMi0wLjUtMC4yLTAuOGMtMC4xLTAuNS0wLjItMC45LTAuMy0xLjNDNy40LDksNy4zLDguNiw3LjIsOC4xQzcsNy44LDYuOSw3LjIsNi44LDYuNUM2LjcsNiw2LjYsNS41LDYuNiw1LjIgQzYuNCw0LjEsNi4zLDIsNy40LDAuOUM4LjIsMCw5LjctMC4yLDEwLjgsMC4zYzEuNCwwLjgsMiwyLjUsMi4yLDNjMC4zLDAuNywwLjgsMi4yLDEsNC4xYzAuMSwwLjQsMC4yLDAuOCwwLjIsMS4yIGMwLjQtMC41LDAuOS0wLjcsMS4yLTAuOGMwLjctMC4yLDEuNC0wLjIsMi0wLjJjMC4xLDAsMC4yLDAsMC4yLDBjMC43LDAuMiwxLjQsMC43LDEuOSwxLjJjMC4xLDAuMSwwLjIsMC4zLDAuMywwLjUgYzAuMy0wLjUsMS0wLjksMS42LTEuMkMyMi4zLDcuOCwyMy4yLDcuOCwyNCw4YzAuOCwwLjEsMS43LDAuOSwxLjksMS40YzAuMiwwLjMsMC4zLDAuOCwwLjUsMS41YzAuNy0wLjcsMS45LTEsMi44LTAuNyBjMS4xLDAuMywxLjksMS4zLDIsMi43bDAsNC42YzAsMC44LTAuMiwyLjctMC40LDMuNmMtMC4yLDAuNi0wLjgsMi4xLTEuNSwzLjFjLTAuOSwxLTIuMSwyLjYtMi4zLDMuM2MtMC4yLDEuMS0wLjIsMS4xLTAuMiwxLjkgQzI2LjgsMzAsMjcsMzEsMjcsMzFjMCwwLjIsMCwwLjQtMC4xLDAuNmMtMC4xLDAuMi0wLjMsMC4zLTAuNSwwLjNjLTAuMiwwLTEuOCwwLjItMi43LDBjLTEuMS0wLjMtMi4xLTEuNy0yLjQtMi41IGMtMC4yLDAuMS0xLjQsMi41LTMsMi41QzE3LjgsMzEuOSwxNy4yLDMxLjksMTYuNSwzMS45eiBNMTIuOSwzMC40YzAuNCwwLDAuOSwwLDEuMywwYzEuNSwwLDMsMC4xLDMuOSwwYzAuNCwwLDEuMi0wLjgsMS42LTEuOCBjMC44LTEuMiwyLTEuMSwyLjctMC4xYzAsMC4xLDAuMSwwLjEsMC4xLDAuMmMwLjIsMC41LDEsMS42LDEuNSwxLjdjMC4zLDAuMSwwLjgsMC4xLDEuMywwLjFjMC0wLjMtMC4xLTAuNy0wLjEtMS4xIGMwLTAuOSwwLTAuOSwwLjItMi4xYzAuMi0xLjMsMi4yLTMuNSwyLjYtNGMwLjUtMC43LDEuMS0yLDEuMi0yLjVjMC4yLTAuNywwLjQtMi40LDAuNC0zLjJWMTNjLTAuMS0wLjctMC4zLTEuMi0wLjgtMS4zIGMtMC42LTAuMi0xLjMsMC4yLTEuNiwwLjVjLTAuMiwwLjMtMC40LDAuOC0wLjQsMWMtMC4yLDAuNS0wLjUsMC44LTAuOSwwLjdjLTAuNC0wLjEtMC42LTAuNC0wLjYtMC44YzAtMC4xLTAuMS0wLjUtMC4yLTAuOSBjLTAuMS0wLjYtMC4zLTEuOC0wLjUtMi4xYy0wLjEtMC4zLTAuNi0wLjYtMC44LTAuN2MtMC4xLDAtMC4xLDAtMC4yLDBjLTAuNC0wLjEtMS4xLTAuMS0xLjUsMGMtMC43LDAuMy0wLjksMC41LTEsMC42IGMtMC4yLDAuNC0wLjMsMS4yLTAuMywxLjhjLTAuMSwwLjUtMC4xLDAuOS0wLjIsMS4yYy0wLjEsMC4zLTAuNCwwLjYtMC43LDAuNmMtMC4zLDAtMC43LTAuMy0wLjgtMC43YzAtMC44LTAuMi0yLjUtMC43LTMuMiBjLTAuMi0wLjItMC43LTAuNS0xLjEtMC43Yy0wLjUsMC0xLDAtMS40LDAuMmMtMC41LDAuMS0wLjgsMC43LTAuOSwxLjFjLTAuMSwwLjQsMCwxLjIsMCwxLjhjMCwwLjMsMCwwLjcsMCwwLjkgYzAsMC40LTAuMywwLjctMC43LDAuN2MtMC40LDAtMC43LTAuMy0wLjctMC43YzAtMC41LTAuNy0zLjgtMS01LjRjLTAuMi0xLjktMC43LTMuMi0xLTMuOWMtMC4yLTAuNi0wLjgtMS44LTEuNS0yLjIgQzkuNywxLjQsOC44LDEuNiw4LjQsMS45QzcuOSwyLjQsNy44LDMuOCw4LDQuOGMwLjEsMC4zLDAuMiwwLjksMC4zLDEuNGMwLjEsMC42LDAuMiwxLjIsMC4zLDEuNWMwLjEsMC42LDAuMiwxLDAuMywxLjQgQzksOS41LDkuMSw5LjksOS4yLDEwLjRjMC4xLDAuMiwwLjEsMC40LDAuMiwwLjZjMC4xLDAuNCwwLjMsMC44LDAuNCwxLjZjMC4zLDEsMC40LDIuMSwwLjYsM2MwLjEsMC40LDAuMSwwLjgsMC4yLDEuMiBjMC4xLDAuNCwwLjMsMS0wLjQsMS4zYy0wLjYsMC4zLTEtMC4zLTEuMi0wLjdsLTAuMi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41Yy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuNCBjLTAuMi0wLjItMC41LTAuNS0wLjctMC44Yy0wLjItMC4zLTAuNS0wLjYtMC43LTAuN2MtMC43LTAuNS0xLjYtMS4yLTIuMy0xLjJjLTEsMC0xLjksMC43LTIuMSwxLjZjLTAuMiwwLjctMC4yLDAuOSwwLjEsMS41IGMwLjEsMC4yLDAuNSwwLjYsMC45LDFjMC44LDAuOSwxLjcsMiwyLjEsMi43YzAuNiwwLjksMS4xLDEuOCwxLjUsMi41YzAuMywwLjUsMC41LDEsMC44LDEuM2wyLjEsMS4zbDIuMywyLjMgQzEyLjksMjguNSwxMywyOS42LDEyLjksMzAuNHonLz48cGF0aCBkPSdNMjMuOCwyNi4xYy0wLjQsMC0wLjctMC4zLTAuNy0wLjd2LTYuOGMwLTAuNCwwLjMtMC43LDAuNy0wLjdjMC40LDAsMC43LDAuMywwLjcsMC43djYuOEMyNC42LDI1LjcsMjQuMywyNi4xLDIzLjgsMjYuMXonLz48cGF0aCBkPSdNMTkuOSwyNi4xYy0wLjQsMC0wLjctMC4zLTAuNy0wLjdsLTAuMi02LjhjMC0wLjQsMC4zLTAuOCwwLjctMC44YzAuNCwwLDAuOCwwLjMsMC44LDAuN2wwLjIsNi44IEMyMC42LDI1LjcsMjAuMywyNi4xLDE5LjksMjYuMUMxOS45LDI2LjEsMTkuOSwyNi4xLDE5LjksMjYuMXonLz48cGF0aCBkPSdNMTUuOSwyNi4xYy0wLjQsMC0wLjctMC4zLTAuNy0wLjd2LTYuOGMwLTAuNCwwLjMtMC43LDAuNy0wLjdjMC40LDAsMC43LDAuMywwLjcsMC43djYuOEMxNi42LDI1LjcsMTYuMywyNi4xLDE1LjksMjYuMXonLz48L2c+PC9zdmc+"), auto`;
    }
  });
}
window.onload = macPointer;

// THEME SWITCH STARTED
const storageKey = "theme-preference";

const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";

  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);

  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);
};

const theme = {
  value: getColorPreference(),
};
reflectPreference();

window.onload = () => {
  reflectPreference();

  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });
// THEME SWITCH ENDED

// ANIMATED GRAIN STARTED
var options = {
  animate: true,
  patternWidth: 500,
  patternHeight: 500,
  grainOpacity: 0.09,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
};

grained("#container", options);
grained("#footer", options);
grained("#hero-img", options);
grained("#nav", options);
// ANIMATED GRAIN ENDED

document.addEventListener("DOMContentLoaded", function () {
  
// GSAP for TITLES ANIMATION STARTED
  const wrapElements = (elems, wrapType, wrapClass) => {
    elems.forEach((char) => {
      const wrapEl = document.createElement(wrapType);
      wrapEl.classList = wrapClass;
      char.parentNode.appendChild(wrapEl);
      wrapEl.appendChild(char);
    });
  };

  Splitting();

  gsap.registerPlugin(ScrollTrigger);
  const fx5Titles = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect5]"
    ),
  ];

  fx5Titles.forEach((title) => {
    const chars = title.querySelectorAll(".char");

    chars.forEach((char) => gsap.set(char.parentNode, { perspective: 1000 }));

    gsap.fromTo(
      chars,
      {
        "will-change": "opacity, transform",
        transformOrigin: "50% 0%",
        opacity: 0,
        rotationX: -90,
        z: -200,
      },
      {
        ease: "power1",
        opacity: 1,
        stagger: 0.05,
        rotationX: 0,
        z: 0,
        scrollTrigger: {
          trigger: title,
          start: "center bottom",
          end: "bottom top+=20%",
          scrub: true,
          markers: true,
        },
      }
    );
  });

// GSAP for TITLES ANIMATION ENDED



// GSAP for STRIPE ANIMATION STARTED
const servicesList = document.querySelector('.services-list');
let totalWidth = 0;
document.querySelectorAll('.services-list li').forEach(item => {
  totalWidth += item.offsetWidth;
});

gsap.to(servicesList, {
  x: () => `-${totalWidth / 2}px`,
  ease: "none",
  repeat: -1,
  duration: 25,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
  }
});
// GSAP for STRIPE ANIMATION ENDED



});
