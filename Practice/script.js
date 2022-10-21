const button = document.getElementById("secret-weapon");
button.addEventListener('click',() => {
    const audio = new Audio('Secret-Weapon.mp3');
    audio.play();
});