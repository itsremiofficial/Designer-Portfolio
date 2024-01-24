$(document).ready(function () {
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
  grained("#hero-img", options);

  // ANIMATED GRAIN ENDED

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
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        locoScroll.scrollTo(targetElement);
      }
    });
  });

  const goToTop = document.querySelector(".go-to-top");
  gsap.set(goToTop, { y: 3 });
  const tlgoto = gsap.timeline({
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    duration: 0.3,
  });
  tlgoto.to(goToTop, { y: -3 });

  goToTop.addEventListener("click", function () {
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
    yoyo: true,
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
    { borderRadius: "45% 55% 54% 46% / 48% 50% 50% 52%", duration: 1 },
  ];

  animationSteps.forEach((step) => {
    hoverTimeline.to(element, {
      borderRadius: step.borderRadius,
      duration: step.duration,
      ease: "power1.inOut",
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
  const boxes = document.querySelectorAll(".projects-card");

  const tlcards = gsap.timeline({
    scrollTrigger: {
      trigger: ".pro-card-container",
      start: "top 65%",
      end: "bottom 50%",
      scrub: true,
    },
  });

  tlcards.from(boxes, {
    x: -200,
    y: 200,
    opacity: 0,
    duration: 5,
    stagger: 1.5,
  });

  




  gsap.to(".nav", {
    scrollTrigger: {
      trigger: ".nav",
      start: "top+=50 top",
      end: "bottom top",
      toggleClass: { className: "nav-small", targets: ".nav" },
      scrub: true,
    },
    height: "50px",
    padding: "0.2rem 5rem",
    ease: "none",
  });

  // TEXT REVEAL SCROLL ANIMATION STARTED
  const textReveal = document.querySelectorAll(".another-text");

  textReveal.forEach((textWord, index) => {
    const words = textWord.querySelectorAll(".word");

    const theme = document.documentElement.getAttribute("data-theme");
    const bg = theme === "dark" ? "#373843" : "#8c8ea4";
    const fg = theme === "dark" ? "#8c8ea4" : "#373843";

    // Determine start and end based on index
    const start = index < 2 ? "top top+=50%" : "top bottom-=15%";
    const end = index < 2 ? "top top+=10%" : "bottom top+=50%";

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: words[0],
        start: start,
        end: end,
        scrub: true,
        // markers: true,
        toggleActions: "play play reverse reverse",
      },
    });

    words.forEach((word) => {
      gsap.set(word, { perspective: 1000 });

      const chars = word.querySelectorAll(".char");
      timeline.fromTo(
        chars,
        { color: bg },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          ease: "power1.inOut",
        },
        "+=0"
      );
    });
  });

  // TEXT REVEAL SCROLL ANIMATION ENDED

  // WORK SCROLL ANIMATION STARTED
  gsap.utils.toArray(".work-item").forEach((item) => {
    gsap.fromTo(
      item,
      { width: "0%", opacity: 0 },
      {
        width: "92%",
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=20%",
          end: "bottom top-=20%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  });
  // WORK SCROLL ANIMATION ENDED

  // COUNTER SCROLL ANIMATION STARTED
  document.querySelectorAll(".counter-number").forEach((counter) => {
    const endValue = parseInt(counter.textContent, 10);

    const obj = { val: 0 };

    gsap.to(obj, {
      val: endValue,
      ease: "none",
      snap: { val: 1 },
      scrollTrigger: {
        trigger: counter,
        start: "top-=50px top+=85%",
        end: "bottom top+=35%",
        scrub: true,
        // markers: true,
      },
      onUpdate: function () {
        counter.textContent = Math.ceil(obj.val) + "+";
      },
    });
  });
  // COUNTER SCROLL ANIMATION ENDED

  // const selectors = [".exp-card"];
  // selectors.forEach((selector) => {
  //   document.querySelectorAll(selector).forEach((eachItem) => {
  //     gsap.from(eachItem, {
  //       right: "-200px",
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: eachItem,
  //         start: "top bottom-=10%",
  //         end: "bottom bottom-=25%",
  //         scrub: true,
  //       },
  //     });
  //   });
  // });

  // EXPERIENCE BOTTOM BORDER ANIMATION STARTED
  document.querySelectorAll(".exp-card").forEach((card) => {
    gsap.fromTo(
      card.querySelector(".border-bottom-animation"),
      { width: "0%" },
      {
        width: "100%",
        duration: 5,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=25%",
          end: "bottom center-=5%",
          scrub: true,
          // markers: true,
        },
      }
    );
  });
  // EXPERIENCE BOTTOM BORDER ANIMATION ENDED

  // FADE UP ANIMATION STARTED
  const toFadeElem = ["toFadeUp", ".contact_item", ".input-group", ".social-item", ".contact_headings", ".exp-card", ".exp-container > .title"];
  toFadeElem.forEach((element) => {
    gsap.from(element, {
      duration: 0.5,
      autoAlpha: 0,
      y: 50,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  });
  // FADE UP ANIMATION ENDED
});
