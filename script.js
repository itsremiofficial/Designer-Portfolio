

$(document).ready(function() {


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
// grained("#footer", options);
grained("#hero-img", options);
// grained("#nav", options);
// ANIMATED GRAIN ENDED

// GSAP for TITLES ANIMATION STARTED
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
gsap.registerPlugin(ScrollTrigger);
const scroller = document.querySelector('#wrapper');

const locoScroll = new LocomotiveScroll({
  el: scroller,
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(scroller, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: scroller.style.transform ? "transform" : "fixed"
});

ScrollTrigger.defaults({
  scroller: scroller
})

 
  Splitting();


  const fx5Titles = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect5]"
    ),
  ];

  fx5Titles.forEach((title) => {
    console.log('done')
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
          end: "bottom top+=30%",
          scrub: true,
          markers: true,
        },
      }
    );
  });

// GSAP for TITLES ANIMATION ENDED

document.querySelector('.go-to-top').addEventListener('click', function() {
  gsap.to(window, {
    scrollTo: {
      y: 0,
      autoKill: true
    }
  })

});

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



const element = document.querySelector('.hero-img');

// Create a GSAP timeline
const hoverTimeline = gsap.timeline({
  paused: true,
  repeat: -1,
  yoyo: true
});


hoverTimeline
  .to(element, { borderRadius: '49% 53% 50% 48% / 46% 44% 56% 54%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '47% 51% 52% 50% / 48% 46% 54% 52%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '46% 54% 53% 47% / 49% 47% 53% 51%', duration: 0.7, ease: "power1.inOut"})
  .to(element, { borderRadius: '50% 50% 52% 48% / 45% 43% 57% 55%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '47% 53% 50% 50% / 46% 48% 52% 54%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '49% 51% 49% 51% / 48% 46% 54% 52%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '48% 52% 50% 48% / 47% 45% 55% 53%', duration: 0.7, ease: "power1.inOut"})
  .to(element, { borderRadius: '46% 54% 52% 48% / 44% 42% 58% 56%', duration: 0.7, ease: "power1.inOut"})
  .to(element, { borderRadius: '50% 50% 51% 49% / 47% 45% 55% 53%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '47% 51% 52% 50% / 48% 46% 54% 52%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '46% 54% 53% 47% / 49% 47% 53% 51%', duration: 0.7, ease: "power1.inOut"})
  .to(element, { borderRadius: '50% 50% 52% 48% / 45% 43% 57% 55%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '47% 53% 50% 50% / 46% 48% 52% 54%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '49% 51% 49% 51% / 48% 46% 54% 52%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '48% 52% 50% 48% / 47% 45% 55% 53%', duration: 0.7, ease: "power1.inOut"})
  .to(element, { borderRadius: '46% 54% 52% 48% / 44% 42% 58% 56%', duration: 0.7, ease: "power1.inOut"})
  .to(element, { borderRadius: '50% 50% 51% 49% / 47% 45% 55% 53%', duration: 0.7,  ease: "power1.inOut"})
  .to(element, { borderRadius: '45% 55% 54% 46% / 48% 50% 50% 52%', duration: 0.7,  ease: "power1.inOut"});

  
element.addEventListener('mouseenter', () => hoverTimeline.play());
element.addEventListener('mouseleave', () => hoverTimeline.pause());



// CURSOR MOVING ANIMATION FOR LINKS STARTED
  gsap.set(".cursor", { xPercent: -50, yPercent: -50, opacity: 0, scale: 0 });

  const cursor = document.querySelector(".cursor");
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.3;

  const xSet = gsap.quickSetter(cursor, "x", "px");
  const ySet = gsap.quickSetter(cursor, "y", "px");

  const updateCursorPosition = () => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });

      gsap.ticker.add(updateCursorPosition);
    });

    anchor.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.ticker.remove(updateCursorPosition);
    });
  });

  // CURSOR MOVING ANIMATION FOR LINKS ENDED

});


