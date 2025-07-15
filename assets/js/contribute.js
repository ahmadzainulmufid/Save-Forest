let currentSlide = 0;
const totalSlides = 3;
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  // Update dots
  dots.forEach((dot, index) => {
    dot.style.opacity = index === currentSlide ? "1" : "0.5";
  });

  // Update button states
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel();
  });
  dot.style.cursor = "pointer";
});

// Touch/swipe support
let startX = 0;
let endX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    // Minimum swipe distance
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
});

// Initialize
updateCarousel();

// Auto-play (optional)
setInterval(() => {
  if (currentSlide < totalSlides - 1) {
    nextSlide();
  } else {
    currentSlide = 0;
    updateCarousel();
  }
}, 5000); // Change slide every 5 seconds

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll("#slider-images img");
  const dots = document.querySelectorAll(".slider-dot");
  let currentIndex = 0;
  let slideInterval;
  const slideDuration = 5000; // 5 seconds

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    });

    // Update dots
    dots.forEach((dot) => {
      dot.classList.remove("bg-opacity-80");
      dot.classList.add("bg-opacity-30");
    });

    // Show current slide
    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");

    // Update current dot
    dots[index].classList.remove("bg-opacity-30");
    dots[index].classList.add("bg-opacity-80");

    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function pauseAutoSlide() {
    clearInterval(slideInterval);
  }

  // Initialize slider
  showSlide(0);
  startAutoSlide();

  // Pause on hover
  const slider = document.querySelector(".group");
  slider.addEventListener("mouseenter", pauseAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  // Click on dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      pauseAutoSlide();
      startAutoSlide();
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById("navbar-default");
  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");

  // Toggle icon
  const iconHamburger = document.getElementById("iconHamburger");
  const iconClose = document.getElementById("iconClose");
  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
}
