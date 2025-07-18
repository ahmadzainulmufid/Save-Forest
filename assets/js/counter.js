// Fungsi untuk animasi counter
function animateValue(id, start, end, duration, suffix = '') {
  const obj = document.getElementById(id);
  if (!obj) return;
  
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    let value;
    if (typeof end === 'string' && end.includes('M')) {
      // Untuk nilai dengan format seperti "200M"
      const numericEnd = parseFloat(end.replace('M', ''));
      value = Math.floor(progress * numericEnd);
      obj.innerHTML = value + 'M' + suffix;
    } else {
      // Untuk nilai numerik biasa
      value = Math.floor(progress * (end - start) + start);
      obj.innerHTML = value.toLocaleString() + suffix;
    }
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
}

// Fungsi untuk memulai animasi saat elemen terlihat di viewport
function startCountersWhenVisible() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Mulai animasi counter
        animateValue('forestLostCounter', 0, 250000, 2000, '');
        animateValue('provinceCounter', 0, 250000, 2000, '');
        animateValue('treesCounter', 0, 1000000, 2000, '');
        animateValue('co2Counter', 0, '200M', 2000, ' tons');
        
        // Hentikan observasi setelah animasi dimulai
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observasi section statistik
  const statsSection = document.querySelector('.max-w-6xl');
  if (statsSection) {
    observer.observe(statsSection);
  }
}