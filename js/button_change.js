document.getElementById("expandInput").addEventListener(
  "click",
  function(event) {
    if (event.target.value === "Show More") {
      event.target.value = "Show Less";
    } else {
      event.target.value = "Show More";
    }
  },
  false
);
