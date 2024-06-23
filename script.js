function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Hover effect for project sections
document.querySelectorAll('.color-container').forEach((project) => {
  if (window.innerWidth > 768) { 
      project.addEventListener('mouseenter', () => {
          document.querySelectorAll('.color-container').forEach((item) => {
              if (item !== project) {
                  item.classList.add('blur');
              } else {
                  item.classList.add('focus');
              }
          });
      });

      project.addEventListener('mouseleave', () => {
          document.querySelectorAll('.color-container').forEach((item) => {
              item.classList.remove('blur', 'focus');
          });
      });
  }
});
