
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach(links => {
                links.clasList.remove('active');
                document.queerySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
     
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
   
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {orign:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {orign:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {orign:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {orign:'right'});



const typed = new Typed('.multiple-text',{
    strings: ['Web Developer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})