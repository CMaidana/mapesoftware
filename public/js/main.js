window.addEventListener('DOMContentLoaded', event => {

  const section = document.querySelectorAll('section');
  
  const navItems = Array.from(document.querySelectorAll('#navbarResponsive .navbar-item'));

  const activeLinks = (el) => {
    navItems.forEach(e => e.classList.remove('active'));
    el.classList.add('active');
  };

  // Navbar shrink function
  const navbarShrink = () => {
      const navbarCollapsible = document.body.querySelector('#navbarHeader');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  const scrollSectionControl = () => {
      section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (id && top >= (offset - 80) && top < offset + height) {
          const target = document.querySelector(`[href='#${id}']`);
          activeLinks(target);
        }
      });
  }

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  window.addEventListener('scroll', navbarShrink);
  window.addEventListener('scroll', scrollSectionControl);

  navItems.forEach((el) => {
    el.addEventListener('click', _ => {
      activeLinks(el);
    })
  });

});
