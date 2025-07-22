// Navbar scroll effect (desktop only)
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");
  const navBrand = document.getElementById("navBrand");
  const navLinks = document.querySelectorAll(".nav-link");
  const navHome = document.getElementById("navHome");
  const logoHijau = document.querySelector(".logo-hijau");
  const logoPutih = document.querySelector(".logo-putih");

  function setNavbarColors(isScrolled) {
    if (window.innerWidth < 100) return; // Only desktop

    if (isScrolled) {
      navbar.classList.add("lg:bg-white", "shadow-xl");
      navbar.classList.remove("lg:bg-transparent");
      navBrand.classList.remove("lg:text-white");
      navBrand.classList.add("lg:text-hijau");
      logoHijau.classList.add("lg:block");
      logoHijau.classList.remove("lg:hidden");
      logoPutih.classList.add("lg:hidden");
      logoPutih.classList.remove("lg:block");
      navLinks.forEach((link) => {
        if (link !== navHome) {
          link.classList.remove("lg:text-white");
          link.classList.remove("lg:hover:text-coklat");
          link.classList.add("lg:text-coklat");
          link.classList.add("lg:hover:text-aksen");
        }
      });
      navHome.classList.remove("lg:text-aksen");
      navHome.classList.add("lg:text-hijau");
    } else {
      navbar.classList.remove("lg:bg-white");
      navbar.classList.add("lg:bg-transparent");
      navBrand.classList.add("lg:text-white");
      navBrand.classList.remove("lg:text-hijau");
      logoHijau.classList.add("lg:hidden");
      logoHijau.classList.remove("lg:block");
      logoPutih.classList.add("lg:block");
      logoPutih.classList.remove("lg:hidden");
      navLinks.forEach((link) => {
        if (link !== navHome) {
          link.classList.remove("lg:text-coklat");
          link.classList.remove("lg:hover:text-aksen");
          link.classList.add("lg:text-white");
          link.classList.add("lg:hover:text-coklat");
        }
      });
      navHome.classList.remove("lg:text-hijau");
      navHome.classList.add("lg:text-aksen");
    }
  }

  // Set initial state
  setNavbarColors(window.scrollY > 0);

  window.addEventListener("scroll", function () {
    setNavbarColors(window.scrollY > 100);
  });

  // Optional: jika resize ke mobile/desktop
  window.addEventListener("resize", function () {
    setNavbarColors(window.scrollY > 100);
  });
});
