// JavaScript Document

const body = document.body;
const menu = document.getElementById('menu-btn');

menu.addEventListener('click', openMenu);

function openMenu(){
    body.classList.toggle('show');
}

