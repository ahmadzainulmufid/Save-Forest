// Slider Gambar
const images = [
  "assets/images/deforestasi1.jpeg",
  "assets/images/deforestasi2.jpeg",
  "assets/images/deforestasi3.jpeg",
];
let current = 0;
const sliderImg = document.getElementById("sliderImg");
const bulletsContainer = document.getElementById("sliderBullets");

function showImage(idx) {
  sliderImg.src = images[idx];
  updateBullets();
}

function updateBullets() {
  bulletsContainer.innerHTML = "";
  images.forEach((_, i) => {
    const bullet = document.createElement("button");
    bullet.className =
      "w-3 h-3 rounded-full border border-background transition-all duration-300 " +
      (i === current
        ? "bg-aksen border-aksen"
        : "bg-background opacity-70 hover:bg-aksen");
    bullet.addEventListener("click", () => {
      current = i;
      showImage(current);
    });
    bulletsContainer.appendChild(bullet);
  });
}

setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 5000);

// Inisialisasi pertama
showImage(current);

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

// Card template
function getNewsCardHTML(news) {
  return `
        <div class="w-[40rem] flex gap-8 items-center p-4 bg-white rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border- transition-all duration-500 overflow-hidden">
          <div>
            <img src="${news.image}" alt="${news.title}" class="max-w-52 min-w-52 h-[10rem] rounded object-cover">
          </div>
          <div class="p-4 flex flex-col gap-2">
            <h2 class="font-bold text-lg text-hijau line-clamp-2">${news.title}</h2>
            <p class="text-gray-700 text-sm line-clamp-3">${news.summary}</p>
            <a href="${news.url}" target="_blank" class="text-coklat font-semibold hover:underline mt-2 text-sm">Baca Selengkapnya &rarr;</a>
          </div>
        </div>
        `;
}

// Render cards
const newsSlider = document.getElementById("newsSlider");
let newsCurrent = 0;
function renderNewsSlider(idx) {
  // Tampilkan hanya 1 card (atau 2 jika ingin responsive: newsList.slice(idx, idx+2))
  const visibleNews = [newsList[idx]];
  newsSlider.innerHTML = visibleNews.map(getNewsCardHTML).join("");
}
renderNewsSlider(newsCurrent);

// Auto-slide
setInterval(() => {
  newsCurrent = (newsCurrent + 1) % newsList.length;
  renderNewsSlider(newsCurrent);
}, 5000);
