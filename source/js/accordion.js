const tabLinks = document.querySelectorAll('.tab__button');
const tabContents = document.querySelectorAll('.accordion__list');
const buttons = document.querySelectorAll('.accordion__button');


tabLinks.forEach((link) => {
  link.addEventListener('click', () => {

    tabLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');


    tabContents.forEach((content) => content.classList.remove('active'));
    const targetTab = document.getElementById(link.dataset.tab);
    targetTab.classList.add('active');
  });
});


buttons.forEach((button) =>

  button.addEventListener('click', () => {
    const parent = button.parentNode;
    parent.classList.toggle('active');
    button.classList.toggle('accordion__button--close');
  })
);

