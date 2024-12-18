document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#movieTable tbody");
            data.forEach(movie => {
                const row = `
                    <tr>
                        <td>${movie["Movie Name"] || "N/A"}</td>
                        <td>${movie["Release Date"] || "N/A"}</td>
                        <td>${movie["Date Watched"]?.trim() || "N/A"}</td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML("beforeend", row);
            });
            $("#movieTable").DataTable();
        })
        .catch(error => console.error("Error:", error));
});
