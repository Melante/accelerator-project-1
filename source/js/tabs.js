const tabLinks = document.querySelectorAll('.price__link');
const tabContents = document.querySelectorAll('.price__list');


tabLinks.forEach((link) => {
  link.addEventListener('click', () => {

    tabLinks.forEach((link) => link.classList.remove('active'));

    link.classList.add('active');


    tabContents.forEach((content) => content.classList.remove('active'));


    const targetTab = document.getElementById(link.dataset.tab);
    targetTab.classList.add('active');
  });
});

