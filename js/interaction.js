const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { 
  rootMargin: '-50% 0px' // triggers when image is in center of screen
});

document.querySelectorAll('.float-img img').forEach(el => {
  observer.observe(el);
});