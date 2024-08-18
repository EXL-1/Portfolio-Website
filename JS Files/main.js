document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const dropdownUl = document.querySelector('.dropdown-ul');

    toggleButton.addEventListener('click', () => {
        dropdownUl.classList.toggle('open');
    });

});


