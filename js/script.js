var  nav, offsetTop, placeholder;

function setNav() {
    offsetTop = nav.offsetTop;
    console.log(offsetTop);
    placeholder = document.querySelector('.nav-placeholder');
    placeholder.style.height = nav.getBoundingClientRect().height + "px";
}

window.addEventListener("load", function() {
    nav = document.querySelector("#nav");
    setNav();
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

var timeoutHandle;
window.addEventListener("resize", function() {

    if(timeoutHandle == null && (document.documentElement.scrollTop < offsetTop)){
    timeoutHandle = window.setTimeout(function() { setNav(); timeoutHandle = null; }, 50);
    }

});