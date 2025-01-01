document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched JSON data:", data); // Debug: Ensure data is fetched
            populateTable(data);
            enableSearch();
        })
        .catch(error => {
            console.error("Error loading movie data:", error.message); // Enhanced error logging
        });
});

// Function to populate table with data
function populateTable(data) {
    const tableBody = document.querySelector("#myTable tbody");
    tableBody.innerHTML = ""; // Clear previous rows if any

    if (!Array.isArray(data)) {
        console.error("Error: JSON data is not an array.");
        return;
    }

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

// Search functionality
function enableSearch() {
    const input = document.getElementById("myInput");
    input.addEventListener("keyup", function () {
        const filter = input.value.toUpperCase();
        const table = document.getElementById("myTable");
        const rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) { // Skip the table header row
            const firstCell = rows[i].getElementsByTagName("td")[0];
            if (firstCell) {
                const txtValue = firstCell.textContent || firstCell.innerText;
                rows[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
            }
        }
    });
}
