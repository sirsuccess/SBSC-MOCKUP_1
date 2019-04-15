const userClick = document.querySelector('.fa-user');
const details =  document.querySelector('.profile-section');
userClick.addEventListener('click', ()=> {
    userClick.classList.toggle("change");
    if(details.style.display === 'block'){
        details.style.display = 'none';
    }else{
        details.style.display = 'block';
    };
})