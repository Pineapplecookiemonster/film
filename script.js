document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#myTable tbody");
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

    
<script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="script.js">

    function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tbody = table.getElementsByTagName("tbody")[0];
  tr = tbody.getElementsByTagName("tr");

  // Hide the tbody if the search query is empty
  if (filter === "") {
    tbody.style.display = "none";
    return;
  } else {
    tbody.style.display = "";
  }

  // Loop through all rows and hide those that don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


    </script>
