document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  const menuToggle = document.querySelector(".menu-toggle");
  const mainContent = document.querySelector(".main-content");

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      sidebar.style.display = "block";
      mainContent.style.display = "flex";
      menuToggle.innerHTML = "☰";
      menuToggle.style.color = "white";
      menuToggle.style.right = "";
      menuToggle.style.top = "";
      menuToggle.style.fontSize = "24px";
    } else {
      sidebar.style.display = "none";
      mainContent.style.display = "flex";
    }
  });

  menuToggle.addEventListener("click", () => {
    if (menuToggle.innerHTML == "☰") {
      sidebar.style.display = "block";
      mainContent.style.display = "none";
      menuToggle.innerHTML = "X";
      menuToggle.style.color = "black";
      menuToggle.style.right = "-165px";
      menuToggle.style.top = "34px";
      menuToggle.style.fontSize = "20px";
    } else {
      sidebar.style.display = "none";
      mainContent.style.display = "flex";
      menuToggle.innerHTML = "☰";
      menuToggle.style.color = "white";
      menuToggle.style.right = "";
      menuToggle.style.top = "";
      menuToggle.style.fontSize = "24px";
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuItems.forEach((i) => i.classList.remove("active"));

      this.classList.add("active");

      const contentTitle = document.querySelector(".content-title");
      const contentText = document.querySelector(".content-text");
      const itemText = this.querySelector("span").textContent;

      if (itemText === "Home") {
        contentTitle.textContent = `Welcome to Your Dashboard`;
        contentText.textContent = ` This is a modern, responsive sidebar with glassmorphism design and smooth animations. 
                Navigate through different sections using the sidebar menu.`;
      } else {
        contentTitle.textContent = `${itemText} Section`;
        contentText.textContent = `You've selected the ${itemText} section. This is where the ${itemText.toLowerCase()} content would be displayed.`;
      }
    });
  });
});

const backButton = document.querySelector(".back-button");
const sidebar = document.querySelector(".sidebar");

backButton.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains("collapsed")) {
    backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6"/>
    </svg>`;
  } else {
    backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15 6l-6 6 6 6"/>
    </svg>`;
  }
});
