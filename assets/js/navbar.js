    // Navbar scroll effect (desktop only)
    document.addEventListener("DOMContentLoaded", function() {
      const navbar = document.getElementById("mainNavbar");
      const navBrand = document.getElementById("navBrand");
      const navLinks = document.querySelectorAll('.nav-link');
      const navHome = document.getElementById("navHome");
      const logoHijau = document.querySelector('.logo-hijau');
      const logoPutih = document.querySelector('.logo-putih');

      function setNavbarColors(isScrolled) {
        if (window.innerWidth < 20 ) return; // Only desktop

        if (isScrolled) {
          navbar.classList.add("md:bg-white", "shadow-xl");
          navbar.classList.remove("md:bg-transparent");
          navBrand.classList.remove("md:text-white");
          navBrand.classList.add("md:text-hijau");
          logoHijau.classList.add("md:block");
          logoHijau.classList.remove("md:hidden");
          logoPutih.classList.add("md:hidden");
          logoPutih.classList.remove("md:block");
          navLinks.forEach(link => {
            if (link !== navHome) {
              link.classList.remove("md:text-white");
              link.classList.remove("md:hover:text-coklat");
              link.classList.add("md:text-coklat");
              link.classList.add("md:hover:text-aksen");
            }
          });
          navHome.classList.remove("md:text-aksen");
          navHome.classList.add("md:text-hijau");
        } else {
          navbar.classList.remove("md:bg-white", "shadow-xl");
          navbar.classList.add("md:bg-transparent");
          navBrand.classList.add("md:text-white");
          navBrand.classList.remove("md:text-hijau");
          logoHijau.classList.add("md:hidden");
          logoHijau.classList.remove("md:block");
          logoPutih.classList.add("md:block");
          logoPutih.classList.remove("md:hidden");
          navLinks.forEach(link => {
            if (link !== navHome) {
              link.classList.remove("md:text-coklat");
              link.classList.remove("md:hover:text-aksen");
              link.classList.add("md:text-white");
              link.classList.add("md:hover:text-coklat");
            }
          });
          navHome.classList.remove("md:text-hijau");
          navHome.classList.add("md:text-aksen");
        }
      }

      // Set initial state
      setNavbarColors(window.scrollY > 10);

      window.addEventListener("scroll", function() {
        setNavbarColors(window.scrollY > 10);
      });

      // Optional: jika resize ke mobile/desktop
      window.addEventListener("resize", function() {
        setNavbarColors(window.scrollY > 10);
      });
    });