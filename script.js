// Fetch and inject header content
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

// Fetch and inject footer content
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

function filterProjects(category) {
  var table = document.getElementById('projectsTable');
  var rows = table.getElementsByTagName('tr');
  var worksTitle = document.getElementById('worksTitle');

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var rowCategory = row.getElementsByTagName('td')[3].textContent;

    if (category === 'all' || rowCategory.toLowerCase() === category.toLowerCase()) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }

  // Update the works title based on the selected filter
  var filterText = category.charAt(0).toUpperCase() + category.slice(1);
  worksTitle.innerText = filterText + ' Works';

  // Show the works title and table
  worksTitle.style.display = '';
  table.style.display = '';
}

// JavaScript code to toggle visibility
var toggleProjects = document.getElementById("toggleProjects");
var filterContainer = document.getElementById("filterContainer");
var worksTitle = document.getElementById("worksTitle");
var projectsTable = document.getElementById("projectsTable");
var toggleGallery = document.getElementById("toggleGallery");

toggleProjects.addEventListener("click", function () {
  if (filterContainer.style.display === "none") {
    filterContainer.style.display = "block";
    worksTitle.style.display = "block";
    projectsTable.style.display = "block";
    toggleProjects.innerHTML = '<span><u>Index &lt;</u></span>';
  } else {
    filterContainer.style.display = "none";
    worksTitle.style.display = "none";
    projectsTable.style.display = "none";
    toggleProjects.innerHTML = '<span><u>Index &gt;</u></span>';
  }
});



// Get the galleryContainer element
var galleryContainer = document.querySelector('.gallery-container');

// Get all the gallery images
var galleryImages = document.querySelectorAll('.gallery-image');

// Convert the NodeList to an array
var galleryImagesArray = Array.from(galleryImages);

// Shuffle the array of gallery images
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Shuffle the gallery images array
var shuffledImages = shuffle(galleryImagesArray);

// Remove existing images from the gallery container
galleryImages.forEach(function (image) {
  image.remove();
});

// Add shuffled images to the gallery container
shuffledImages.forEach(function (image) {
  galleryContainer.appendChild(image);
});

toggleGallery.addEventListener("click", function () {
  if (galleryContainer.style.display === "none") {
    galleryContainer.style.display = "flex";
    galleryContainer.style.flexWrap = "wrap";
    galleryContainer.style.justifyContent = "center";
    galleryContainer.style.gap = "100px";
    galleryContainer.style.marginTop = "20px";
    galleryContainer.style.marginBottom = "60px";
    toggleGallery.innerHTML = '<span><u>Image &lt;</u></span>';
    // Show the "Back to Top" link
    goToTopLink.style.display = "block";
  } else {
    galleryContainer.style.display = "none";
    toggleGallery.innerHTML = '<span><u>Image &gt;</u></span>';
    // Hide the "Back to Top" link
    goToTopLink.style.display = "none";
  }
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}



// Get all the image links
var imageLinks = document.getElementsByClassName('image-link');

// Attach click event listeners to the image links
for (var i = 0; i < imageLinks.length; i++) {
  imageLinks[i].addEventListener('click', showImagePopup);
}

// Function to open a pop-up window and display the image
function showImagePopup(event) {
  event.preventDefault(); // Prevent the default link behavior

  var imageUrl = this.getAttribute('href'); // Get the image URL from the href attribute

  // Open a new pop-up window with the image
  var imageWindow = window.open('', '_blank', 'width=800,height=600');
  imageWindow.document.write('<html><head><title>Image</title></head><body style="margin: 0; display: flex; justify-content: center; align-items: center; background-color: white;"><img src="' + imageUrl + '" style="max-width: 100%; max-height: 100%;"></body></html>');
  imageWindow.document.close();
  imageWindow.focus();
}
