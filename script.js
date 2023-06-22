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
    toggleProjects.innerHTML = '<span><u>Selected Works &lt;</u></span>';
  } else {
    filterContainer.style.display = "none";
    worksTitle.style.display = "none";
    projectsTable.style.display = "none";
    toggleProjects.innerHTML = '<span><u>Selected Works &gt;</u></span>';
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
    galleryContainer.style.display = "block";
    toggleGallery.innerHTML = '<span><u>Gallery &lt;</u></span>';
  } else {
    galleryContainer.style.display = "none";
    toggleGallery.innerHTML = '<span><u>Gallery &gt;</u></span>';
  }
});





// Get all the image links
var imageLinks = document.getElementsByClassName('image-link');

// Attach click event listeners to the image links
for (var i = 0; i < imageLinks.length; i++) {
  imageLinks[i].addEventListener('click', showImage);
}

// Function to show the image
function showImage(event) {
  event.preventDefault(); // Prevent the default link behavior

  var imageUrl = this.getAttribute('href'); // Get the image URL from the href attribute

  // Create a new image element
  var image = new Image();
  image.src = imageUrl;

  // Create a new window to display the image
  var imageWindow = window.open('', '_blank');
  imageWindow.document.write('<html><head><title>Image</title></head><body style="margin: 0; display: flex; justify-content: center; align-items: center;"><img src="' + imageUrl + '" style="max-width: 100%; max-height: 100%;"></body></html>');
  imageWindow.document.close();
}
