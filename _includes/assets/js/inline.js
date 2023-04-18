if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

window.addEventListener('load', () => {
    const hamburger = document.querySelector('.menu-icon');
    const header = document.querySelector('header');
    const nav = document.querySelector('.main-nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        header.classList.toggle('active');
    })
});

document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(function(carousel) {
    const controlPrev = carousel.querySelector('.carousel-control-prev');
    const controlNext = carousel.querySelector('.carousel-control-next');
    const items = carousel.querySelectorAll('.carousel-item');

    controlPrev.addEventListener('click', function() {
      moveCarousel(-1);
    });

    controlNext.addEventListener('click', function() {
      moveCarousel(1);
    });

    function moveCarousel(direction) {
      let activeIndex = -1;
      items.forEach(function(item, index) {
        if (item.classList.contains('active')) {
          activeIndex = index;
          item.classList.remove('active');
        }
      });

      activeIndex = (activeIndex + direction + items.length) % items.length;
      items[activeIndex].classList.add('active');
    }
  });
});


