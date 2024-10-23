
const toggleButton = document.querySelector('.toggle-button');
const dropdownMenu = document.querySelector('.dropdown-ul');

toggleButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
});



