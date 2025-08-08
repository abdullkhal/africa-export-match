
// Sticky shadow on navbar
const nav = document.querySelector('.navbar');
const onScroll = () => {
  if (window.scrollY > 4) nav.style.boxShadow = '0 8px 30px rgba(0,0,0,.35)';
  else nav.style.boxShadow = 'none';
};
window.addEventListener('scroll', onScroll);

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
});
