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

// Hide the loading overlay when the page is fully loaded
window.addEventListener("load", function () {
  const loadingOverlay = document.querySelector(".loading-overlay");
  loadingOverlay.style.display = "none";
});

// Add click event listener to clicked-glow elements
const clickedGlowElements = document.querySelectorAll(".clicked-glow");
clickedGlowElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("clicked-glow");
    setTimeout(() => {
      element.classList.remove("clicked-glow");
    }, 500); // Remove the glow class after 0.5 seconds (duration of glow animation)
  });
});



// drop down arrow


const dropdownArrows = document.querySelectorAll(".dropdown-arrow");

dropdownArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const listItem = arrow.closest("li");
    const hiddenText = listItem.querySelector(".hidden-text");
    hiddenText.classList.toggle("show");
    arrow.classList.toggle("checked");
  });
});





// shifting of checklist item when arrow is activated

document.addEventListener("DOMContentLoaded", function () {
  const dropdownArrows = document.querySelectorAll(".dropdown-arrow");
  dropdownArrows.forEach(function (arrow) {
    arrow.addEventListener("click", function () {
      const checklistItem = arrow.closest(".checklist-item");
      const hiddenText = checklistItem.querySelector(".hidden-text");
      const checkbox = checklistItem.querySelector(".checkbox");
      if (checkbox.checked) {
        hiddenText.style.display = "block";
        const hiddenTextHeight = hiddenText.clientHeight;
        checklistItem.style.marginBottom = hiddenTextHeight + "px";
      } else {
        hiddenText.style.display = "none";
        checklistItem.style.marginBottom = "0";
      }
    });
  });
});
