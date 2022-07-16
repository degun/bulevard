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

