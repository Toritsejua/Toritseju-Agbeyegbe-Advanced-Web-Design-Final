let toggleButton = document.querySelector(".js-menu-button");

toggleButton.addEventListener("click", function (event) {
   let sidebar = document.querySelector(".js-sidebar");
   let button = document.querySelector('.js-menu-button');

   if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      button.classList.remove('open');
   } else {
      sidebar.classList.add("open");
      button.classList.add('open');
   }
});

