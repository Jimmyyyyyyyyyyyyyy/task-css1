// header
let ulList = document.querySelector('header nav>ul');
let link = document.querySelectorAll('header ul a');
let humborger = document.querySelector('.humbarger');

humborger.addEventListener('click', () => {
    humborger.classList.toggle('active');
    ulList.classList.toggle('active');
})

link.forEach(n => n.addEventListener('click', () => {
    humborger.classList.remove('active');
    ulList.classList.remove('active');
}))