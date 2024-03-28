var section = document.querySelector('#section-01');
var cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    
    cursor.style.top = mouseY;
    cursor.style.left = mouseX;

    var middleX = window.innerWidth / 2; 
    var middleY = window.innerHeight / 2;
        
    var mouse_middleX = ((mouseX - middleX) / middleX) * 5;
    var mouse_middleY = ((mouseY - middleY) / middleY) * 5  ;

    console.log(mouse_middleX, mouse_middleY);

    section.style.transform = 'perspective(1000px) rotateX(' + -1 * mouse_middleY + 'deg) rotateY(' + mouse_middleX + 'deg)';
    section.style.transition = '0s';
})

