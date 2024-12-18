document.addEventListener("DOMContentLoaded", function () {
    // Fetch movie data from the JSON file
    fetch("movies.json")
        .then(response => response.json()) // Parse JSON
        .then(data => {
            const tableBody = document.querySelector("#movieTable tbody");

            // Loop through the JSON data and create table rows
            data.forEach(movie => {
                const row = `
                    <tr>
                        <td>${movie["Movie Name"] || "N/A"}</td>
                        <td>${movie["Release Date"] || "N/A"}</td>
                        <td>${movie["Date Watched"].trim() || "N/A"}</td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML("beforeend", row);
            });

            // Initialise DataTables plugin
            $("#movieTable").DataTable({
                pageLength: 10, // Number of rows per page
                order: [[0, "asc"]] // Default sorting on the first column (Movie Name)
            });
        })
        .catch(error => console.error("Error loading movie data:", error));
});
