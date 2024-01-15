$(document).ready(function () {
  // THEME SWITCH STARTED
  const storageKey = "theme-preference";

  const onClick = () => {
    theme.value = theme.value === "light" ? "dark" : "light";

    setPreference();
  };

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
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

  //  GSAP with Locomotive
  gsap.registerPlugin(ScrollTrigger);
  const scroller = document.querySelector("#wrapper");

  const locoScroll = new LocomotiveScroll({
    el: scroller,
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scroller.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.defaults({
    scroller: scroller,
  });
  // GSAP with Locomotive

  // GSAP for NAME ANIMATION STARTED
  Splitting();

  const fx5Titles = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect5]"
    ),
  ];

  fx5Titles.forEach((title) => {
    console.log("done");
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
          // markers: true,
        },
      }
    );
  });
  // GSAP for NAME ANIMATION ENDED


  // GSAP for SMOOTH SCROLLING TO SPECIFIC SECIOTN ANIMATION STARTED
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('data-target');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        locoScroll.scrollTo(targetElement);
      }
    });
  });

  document.querySelector('.go-to-top').addEventListener('click', function() {
    locoScroll.scrollTo(0);
  });
  // GSAP for SMOOTH SCROLLING TO SPECIFIC SECIOTN ANIMATION ENDED
  

  // GSAP for STRIPE ANIMATION STARTED
  const servicesList = document.querySelector(".services-list");
  let totalWidth = 0;
  document.querySelectorAll(".services-list li").forEach((item) => {
    totalWidth += item.offsetWidth;
  });

  gsap.to(servicesList, {
    x: () => `-${totalWidth / 2}px`,
    ease: "none",
    repeat: -1,
    duration: 25,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
    },
  });
  // GSAP for STRIPE ANIMATION ENDED
  const element = document.querySelector(".hero-img");

  const hoverTimeline = gsap.timeline({
    paused: true,
    repeat: -1,
    yoyo: true
  });
  const animationSteps = [
    { borderRadius: "49% 53% 50% 48% / 46% 44% 56% 54%", duration: 1 },
    { borderRadius: "47% 51% 52% 50% / 48% 46% 54% 52%", duration: 1 },
    { borderRadius: "46% 54% 53% 47% / 49% 47% 53% 51%", duration: 1 },
    { borderRadius: "50% 50% 52% 48% / 45% 43% 57% 55%", duration: 1 },
    { borderRadius: "47% 53% 50% 50% / 46% 48% 52% 54%", duration: 1 },
    { borderRadius: "49% 51% 49% 51% / 48% 46% 54% 52%", duration: 1 },
    { borderRadius: "48% 52% 50% 48% / 47% 45% 55% 53%", duration: 1 },
    { borderRadius: "46% 54% 52% 48% / 44% 42% 58% 56%", duration: 1 },
    { borderRadius: "50% 50% 51% 49% / 47% 45% 55% 53%", duration: 1 },
    { borderRadius: "47% 51% 52% 50% / 48% 46% 54% 52%", duration: 1 },
    { borderRadius: "46% 54% 53% 47% / 49% 47% 53% 51%", duration: 1 },
    { borderRadius: "50% 50% 52% 48% / 45% 43% 57% 55%", duration: 1 },
    { borderRadius: "47% 53% 50% 50% / 46% 48% 52% 54%", duration: 1 },
    { borderRadius: "49% 51% 49% 51% / 48% 46% 54% 52%", duration: 1 },
    { borderRadius: "48% 52% 50% 48% / 47% 45% 55% 53%", duration: 1 },
    { borderRadius: "46% 54% 52% 48% / 44% 42% 58% 56%", duration: 1 },
    { borderRadius: "50% 50% 51% 49% / 47% 45% 55% 53%", duration: 1 },
    { borderRadius: "45% 55% 54% 46% / 48% 50% 50% 52%", duration: 1 }
    ];
  
  
  
  animationSteps.forEach(step => {
    hoverTimeline.to(element, {
      borderRadius: step.borderRadius,
      duration: step.duration,
      ease: "power1.inOut"
    });
  });
  
  
  element.addEventListener("mouseenter", () => hoverTimeline.play());
  element.addEventListener("mouseleave", () => hoverTimeline.pause());

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

  document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });

      gsap.ticker.add(updateCursorPosition);
    });

    anchor.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.ticker.remove(updateCursorPosition);
    });
  });

  document.querySelectorAll(".go-to-top").forEach((anchor) => {
    anchor.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });

      gsap.ticker.add(updateCursorPosition);
    });

    anchor.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.ticker.remove(updateCursorPosition);
    });
  });
  // CURSOR MOVING ANIMATION FOR LINKS ENDED

  // CURSOR MOVING ANIMATION FOR LINKS ENDED
  const boxes = gsap.utils.toArray('.pro-card-container');

  boxes.forEach((box) => {
    
    gsap.from(box, {
      x: -200,
      y: 200,
      opacity:0,
      duration:5,
      // stagger: .3,
      scrollTrigger: {
        trigger: box,
        start: "top bottom-=15%",
        end: "bottom bottom-=10%",
        scrub: true,
        markers: true,
      },
    });
  });





  gsap.to(".nav", {
    scrollTrigger: {
      trigger: ".nav",
      start: "top+=50 top",
      end: "bottom top",
      toggleClass: { className: "nav-small", targets: ".nav" },
      scrub: true
    },
    height: "50px",
    padding: '0.2rem 5rem',
    ease: "none"
  });
  
  
});
