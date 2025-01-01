document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.json") // Fetch the JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched JSON data:", data); // Debugging
            populateTable(data); // Populate the table with movie data
            enableSearch(); // Enable the search functionality
        })
        .catch(error => {
            console.error("Error loading movie data:", error.message); // Error handling
        });
});

// Function to populate the table
function populateTable(data) {
    const tableBody = document.querySelector("#myTable tbody");
    tableBody.innerHTML = ""; // Clear previous rows if any

    if (!Array.isArray(data)) {
        console.error("Error: JSON data is not an array.");
        return;
    }

    // Dynamically generate rows for each movie
    data.forEach(movie => {
        const row = `
            <tr>
                <td>${movie["Movie Name"] || "N/A"}</td>
                <td>${movie["Release Date"] || "N/A"}</td>
                <td>${movie["Date Watched"] || "N/A"}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML("beforeend", row);
    });
}

// Function to enable search
function enableSearch() {
    const input = document.getElementById("myInput");
    input.addEventListener("keyup", function () {
        const filter = input.value.toUpperCase(); // Convert search term to uppercase
        const table = document.getElementById("myTable");
        const rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) { // Skip the header row
            const firstCell = rows[i].getElementsByTagName("td")[0]; // Get the first cell (movie name)
            if (firstCell) {
                const txtValue = firstCell.textContent || firstCell.innerText;
                rows[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
            }
        }
    });
}
