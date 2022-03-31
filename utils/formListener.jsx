export function formListener() {
  <script>
  const form = document.getElementById("csvForm");
  const csvFile = document.getElementById("csvFile");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("CSV File submitted");
  });
  </script>
}
