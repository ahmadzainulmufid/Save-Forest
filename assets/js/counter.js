// Fungsi untuk animasi counter
function animateValue(id, start, end, duration, suffix = '') {
  const obj = document.getElementById(id);
  if (!obj) return;
  
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    let value;
    if(typeof end === 'string' && end.includes('Mha')) {
      const numericEnd = parseFloat(end.replace('Mha', ''));
      value = progress * numericEnd;
      // Format ke 3 angka desimal
      obj.innerHTML = value.toFixed(1) + 'Mha' + suffix;
    } else if (typeof end === 'string' && end.includes('M')) {
      const numericEnd = parseFloat(end.replace('M', ''));
      value = Math.floor(progress * numericEnd);
      obj.innerHTML = value + 'M' + suffix;
    } else {
      value =progress * (end - start) + start;
      obj.innerHTML = value.toFixed(1) + suffix;
    }
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
}

// Fungsi animasi typing yang diperbaiki
function animateTyping(id, text, typingSpeed = 100) {
  const element = document.getElementById(id);
  if (!element) return;
  
  // Reset konten sebelum mulai
  element.textContent = '';
  
  let currentCharIndex = 0;
  const totalChars = text.length;
  
  function type() {
    if (currentCharIndex < totalChars) {
      element.textContent += text[currentCharIndex];
      currentCharIndex++;
      setTimeout(type, typingSpeed);
    }
  }
  
  type();
}

// Fungsi untuk memulai animasi saat elemen terlihat
function startAnimationsWhenVisible() {
  // Observer untuk section statistik
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue('forestLostCounter', 0, '10.7', 2000, ' Mha');
        animateValue('treesCounter', 0, '32.0', 2000, ' Mha');
        animateValue('co2Counter', 0, '23.2', 2000, ' Gt');
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observer terpisah untuk grafik/typing
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateTyping('typing-title', 
          "10 Provinces with the Most Deforestation in Indonesia (2001-2024)",
          50
        );
        chartObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Threshold lebih besar untuk memastikan lebih terlihat

  // Amati elemen yang tepat
  const statsSection = document.querySelector('.max-w-6xl.mx-auto.flex.flex-col.items-center');
  const chartSection = document.querySelector('#typing-title').closest('section');
  
  if (statsSection) statsObserver.observe(statsSection);
  if (chartSection) chartObserver.observe(chartSection);
}

// Inisialisasi dengan timeout kecil
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(startAnimationsWhenVisible, 300);
});