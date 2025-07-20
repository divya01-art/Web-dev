
// Select all dropdown containers
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const title = dropdown.querySelector('.dropdown-title');
  const content = dropdown.querySelector('.dropdown-content');

  // Show content on hover or click
  title.addEventListener('click', function () {
    content.classList.toggle('show');
  });

  // Show content on hover
  dropdown.addEventListener('mouseenter', function () {
    content.classList.add('show');
  });

  // Hide content when mouse leaves the entire dropdown
  dropdown.addEventListener('mouseleave', function () {
    content.classList.remove('show');
  });
});