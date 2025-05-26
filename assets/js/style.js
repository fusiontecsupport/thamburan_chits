/* AOS effects */
AOS.init({
    duration: 1000,  // animation duration in milliseconds
    once: true       // whether animation should happen only once - while scrolling down
  });

  
// for download btn in nav bar

const downloadBtn = document.getElementById('downloadBtn');
  const downloadProgress = document.getElementById('downloadProgress');

  downloadBtn.addEventListener('click', () => {
    let width = 0;
    downloadProgress.style.width = '0%';

    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          downloadProgress.style.width = '0%';
        }, 1000);
      } else {
        width += 10;
        downloadProgress.style.width = width + '%';
      }
    }, 100);
  });

// Counter Script for the count section
      function animateCounter(el, endVal, suffix = "") {
        let start = 0;
        let duration = 2000;
        let startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          el.textContent = Math.floor(progress * endVal).toLocaleString() + suffix;
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }

        requestAnimationFrame(step);
      }

      function startCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
          const endVal = parseInt(counter.getAttribute('data-count'));
          const suffix = counter.getAttribute('data-suffix') || "";
          animateCounter(counter, endVal, suffix);
        });
      }

      // Scroll trigger
      let counted = false;
      window.addEventListener('scroll', () => {
        const section = document.querySelector('#count');
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (!counted && sectionTop < windowHeight - 100) {
          counted = true;
          startCounters();
        }
      });


// function for floationg up arrow

 document.getElementById("scrollToTopBtn").addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });