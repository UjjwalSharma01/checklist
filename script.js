document.addEventListener("DOMContentLoaded", function () {
  // Handle checkbox changes and adjust layout
  function handleCheckboxChange(checkbox) {
    const checklistItem = checkbox.closest(".checklist-item");
    const hiddenText = checklistItem.querySelector(".hidden-text");
    hiddenText.style.display = checkbox.checked ? "block" : "none";
    checklistItem.style.marginBottom = checkbox.checked ? hiddenText.clientHeight + "px" : "0";
    // ... (code to handle checkbox changes)
  }

  // Hide the loading overlay
  const loadingOverlay = document.querySelector(".loading-overlay");
  loadingOverlay.style.display = "none";

  // Add event listener to handle checkbox changes and adjust layout
  document.body.addEventListener('change', function (event) {
    const target = event.target;
    if (target.classList.contains('checkbox')) {
      handleCheckboxChange(target);
      // ... (code to retrieve checkbox state)
    }
  });

  // Handle clicked-glow elements
  document.body.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("clicked-glow")) {
      target.classList.add("clicked-glow");
      setTimeout(() => {
        target.classList.remove("clicked-glow");
      }, 500); // Remove the glow class after 0.5 seconds (duration of glow animation)
    }
  });

  // Handle dropdown arrows
  document.body.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("dropdown-arrow")) {
      const listItem = target.closest("li");
      listItem.querySelector(".hidden-text").classList.toggle("show");
      target.classList.toggle("checked");
    }
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
 { headers: { 'X-Api-Key': 'gv414CStL2w22HtsC4pp8A==fHW82xPwAxJPaUjU'},});
  const movies = await response.json();
  document.getElementById("quoteContent").textContent = movies[0].quote;
  document.getElementById("quoteTitle").textContent = "- "+ movies[0].author;
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
