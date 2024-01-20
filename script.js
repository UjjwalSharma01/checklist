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


// Code no longer user since clicking the section title does this action
// and section title encompasses the arrow
// drop down arrow


// const dropdownArrows = document.querySelectorAll(".dropdown-arrow");

// dropdownArrows.forEach((arrow) => {
//   arrow.addEventListener("click", () => {
//     const listItem = arrow.closest("li");
//     const hiddenText = listItem.querySelector(".hidden-text");
//     hiddenText.classList.toggle("show");
//     arrow.classList.toggle("checked");
//   });
// });




// Code no longer user since clicking the section title does this action
// and section title encompasses the arrow
// shifting of checklist item when arrow is activated

// document.addEventListener("DOMContentLoaded", function () {
//   const dropdownArrows = document.querySelectorAll(".dropdown-arrow");
//   dropdownArrows.forEach(function (arrow) {
//     arrow.addEventListener("click", function () {
//       const checklistItem = arrow.closest(".checklist-item");
//       const hiddenText = checklistItem.querySelector(".hidden-text");
//       const checkbox = checklistItem.querySelector(".checkbox");
//       if (checkbox.checked) {
//         hiddenText.style.display = "block";
//         const hiddenTextHeight = hiddenText.clientHeight;
//         checklistItem.style.marginBottom = hiddenTextHeight + "px";
//       } else {
//         hiddenText.style.display = "none";
//         checklistItem.style.marginBottom = "0";
//       }
//     });
//   });
// });

// Add click event listener to checklist section titles
const sectionTitles = document.querySelectorAll('.section-title-label');
sectionTitles.forEach((label) => {
  label.addEventListener('click', (e) => {
    // prevent the label from triggering default behavior of toggling the checkbox
    e.preventDefault();

    // Expand section and change the arrow icon
    const arrow = label.querySelector('[class*="dropdown-arrow"]');
    const listItem = arrow.closest("li");
    arrow.classList.toggle("checked");

    const hiddenText = listItem.querySelector(".hidden-text");
    hiddenText.classList.toggle("show");  // show hidden text

    const checklistItem = arrow.closest(".checklist-item");
    if (arrow.className === "dropdown-arrow checked") {
      hiddenText.style.display = "block";
      const hiddenTextHeight = hiddenText.clientHeight;
      checklistItem.style.marginBottom = hiddenTextHeight + "px";
    } else {
      hiddenText.style.display = "none";
      checklistItem.style.marginBottom = "0";
    }
  }, false);
});


// New quote on Refresh

// const category = "happiness"
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'gv414CStL2w22HtsC4pp8A==fHW82xPwAxJPaUjU'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result)
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

async function logMovies() {
  const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness",
    { headers: { 'X-Api-Key': 'gv414CStL2w22HtsC4pp8A==fHW82xPwAxJPaUjU' }, });
  const movies = await response.json();
  document.getElementById("quoteContent").textContent = movies[0].quote;
  document.getElementById("quoteTitle").textContent = "- " + movies[0].author;
}

logMovies();

// java basic
function copyToClipboard(exampleNumber) {
  const codeBlock = document.querySelector(`.code-snippet[data-example="${exampleNumber}"]`);
  if (codeBlock) {
    const codeText = codeBlock.textContent;
    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard');
  }
}

// var toggleButton = document.querySelector(".toggle-button");
let toggleButton = document.querySelector(".ham-mob");
var navbarLinks = document.querySelector(".hamburger");

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  console.log(1)
})

const totop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
})

function f1() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

