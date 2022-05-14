document.addEventListener("DOMContentLoaded", function() {
    let nav = document.querySelector("#nav");
    let offsetTop = nav.offsetTop;

    let placeholder = document.querySelector('.nav-placeholder');
    placeholder.style.height = nav.getBoundingClientRect().height + "px";

    window.addEventListener('scroll', function() {

        if(document.documentElement.scrollTop > offsetTop){
            placeholder.classList.add('show');
            nav.classList.add('sticky');
        }
        else {
            placeholder.classList.remove('show');
            nav.classList.remove('sticky');
        }

    });

    
    if(document.documentElement.scrollTop > offsetTop){
        placeholder.classList.add('show');
        nav.classList.add('sticky');
    }
    else {
        placeholder.classList.remove('show');
        nav.classList.remove('sticky');
    }

});