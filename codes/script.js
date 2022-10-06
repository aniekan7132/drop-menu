'use strict';
const btns = document.querySelectorAll('.btn');
const dropMenus = document.querySelectorAll('.drop-menu');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
    btns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(btn.dataset.target).classList.add('active');
  });
});

window.onclick = (e) => {
  if(!e.target.matches('.btn')){
    btns.forEach(btn => btn.classList.remove('active'));
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
  }
}

//To make the code cleaner(refactoring)
/*const removeActive = () => {
  btns.forEach(btn => btn.classList.remove('active'));
  dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
};

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    removeActive();
    btn.classList.add('active');
    document.querySelector(btn.dataset.target).classList.add('active');
  });
});

window.onclick = e => {
  if (!e.target.matches('.btn')) {
    removeActive();
  }
};*/
