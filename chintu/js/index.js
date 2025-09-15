document.getElementById("saveBtn").addEventListener("click", () => {
  const text = document.getElementById("textInput").value;

  fetch("save.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "text=" + encodeURIComponent(text)
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Saved successfully!");
    } else {
      alert("Error: " + data.error);
    }
  });
});
