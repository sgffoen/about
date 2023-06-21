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

toggleProjects.addEventListener("click", function() {
    if (filterContainer.style.display === "none") {
        filterContainer.style.display = "block";
        worksTitle.style.display = "block";
        projectsTable.style.display = "block";
    } else {
        filterContainer.style.display = "none";
        worksTitle.style.display = "none";
        projectsTable.style.display = "none";
    }
    });

