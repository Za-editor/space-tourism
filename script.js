function showSideBar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = "flex";
}

function hideSideBar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = "none";
}

  window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
  });
