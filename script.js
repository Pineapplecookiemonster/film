document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#myTable tbody");

            // Dynamically populate table rows
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

            // Attach search functionality after data is loaded
            attachSearchFunctionality();
        })
        .catch(error => console.error("Error loading movie data:", error));
});

// Search functionality
function attachSearchFunctionality() {
    const input = document.getElementById("myInput");
    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const tr = tbody.getElementsByTagName("tr");

    input.addEventListener("keyup", function () {
        const filter = input.value.toUpperCase();

        // Show/hide rows based on the filter
        for (let i = 0; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

        // Hide the tbody if no rows match the search query
        const anyRowVisible = Array.from(tr).some(row => row.style.display !== "none");
        tbody.style.display = anyRowVisible ? "" : "none";
    });
}
