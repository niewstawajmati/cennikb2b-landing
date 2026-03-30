// ===== HERO HEADLINE SLIDER =====
(function () {
  const headlines = document.querySelectorAll('.hero-headline');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let timer;

  function show(index) {
    headlines[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    headlines[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() {
    show((current + 1) % headlines.length);
  }

  function startTimer() {
    timer = setInterval(next, 4000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      show(i);
      startTimer();
    });
  });

  startTimer();
})();

// ===== TEAMS SLIDER — duplikuj dla pętli =====
(function () {
  const slider = document.getElementById('teamsSlider');
  if (!slider) return;
  const original = slider.innerHTML;
  slider.innerHTML = original + original;
})();

// ===== SCROLL REVEAL =====
(function () {
  const targets = document.querySelectorAll('.card, .step, .metric, .testimonial, .catalog-preview');
  if (!targets.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

// ===== CATALOG IFRAME LOADER =====
(function () {
  var iframe = document.querySelector('.catalog-iframe');
  if (!iframe) return;
  var src = iframe.getAttribute('data-src');
  if (src) {
    iframe.src = src;
    iframe.style.display = 'block';
    var placeholder = iframe.parentElement.querySelector('.catalog-placeholder');
    if (placeholder) placeholder.style.display = 'none';
  }
})();
