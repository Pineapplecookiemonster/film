document.addEventListener("DOMContentLoaded", function () {
    fetch("movies22.json")
        .then(response => response.json())
        .then(data => {
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
