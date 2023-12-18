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



// Select all the row items in the table
var rowItems = document.querySelectorAll('tr');

// Iterate through each row item
rowItems.forEach(function(rowItem) {
  // Select all the image links within the current row item
  var imageLinks = rowItem.querySelectorAll('.image-link');
  var currentImageIndex = 0; // Track the index of the currently displayed image

  // Attach click event listeners to each image link within the current row item
  imageLinks.forEach(function(link, index) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      currentImageIndex = index; // Update the current image index
      showImagePopup(); // Call function to display the image popup
    });
  });

  // Function to display the image popup
  function showImagePopup() {
    // Get the URL of the currently selected image
    var imageUrl = imageLinks[currentImageIndex].getAttribute('href');
    
    // Open a new popup window
    var imageWindow = window.open('', '_blank', 'width=800,height=600');
    // Create the HTML content for the popup window
    imageWindow.document.write('<html><head><title>Image</title></head><body style="margin: 0; display: flex; justify-content: center; align-items: center; background-color: white;"><img id="popupImage" src="' + imageUrl + '" style="max-width: 100%; max-height: 100%; cursor: pointer;"></body></html>');
    imageWindow.document.close(); // Close the document writing

    imageWindow.focus(); // Focus on the new popup window

    // Get the image element in the popup window
    var popupImage = imageWindow.document.getElementById('popupImage');
    // Add a click event to the image in the popup to navigate to the next image
    popupImage.onclick = function() {
      currentImageIndex = (currentImageIndex + 1) % imageLinks.length; // Update index for the next image
      imageUrl = imageLinks[currentImageIndex].getAttribute('href'); // Get the URL of the next image
      popupImage.src = imageUrl; // Display the next image in the popup
    };
  }
});

