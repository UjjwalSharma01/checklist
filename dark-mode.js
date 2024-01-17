const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector("main").classList.toggle("dark")
  const isDarkMode = document.body.classList.contains('dark-mode');

  if (isDarkMode) {
    // Dark mode is enabled, hide the sun and show the moon
    darkModeToggle.innerHTML = '<i class="moon-icon"></i>';
    localStorage.setItem('darkMode', 'enabled');
    Formcontainer.classList.add('dark-form-container'); // Add dark-form-container class to Formcontainer
  } else {
    // Dark mode is disabled, hide the moon and show the sun
    darkModeToggle.innerHTML = '<i class="sun-icon"></i>';
    localStorage.setItem('darkMode', 'disabled');
    Formcontainer.classList.remove('dark-form-container'); // Remove dark-form-container class from Formcontainer
  }

  // Add animation class for the flipping effect
  darkModeToggle.classList.add('flipping');

  // After the animation ends, remove the flipping animation class
  darkModeToggle.addEventListener('animationend', () => {
    darkModeToggle.classList.remove('flipping');
  }, { once: true });
});

// Check if dark mode preference is enabled and set it on page load
document.addEventListener('DOMContentLoaded', function () {
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');

    document.querySelector("main").classList.add("dark")
    darkModeToggle.innerHTML = '<i class="moon-icon"></i>';
  } else {
    document.body.classList.remove('dark-mode'); // Set the default theme to normal (light mode)

    document.querySelector("main").classList.remove("dark")
    darkModeToggle.innerHTML = '<i class="sun-icon"></i>';
  }
});
