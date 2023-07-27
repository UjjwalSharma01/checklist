// script.js
const checkboxes = document.querySelectorAll('.checkbox');

// Add event listeners to checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const checklistName = event.target.getAttribute('data-checklist');
    const itemIndex = [...checkbox.parentElement.parentElement.children].indexOf(checkbox.parentElement);

    // Save the completion status to local storage
    localStorage.setItem(`${checklistName}_${itemIndex}`, event.target.checked);
  });

  // Retrieve the completion status from local storage
  const checklistName = checkbox.getAttribute('data-checklist');
  const itemIndex = [...checkbox.parentElement.parentElement.children].indexOf(checkbox.parentElement);
  const isChecked = localStorage.getItem(`${checklistName}_${itemIndex}`);
  if (isChecked === 'true') {
    checkbox.checked = true;
  }
});

