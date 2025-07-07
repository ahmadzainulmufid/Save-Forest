const slides = [
  {
    image: "assets/images/deforestasi1.jpeg",
    title: "Turning <span class='text-aksen'>Awareness</span> Into Action",
    description: "Save our forests, shape our future. One step at a time, your action today defines tomorrow's Earth."
  },
  {
    image: "assets/images/deforestasi2.jpeg",
    title: "Your <span class='text-aksen'>Action</span> Matters",
    description: "Every small step counts. Be part of the movement to save our green planet for future generations."
  },
  {
    image: "assets/images/deforestasi3.jpeg",
    title: "Find out <span class='text-aksen'>The local</span> Heroes ",
    description: "Millions of species lose their home every year due to massive deforestation. Let’s make a change."
  },
];

let current = 0;
const sliderContainer = document.getElementById("sliderImgContainer");
const bulletsContainer = document.getElementById("sliderBullets");
const sliderTextSection = document.getElementById("sliderTextSection");

function renderSliderSlide(nextIdx = null) {
  // Render gambar (slide)
  if (!sliderContainer) return;
  const currIdx = current;
  if (nextIdx == null) {
    sliderContainer.innerHTML = `
      <img src="${slides[currIdx].image}" alt="Deforestation impact"
        class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 translate-x-0 z-10"
      />`;
    renderSliderText(currIdx);
    updateBullets();
    return;
  }
  sliderContainer.innerHTML = `
    <img src="${slides[currIdx].image}" alt="Deforestation impact"
      class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 translate-x-0 z-10"
      id="imgCurrent"
    />
    <img src="${slides[nextIdx].image}" alt="Deforestation impact"
      class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 translate-x-full z-10"
      id="imgNext"
    />`;
  updateBullets(nextIdx);

  // Fade out text, lalu ganti konten dan fade in
  animateTextFadeOut(() => {
    renderSliderText(nextIdx, true);
  });

  setTimeout(() => {
    const imgCurrent = document.getElementById("imgCurrent");
    const imgNext = document.getElementById("imgNext");
    if (imgCurrent && imgNext) {
      imgCurrent.classList.remove("translate-x-0");
      imgCurrent.classList.add("-translate-x-full");
      imgNext.classList.remove("translate-x-full");
      imgNext.classList.add("translate-x-0");
    }
  }, 30);

  setTimeout(() => {
    current = nextIdx;
    renderSliderSlide();
  }, 700);
}

function renderSliderText(idx, animateIn = false) {
  if (!sliderTextSection) return;
  sliderTextSection.innerHTML = `
    <h1 class="text-xl md:text-5xl font-extrabold leading-tight">
      ${slides[idx].title}
    </h1>
    <p class="text-sm md:text-xl font-extralight leading-relaxed">
      ${slides[idx].description}
    </p>
    <div class="mt-4">
      <a href="/education.html"
        class="inline-block bg-aksen text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-background hover:text-aksen transition"
      >
        Learn How You Can Help →
      </a>
    </div>
  `;
  // Fade in
  sliderTextSection.classList.add('opacity-0');
  sliderTextSection.classList.remove('opacity-100');
  setTimeout(() => {
    sliderTextSection.classList.remove('opacity-0');
    sliderTextSection.classList.add('opacity-100');
  }, 30);
}

function animateTextFadeOut(after) {
  if (!sliderTextSection) return after && after();
  // Fade out
  sliderTextSection.classList.remove('opacity-100');
  sliderTextSection.classList.add('opacity-0');
  setTimeout(() => {
    if (after) after();
  }, 300);
}

function updateBullets(idx = current) {
  if (!bulletsContainer) return;
  bulletsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const bullet = document.createElement("button");
    bullet.className =
      "h-1 md:h-2 w-8 md:w-12 rounded-full transition-all duration-300 cursor-pointer " +
      (i === idx
        ? "bg-aksen"
        : "bg-white/50 hover:bg-aksen/50");
    bullet.addEventListener("click", () => {
      if (i !== current) renderSliderSlide(i);
    });
    bulletsContainer.appendChild(bullet);
  });
}

// Initial render
renderSliderSlide();

// Auto-slide
setInterval(() => {
  const nextIdx = (current + 1) % slides.length;
  renderSliderSlide(nextIdx);
}, 5000);


// News List
const newsList = [
  {
    title: "Dampak Deforestasi dan Penggundulan Hutan Terhadap Permukaan Bumi",
    image: "assets/images/greenlab-dampak-deforestasi.jpg",
    url: "https://www.greenlab.co.id/news/Dampak-Deforestasi-dan-Penggundulan-Hutan-Terhadap-Permukaan-Bumi",
    summary:
      "Hutan adalah paru-paru bumi yang terdiri dari wilayah daratan yang didominasi oleh pepohonan dan vegetasi kayu-kayuan. Di balik rimbunnya pepohonan, tersimpan kekayaan hayati dan keseimbangan alam yang tak ternilai.",
  },
  {
    title:
      "Kementerian Kehutanan: Deforestasi di Indonesia Tembus 175,4 Ribu Hektare pada 2024",
    image: "assets/images/tempo-deforestasi.jpg",
    url: "https://www.tempo.co/lingkungan/kementerian-kehutanan-deforestasi-di-indonesia-tembus-175-4-ribu-hektare-pada-2024-1223666",
    summary:
      "Kementerian Kehutanan menyatakan luas lahan berhutan di Indonesia pada 2024 mencapai 95,5 juta hektare, atau 51,1 persen dari total daratan.",
  },
  {
    title: "Dampak Tambang Nikel di Raja Ampat versi Greenpeace",
    image: "assets/images/tempo-deforestasi2.jpg",
    url: "https://www.kompas.id/baca/humaniora/2024/03/22/auriga-rilis-deforestasi-indonesia-2023-mencapai-257384-hektarhttps://www.tempo.co/hukum/dampak-tambang-nikel-di-raja-ampat-versi-greenpeace-1654703",
    summary:
      "Isu penambangan dan hilirisasi nikel di Raja Ampat, Papua, menjadi sorotan publik, terutama setelah sejumlah aktivis Greenpeace Indonesia.",
  },
];

// Template dengan Tailwind dan animasi
function getNewsCardHTML(news) {
  return `
    <div
      class="news-card w-[16rem] md:w-[40rem] flex flex-col md:flex-row md:gap-8 items-center p-4 bg-background rounded-xl border-4 border-[#005f39] hover:scale-105 transition-all duration-300 opacity-0"
      style="transform: translateY(-40px);"
    >
      <div>
        <img src="${news.image}" alt="${news.title}" class="max-w-44 md:max-w-52 min-w-44 md:min-w-52 h-[7rem] md:h-[10rem] rounded object-cover">
      </div>
      <div class="text-center p-2 md:p-4 flex flex-col gap-2">
        <h2 class="font-bold text-md md:text-lg text-hijau line-clamp-2">${news.title}</h2>
        <p class="text-gray-700 text-sm line-clamp-3">${news.summary}</p>
        <a href="${news.url}" target="_blank" class="text-coklat font-semibold hover:underline mt-1 md:mt-2 text-xs md:text-sm">Baca Selengkapnya &rarr;</a>
      </div>
    </div>
  `;
}

const newsSlider = document.getElementById("newsSlider");
let newsCurrent = 0;

function renderNewsSlider(idx) {
  if (!newsSlider) return;
  const oldCard = newsSlider.querySelector('.news-card');
  if (oldCard) {
    // Optional: animasi fade out dulu, lalu masuk, atau langsung masuk (next card)
    oldCard.classList.remove('opacity-100');
    oldCard.classList.add('opacity-0');
    setTimeout(() => {
      showNewCard(idx);
    }, 300); // fade out duration
  } else {
    showNewCard(idx);
  }
}

function showNewCard(idx) {
  const visibleNews = [newsList[idx]];
  newsSlider.innerHTML = visibleNews.map(getNewsCardHTML).join("");
  const newCard = newsSlider.querySelector('.news-card');
  if (newCard) {
    // Animasi dari atas (translateY(-40px) -> translateY(0))
    setTimeout(() => {
      newCard.classList.remove('opacity-0');
      newCard.classList.add('opacity-100');
      newCard.style.transform = 'translateY(0)';
    }, 30);
  }
}

// Initial render
renderNewsSlider(newsCurrent);

setInterval(() => {
  newsCurrent = (newsCurrent + 1) % newsList.length;
  renderNewsSlider(newsCurrent);
}, 5000);