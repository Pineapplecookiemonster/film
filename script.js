document.addEventListener("DOMContentLoaded", function () {
    // Fetch movie data from JSON
    fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#movieTable tbody");

            // Populate table rows with JSON data
            data.forEach(movie => {
                const row = `
                    <tr>
                        <td>${movie.Movie Name}</td>
                        <td>${movie.Release Date || "N/A"}</td>
                        <td>${movie.Date watched || "N/A"}</td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML("beforeend", row);
            });

            // Initialise DataTables
            $('#movieTable').DataTable();
        })
        .catch(error => console.error("Error loading movie data:", error));
});
