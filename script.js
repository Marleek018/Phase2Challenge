const hamburger = document.querySelector('.hamburger')
const mobilenav =document.querySelector('.mobilenav')
const hambOpen =document.querySelector('.hamburger-open')
const hambClose =document.querySelector('.close')

function burger() {
    mobilenav.classList.toggle('mobile-pop');
    hambOpen.classList.toggle('close-all');
    hambClose.classList.toggle('close-all');
    
}
hamburger.addEventListener('click', burger)

const fullName = document.querySelector('.fullName')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const form = document.querySelector('#form')

function formValidation(e) {
    e.preventDefault();
    
}
