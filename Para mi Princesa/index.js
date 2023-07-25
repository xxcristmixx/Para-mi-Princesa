const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('SABIA QUE DIRIAS SI, ERES TODO PARA MI VIDA HERMOSA TE AMO MUCHO PRECIOSA TE ADORO, ME ENCANTAS-TE AMO DEMASIADO MI VIDA HERMOSA')
    alert('ME HACES LA PERSONA MAS FELIZ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})