// AOS Initialization
AOS.init({
  once: true,
  duration: 800,
  easing: "ease-in-out",
});

// Infinite Scroller Duplication
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("image-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
