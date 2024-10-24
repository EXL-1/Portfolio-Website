
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown-ul');
  const toggleButton = document.getElementById('hamburger-icon');
  
  if (!dropdown.contains(event.target) && !toggleButton.contains(event.target)) {
      dropdown.classList.remove('open');
  }

});

document.getElementById('hamburger-icon').addEventListener('click', function() {
  const dropdown = document.querySelector('.dropdown-ul');
  dropdown.classList.toggle('open');
});





